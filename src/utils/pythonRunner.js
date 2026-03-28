// Mini intérprete de Python simplificado para el juego
// Soporta: print, variables, if/elif/else, for, while, funciones, listas, diccionarios, f-strings

const MAX_ITERATIONS = 100_000;

export function runPython(code) {
  const output = [];
  const env = {
    __builtins__: true,
  };

  try {
    const jsCode = transpile(code);
    const printFn = (...args) => {
      output.push(args.map(a => pythonRepr(a)).join(' '));
    };

    let __iterCount = 0;
    const __tick = () => {
      if (++__iterCount > MAX_ITERATIONS) throw new Error('Tiempo de ejecución agotado (loop infinito detectado)');
    };

    const builtins = {
      print: printFn,
      __tick,
      len: (obj) => {
        if (typeof obj === 'string' || Array.isArray(obj)) return obj.length;
        if (typeof obj === 'object') return Object.keys(obj).length;
        return 0;
      },
      range: (...args) => {
        let start = 0, end, step = 1;
        if (args.length === 1) end = args[0];
        else if (args.length === 2) { start = args[0]; end = args[1]; }
        else { start = args[0]; end = args[1]; step = args[2]; }
        if (step === 0) throw new Error('range() arg 3 must not be zero');
        const result = [];
        if (step > 0) for (let i = start; i < end; i += step) result.push(i);
        else for (let i = start; i > end; i += step) result.push(i);
        return result;
      },
      int: (v) => parseInt(v, 10),
      float: (v) => parseFloat(v),
      str: (v) => String(v),
      bool: (v) => Boolean(v),
      max: (...args) => {
        const arr = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
        return Math.max(...arr);
      },
      min: (...args) => {
        const arr = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
        return Math.min(...arr);
      },
      sum: (arr) => arr.reduce((a, b) => a + b, 0),
      abs: Math.abs,
      round: (n, d = 0) => {
        const f = Math.pow(10, d);
        return Math.round(n * f) / f;
      },
      sorted: (arr) => [...arr].sort((a, b) => typeof a === 'string' ? a.localeCompare(b) : a - b),
      type: (v) => {
        if (typeof v === 'string') return "<class 'str'>";
        if (typeof v === 'number') return Number.isInteger(v) ? "<class 'int'>" : "<class 'float'>";
        if (typeof v === 'boolean') return "<class 'bool'>";
        if (Array.isArray(v)) return "<class 'list'>";
        if (typeof v === 'object') return "<class 'dict'>";
        return "<class 'NoneType'>";
      },
      input: () => '',
      True: true,
      False: false,
      None: null,
    };

    const fn = new Function(...Object.keys(builtins), jsCode);
    fn(...Object.values(builtins));

    return { success: true, output: output.join('\n') };
  } catch (e) {
    return { success: false, output: output.join('\n'), error: e.message };
  }
}

function pythonRepr(value) {
  if (value === null || value === undefined) return 'None';
  if (value === true) return 'True';
  if (value === false) return 'False';
  if (Array.isArray(value)) {
    return '[' + value.map(v => {
      if (typeof v === 'string') return `'${v}'`;
      return pythonRepr(v);
    }).join(', ') + ']';
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value).map(([k, v]) => {
      const key = typeof k === 'string' ? `'${k}'` : k;
      const val = typeof v === 'string' ? `'${v}'` : pythonRepr(v);
      return `${key}: ${val}`;
    });
    return '{' + entries.join(', ') + '}';
  }
  return String(value);
}

function transpile(pyCode) {
  let lines = pyCode.split('\n');
  let jsLines = [];
  let i = 0;

  while (i < lines.length) {
    const result = transpileLine(lines, i, 0);
    jsLines.push(...result.js);
    i = result.nextLine;
  }

  return jsLines.join('\n');
}

function getIndentLevel(line) {
  const match = line.match(/^(\s*)/);
  return match ? match[1].length : 0;
}

