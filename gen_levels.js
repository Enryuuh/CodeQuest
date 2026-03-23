import fs from 'fs';

const pythonCode = fs.readFileSync('src/data/levels.js', 'utf8');

function generateJava(code) {
  let java = code;
  
  // Replace language names
  java = java.replace(/Python/g, 'Java');
  java = java.replace(/python/gi, 'java');
  
  // Comments
  java = java.replace(/# /g, '// ');
  
  // Print
  java = java.replace(/print\(/g, 'System.out.println(');
  
  // Booleans
  java = java.replace(/\bTrue\b/g, 'true');
  java = java.replace(/\bFalse\b/g, 'false');
  
  // Conditionals
  java = java.replace(/\belif\b/g, 'else if');
  
  // Functions
  java = java.replace(/\bdef\b/g, 'void');
  
  // Logical operators in code snippets (not perfect but OK for this game)
  java = java.replace(/(\w+)\s+and\s+(\w+)/g, '$1 && $2');
  java = java.replace(/(\w+)\s+or\s+(\w+)/g, '$1 || $2');
  
  // F-strings text
  java = java.replace(/\bf"([^"]*)"/g, '"$1"');
  java = java.replace(/\bf'([^']*)'/g, '"$1"');

  return java;
}

function generateCSharp(code) {
  let cs = code;
  
  // Replace language names
  cs = cs.replace(/Python/g, 'C#');
  cs = cs.replace(/python/gi, 'c#');
  
  // Comments
  cs = cs.replace(/# /g, '// ');
  
  // Print
  cs = cs.replace(/print\(/g, 'Console.WriteLine(');
  
  // Booleans
  cs = cs.replace(/\bTrue\b/g, 'true');
  cs = cs.replace(/\bFalse\b/g, 'false');
  
  // Conditionals
  cs = cs.replace(/\belif\b/g, 'else if');
  
  // Functions
  cs = cs.replace(/\bdef\b/g, 'void');

  // Logical operators
  cs = cs.replace(/(\w+)\s+and\s+(\w+)/g, '$1 && $2');
  cs = cs.replace(/(\w+)\s+or\s+(\w+)/g, '$1 || $2');
  
  // F-strings text (C# uses $)
  cs = cs.replace(/\bf"([^"]*)"/g, '$"$1"');
  cs = cs.replace(/\bf'([^']*)'/g, '$"$1"');

  return cs;
}

fs.writeFileSync('src/data/levels_java.js', generateJava(pythonCode));
fs.writeFileSync('src/data/levels_csharp.js', generateCSharp(pythonCode));
console.log('Levels generated');
