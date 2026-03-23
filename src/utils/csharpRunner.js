// Mini intérprete de C# simplificado para el juego
export function runCSharp(code) {
  const output = [];
  const env = {};

  try {
    const jsCode = transpile(code);
    const printFn = (...args) => {
      output.push(args.map(a => csharpRepr(a)).join(' '));
    };

    const builtins = {
      printFn: printFn,
      Math: Math,
      String: String,
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
    
    // Convert print
    line = line.replace(/Console\.WriteLine\(/g, 'printFn(');
    
    // Type definitions to 'let'
    line = line.replace(/\b(int|double|float|string|bool|char|long|short|byte)\b(?=\s+\w+\s*=)/g, 'let');

    // Method Definitions
    line = line.replace(/\bvoid\s+(\w+)\s*\(/g, 'function $1(');

    // F-strings in C# like $"..."
    line = line.replace(/\$\"([^"]*)\"/g, (match, content) => {
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

    jsLines[i] = line;
  }

  return jsLines.join('\n');
}