function transpileLine(lines, lineIdx, expectedIndent) {
  if (lineIdx >= lines.length) return { js: [], nextLine: lineIdx + 1 };

  const rawLine = lines[lineIdx];
  const trimmed = rawLine.trim();

  if (trimmed === '' || trimmed.startsWith('#')) {
    return { js: [''], nextLine: lineIdx + 1 };
  }

  const indent = ' '.repeat(expectedIndent);

  // f-strings
  let processed = trimmed;
  processed = processFStrings(processed);

  // Python-specific replacements
  processed = processed.replace(/\bTrue\b/g, 'true');
  processed = processed.replace(/\bFalse\b/g, 'false');
  processed = processed.replace(/\bNone\b/g, 'null');
  processed = processed.replace(/\band\b/g, '&&');
  processed = processed.replace(/\bor\b/g, '||');
  processed = processed.replace(/\bnot\b/g, '!');
  processed = processed.replace(/\belif\b/, 'else if');

  // .items() for dict iteration
  processed = processed.replace(/\.items\(\)/g, '');

  // .append()
  processed = processed.replace(/\.append\(([^)]+)\)/g, '.push($1)');

  // String methods
  processed = processed.replace(/\.upper\(\)/g, '.toUpperCase()');
  processed = processed.replace(/\.lower\(\)/g, '.toLowerCase()');
  processed = processed.replace(/\.strip\(\)/g, '.trim()');
  processed = processed.replace(/\.split\(([^)]*)\)/g, '.split($1)');
  processed = processed.replace(/\.replace\(([^,]+),\s*([^)]+)\)/g, '.replaceAll($1, $2)');

  // ** power operator
  processed = processed.replace(/(\w+)\s*\*\*\s*(\w+)/g, 'Math.pow($1, $2)');

  // for loop
  if (processed.startsWith('for ')) {
    const forMatch = trimmed.match(/^for\s+(\w+(?:\s*,\s*\w+)?)\s+in\s+(.+):\s*$/);
    if (forMatch) {
      const vars = forMatch[1];
      let iterable = forMatch[2];
      iterable = processFStrings(iterable);
      iterable = iterable.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false');
      iterable = iterable.replace(/\.items\(\)/g, '');

      const body = collectBlock(lines, lineIdx + 1, getIndentLevel(lines[lineIdx + 1] || '    '));
      const bodyJs = [];
      let bi = body.startLine;
      while (bi <= body.endLine) {
        const r = transpileLine(lines, bi, expectedIndent + 2);
        bodyJs.push(...r.js);
        bi = r.nextLine;
      }

      if (vars.includes(',')) {
        const [k, v] = vars.split(/\s*,\s*/);
        // Dict iteration with Object.entries
        const iterProcessed = processExpr(iterable);
        return {
          js: [
            `${indent}for (const [${k}, ${v}] of Object.entries(${iterProcessed})) {`,
            `${indent}  __tick();`,
            ...bodyJs,
            `${indent}}`,
          ],
          nextLine: body.endLine + 1,
        };
      }

      const iterProcessed = processExpr(iterable);
      return {
        js: [
          `${indent}for (const ${vars} of ${iterProcessed}) {`,
          `${indent}  __tick();`,
          ...bodyJs,
          `${indent}}`,
        ],
        nextLine: body.endLine + 1,
      };
    }
  }

  // while loop
  if (processed.startsWith('while ')) {
    const whileMatch = trimmed.match(/^while\s+(.+):\s*$/);
    if (whileMatch) {
      let cond = whileMatch[1];
      cond = processExpr(cond);
      const body = collectBlock(lines, lineIdx + 1, getIndentLevel(lines[lineIdx + 1] || '    '));
      const bodyJs = [];
      let bi = body.startLine;
      while (bi <= body.endLine) {
        const r = transpileLine(lines, bi, expectedIndent + 2);
        bodyJs.push(...r.js);
        bi = r.nextLine;
      }
      return {
        js: [
          `${indent}while (${cond}) {`,
          `${indent}  __tick();`,
          ...bodyJs,
          `${indent}}`,
        ],
        nextLine: body.endLine + 1,
      };
    }
  }

  // if / elif / else
  if (processed.startsWith('if ') || processed.startsWith('else if ') || processed === 'else:' || processed.startsWith('else:')) {
    if (processed === 'else:' || processed === 'else :') {
      const body = collectBlock(lines, lineIdx + 1, getIndentLevel(lines[lineIdx + 1] || '    '));
      const bodyJs = [];
      let bi = body.startLine;
      while (bi <= body.endLine) {
        const r = transpileLine(lines, bi, expectedIndent + 2);
        bodyJs.push(...r.js);
        bi = r.nextLine;
      }
      return {
        js: [
          `${indent}} else {`,
          ...bodyJs,
          `${indent}}`,
        ],
        nextLine: body.endLine + 1,
      };
    }

    const keyword = processed.startsWith('else if') ? 'else if' : 'if';
    const condMatch = trimmed.match(/^(?:el)?if\s+(.+):\s*$/);
    if (condMatch) {
      let cond = condMatch[1];
      cond = processExpr(cond);
      const body = collectBlock(lines, lineIdx + 1, getIndentLevel(lines[lineIdx + 1] || '    '));
      const bodyJs = [];
      let bi = body.startLine;
      while (bi <= body.endLine) {
        const r = transpileLine(lines, bi, expectedIndent + 2);
        bodyJs.push(...r.js);
        bi = r.nextLine;
      }

      const prefix = keyword === 'else if' ? '} else if' : 'if';
      return {
        js: [
          `${indent}${prefix} (${cond}) {`,
          ...bodyJs,
          `${indent}}`,
        ],
        nextLine: body.endLine + 1,
      };
    }
  }

  // def function
  if (trimmed.startsWith('def ')) {
    const defMatch = trimmed.match(/^def\s+(\w+)\s*\(([^)]*)\):\s*$/);
    if (defMatch) {
      const fname = defMatch[1];
      let params = defMatch[2];
      // Handle default params
      params = params.replace(/(\w+)\s*=\s*([^,]+)/g, '$1 = $2');
      const body = collectBlock(lines, lineIdx + 1, getIndentLevel(lines[lineIdx + 1] || '    '));
      const bodyJs = [];
      let bi = body.startLine;
      while (bi <= body.endLine) {
        const r = transpileLine(lines, bi, expectedIndent + 2);
        bodyJs.push(...r.js);
        bi = r.nextLine;
      }
      return {
        js: [
          `${indent}function ${fname}(${params}) {`,
          ...bodyJs,
          `${indent}}`,
        ],
        nextLine: body.endLine + 1,
      };
    }
  }

  // return
  if (processed.startsWith('return ') || processed === 'return') {
    if (processed === 'return') {
      return { js: [`${indent}return;`], nextLine: lineIdx + 1 };
    }
    let retVal = processed.replace('return ', '');
    retVal = processExpr(retVal);
    // Multiple return values → array
    if (retVal.includes(',') && !retVal.includes('(') && !retVal.includes('[') && !retVal.includes('{')) {
      retVal = `[${retVal}]`;
    }
    return { js: [`${indent}return ${retVal};`], nextLine: lineIdx + 1 };
  }

  // Assignment with unpacking
  if (processed.includes('=') && !processed.includes('==') && !processed.includes('!=') && !processed.includes('>=') && !processed.includes('<=') && !processed.startsWith('print') && !processed.startsWith('if') && !processed.startsWith('else') && !processed.startsWith('while') && !processed.startsWith('for')) {
    const assignMatch = processed.match(/^(\w+(?:\s*,\s*\w+)*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const lhs = assignMatch[1];
      let rhs = processExpr(assignMatch[2]);

      if (lhs.includes(',')) {
        const vars = lhs.split(/\s*,\s*/);
        return { js: [`${indent}let [${vars.join(', ')}] = ${rhs};`], nextLine: lineIdx + 1 };
      }

      return { js: [`${indent}let ${lhs} = ${rhs};`], nextLine: lineIdx + 1 };
    }
  }

  // Compound assignment
  if (processed.match(/\w+\s*[+\-*\/]=\s*.+/)) {
    const compMatch = processed.match(/^(\w+)\s*([+\-*\/])=\s*(.+)$/);
    if (compMatch) {
      const rhs = processExpr(compMatch[3]);
      return { js: [`${indent}${compMatch[1]} ${compMatch[2]}= ${rhs};`], nextLine: lineIdx + 1 };
    }
  }

  // General expression (print, function calls, etc.)
  processed = processExpr(processed);
  return { js: [`${indent}${processed};`], nextLine: lineIdx + 1 };
}

