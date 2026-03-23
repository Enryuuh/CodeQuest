// Mini intérprete de Java simplificado para el juego
export function runJava(code) {
  const output = [];
  const env = {};

  try {
    const jsCode = transpile(code);
    const printFn = (...args) => {
      output.push(args.map(a => javaRepr(a)).join(' '));
    };

    const builtins = {
      printFn: printFn,
      // Helper for array instantiation
      Array: Array,
      Math: Math,
      String: String,
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
    
    // Convert print
    line = line.replace(/System\.out\.println\(/g, 'printFn(');
    
    // Type definitions to 'let'
    line = line.replace(/\b(int|double|float|String|boolean|char|long|short|byte)\b(?=\s+\w+\s*=)/g, 'let');
    
    // Method Definitions
    line = line.replace(/\bvoid\s+(\w+)\s*\(/g, 'function $1(');
    
    // Ignore classes / main method wrappings
    if (line.trim().startsWith('public class ') || line.trim().startsWith('class ')) {
      line = '{';
    }
    if (line.match(/public\s+static\s+void\s+main/)) {
      line = '{';
    }

    jsLines[i] = line;
  }

  // A very basic transpiler can just return the modified text
  return jsLines.join('\n');
}
