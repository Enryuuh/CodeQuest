// Mini intérprete de C# simplificado para el juego
// Transpila C# a JavaScript y lo ejecuta
// Soporta: Console.WriteLine, variables, if/else, for, foreach, while, switch, métodos, arrays, List, Dictionary

export function runCSharp(code) {
  const output = [];

  try {
    const jsCode = transpileCSharp(code);
    const printFn = (...args) => {
      output.push(args.map(a => csharpRepr(a)).join(' '));
    };
    const printNoNewlineFn = (...args) => {
      const text = args.map(a => csharpRepr(a)).join(' ');
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

function csharpRepr(value) {
  if (value === null || value === undefined) return 'null';
  if (value === true) return 'True';
  if (value === false) return 'False';
  if (Array.isArray(value)) {
    return '[' + value.map(v => csharpRepr(v)).join(', ') + ']';
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value).map(([k, v]) => `${k}: ${csharpRepr(v)}`);
    return '{' + entries.join(', ') + '}';
  }
  return String(value);
}

function transpileCSharp(csCode) {
  let lines = csCode.split('\n');
  let jsLines = [];

  // First pass: remove wrappers (using, namespace, class)
  lines = removeWrappers(lines);

  for (let i = 0; i < lines.length; i++) {
    const transformed = transpileCSharpLine(lines[i]);
    if (transformed !== null) {
      jsLines.push(transformed);
    }
  }

  return jsLines.join('\n');
}

function removeWrappers(lines) {
  let result = [];
  let skipNextClose = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Remove using statements
    if (trimmed.startsWith('using ') && trimmed.endsWith(';')) continue;

    // Remove namespace ... { wrapper
    if (/^namespace\s+/.test(trimmed)) {
      if (trimmed.includes('{')) {
        skipNextClose.push(true);
      }
      continue;
    }

    // Remove class ... { wrapper (including static, public, internal, etc.)
    if (/^(?:public\s+|private\s+|internal\s+|static\s+|sealed\s+|abstract\s+)*class\s+\w+/.test(trimmed)) {
      if (trimmed.includes('{')) {
        skipNextClose.push(true);
      }
      continue;
    }

    // Remove static void Main(string[] args) { wrapper
    if (/^(?:public\s+|private\s+)?static\s+void\s+Main\s*\(\s*(?:string\s*\[\s*\]\s*\w+)?\s*\)/.test(trimmed)) {
      if (trimmed.includes('{')) {
        skipNextClose.push(true);
      }
      continue;
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

function transpileCSharpLine(line) {
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

  // Console.WriteLine → print
  result = result.replace(/Console\.WriteLine\s*\(/g, 'print(');

  // Console.Write → printNoNewline
  result = result.replace(/Console\.Write\s*\(/g, 'printNoNewline(');

  // String interpolation: $"text {expr}" → `text ${expr}`
  result = processInterpolatedStrings(result);

  // int.Parse(s) → parseInt(s)
  result = result.replace(/int\.Parse\s*\(/g, 'parseInt(');

  // double.Parse(s) → parseFloat(s)
  result = result.replace(/double\.Parse\s*\(/g, 'parseFloat(');

  // Convert.ToInt32 → parseInt
  result = result.replace(/Convert\.ToInt32\s*\(/g, 'parseInt(');

  // Convert.ToDouble → parseFloat
  result = result.replace(/Convert\.ToDouble\s*\(/g, 'parseFloat(');

  // Math methods - C# uses PascalCase, JS uses camelCase
  result = result.replace(/Math\.Pow\s*\(/g, 'Math.pow(');
  result = result.replace(/Math\.Floor\s*\(/g, 'Math.floor(');
  result = result.replace(/Math\.Ceiling\s*\(/g, 'Math.ceil(');
  result = result.replace(/Math\.Round\s*\(/g, 'Math.round(');
  result = result.replace(/Math\.Abs\s*\(/g, 'Math.abs(');
  result = result.replace(/Math\.Sqrt\s*\(/g, 'Math.sqrt(');
  result = result.replace(/Math\.Max\s*\(/g, 'Math.max(');
  result = result.replace(/Math\.Min\s*\(/g, 'Math.min(');
  result = result.replace(/Math\.PI\b/g, 'Math.PI');

  // .ToString() → String(x)
  result = result.replace(/(\w+)\.ToString\(\)/g, 'String($1)');

  // .ToUpper() → .toUpperCase()
  result = result.replace(/\.ToUpper\(\)/g, '.toUpperCase()');

  // .ToLower() → .toLowerCase()
  result = result.replace(/\.ToLower\(\)/g, '.toLowerCase()');

  // .Trim() → .trim()
  result = result.replace(/\.Trim\(\)/g, '.trim()');

  // .Split(sep) → .split(sep)
  result = result.replace(/\.Split\(([^)]*)\)/g, '.split($1)');

  // .Replace(a, b) → .replaceAll(a, b)
  result = result.replace(/\.Replace\(([^,]+),\s*([^)]+)\)/g, '.replaceAll($1, $2)');

  // .Contains(x) → .includes(x)
  result = result.replace(/\.Contains\(([^)]+)\)/g, '.includes($1)');

  // .ContainsKey(k) → (k in obj)
  result = result.replace(/(\w+)\.ContainsKey\(([^)]+)\)/g, '($2 in $1)');

  // .Count → .length
  result = result.replace(/\.Count\b/g, '.length');

  // .Length → .length
  result = result.replace(/\.Length\b/g, '.length');

  // .Add(x) → .push(x)
  result = result.replace(/\.Add\(([^)]+)\)/g, '.push($1)');

  // .Remove(x) - simplified: for lists
  result = result.replace(/\.Remove\(([^)]+)\)/g, '.splice(.indexOf($1), 1)');

  // .Equals(x) → === x
  result = result.replace(/(\w+)\.Equals\(([^)]+)\)/g, '($1 === $2)');

  // new List<...>() → []
  result = result.replace(/new\s+List\s*<[^>]*>\s*\(\s*\)/g, '[]');
  result = result.replace(/new\s+List\s*<[^>]*>\s*\{([^}]*)\}/g, '[$1]');

  // new Dictionary<...>() → {}
  result = result.replace(/new\s+Dictionary\s*<[^>]*>\s*\(\s*\)/g, '{}');

  // new int[n] → new Array(n).fill(0)
  result = result.replace(/new\s+int\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)');
  result = result.replace(/new\s+double\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)');
  result = result.replace(/new\s+string\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill("")');
  result = result.replace(/new\s+bool\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(false)');

  // Array initializer: new int[] {1, 2, 3} → [1, 2, 3]
  result = result.replace(/new\s+(?:int|double|string|bool|float|long)\s*\[\s*\]\s*\{([^}]*)\}/g, '[$1]');

  // foreach (var item in collection) → for (const item of collection)
  result = result.replace(/foreach\s*\(\s*(?:var|int|double|float|long|string|bool|char|\w+)\s+(\w+)\s+in\s+(.+)\s*\)/g,
    'for (const $1 of $2)');

  // for loop with type: for (int i = 0; ...) → for (var i = 0; ...)
  result = result.replace(/for\s*\(\s*(?:int|long)\s+/g, 'for (var ');

  // Method definitions
  const methodMatch = result.match(/^(?:public\s+|private\s+|protected\s+|internal\s+)?(?:static\s+)?(?:void|int|double|float|long|bool|string|char|[\w<>\[\]]+)\s+(\w+)\s*\(([^)]*)\)\s*\{?\s*$/);
  if (methodMatch && !result.includes('=') && methodMatch[1] !== 'if' && methodMatch[1] !== 'while' && methodMatch[1] !== 'for' && methodMatch[1] !== 'foreach') {
    const methodName = methodMatch[1];
    const params = cleanParams(methodMatch[2]);
    const hasBrace = result.includes('{');
    result = `function ${methodName}(${params})${hasBrace ? ' {' : ''}`;
  }

  // const declarations: const type NAME = value
  if (/^\s*const\s+/.test(result)) {
    result = result.replace(/const\s+(?:int|double|float|long|string|bool|char|var)\s+/g, 'const ');
  }

  // Variable declarations with types (but not 'var' which is already valid JS)
  // Array declarations: int[] arr = {1, 2, 3} → var arr = [1, 2, 3]
  result = result.replace(/^(?:int|double|float|long|string|bool|char)\s*\[\s*\]\s*(\w+)\s*=\s*\{([^}]*)\}/g,
    'var $1 = [$2]');
  result = result.replace(/^(?:int|double|float|long|string|bool|char)\s*\[\s*\]\s*(\w+)/g, 'var $1');

  // List<T> and Dictionary<K,V> type declarations
  result = result.replace(/^(?:List|IList)\s*<[^>]*>\s*(\w+)/g, 'var $1');
  result = result.replace(/^(?:Dictionary|IDictionary)\s*<[^>]*>\s*(\w+)/g, 'var $1');

  // Simple type declarations (int x, string x, etc.) - not 'var'
  result = result.replace(/^(?:int|double|float|long|bool|char)\s+(?![\[])(\w+)/g, 'var $1');
  result = result.replace(/^string\s+(?![\[])(\w+)/g, 'var $1');

  // Replace C# array initializer braces with brackets in assignments
  result = result.replace(/=\s*\{(\s*(?:[^{}]|"[^"]*")*\s*)\}\s*;/, (match, inner) => {
    if (inner.includes(':') || inner.includes('=>')) return match;
    return `= [${inner}];`;
  });

  // Cast expressions: (int)x → parseInt(x), (double)x → parseFloat(x), (string)x → String(x)
  result = result.replace(/\(int\)\s*(\w+)/g, 'parseInt($1)');
  result = result.replace(/\(double\)\s*(\w+)/g, 'parseFloat($1)');
  result = result.replace(/\(float\)\s*(\w+)/g, 'parseFloat($1)');
  result = result.replace(/\(string\)\s*(\w+)/g, 'String($1)');

  return leadingSpaces + result;
}

function processInterpolatedStrings(text) {
  // $"text {expr}" → `text ${expr}`
  return text.replace(/\$"([^"]*)"/g, (match, content) => {
    // C# uses {expr}, JS uses ${expr}
    const replaced = content.replace(/\{([^}]+)\}/g, '${$1}');
    return '`' + replaced + '`';
  });
}

function cleanParams(params) {
  if (!params.trim()) return '';
  return params.split(',').map(p => {
    const parts = p.trim().split(/\s+/);
    // Return just the parameter name (last part), removing the type
    return parts[parts.length - 1].replace(/\[\]/g, '');
  }).join(', ');
}