function processExpr(expr) {
  expr = processFStrings(expr);
  expr = expr.replace(/\bTrue\b/g, 'true');
  expr = expr.replace(/\bFalse\b/g, 'false');
  expr = expr.replace(/\bNone\b/g, 'null');
  expr = expr.replace(/\band\b/g, '&&');
  expr = expr.replace(/\bor\b/g, '||');
  expr = expr.replace(/\bnot\b/g, '!');
  expr = expr.replace(/\.append\(([^)]+)\)/g, '.push($1)');
  expr = expr.replace(/\.upper\(\)/g, '.toUpperCase()');
  expr = expr.replace(/\.lower\(\)/g, '.toLowerCase()');
  expr = expr.replace(/\.strip\(\)/g, '.trim()');
  expr = expr.replace(/\.split\(([^)]*)\)/g, '.split($1)');
  expr = expr.replace(/\.replace\(([^,]+),\s*([^)]+)\)/g, '.replaceAll($1, $2)');

  // Handle // (integer division) carefully
  if (expr.includes('//') && !expr.includes("'") && !expr.includes('"')) {
    expr = expr.replace(/(\S+)\s*\/\/\s*(\S+)/g, 'Math.floor($1 / $2)');
  }

  return expr;
}

function processFStrings(text) {
  return text.replace(/f"([^"]*)"/g, (match, content) => {
    const replaced = content.replace(/\{([^}]+)\}/g, '${$1}');
    return '`' + replaced + '`';
  }).replace(/f'([^']*)'/g, (match, content) => {
    const replaced = content.replace(/\{([^}]+)\}/g, '${$1}');
    return '`' + replaced + '`';
  });
}

function collectBlock(lines, startLine, blockIndent) {
  let endLine = startLine;
  while (endLine < lines.length) {
    const line = lines[endLine];
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) {
      endLine++;
      continue;
    }
    const indent = getIndentLevel(line);
    if (indent < blockIndent) break;
    endLine++;
  }
  return { startLine, endLine: endLine - 1 };
}
