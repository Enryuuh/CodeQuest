import fs from 'fs';

function updateMemories() {
  const file = 'src/pages/Memory.jsx';
  let content = fs.readFileSync(file, 'utf8');

  // Extract the extendedLessons object
  const match = content.match(/const extendedLessons = (\{[\s\S]*?\n\});\s*const colorMap/);
  if (!match) {
    console.error("Could not find extendedLessons");
    return;
  }

  // Evaluate the object in node.js
  let extendedLessons;
  eval('extendedLessons = ' + match[1]);

  // Modify the objects
  for (const key in extendedLessons) {
    let lesson = extendedLessons[key];
    
    // Quick title overrides
    lesson.title = lesson.title.replace('print()', 'Salida de datos');
    lesson.title = lesson.title.replace('f-strings — ', '');
    
    // Content overrides
    lesson.content = lesson.content.trim();
    if (lesson.content.includes('Python')) {
      lesson.content += '\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.';
    }

    if (lesson.examples) {
      lesson.examples = lesson.examples.map(ex => {
        let py = ex.code;
        
        let jv = py;
        jv = jv.replace(/print\(/g, 'System.out.println(');
        jv = jv.replace(/# /g, '// ');
        jv = jv.replace(/\bTrue\b/g, 'true');
        jv = jv.replace(/\bFalse\b/g, 'false');
        jv = jv.replace(/\bdef\b/g, 'void');
        jv = jv.split('\n').map(l => {
           let t = l.trim();
           if (t && !t.startsWith('//') && !t.endsWith(':') && !t.endsWith('{') && !t.endsWith('}')) return l + ';';
           return l;
        }).join('\n');

        let cs = py;
        cs = cs.replace(/print\(/g, 'Console.WriteLine(');
        cs = cs.replace(/# /g, '// ');
        cs = cs.replace(/\bTrue\b/g, 'true');
        cs = cs.replace(/\bFalse\b/g, 'false');
        cs = cs.replace(/\bdef\b/g, 'void');
        cs = cs.split('\n').map(l => {
           let t = l.trim();
           if (t && !t.startsWith('//') && !t.endsWith(':') && !t.endsWith('{') && !t.endsWith('}')) return l + ';';
           return l;
        }).join('\n');

        return {
          code: `// --- Python ---\n${py}\n\n// --- Java ---\n${jv}\n\n// --- C# ---\n${cs}`,
          output: ex.output
        };
      });
    }
  }

  // Serialize back
  let newObjStr = JSON.stringify(extendedLessons, null, 2);
  
  // Replace the old object string in the content
  let newContent = content.substring(0, match.index) + 
                   'const extendedLessons = ' + newObjStr + ';\n\nconst colorMap' + 
                   content.substring(match.index + match[0].length);

  fs.writeFileSync(file, newContent);
  console.log("Memory.jsx extendedLessons updated with Multi-Language examples.");
}

updateMemories();
