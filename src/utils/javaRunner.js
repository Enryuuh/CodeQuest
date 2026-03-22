// Mini intérprete de Java simplificado para el juego
// Transpila Java a JavaScript y lo ejecuta
// Soporta: System.out.println, variables, if/else, for, while, switch, métodos, arrays, ArrayList, HashMap

export function runJava(code) {
  const output = [];

  try {
    const jsCode = transpileJava(code);
    const printFn = (...args) => {
      output.push(args.map(a => javaRepr(a)).join(' '));
    };
    const printNoNewlineFn = (...args) => {
      const text = args.map(a => javaRepr(a)).join(' ');
      if (output.length === 0) {
        output.push(text);
      } else {
        output[output.length - 1] += text;
      }
    };

    const builtins = {
      print: printFn,
      printNoNewline: printNoNewlineFn,
      Math: Math,
      parseInt: parseInt,
      parseFloat: parseFloat,
      String: String,
      Number: Number,
      Boolean: Boolean,
      Array: Array,
      Object: Object,
      isNaN: isNaN,
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
  if (typeof value === 'object') {
    const entries = Object.entries(value).map(([k, v]) => `${k}=${javaRepr(v)}`);
    return '{' + entries.join(', ') + '}';
  }
  return String(value);
}

function transpileJava(javaCode) {
  let lines = javaCode.split('\n');
  let jsLines = [];

  // First pass: remove class wrapper, imports, package declarations
  lines = removeWrappers(lines);

  for (let i = 0; i < lines.length; i++) {
    const transformed = transpileJavaLine(lines[i]);
    if (transformed !== null) {
      jsLines.push(transformed);
    }
  }

  return jsLines.join('\n');
}

function removeWrappers(lines) {
  let result = [];
  let braceDepth = 0;
  let skipNextClose = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Remove import statements
    if (trimmed.startsWith('import ')) continue;

    // Remove package statements
    if (trimmed.startsWith('package ')) continue;

    // Remove public class ... { wrapper
    if (/^public\s+class\s+\w+/.test(trimmed)) {
      if (trimmed.includes('{')) {
        skipNextClose.push(true);
      }
      continue;
    }

    // Remove public static void main(String[] args) { wrapper
    if (/^public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*\w+\s*\)/.test(trimmed)) {
      if (trimmed.includes('{')) {
        skipNextClose.push(true);
      }
      continue;
    }

    // Track braces to remove matching closing braces
    for (const ch of trimmed) {
      if (ch === '{') braceDepth++;
      else if (ch === '}') braceDepth--;
    }

    // If this line is just a closing brace and we need to skip one
    if (trimmed === '}' && skipNextClose.length > 0) {
      skipNextClose.pop();
      continue;
    }

    result.push(lines[i]);
  }

  return result;
}

