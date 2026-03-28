// Mini intérprete de Java simplificado para el juego
const MAX_ITERATIONS = 100_000;

export function runJava(code) {
  const output = [];
  const env = {};

  try {
    const jsCode = transpile(code);
    let __inlineBuffer = '';
    const printFn = (...args) => {
      const line = __inlineBuffer + args.map(a => javaRepr(a)).join(' ');
      output.push(line);
      __inlineBuffer = '';
    };
    const printInline = (...args) => {
      __inlineBuffer += args.map(a => javaRepr(a)).join(' ');
    };

    let __iterCount = 0;
    const __tick = () => {
      if (++__iterCount > MAX_ITERATIONS) throw new Error('Tiempo de ejecución agotado (loop infinito detectado)');
    };

    const builtins = {
      printFn,
      printInline,
      __tick,
      Array,
      Math,
      String,
      Integer: { parseInt: (v) => parseInt(v, 10) },
      Double: { parseDouble: (v) => parseFloat(v) }
    };

    const fn = new Function(...Object.keys(builtins), jsCode);
    fn(...Object.values(builtins));

    return { success: true, output: output.join('\n') };
  } catch (e) {
    return { success: false, output: output.join('\n'), error: e.message };
  }
}

function javaRepr(value) {
  if (value === null || value === undefined) return 'null';
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (Array.isArray(value)) {
    return '[' + value.map(v => javaRepr(v)).join(', ') + ']';
  }
  return String(value);
}

function transpile(javaCode) {
  let jsLines = javaCode.split('\n');

  for (let i = 0; i < jsLines.length; i++) {
    let line = jsLines[i];

    // Convert print (println adds newline, print does not)
    line = line.replace(/System\.out\.println\(/g, 'printFn(');
    line = line.replace(/System\.out\.print\(/g, 'printInline(');

    // Type definitions to 'let' (with or without initializer)
    line = line.replace(/\b(int|double|float|String|boolean|char|long|short|byte)\b(?=\s+\w+)/g, 'let');

    // Method Definitions
    line = line.replace(/\bvoid\s+(\w+)\s*\(/g, 'function $1(');

    // Ignore classes / main method wrappings
    if (line.trim().startsWith('public class ') || line.trim().startsWith('class ')) {
      line = '{';
    }
    if (line.match(/public\s+static\s+void\s+main/)) {
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

  // A very basic transpiler can just return the modified text
  return jsLines.join('\n');
}
