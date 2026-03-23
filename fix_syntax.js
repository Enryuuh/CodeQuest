import fs from 'fs';

function fixFile(filename) {
  let content = fs.readFileSync(filename, 'utf8');

  // 1. Fix if / else if / while conditions
  // Match `if something:` but DO NOT span across lines.
  content = content.replace(/\b(if|else if|while)\s+([^:\n]+):/g, '$1 ($2)');
  
  // 2. Fix else
  content = content.replace(/\belse:/g, 'else');
  
  // 3. Fix void (functions)
  content = content.replace(/\bvoid\s+([a-zA-Z0-9_]+)\s*\(([^)\n]*)\):/g, 'void $1($2)');

  // 4. Semicolons
  content = content.replace(/(initialCode|hint|example)\s*:\s*(['"`])([\s\S]*?)\2/g, (match, propName, quote, codeText) => {
    
    let sublines = codeText.split('\\n');
    let newSublines = sublines.map(line => {
      let t = line.trim();
      if (!t) return line;
      if (t.startsWith('//')) return line;
      if (t.endsWith(';') || t.endsWith('{') || t.endsWith('}')) return line;
      
      // If it's a block opener:
      if (t.match(/^(if|else|while|for|void|class)\b/)) {
        return line; // no semicolon
      }
      
      return line + ';';
    });
    
    return `${propName}: ${quote}${newSublines.join('\\n')}${quote}`;
  });

  fs.writeFileSync(filename, content);
  console.log('Fixed', filename);
}

fixFile('src/data/levels_java.js');
fixFile('src/data/levels_csharp.js');
