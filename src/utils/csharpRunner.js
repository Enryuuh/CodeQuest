// Mini intérprete de C# simplificado para el juego
const MAX_ITERATIONS = 100_000;

export function runCSharp(code) {
  const output = [];
  const env = {};

  try {
    const jsCode = transpile(code);
    let __inlineBuffer = '';
    const printFn = (...args) => {
      const line = __inlineBuffer + args.map(a => csharpRepr(a)).join(' ');
      output.push(line);
      __inlineBuffer = '';
    };
    const printInline = (...args) => {
      __inlineBuffer += args.map(a => csharpRepr(a)).join(' ');
    };

    let __iterCount = 0;
    const __tick = () => {
      if (++__iterCount > MAX_ITERATIONS) throw new Error('Tiempo de ejecución agotado (loop infinito detectado)');
    };

    const builtins = {
      printFn,
      printInline,
      __tick,
      Math,
      String,
      int: { Parse: (v) => parseInt(v, 10) },
      double: { Parse: (v) => parseFloat(v) }
    };

    const fn = new Function(...Object.keys(builtins), jsCode);
    fn(...Object.values(builtins));

    return { success: true, output: output.join('\n') };
  } catch (e) {
    return { success: false, output: output.join('\n'), error: e.message };
  }
}

function csharpRepr(value) {
  if (value === null || value === undefined) return 'null';
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (Array.isArray(value)) {
    return '[' + value.map(v => csharpRepr(v)).join(', ') + ']';
  }
  return String(value);
}

function transpile(csCode) {
  let jsLines = csCode.split('\n');

  for (let i = 0; i < jsLines.length; i++) {
    let line = jsLines[i];

    // Convert print (WriteLine adds newline, Write does not)
    line = line.replace(/Console\.WriteLine\(/g, 'printFn(');
    line = line.replace(/Console\.Write\(/g, 'printInline(');

    // Type definitions to 'let' (with or without initializer)
    line = line.replace(/\b(int|double|float|string|bool|char|long|short|byte)\b(?=\s+\w+)/g, 'let');

    // Method Definitions
    line = line.replace(/\bvoid\s+(\w+)\s*\(/g, 'function $1(');

    // F-strings in C# like $"..."
    line = line.replace(/\$"([^"]*)"/g, (match, content) => {
      const replaced = content.replace(/\{([^}]+)\}/g, '${$1}');
      return '`' + replaced + '`';
    });

    // Ignore classes / namespace / main method wrappings
    if (line.trim().startsWith('public class ') || line.trim().startsWith('class ') || line.trim().startsWith('namespace ')) {
      line = '{';
    }
    if (line.match(/public\s+static\s+void\s+(M|m)ain/)) {
      line = '{';
    }

    // Inject loop guard
    if (line.match(/^\s*(for|while)\s*\(/) && !line.includes('__tick')) {
      const closingBrace = line.lastIndexOf('{');
      if (closingBrace !== -1) {
        line = line.slice(0, closingBrace + 1) + ' __tick();' + line.slice(closingBrace + 1);
      }
    }

    jsLines[i] = line;
  }

  return jsLines.join('\n');
}