function transpileJavaLine(line) {
  const trimmed = line.trim();
  const leadingSpaces = line.match(/^(\s*)/)[1];

  // Empty lines and comments
  if (trimmed === '' || trimmed.startsWith('//')) {
    return line;
  }

  // Block comments
  if (trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('*/')) {
    return line;
  }

  let result = trimmed;

  // System.out.println → print
  result = result.replace(/System\.out\.println\s*\(/g, 'print(');

  // System.out.print → printNoNewline
  result = result.replace(/System\.out\.print\s*\(/g, 'printNoNewline(');

  // Integer.parseInt → parseInt
  result = result.replace(/Integer\.parseInt\s*\(/g, 'parseInt(');

  // Double.parseDouble → parseFloat
  result = result.replace(/Double\.parseDouble\s*\(/g, 'parseFloat(');

  // Arrays.sort(arr) → arr.sort((a,b) => a-b)
  result = result.replace(/Arrays\.sort\s*\(\s*(\w+)\s*\)/g, '$1.sort((a, b) => a - b)');

  // .toString() → String(x) - simplified
  result = result.replace(/(\w+)\.toString\(\)/g, 'String($1)');

  // .equals("x") → === "x"
  result = result.replace(/(\w+)\.equals\(([^)]+)\)/g, '($1 === $2)');

  // .size() → .length
  result = result.replace(/\.size\(\)/g, '.length');

  // .get(i) → [i]
  result = result.replace(/\.get\(([^)]+)\)/g, '[$1]');

  // .add(x) → .push(x)
  result = result.replace(/\.add\(([^)]+)\)/g, '.push($1)');

  // .containsKey(k) → (k in obj) - simplified handling
  result = result.replace(/(\w+)\.containsKey\(([^)]+)\)/g, '($2 in $1)');

  // .keySet() → Object.keys(obj)
  result = result.replace(/(\w+)\.keySet\(\)/g, 'Object.keys($1)');

  // .put(k, v) → [k] = v
  result = result.replace(/(\w+)\.put\(([^,]+),\s*([^)]+)\)/g, '$1[$2] = $3');

  // new ArrayList<...>() → []
  result = result.replace(/new\s+ArrayList\s*<[^>]*>\s*\(\s*\)/g, '[]');

  // new HashMap<...>() → {}
  result = result.replace(/new\s+HashMap\s*<[^>]*>\s*\(\s*\)/g, '{}');

  // new int[n] → new Array(n).fill(0)
  result = result.replace(/new\s+int\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)');
  result = result.replace(/new\s+double\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)');
  result = result.replace(/new\s+String\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill("")');
  result = result.replace(/new\s+boolean\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(false)');

  // String methods that are the same
  // .toUpperCase(), .toLowerCase() - already valid JS
  // .length - already valid JS

  // for-each: for (Type item : collection) → for (const item of collection)
  const forEachMatch = result.match(/^for\s*\(\s*(?:int|double|float|long|String|boolean|char|var|\w+)\s+(\w+)\s*:\s*(.+)\s*\)\s*\{?/);
  if (forEachMatch) {
    result = result.replace(/^for\s*\(\s*(?:int|double|float|long|String|boolean|char|var|\w+)\s+(\w+)\s*:\s*(.+)\s*\)/, 'for (const $1 of $2)');
  }

  // for loop with type: for (int i = 0; ...) → for (var i = 0; ...)
  result = result.replace(/for\s*\(\s*(?:int|long)\s+/g, 'for (var ');

  // Method definitions: various patterns
  // public/private/protected static ReturnType methodName(params) {
  const methodMatch = result.match(/^(?:public\s+|private\s+|protected\s+)?(?:static\s+)?(?:void|int|double|float|long|boolean|String|char|[\w<>\[\]]+)\s+(\w+)\s*\(([^)]*)\)\s*\{?\s*$/);
  if (methodMatch && !result.includes('=') && methodMatch[1] !== 'if' && methodMatch[1] !== 'while' && methodMatch[1] !== 'for') {
    const methodName = methodMatch[1];
    const params = cleanParams(methodMatch[2]);
    const hasBrace = result.includes('{');
    result = `function ${methodName}(${params})${hasBrace ? ' {' : ''}`;
  }

  // Variable declarations with types
  // final → const
  if (/^\s*final\s+/.test(result)) {
    result = result.replace(/final\s+(?:int|double|float|long|String|boolean|char|var|\w+)\s+/g, 'const ');
  }

  // Type declarations → var
  result = result.replace(/^((?:int|double|float|long|String|boolean|char)\[\])\s+(\w+)\s*=\s*\{([^}]*)\}/,
    (match, type, name, values) => `var ${name} = [${values}]`);

  // Simple type declarations
  result = result.replace(/^(?:int|double|float|long|boolean|char)\s+(?![\[])(\w+)/g, 'var $1');
  result = result.replace(/^String\s+(?![\[])(\w+)/g, 'var $1');

  // Array declarations: int[] arr = {1, 2, 3} → var arr = [1, 2, 3]
  result = result.replace(/^(?:int|double|float|long|String|boolean|char)\s*\[\s*\]\s*(\w+)\s*=\s*\{([^}]*)\}/g,
    'var $1 = [$2]');
  // Handle case where type[] was already partially handled
  result = result.replace(/^(?:int|double|float|long|String|boolean|char)\s*\[\s*\]\s*(\w+)/g, 'var $1');

  // ArrayList/List type declarations
  result = result.replace(/^(?:ArrayList|List)\s*<[^>]*>\s*(\w+)/g, 'var $1');

  // HashMap/Map type declarations
  result = result.replace(/^(?:HashMap|Map)\s*<[^>]*>\s*(\w+)/g, 'var $1');

  // Replace Java array initializer braces with brackets in assignments
  // var x = {1, 2, 3} → var x = [1, 2, 3]
  result = result.replace(/=\s*\{(\s*(?:[^{}]|"[^"]*")*\s*)\}\s*;/, (match, inner) => {
    // Only convert if it looks like an array literal (not an object)
    if (inner.includes(':') || inner.includes('=>')) return match;
    return `= [${inner}];`;
  });

  return leadingSpaces + result;
}

function cleanParams(params) {
  if (!params.trim()) return '';
  return params.split(',').map(p => {
    const parts = p.trim().split(/\s+/);
    // Return just the parameter name (last part), removing the type
    return parts[parts.length - 1].replace(/\[\]/g, '');
  }).join(', ');
}
