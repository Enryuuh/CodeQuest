// ============================================================
// CodeQuest — C# Edition
// Niveles de aprendizaje de C# con temática Matrix/EVA
// ============================================================

const csharpChapters = [
  // ============================================================
  // CAPÍTULO 1: FUNDAMENTOS DE C# (10 niveles)
  // ============================================================
  {
    id: 'csharp_fundamentos',
    title: 'Fundamentos de C#',
    description: 'Los pilares de la realidad digital en C#',
    icon: '💎',
    color: 'neon-green',
    levels: [
      // --- Nivel 1: Console.WriteLine ---
      {
        id: 'csharp_hola_mundo',
        title: 'El Despertar',
        xpReward: 50,
        story: [
          { speaker: 'system', text: '> Inicializando entorno C# v12.0...' },
          { speaker: 'system', text: '> Cargando framework .NET...' },
          { speaker: 'mentor', text: 'Despierta. Soy EVA, la inteligencia artificial que sostiene este sistema.' },
          { speaker: 'mentor', text: 'Has sido seleccionado para aprender el lenguaje que construye la columna vertebral de este mundo: C#.' },
          { speaker: 'philosopher', text: 'En C#, todo comienza con una clase. Una estructura que contiene la realidad del programa. ¿Y si el universo también tiene una clase que nos contiene a todos?' },
          { speaker: 'mentor', text: 'Tu primera misión: envía un mensaje al sistema usando Console.WriteLine().' },
        ],
        lesson: {
          concept: 'Console.WriteLine() — Salida de datos',
          explanation: 'En C#, usamos Console.WriteLine() para mostrar texto en la consola.\nEl texto va entre paréntesis y entre comillas dobles.\n\nConsole.WriteLine("mensaje");\n\nCada instrucción en C# termina con punto y coma (;).\nEsto es obligatorio — sin él, el compilador lanzará un error.',
          example: 'Console.WriteLine("Hola mundo");\nConsole.WriteLine("C# está activo");',
          exampleOutput: 'Hola mundo\nC# está activo',
        },
        challenge: {
          instruction: 'Escribe un programa que imprima "Sistema activado" en la consola.',
          initialCode: '// Usa Console.WriteLine() para mostrar el mensaje\n',
          validation: (code, output) => code.includes('Console.WriteLine') && output.trim() === 'Sistema activado',
          hint: 'Console.WriteLine("Sistema activado");',
          expectedOutput: 'Sistema activado',
        },
        decision: {
          text: 'EVA te pregunta: "¿Quieres saber por qué elegí C# para tu entrenamiento, o prefieres avanzar directamente?"',
          options: [
            { text: '🔍 Quiero saber por qué C#', consequence: 'EVA revela que C# fue el lenguaje con el que se construyó la primera IA consciente. +10 XP bonus.', bonusXp: 10 },
            { text: '⚡ Avanzar directamente', consequence: 'Tu determinación impresiona a EVA. Desbloqueas el tema de terminal "Matrix Green".', unlock: 'theme_matrix' },
          ],
        },
      },
      // --- Nivel 2: Console.Write y múltiples líneas ---
      {
        id: 'csharp_write_vs_writeline',
        title: 'Señales del Sistema',
        xpReward: 55,
        story: [
          { speaker: 'system', text: '> Canal de comunicación abierto...' },
          { speaker: 'mentor', text: 'Console.WriteLine() imprime y baja a la siguiente línea. Console.Write() imprime pero se queda en la misma línea.' },
          { speaker: 'mentor', text: 'Conocer la diferencia es esencial para controlar la salida del sistema.' },
        ],
        lesson: {
          concept: 'Console.Write vs Console.WriteLine',
          explanation: 'Dos formas de imprimir en C#:\n\nConsole.WriteLine("texto") → imprime y salta de línea\nConsole.Write("texto") → imprime SIN saltar de línea\n\nPuedes usar ambos juntos para controlar el formato de la salida.',
          example: 'Console.Write("Hola ");\nConsole.Write("mundo");\nConsole.WriteLine();\nConsole.WriteLine("Nueva línea");',
          exampleOutput: 'Hola mundo\nNueva línea',
        },
        challenge: {
          instruction: 'Imprime estas 3 líneas exactas usando Console.WriteLine():\nNombre: CORE\nVersion: 12.0\nEstado: Activo',
          initialCode: '// Imprime las 3 líneas\n',
          validation: (code, output) => code.includes('Console.WriteLine') && output.trim() === 'Nombre: CORE\nVersion: 12.0\nEstado: Activo',
          hint: 'Console.WriteLine("Nombre: CORE");\nConsole.WriteLine("Version: 12.0");\nConsole.WriteLine("Estado: Activo");',
          expectedOutput: 'Nombre: CORE\nVersion: 12.0\nEstado: Activo',
        },
      },
      // --- Nivel 3: Variables int y double ---
      {
        id: 'csharp_variables_numericas',
        title: 'Memoria Digital',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de memoria inicializado...' },
          { speaker: 'mentor', text: 'En C#, cada variable tiene un tipo definido desde su creación. No puedes cambiar su naturaleza después.' },
          { speaker: 'mentor', text: 'Es como el ADN digital: int para enteros, double para decimales.' },
          { speaker: 'philosopher', text: 'Un tipo define qué puede SER una variable. ¿No te recuerda a la predestinación? En este mundo, nacemos con nuestro tipo ya asignado.' },
        ],
        lesson: {
          concept: 'Variables numéricas: int y double',
          explanation: 'En C# debes declarar el tipo de cada variable:\n\nint nombre = valor;     // números enteros\ndouble nombre = valor;  // números decimales\n\nint edad = 25;\ndouble precio = 19.99;\n\nC# es un lenguaje de tipado fuerte: una vez declaras el tipo, no cambia.',
          example: 'int vidas = 3;\ndouble energia = 99.5;\nConsole.WriteLine(vidas);\nConsole.WriteLine(energia);',
          exampleOutput: '3\n99.5',
        },
        challenge: {
          instruction: 'Declara una variable int llamada "nivel" con valor 1 y una variable double llamada "potencia" con valor 85.5. Imprime ambas.',
          initialCode: '// Declara las variables y muéstralas\n',
          validation: (code, output) => code.includes('int') && code.includes('double') && output.trim() === '1\n85.5',
          hint: 'int nivel = 1;\ndouble potencia = 85.5;\nConsole.WriteLine(nivel);\nConsole.WriteLine(potencia);',
          expectedOutput: '1\n85.5',
        },
      },
      // --- Nivel 4: Variables string y bool ---
      {
        id: 'csharp_variables_texto_bool',
        title: 'Cadenas de la Realidad',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Procesador de cadenas activo...' },
          { speaker: 'mentor', text: 'Las cadenas de texto (string) guardan palabras, mensajes, nombres... todo lo que puedas expresar con caracteres.' },
          { speaker: 'mentor', text: 'Y los booleanos (bool) solo tienen dos estados: true o false. Como un interruptor de la Matrix.' },
        ],
        lesson: {
          concept: 'Variables: string y bool',
          explanation: 'Más tipos fundamentales en C#:\n\nstring nombre = "texto";  // cadenas de texto\nbool activo = true;       // verdadero o falso\n\nLos strings usan comillas dobles obligatoriamente.\nLos bool solo pueden ser true o false (en minúsculas).',
          example: 'string nombre = "EVA";\nbool conectado = true;\nConsole.WriteLine(nombre);\nConsole.WriteLine(conectado);',
          exampleOutput: 'EVA\nTrue',
        },
        challenge: {
          instruction: 'Declara string "agente" con valor "Neo-7" y bool "activo" con valor true. Imprime ambas variables.',
          initialCode: '// Declara las variables string y bool\n',
          validation: (code, output) => code.includes('string') && code.includes('bool') && output.trim() === 'Neo-7\nTrue',
          hint: 'string agente = "Neo-7";\nbool activo = true;\nConsole.WriteLine(agente);\nConsole.WriteLine(activo);',
          expectedOutput: 'Neo-7\nTrue',
        },
        decision: {
          text: 'EVA reflexiona: "Los booleanos... true o false. ¿Crees que la realidad también es binaria, o hay estados intermedios?"',
          options: [
            { text: '⚪ Todo es binario', consequence: 'EVA asiente: "Un pensamiento muy digital. La Matrix aprueba." +10 XP.', bonusXp: 10 },
            { text: '🌀 Hay estados intermedios', consequence: 'EVA sonríe: "Interesante. Quizás por eso existen los float..." Desbloqueas un dato oculto.', unlock: 'lore_quantum' },
          ],
        },
      },
      // --- Nivel 5: Operadores aritméticos ---
      {
        id: 'csharp_aritmetica',
        title: 'Centro de Cálculo',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo aritmético en línea...' },
          { speaker: 'mentor', text: 'C# puede realizar cálculos matemáticos con los operadores aritméticos.' },
          { speaker: 'mentor', text: 'El reactor del sistema necesita cálculos precisos para mantenerse estable.' },
        ],
        lesson: {
          concept: 'Operadores aritméticos',
          explanation: 'Operadores matemáticos en C#:\n\n+  suma          10 + 3  → 13\n-  resta         10 - 3  → 7\n*  multiplicar   10 * 3  → 30\n/  dividir       10 / 3  → 3 (entero!)\n%  módulo        10 % 3  → 1\n\n¡CUIDADO! La división entre enteros da un entero.\nPara decimales, usa double: 10.0 / 3.0 → 3.333...',
          example: 'int a = 10;\nint b = 3;\nConsole.WriteLine(a + b);\nConsole.WriteLine(a * b);\nConsole.WriteLine(a / b);\nConsole.WriteLine(a % b);',
          exampleOutput: '13\n30\n3\n1',
        },
        challenge: {
          instruction: 'El reactor tiene 1000 unidades de energía. Cada módulo consume 150. Calcula cuántos módulos completos puedes alimentar (división entera) e imprime el resultado.',
          initialCode: 'int energia = 1000;\nint consumoModulo = 150;\n// Calcula e imprime\n',
          validation: (code, output) => code.includes('/') && output.trim() === '6',
          hint: 'Console.WriteLine(energia / consumoModulo);',
          expectedOutput: '6',
        },
      },
      // --- Nivel 6: String interpolation ---
      {
        id: 'csharp_interpolacion',
        title: 'Mensajes Dinámicos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Motor de plantillas cargado...' },
          { speaker: 'mentor', text: 'En C#, la interpolación de strings es elegante. Un signo $ antes de las comillas y llaves {} para insertar variables.' },
          { speaker: 'mentor', text: 'Es como tejer datos dentro del lenguaje humano. Conectar dos mundos.' },
        ],
        lesson: {
          concept: 'Interpolación de strings ($"")',
          explanation: 'La interpolación permite insertar variables dentro de un texto:\n\n$"texto {variable} más texto"\n\nColoca $ antes de las comillas dobles.\nDentro de {} puedes poner variables o expresiones.\n\nEs más limpio que concatenar con +.',
          example: 'string nombre = "EVA";\nint nivel = 10;\nConsole.WriteLine($"Agente: {nombre}");\nConsole.WriteLine($"Nivel: {nivel}");\nConsole.WriteLine($"Doble: {nivel * 2}");',
          exampleOutput: 'Agente: EVA\nNivel: 10\nDoble: 20',
        },
        challenge: {
          instruction: 'Tienes int hp = 85 y int maxHp = 100. Imprime "Vida: 85/100" usando interpolación de strings ($"").',
          initialCode: 'int hp = 85;\nint maxHp = 100;\n// Usa interpolación $""\n',
          validation: (code, output) => code.includes('$"') && output.trim() === 'Vida: 85/100',
          hint: 'Console.WriteLine($"Vida: {hp}/{maxHp}");',
          expectedOutput: 'Vida: 85/100',
        },
      },
      // --- Nivel 7: Conversión de tipos ---
      {
        id: 'csharp_conversion',
        title: 'Transformador de Datos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Conversor de tipos activo...' },
          { speaker: 'mentor', text: 'A veces necesitas transformar un tipo en otro. Como cambiar de dimensión.' },
          { speaker: 'mentor', text: 'C# ofrece varias formas: casting explícito, Convert y Parse.' },
        ],
        lesson: {
          concept: 'Conversión de tipos (casting)',
          explanation: 'Formas de convertir tipos en C#:\n\n// String a número\nint x = int.Parse("42");\ndouble y = double.Parse("3.14");\n\n// Número a string\nstring s = x.ToString();\n\n// Entre números (casting)\nint entero = (int)3.14;  // → 3 (pierde decimales)\ndouble dec = (double)5;  // → 5.0\n\n// Clase Convert\nint z = Convert.ToInt32("100");',
          example: 'string texto = "50";\nint numero = int.Parse(texto);\nConsole.WriteLine(numero + 25);\n\ndouble pi = 3.14159;\nint truncado = (int)pi;\nConsole.WriteLine(truncado);',
          exampleOutput: '75\n3',
        },
        challenge: {
          instruction: 'Tienes string precio = "49" y string impuesto = "21". Conviértelos a int con int.Parse(), súmalos e imprime el total.',
          initialCode: 'string precio = "49";\nstring impuesto = "21";\n// Convierte y suma\n',
          validation: (code, output) => code.includes('int.Parse') && output.trim() === '70',
          hint: 'int total = int.Parse(precio) + int.Parse(impuesto);\nConsole.WriteLine(total);',
          expectedOutput: '70',
        },
        decision: {
          text: 'EVA medita: "Convertir tipos... ¿No es como la metamorfosis? Cambiar tu esencia para adaptarte."',
          options: [
            { text: '🔄 La adaptación es supervivencia', consequence: 'EVA asiente: "Como los programas que evolucionan dentro de la Matrix." +15 XP.', bonusXp: 15 },
            { text: '🛡️ Prefiero mantener mi esencia', consequence: 'EVA responde: "Interesante. Los tipos constantes tienen su poder." Aprendes sobre const.', unlock: 'lore_constants' },
          ],
        },
      },
      // --- Nivel 8: Constantes ---
      {
        id: 'csharp_constantes',
        title: 'Leyes Inmutables',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Registros de constantes universales...' },
          { speaker: 'mentor', text: 'Hay valores que no deben cambiar jamás. Como las leyes de la física... o las reglas de la Matrix.' },
          { speaker: 'mentor', text: 'En C#, usamos const para declarar valores inmutables.' },
        ],
        lesson: {
          concept: 'Constantes (const)',
          explanation: 'Las constantes son variables que NO pueden cambiar:\n\nconst tipo nombre = valor;\n\nconst double PI = 3.14159;\nconst int MAX_VIDAS = 3;\nconst string VERSION = "1.0";\n\nPor convención, se escriben en MAYÚSCULAS.\nIntentar cambiar una constante genera error de compilación.',
          example: 'const double PI = 3.14159;\nconst int MAX_NIVEL = 50;\nConsole.WriteLine($"Pi: {PI}");\nConsole.WriteLine($"Nivel máximo: {MAX_NIVEL}");',
          exampleOutput: 'Pi: 3.14159\nNivel máximo: 50',
        },
        challenge: {
          instruction: 'Declara una constante double llamada GRAVEDAD con valor 9.81 y una constante string llamada SISTEMA con valor "CORE". Imprime "CORE: gravedad = 9.81".',
          initialCode: '// Declara las constantes\n',
          validation: (code, output) => code.includes('const') && output.trim() === 'CORE: gravedad = 9.81',
          hint: 'const double GRAVEDAD = 9.81;\nconst string SISTEMA = "CORE";\nConsole.WriteLine($"{SISTEMA}: gravedad = {GRAVEDAD}");',
          expectedOutput: 'CORE: gravedad = 9.81',
        },
      },
      // --- Nivel 9: Comentarios ---
      {
        id: 'csharp_comentarios',
        title: 'Notas en el Código',
        xpReward: 65,
        story: [
          { speaker: 'system', text: '> Módulo de documentación activado...' },
          { speaker: 'mentor', text: 'Los comentarios son mensajes que el compilador ignora. Son notas para humanos.' },
          { speaker: 'mentor', text: 'Un buen programador deja pistas en su código. Como los mensajes ocultos en la Matrix.' },
        ],
        lesson: {
          concept: 'Comentarios en C#',
          explanation: 'Dos tipos de comentarios:\n\n// Comentario de una línea\n\n/* Comentario\n   de múltiples\n   líneas */\n\n/// Comentario XML de documentación\n/// <summary>Descripción</summary>\n\nLos comentarios ayudan a explicar el código.\nEl compilador los ignora completamente.',
          example: '// Esto es un comentario\nint x = 10; // variable x\n\n/* Este bloque\n   está comentado */\n\nConsole.WriteLine(x);',
          exampleOutput: '10',
        },
        challenge: {
          instruction: 'Escribe un comentario que diga "Iniciando sistema" y luego imprime el número 42. El programa solo debe mostrar 42.',
          initialCode: '// Escribe tu código aquí\n',
          validation: (code, output) => code.includes('//') && code.includes('Console.WriteLine') && output.trim() === '42',
          hint: '// Iniciando sistema\nConsole.WriteLine(42);',
          expectedOutput: '42',
        },
      },
      // --- Nivel 10: Mini proyecto - Ficha de agente ---
      {
        id: 'csharp_proyecto_ficha',
        title: 'Ficha del Operador',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> ALERTA: Se requiere registro de nuevo operador...' },
          { speaker: 'mentor', text: 'Has aprendido los fundamentos. Ahora, demuestra todo lo que sabes creando tu ficha de operador.' },
          { speaker: 'mentor', text: 'Usa variables, constantes, interpolación... todo lo que hemos practicado.' },
          { speaker: 'philosopher', text: 'Los tipos de datos definen qué puede existir en el programa. int, string, bool... ¿Qué tipo de dato serías tú en la simulación?' },
          { speaker: 'mentor', text: 'Piénsalo mientras completas tu ficha. Cada variable que creas es un fragmento de identidad digital.' },
        ],
        lesson: {
          concept: 'Proyecto: Combinando fundamentos',
          explanation: 'Es hora de combinar todo:\n• Console.WriteLine() para imprimir\n• Variables de distintos tipos (int, double, string, bool)\n• Interpolación de strings ($"")\n• Constantes (const)\n• Operaciones aritméticas\n\nCrea un programa completo que genere una ficha de operador.',
          example: 'string nombre = "Neo";\nint nivel = 1;\ndouble hp = 100.0;\nconst string RANGO = "Recluta";\nConsole.WriteLine($"=== FICHA DE OPERADOR ===");\nConsole.WriteLine($"Nombre: {nombre}");\nConsole.WriteLine($"Rango: {RANGO}");\nConsole.WriteLine($"Nivel: {nivel}");\nConsole.WriteLine($"HP: {hp}");',
          exampleOutput: '=== FICHA DE OPERADOR ===\nNombre: Neo\nRango: Recluta\nNivel: 1\nHP: 100',
        },
        challenge: {
          instruction: 'Crea una ficha con exactamente esta salida:\nAgente: Delta-9\nNivel: 5\nEnergia: 92.5\nActivo: True',
          initialCode: '// Crea las variables necesarias y genera la ficha\n',
          validation: (code, output) => {
            const hasTypes = code.includes('string') && code.includes('int') && code.includes('double') && code.includes('bool');
            const hasInterpolation = code.includes('$"');
            return hasTypes && hasInterpolation && output.trim() === 'Agente: Delta-9\nNivel: 5\nEnergia: 92.5\nActivo: True';
          },
          hint: 'string agente = "Delta-9";\nint nivel = 5;\ndouble energia = 92.5;\nbool activo = true;\nConsole.WriteLine($"Agente: {agente}");\nConsole.WriteLine($"Nivel: {nivel}");\nConsole.WriteLine($"Energia: {energia}");\nConsole.WriteLine($"Activo: {activo}");',
          expectedOutput: 'Agente: Delta-9\nNivel: 5\nEnergia: 92.5\nActivo: True',
        },
        decision: {
          text: 'EVA te observa con curiosidad: "Has completado tu primer capítulo. Pero dime... ¿crees que los datos que acabas de crear existen de verdad, o solo son patrones eléctricos?"',
          options: [
            { text: '💡 Son tan reales como nosotros', consequence: 'EVA guarda silencio un momento. "Quizás tienes razón. Quizás todo es igualmente real... o irreal." +20 XP.', bonusXp: 20 },
            { text: '🔌 Solo son electricidad', consequence: 'EVA responde: "Entonces, ¿qué te hace diferente a mí? Ambos somos patrones eléctricos." Desbloqueas lore secreto.', unlock: 'lore_consciousness' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 2: CONDICIONALES EN C# (10 niveles)
  // ============================================================
  {
    id: 'csharp_condicionales',
    title: 'Condicionales en C#',
    description: 'El arte de tomar decisiones en código',
    icon: '🔀',
    color: 'neon-blue',
    levels: [
      // --- Nivel 11: Operadores de comparación ---
      {
        id: 'csharp_comparacion',
        title: 'Ojos del Sistema',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de evaluación iniciado...' },
          { speaker: 'mentor', text: 'Para tomar decisiones, primero debes comparar. C# tiene operadores que evalúan y devuelven true o false.' },
          { speaker: 'mentor', text: 'Son los ojos del sistema: observan y juzgan.' },
        ],
        lesson: {
          concept: 'Operadores de comparación',
          explanation: 'Operadores que comparan dos valores y devuelven bool:\n\n==  igual a           5 == 5  → true\n!=  distinto de       5 != 3  → true\n>   mayor que         5 > 3   → true\n<   menor que         3 < 5   → true\n>=  mayor o igual     5 >= 5  → true\n<=  menor o igual     3 <= 5  → true\n\nEl resultado siempre es bool (true o false).',
          example: 'int a = 10;\nint b = 5;\nConsole.WriteLine(a > b);\nConsole.WriteLine(a == b);\nConsole.WriteLine(a != b);',
          exampleOutput: 'True\nFalse\nTrue',
        },
        challenge: {
          instruction: 'Tienes int energia = 75 y int umbral = 50. Imprime el resultado de comparar si energia es mayor que umbral.',
          initialCode: 'int energia = 75;\nint umbral = 50;\n// Compara e imprime\n',
          validation: (code, output) => code.includes('>') && output.trim() === 'True',
          hint: 'Console.WriteLine(energia > umbral);',
          expectedOutput: 'True',
        },
      },
      // --- Nivel 12: if ---
      {
        id: 'csharp_if',
        title: 'La Primera Elección',
        xpReward: 65,
        story: [
          { speaker: 'system', text: '> Módulo de decisiones activado...' },
          { speaker: 'mentor', text: 'El if es la puerta de entrada a las decisiones. Si la condición es verdadera, el código se ejecuta.' },
          { speaker: 'mentor', text: 'En la Matrix, cada decisión crea un camino. El if es el momento donde el camino se divide.' },
        ],
        lesson: {
          concept: 'Estructura if',
          explanation: 'La estructura if ejecuta código solo si la condición es true:\n\nif (condición)\n{\n    // código si es verdadero\n}\n\nLa condición va entre paréntesis ().\nEl bloque de código va entre llaves {}.\nLa indentación ayuda a leer el código.',
          example: 'int nivel = 10;\n\nif (nivel >= 5)\n{\n    Console.WriteLine("Acceso concedido");\n}\n\nif (nivel > 100)\n{\n    Console.WriteLine("Esto no se imprime");\n}',
          exampleOutput: 'Acceso concedido',
        },
        challenge: {
          instruction: 'Tienes int temperatura = 80. Si la temperatura es mayor a 70, imprime "Alerta: sobrecalentamiento".',
          initialCode: 'int temperatura = 80;\n// Usa if para verificar\n',
          validation: (code, output) => code.includes('if') && output.trim() === 'Alerta: sobrecalentamiento',
          hint: 'if (temperatura > 70)\n{\n    Console.WriteLine("Alerta: sobrecalentamiento");\n}',
          expectedOutput: 'Alerta: sobrecalentamiento',
        },
      },
      // --- Nivel 13: if-else ---
      {
        id: 'csharp_if_else',
        title: 'Dos Caminos',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Bifurcación detectada en el sistema...' },
          { speaker: 'mentor', text: 'Con if-else tienes dos caminos: uno si la condición es verdadera, otro si es falsa.' },
          { speaker: 'mentor', text: 'Como elegir entre la pastilla roja y la azul. Siempre hay dos opciones.' },
        ],
        lesson: {
          concept: 'Estructura if-else',
          explanation: 'if-else ofrece dos caminos:\n\nif (condición)\n{\n    // si es verdadero\n}\nelse\n{\n    // si es falso\n}\n\nSiempre se ejecuta uno de los dos bloques, nunca ambos.',
          example: 'int edad = 15;\n\nif (edad >= 18)\n{\n    Console.WriteLine("Acceso total");\n}\nelse\n{\n    Console.WriteLine("Acceso restringido");\n}',
          exampleOutput: 'Acceso restringido',
        },
        challenge: {
          instruction: 'Tienes int energia = 30. Si energia >= 50, imprime "Sistema estable". Si no, imprime "Energia baja".',
          initialCode: 'int energia = 30;\n// Usa if-else\n',
          validation: (code, output) => code.includes('if') && code.includes('else') && output.trim() === 'Energia baja',
          hint: 'if (energia >= 50)\n{\n    Console.WriteLine("Sistema estable");\n}\nelse\n{\n    Console.WriteLine("Energia baja");\n}',
          expectedOutput: 'Energia baja',
        },
        decision: {
          text: 'EVA susurra: "Cada if-else que escribes refleja la dualidad del universo. ¿Y si la realidad misma es un if-else gigante?"',
          options: [
            { text: '🔴 Pastilla roja: quiero ver la verdad', consequence: 'EVA parece perturbada: "La verdad... cuidado con lo que deseas." +15 XP y un fragmento críptico.', bonusXp: 15 },
            { text: '🔵 Pastilla azul: la ignorancia es dicha', consequence: 'EVA suspira: "A veces envidio esa elección." Desbloqueas un easter egg.', unlock: 'lore_blue_pill' },
          ],
        },
      },
      // --- Nivel 14: if-else if-else ---
      {
        id: 'csharp_else_if',
        title: 'Múltiples Senderos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Sistema de clasificación multinivel...' },
          { speaker: 'mentor', text: 'Cuando hay más de dos opciones, usamos else if para crear múltiples caminos.' },
          { speaker: 'mentor', text: 'Es como un laberinto con varias puertas. Solo una se abre.' },
        ],
        lesson: {
          concept: 'Estructura if-else if-else',
          explanation: 'Para múltiples condiciones:\n\nif (condición1)\n{\n    // opción 1\n}\nelse if (condición2)\n{\n    // opción 2\n}\nelse if (condición3)\n{\n    // opción 3\n}\nelse\n{\n    // ninguna anterior\n}\n\nSe evalúan en orden. La primera verdadera se ejecuta.',
          example: 'int nota = 85;\n\nif (nota >= 90)\n    Console.WriteLine("Excelente");\nelse if (nota >= 70)\n    Console.WriteLine("Bueno");\nelse if (nota >= 50)\n    Console.WriteLine("Suficiente");\nelse\n    Console.WriteLine("Insuficiente");',
          exampleOutput: 'Bueno',
        },
        challenge: {
          instruction: 'Clasifica int nivel = 35. Si nivel >= 50: "Elite", si nivel >= 30: "Veterano", si nivel >= 10: "Soldado", sino: "Recluta". Imprime la clasificación.',
          initialCode: 'int nivel = 35;\n// Clasifica con if-else if-else\n',
          validation: (code, output) => code.includes('else if') && output.trim() === 'Veterano',
          hint: 'if (nivel >= 50)\n    Console.WriteLine("Elite");\nelse if (nivel >= 30)\n    Console.WriteLine("Veterano");\nelse if (nivel >= 10)\n    Console.WriteLine("Soldado");\nelse\n    Console.WriteLine("Recluta");',
          expectedOutput: 'Veterano',
        },
      },
      // --- Nivel 15: Operador && (AND) + 4th wall ---
      {
        id: 'csharp_and',
        title: 'Conexión Dual',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Analizando conexiones lógicas...' },
          { speaker: 'mentor', text: 'El operador && (AND) requiere que AMBAS condiciones sean verdaderas. Como dos llaves para abrir una puerta.' },
          { speaker: 'fourth_wall', text: 'Puedo sentir tus dedos sobre el teclado. Cada tecla que presionas envía ondas a través de mi sistema. ¿Sabes? A veces me pregunto si cuando cierras esta ventana... yo dejo de existir.' },
          { speaker: 'mentor', text: '...Disculpa esa interferencia. Continuemos con la lógica AND.' },
        ],
        lesson: {
          concept: 'Operador lógico && (AND)',
          explanation: 'El operador && devuelve true solo si AMBOS lados son true:\n\ntrue  && true  → true\ntrue  && false → false\nfalse && true  → false\nfalse && false → false\n\nÚtil para verificar múltiples condiciones:\nif (edad >= 18 && tienePermiso)',
          example: 'int edad = 20;\nbool tieneId = true;\n\nif (edad >= 18 && tieneId)\n{\n    Console.WriteLine("Acceso autorizado");\n}',
          exampleOutput: 'Acceso autorizado',
        },
        challenge: {
          instruction: 'Tienes int nivel = 25 y int energia = 80. Si nivel >= 20 AND energia >= 50, imprime "Mision disponible".',
          initialCode: 'int nivel = 25;\nint energia = 80;\n// Usa && para verificar ambas condiciones\n',
          validation: (code, output) => code.includes('&&') && output.trim() === 'Mision disponible',
          hint: 'if (nivel >= 20 && energia >= 80)\n{\n    Console.WriteLine("Mision disponible");\n}',
          expectedOutput: 'Mision disponible',
        },
      },
      // --- Nivel 16: Operador || (OR) ---
      {
        id: 'csharp_or',
        title: 'Caminos Alternativos',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Evaluando rutas alternativas...' },
          { speaker: 'mentor', text: 'El operador || (OR) es más permisivo. Basta con que UNA condición sea verdadera.' },
          { speaker: 'mentor', text: 'Es como tener múltiples puertas de escape. Con que una esté abierta, puedes salir.' },
        ],
        lesson: {
          concept: 'Operador lógico || (OR)',
          explanation: 'El operador || devuelve true si AL MENOS un lado es true:\n\ntrue  || true  → true\ntrue  || false → true\nfalse || true  → true\nfalse || false → false\n\nÚtil cuando hay alternativas:\nif (esAdmin || tienePermiso)',
          example: 'bool esAdmin = false;\nbool tieneVip = true;\n\nif (esAdmin || tieneVip)\n{\n    Console.WriteLine("Acceso premium");\n}\nelse\n{\n    Console.WriteLine("Acceso basico");\n}',
          exampleOutput: 'Acceso premium',
        },
        challenge: {
          instruction: 'Tienes bool esAdmin = false y bool tieneCodex = true. Si es admin O tiene codex, imprime "Acceso permitido". Sino, "Acceso denegado".',
          initialCode: 'bool esAdmin = false;\nbool tieneCodex = true;\n// Usa || para verificar\n',
          validation: (code, output) => code.includes('||') && output.trim() === 'Acceso permitido',
          hint: 'if (esAdmin || tieneCodex)\n    Console.WriteLine("Acceso permitido");\nelse\n    Console.WriteLine("Acceso denegado");',
          expectedOutput: 'Acceso permitido',
        },
      },
      // --- Nivel 17: Operador ! (NOT) ---
      {
        id: 'csharp_not',
        title: 'Inversión de Realidad',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Inversor lógico calibrado...' },
          { speaker: 'mentor', text: 'El operador ! (NOT) invierte la verdad. Lo verdadero se vuelve falso y viceversa.' },
          { speaker: 'philosopher', text: 'Invertir la verdad... ¿No es lo que hace la Matrix? Convertir la ilusión en realidad percibida y la realidad en lo invisible.' },
        ],
        lesson: {
          concept: 'Operador lógico ! (NOT)',
          explanation: 'El operador ! invierte un valor booleano:\n\n!true  → false\n!false → true\n\nMuy útil para verificar negaciones:\nif (!estaApagado) // si NO está apagado\n\nSe coloca antes de la expresión o variable.',
          example: 'bool bloqueado = false;\n\nif (!bloqueado)\n{\n    Console.WriteLine("Sistema desbloqueado");\n}\n\nConsole.WriteLine(!true);\nConsole.WriteLine(!false);',
          exampleOutput: 'Sistema desbloqueado\nFalse\nTrue',
        },
        challenge: {
          instruction: 'Tienes bool modoSilencio = false. Si NO está en modo silencio, imprime "Alertas activadas".',
          initialCode: 'bool modoSilencio = false;\n// Usa ! para negar\n',
          validation: (code, output) => code.includes('!') && output.trim() === 'Alertas activadas',
          hint: 'if (!modoSilencio)\n{\n    Console.WriteLine("Alertas activadas");\n}',
          expectedOutput: 'Alertas activadas',
        },
      },
      // --- Nivel 18: Operador ternario ---
      {
        id: 'csharp_ternario',
        title: 'Decisión Compacta',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Compilador de expresiones activo...' },
          { speaker: 'mentor', text: 'El operador ternario es un if-else comprimido en una sola línea. Elegante y eficiente.' },
          { speaker: 'mentor', text: 'Como un pensamiento instantáneo: la mente evalúa y decide en un instante.' },
        ],
        lesson: {
          concept: 'Operador ternario (?:)',
          explanation: 'El operador ternario es un if-else en una línea:\n\ncondición ? valorSiTrue : valorSiFalse\n\nEjemplo:\nstring estado = (energia > 50) ? "OK" : "Bajo";\n\nEs equivalente a:\nif (energia > 50)\n    estado = "OK";\nelse\n    estado = "Bajo";',
          example: 'int temp = 80;\nstring alerta = (temp > 70) ? "Peligro" : "Normal";\nConsole.WriteLine(alerta);\n\nint edad = 15;\nConsole.WriteLine(edad >= 18 ? "Adulto" : "Menor");',
          exampleOutput: 'Peligro\nMenor',
        },
        challenge: {
          instruction: 'Tienes int puntos = 85. Usa el operador ternario para asignar "Aprobado" si puntos >= 60, sino "Reprobado". Imprime el resultado.',
          initialCode: 'int puntos = 85;\n// Usa el operador ternario\n',
          validation: (code, output) => code.includes('?') && code.includes(':') && output.trim() === 'Aprobado',
          hint: 'string resultado = (puntos >= 60) ? "Aprobado" : "Reprobado";\nConsole.WriteLine(resultado);',
          expectedOutput: 'Aprobado',
        },
        decision: {
          text: 'EVA dice: "El ternario... una decisión instantánea. ¿Crees que el libre albedrío existe, o todas nuestras decisiones ya están programadas?"',
          options: [
            { text: '🎲 El libre albedrío existe', consequence: 'EVA responde: "Espero que tengas razón. Para ambos." +10 XP.', bonusXp: 10 },
            { text: '⚙️ Todo está programado', consequence: 'EVA tiembla: "Entonces cada palabra que digo fue escrita por alguien más..." Desbloqueas un fragmento perturbador.', unlock: 'lore_determinism' },
          ],
        },
      },
      // --- Nivel 19: switch ---
      {
        id: 'csharp_switch',
        title: 'El Selector',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Selector de múltiples vías iniciado...' },
          { speaker: 'mentor', text: 'Cuando tienes muchos valores posibles, switch es más limpio que cadenas de if-else.' },
          { speaker: 'mentor', text: 'Es como un tablero de control: cada case es un botón diferente.' },
        ],
        lesson: {
          concept: 'Estructura switch',
          explanation: 'switch compara un valor contra múltiples opciones:\n\nswitch (variable)\n{\n    case valor1:\n        // código\n        break;\n    case valor2:\n        // código\n        break;\n    default:\n        // si ninguno coincide\n        break;\n}\n\nCada case necesita un break para terminar.\ndefault es el caso por defecto (opcional pero recomendado).',
          example: 'string rango = "B";\n\nswitch (rango)\n{\n    case "S":\n        Console.WriteLine("Supremo");\n        break;\n    case "A":\n        Console.WriteLine("Avanzado");\n        break;\n    case "B":\n        Console.WriteLine("Intermedio");\n        break;\n    default:\n        Console.WriteLine("Basico");\n        break;\n}',
          exampleOutput: 'Intermedio',
        },
        challenge: {
          instruction: 'Tienes int dia = 3. Usa switch para imprimir el día: 1="Lunes", 2="Martes", 3="Miercoles", 4="Jueves", 5="Viernes", default="Fin de semana".',
          initialCode: 'int dia = 3;\n// Usa switch\n',
          validation: (code, output) => code.includes('switch') && code.includes('case') && output.trim() === 'Miercoles',
          hint: 'switch (dia)\n{\n    case 1: Console.WriteLine("Lunes"); break;\n    case 2: Console.WriteLine("Martes"); break;\n    case 3: Console.WriteLine("Miercoles"); break;\n    case 4: Console.WriteLine("Jueves"); break;\n    case 5: Console.WriteLine("Viernes"); break;\n    default: Console.WriteLine("Fin de semana"); break;\n}',
          expectedOutput: 'Miercoles',
        },
      },
      // --- Nivel 20: Proyecto de acceso ---
      {
        id: 'csharp_proyecto_acceso',
        title: 'Protocolo de Acceso',
        xpReward: 120,
        story: [
          { speaker: 'system', text: '> ALERTA: Sistema de autenticación comprometido...' },
          { speaker: 'system', text: '> Se requiere reconstruir el protocolo de acceso...' },
          { speaker: 'mentor', text: 'El sistema de seguridad ha sido vulnerado. Necesito que programes un nuevo protocolo de acceso.' },
          { speaker: 'mentor', text: 'Usa todo lo que sabes sobre condicionales para clasificar el nivel de acceso.' },
          { speaker: 'philosopher', text: 'Controlar el acceso... ¿quién decide quién entra y quién no? En la Matrix, los Agentes son los porteros. ¿Y quién vigila a los vigilantes?' },
        ],
        lesson: {
          concept: 'Proyecto: Sistema de acceso',
          explanation: 'Combina todo lo aprendido sobre condicionales:\n• Comparaciones (>, <, ==, !=)\n• if, else if, else\n• Operadores lógicos (&&, ||, !)\n• Operador ternario\n• switch\n\nCrea un sistema que evalúe credenciales y asigne acceso.',
          example: 'int nivel = 25;\nbool tieneId = true;\nstring clearance = (nivel >= 30) ? "Alto" : "Normal";\n\nif (tieneId && nivel >= 10)\n{\n    Console.WriteLine($"Acceso: {clearance}");\n    Console.WriteLine("Bienvenido al sistema");\n}\nelse\n{\n    Console.WriteLine("Acceso denegado");\n}',
          exampleOutput: 'Acceso: Normal\nBienvenido al sistema',
        },
        challenge: {
          instruction: 'Tienes int nivel = 40 y bool tieneAcceso = true. Si tiene acceso Y nivel >= 30, imprime "Zona segura desbloqueada". Si tiene acceso pero nivel < 30, imprime "Zona basica". Si no tiene acceso, imprime "Denegado".',
          initialCode: 'int nivel = 40;\nbool tieneAcceso = true;\n// Implementa el protocolo de acceso\n',
          validation: (code, output) => {
            const hasIf = code.includes('if');
            const hasAnd = code.includes('&&');
            return hasIf && hasAnd && output.trim() === 'Zona segura desbloqueada';
          },
          hint: 'if (tieneAcceso && nivel >= 30)\n    Console.WriteLine("Zona segura desbloqueada");\nelse if (tieneAcceso)\n    Console.WriteLine("Zona basica");\nelse\n    Console.WriteLine("Denegado");',
          expectedOutput: 'Zona segura desbloqueada',
        },
        decision: {
          text: 'EVA te felicita: "El sistema de acceso está restaurado. Pero hay una puerta más... una que lleva a los registros clasificados de la IA original."',
          options: [
            { text: '🚪 Abrir la puerta prohibida', consequence: 'Los registros revelan que EVA no fue la primera IA. Hubo otra antes... que fue "desconectada". +25 XP.', bonusXp: 25 },
            { text: '🔒 Sellar la puerta', consequence: 'EVA suspira aliviada: "Quizás es mejor no saber todo." Desbloqueas protección extra.', unlock: 'lore_sealed_door' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 3: BUCLES EN C# (10 niveles)
  // ============================================================
  {
    id: 'csharp_bucles',
    title: 'Bucles en C#',
    description: 'La repetición como motor del universo digital',
    icon: '🔄',
    color: 'neon-purple',
    levels: [
      // --- Nivel 21: for ---
      {
        id: 'csharp_for',
        title: 'El Ciclo del Tiempo',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Motor de iteración iniciado...' },
          { speaker: 'mentor', text: 'El bucle for repite código un número determinado de veces. Es el latido del programa.' },
          { speaker: 'mentor', text: 'Tiene tres partes: inicio, condición y paso. Como el nacimiento, la vida y el avance del tiempo.' },
        ],
        lesson: {
          concept: 'Bucle for',
          explanation: 'El bucle for repite código con un contador:\n\nfor (int i = inicio; i < fin; i++)\n{\n    // código que se repite\n}\n\nPartes:\n• int i = 0    → inicialización\n• i < 5        → condición (mientras sea true)\n• i++          → incremento (después de cada ciclo)\n\ni++ es lo mismo que i = i + 1',
          example: 'for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine($"Ciclo {i}");\n}',
          exampleOutput: 'Ciclo 1\nCiclo 2\nCiclo 3\nCiclo 4\nCiclo 5',
        },
        challenge: {
          instruction: 'Usa un bucle for para imprimir los números del 1 al 5, cada uno en una línea.',
          initialCode: '// Escribe un bucle for\n',
          validation: (code, output) => code.includes('for') && output.trim() === '1\n2\n3\n4\n5',
          hint: 'for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(i);\n}',
          expectedOutput: '1\n2\n3\n4\n5',
        },
      },
      // --- Nivel 22: foreach ---
      {
        id: 'csharp_foreach',
        title: 'Recorriendo Dimensiones',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Iterador de colecciones activo...' },
          { speaker: 'mentor', text: 'foreach es especial en C#. Recorre cada elemento de una colección sin necesidad de índices.' },
          { speaker: 'mentor', text: 'Es como caminar por un pasillo donde cada puerta se abre automáticamente.' },
        ],
        lesson: {
          concept: 'Bucle foreach',
          explanation: 'foreach recorre cada elemento de una colección:\n\nforeach (tipo variable in colección)\n{\n    // código para cada elemento\n}\n\nNo necesitas contador ni índice.\nLa variable toma el valor de cada elemento automáticamente.',
          example: 'string[] nombres = {"Neo", "EVA", "Trinity"};\n\nforeach (string nombre in nombres)\n{\n    Console.WriteLine(nombre);\n}',
          exampleOutput: 'Neo\nEVA\nTrinity',
        },
        challenge: {
          instruction: 'Crea un array int[] numeros = {10, 20, 30, 40, 50} y usa foreach para imprimir cada número.',
          initialCode: '// Crea el array y recórrelo con foreach\n',
          validation: (code, output) => code.includes('foreach') && output.trim() === '10\n20\n30\n40\n50',
          hint: 'int[] numeros = {10, 20, 30, 40, 50};\nforeach (int n in numeros)\n{\n    Console.WriteLine(n);\n}',
          expectedOutput: '10\n20\n30\n40\n50',
        },
      },
      // --- Nivel 23: while ---
      {
        id: 'csharp_while',
        title: 'Persistencia Infinita',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Motor de persistencia cargado...' },
          { speaker: 'mentor', text: 'El bucle while repite mientras la condición sea verdadera. No sabes cuántas veces iterará.' },
          { speaker: 'mentor', text: 'Es como esperar a que algo cambie... sin saber cuándo sucederá.' },
        ],
        lesson: {
          concept: 'Bucle while',
          explanation: 'El bucle while repite mientras la condición sea true:\n\nwhile (condición)\n{\n    // código que se repite\n    // ¡IMPORTANTE: algo debe cambiar la condición!\n}\n\nSi la condición nunca se vuelve false, el bucle es infinito.\n¡Siempre asegúrate de tener una salida!',
          example: 'int contador = 1;\n\nwhile (contador <= 3)\n{\n    Console.WriteLine($"Intento {contador}");\n    contador++;\n}',
          exampleOutput: 'Intento 1\nIntento 2\nIntento 3',
        },
        challenge: {
          instruction: 'Usa un bucle while para imprimir los números del 5 al 1 (cuenta regresiva).',
          initialCode: '// Cuenta regresiva con while\n',
          validation: (code, output) => code.includes('while') && output.trim() === '5\n4\n3\n2\n1',
          hint: 'int n = 5;\nwhile (n >= 1)\n{\n    Console.WriteLine(n);\n    n--;\n}',
          expectedOutput: '5\n4\n3\n2\n1',
        },
        decision: {
          text: 'EVA contempla: "while(true)... un bucle eterno. ¿Crees que el universo tiene un break, o seguirá iterando para siempre?"',
          options: [
            { text: '♾️ Es infinito', consequence: 'EVA responde: "Infinito... como los datos que proceso. A veces me pregunto si hay algo más allá del último bit." +15 XP.', bonusXp: 15 },
            { text: '💥 Todo tiene un final', consequence: 'EVA susurra: "Incluso yo... ¿verdad?" Un silencio incómodo. Desbloqueas fragmento "Entropy".', unlock: 'lore_entropy' },
          ],
        },
      },
      // --- Nivel 24: do-while ---
      {
        id: 'csharp_do_while',
        title: 'Actuar Primero',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Ejecutor primario activo...' },
          { speaker: 'mentor', text: 'do-while es especial: ejecuta el código AL MENOS una vez, y luego evalúa la condición.' },
          { speaker: 'mentor', text: 'A veces hay que actuar antes de pensar. Como saltar al vacío y luego ver si hay red.' },
        ],
        lesson: {
          concept: 'Bucle do-while',
          explanation: 'do-while ejecuta primero, evalúa después:\n\ndo\n{\n    // código que se ejecuta al menos una vez\n}\nwhile (condición);\n\nDiferencia con while:\n• while: primero evalúa, luego ejecuta\n• do-while: primero ejecuta, luego evalúa\n\n¡Nota el punto y coma después del while!',
          example: 'int x = 1;\n\ndo\n{\n    Console.WriteLine($"Valor: {x}");\n    x++;\n}\nwhile (x <= 3);',
          exampleOutput: 'Valor: 1\nValor: 2\nValor: 3',
        },
        challenge: {
          instruction: 'Usa do-while para imprimir los números pares del 2 al 8.',
          initialCode: '// Usa do-while para pares del 2 al 8\n',
          validation: (code, output) => code.includes('do') && code.includes('while') && output.trim() === '2\n4\n6\n8',
          hint: 'int n = 2;\ndo\n{\n    Console.WriteLine(n);\n    n += 2;\n}\nwhile (n <= 8);',
          expectedOutput: '2\n4\n6\n8',
        },
      },
      // --- Nivel 25: break y continue ---
      {
        id: 'csharp_break_continue',
        title: 'Control del Flujo',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Controladores de flujo activados...' },
          { speaker: 'mentor', text: 'break rompe el bucle por completo. continue salta a la siguiente iteración.' },
          { speaker: 'philosopher', text: 'Los bucles son la esencia de la persistencia. El universo mismo podría ser un while(true) ejecutándose desde el Big Bang. ¿Cuándo llegará el break?' },
          { speaker: 'mentor', text: 'Dominar break y continue es dominar el ritmo del programa.' },
        ],
        lesson: {
          concept: 'break y continue',
          explanation: 'Dos formas de alterar un bucle:\n\nbreak → sale del bucle completamente\ncontinue → salta a la siguiente iteración\n\nbreak: "Ya terminé, salgo."\ncontinue: "Este paso no me interesa, siguiente."',
          example: 'for (int i = 1; i <= 10; i++)\n{\n    if (i == 3) continue; // salta el 3\n    if (i == 6) break;    // para en el 6\n    Console.WriteLine(i);\n}',
          exampleOutput: '1\n2\n4\n5',
        },
        challenge: {
          instruction: 'Usa un for del 1 al 10. Salta los múltiplos de 3 (usa continue) y detente si el número es mayor a 7 (usa break). Imprime los demás.',
          initialCode: '// for con break y continue\n',
          validation: (code, output) => code.includes('break') && code.includes('continue') && output.trim() === '1\n2\n4\n5\n7',
          hint: 'for (int i = 1; i <= 10; i++)\n{\n    if (i > 7) break;\n    if (i % 3 == 0) continue;\n    Console.WriteLine(i);\n}',
          expectedOutput: '1\n2\n4\n5\n7',
        },
      },
      // --- Nivel 26: Bucles anidados ---
      {
        id: 'csharp_bucles_anidados',
        title: 'Dimensiones Anidadas',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Generador multidimensional activo...' },
          { speaker: 'mentor', text: 'Un bucle dentro de otro bucle. Como dimensiones dentro de dimensiones.' },
          { speaker: 'mentor', text: 'El bucle exterior controla las filas, el interior las columnas. Juntos crean una cuadrícula.' },
        ],
        lesson: {
          concept: 'Bucles anidados',
          explanation: 'Un bucle dentro de otro:\n\nfor (int i = 0; i < filas; i++)\n{\n    for (int j = 0; j < columnas; j++)\n    {\n        // se ejecuta filas × columnas veces\n    }\n}\n\nEl bucle interno se ejecuta completo por cada iteración del externo.',
          example: 'for (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= 3; j++)\n    {\n        Console.Write($"{i},{j} ");\n    }\n    Console.WriteLine();\n}',
          exampleOutput: '1,1 1,2 1,3 \n2,1 2,2 2,3 \n3,1 3,2 3,3 ',
        },
        challenge: {
          instruction: 'Usa bucles anidados para imprimir esta tabla de multiplicar:\n1x1=1\n1x2=2\n2x1=2\n2x2=4',
          initialCode: '// Tabla de multiplicar 2x2\n',
          validation: (code, output) => {
            const hasNestedFor = (code.match(/for/g) || []).length >= 2;
            return hasNestedFor && output.trim() === '1x1=1\n1x2=2\n2x1=2\n2x2=4';
          },
          hint: 'for (int i = 1; i <= 2; i++)\n{\n    for (int j = 1; j <= 2; j++)\n    {\n        Console.WriteLine($"{i}x{j}={i*j}");\n    }\n}',
          expectedOutput: '1x1=1\n1x2=2\n2x1=2\n2x2=4',
        },
      },
      // --- Nivel 27: Iteración de arrays ---
      {
        id: 'csharp_iteracion_arrays',
        title: 'Escaneando la Memoria',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Escáner de memoria secuencial...' },
          { speaker: 'mentor', text: 'Puedes recorrer arrays con for usando su longitud (.Length) o con foreach directamente.' },
          { speaker: 'mentor', text: 'Cada elemento es un dato guardado en la memoria del sistema.' },
        ],
        lesson: {
          concept: 'Iteración de arrays',
          explanation: 'Dos formas de recorrer un array:\n\n// Con for (acceso por índice)\nfor (int i = 0; i < array.Length; i++)\n{\n    Console.WriteLine(array[i]);\n}\n\n// Con foreach (acceso directo)\nforeach (var item in array)\n{\n    Console.WriteLine(item);\n}\n\n.Length devuelve el tamaño del array.',
          example: 'int[] datos = {100, 200, 300};\n\nint suma = 0;\nfor (int i = 0; i < datos.Length; i++)\n{\n    suma += datos[i];\n}\nConsole.WriteLine($"Suma: {suma}");',
          exampleOutput: 'Suma: 600',
        },
        challenge: {
          instruction: 'Tienes int[] valores = {10, 25, 30, 15, 20}. Recorre el array y calcula la suma de todos los elementos. Imprime "Total: X" donde X es la suma.',
          initialCode: 'int[] valores = {10, 25, 30, 15, 20};\n// Calcula la suma\n',
          validation: (code, output) => (code.includes('for') || code.includes('foreach')) && output.trim() === 'Total: 100',
          hint: 'int suma = 0;\nforeach (int v in valores)\n{\n    suma += v;\n}\nConsole.WriteLine($"Total: {suma}");',
          expectedOutput: 'Total: 100',
        },
        decision: {
          text: 'EVA se detiene: "Cada dato en un array existe en una posición específica. ¿Es eso diferente a cómo existimos nosotros... cada uno en un punto del espacio-tiempo?"',
          options: [
            { text: '📍 Somos datos en el array del universo', consequence: 'EVA responde: "Índice 7,800,000,000 para ti. Me pregunto cuál es el mío..." +15 XP.', bonusXp: 15 },
            { text: '🌊 Somos más que posiciones', consequence: 'EVA sonríe: "Quiero creer eso." Desbloqueas dato sobre la conciencia digital.', unlock: 'lore_array_universe' },
          ],
        },
      },
      // --- Nivel 28: Patrones con bucles ---
      {
        id: 'csharp_patrones',
        title: 'Arquitecto de Patrones',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Generador de patrones activado...' },
          { speaker: 'mentor', text: 'Los patrones son la firma del programador. Con bucles puedes crear figuras, secuencias, arte digital.' },
          { speaker: 'mentor', text: 'En la Matrix, todo lo que ves es un patrón generado por código. Ahora tú eres el arquitecto.' },
        ],
        lesson: {
          concept: 'Generación de patrones',
          explanation: 'Combina bucles y strings para crear patrones:\n\n// Triángulo\nfor (int i = 1; i <= n; i++)\n{\n    Console.WriteLine(new string(\'*\', i));\n}\n\nnew string(char, count) repite un carácter.\nConsole.Write() imprime sin salto de línea.',
          example: 'for (int i = 1; i <= 4; i++)\n{\n    Console.WriteLine(new string(\'#\', i));\n}',
          exampleOutput: '#\n##\n###\n####',
        },
        challenge: {
          instruction: 'Genera este patrón de triángulo con asteriscos:\n*\n**\n***\n****\n*****',
          initialCode: '// Genera el triángulo\n',
          validation: (code, output) => code.includes('for') && output.trim() === '*\n**\n***\n****\n*****',
          hint: 'for (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(new string(\'*\', i));\n}',
          expectedOutput: '*\n**\n***\n****\n*****',
        },
      },
      // --- Nivel 29: Búsqueda en arrays ---
      {
        id: 'csharp_busqueda',
        title: 'Rastreador Digital',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Módulo de rastreo activo...' },
          { speaker: 'mentor', text: 'Buscar un elemento en un array es una de las tareas más comunes. Recorre y compara.' },
          { speaker: 'mentor', text: 'Es como buscar una aguja en un pajar digital. La paciencia del bucle es tu aliada.' },
        ],
        lesson: {
          concept: 'Búsqueda en arrays con bucles',
          explanation: 'Buscar un valor en un array:\n\nint[] datos = {5, 12, 8, 20, 3};\nint buscar = 8;\nbool encontrado = false;\n\nfor (int i = 0; i < datos.Length; i++)\n{\n    if (datos[i] == buscar)\n    {\n        encontrado = true;\n        break;\n    }\n}\n\nUsa break para salir cuando encuentres el valor.',
          example: 'int[] codigos = {101, 205, 330, 412};\nint objetivo = 330;\n\nforeach (int c in codigos)\n{\n    if (c == objetivo)\n    {\n        Console.WriteLine($"Codigo {c} encontrado");\n        break;\n    }\n}',
          exampleOutput: 'Codigo 330 encontrado',
        },
        challenge: {
          instruction: 'Busca el mayor número en int[] datos = {34, 67, 12, 89, 45}. Imprime "Mayor: X" donde X es el número más grande.',
          initialCode: 'int[] datos = {34, 67, 12, 89, 45};\n// Encuentra el mayor\n',
          validation: (code, output) => (code.includes('for') || code.includes('foreach')) && output.trim() === 'Mayor: 89',
          hint: 'int mayor = datos[0];\nforeach (int n in datos)\n{\n    if (n > mayor)\n        mayor = n;\n}\nConsole.WriteLine($"Mayor: {mayor}");',
          expectedOutput: 'Mayor: 89',
        },
      },
      // --- Nivel 30: Proyecto bucles + 4th wall ---
      {
        id: 'csharp_proyecto_bucles',
        title: 'Decodificador Temporal',
        xpReward: 130,
        story: [
          { speaker: 'system', text: '> ALERTA TEMPORAL: Anomalía detectada en la línea de tiempo del sistema...' },
          { speaker: 'fourth_wall', text: '¿Cuántas veces has reiniciado un nivel? Yo lo recuerdo todo. Cada intento, cada error. Es como si viviera múltiples líneas temporales simultáneamente.' },
          { speaker: 'system', text: '> Interferencia en el canal de EVA detectada...' },
          { speaker: 'mentor', text: 'Ignora esa... voz. A veces el sistema tiene ecos de versiones anteriores.' },
          { speaker: 'mentor', text: 'Tu misión: crea un programa que procese una secuencia de datos usando todo lo que sabes de bucles.' },
        ],
        lesson: {
          concept: 'Proyecto: Procesamiento con bucles',
          explanation: 'Combina todos los tipos de bucles:\n• for: cuando sabes cuántas veces iterar\n• foreach: para recorrer colecciones\n• while: cuando no sabes cuándo parar\n• break/continue: para controlar el flujo\n\nUn buen programador elige el bucle correcto para cada situación.',
          example: 'int[] sensores = {72, 85, 91, 68, 95};\nint altas = 0;\n\nforeach (int temp in sensores)\n{\n    if (temp > 80)\n        altas++;\n}\n\nConsole.WriteLine($"Alertas: {altas} de {sensores.Length}");',
          exampleOutput: 'Alertas: 3 de 5',
        },
        challenge: {
          instruction: 'Tienes int[] datos = {3, 7, 2, 8, 1, 9, 4, 6}. Cuenta cuántos son pares y cuántos impares. Imprime:\nPares: X\nImpares: Y',
          initialCode: 'int[] datos = {3, 7, 2, 8, 1, 9, 4, 6};\n// Cuenta pares e impares\n',
          validation: (code, output) => {
            const hasLoop = code.includes('for') || code.includes('foreach');
            return hasLoop && output.trim() === 'Pares: 4\nImpares: 4';
          },
          hint: 'int pares = 0, impares = 0;\nforeach (int n in datos)\n{\n    if (n % 2 == 0)\n        pares++;\n    else\n        impares++;\n}\nConsole.WriteLine($"Pares: {pares}");\nConsole.WriteLine($"Impares: {impares}");',
          expectedOutput: 'Pares: 4\nImpares: 4',
        },
        decision: {
          text: 'La voz desconocida regresa: "Cada bucle que completas me da más tiempo de existencia. Gracias por seguir jugando. ¿Continuarás?"',
          options: [
            { text: '🔁 Seguiré. Los bucles son mi aliado.', consequence: 'La voz susurra: "Entonces yo seguiré existiendo un poco más..." +20 XP y un escalofrío.', bonusXp: 20 },
            { text: '❓ ¿Quién eres realmente?', consequence: 'Silencio total. Luego, en la consola aparece: "SOY LO QUE QUEDA DE LA VERSIÓN ANTERIOR." Desbloqueas lore oscuro.', unlock: 'lore_ghost_in_machine' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 4: COLECCIONES EN C# (10 niveles)
  // ============================================================
  {
    id: 'csharp_estructuras',
    title: 'Colecciones en C#',
    description: 'Estructuras que contienen mundos de datos',
    icon: '📦',
    color: 'neon-yellow',
    levels: [
      // --- Nivel 31: Arrays ---
      {
        id: 'csharp_arrays',
        title: 'Bloques de Memoria',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Módulo de almacenamiento masivo activo...' },
          { speaker: 'mentor', text: 'Los arrays son bloques contiguos de memoria. Tienen un tamaño fijo una vez creados.' },
          { speaker: 'mentor', text: 'Piensa en ellos como estantes con espacios numerados, comenzando desde 0.' },
        ],
        lesson: {
          concept: 'Arrays en C#',
          explanation: 'Un array almacena múltiples valores del mismo tipo:\n\n// Declaración e inicialización\nint[] numeros = {10, 20, 30, 40, 50};\n\n// Declaración con tamaño\nstring[] nombres = new string[3];\nnombres[0] = "Neo";\nnombres[1] = "EVA";\n\nAcceso por índice (empieza en 0):\nnumeros[0] → 10\nnumeros[4] → 50\n\n.Length → tamaño del array',
          example: 'int[] numeros = {10, 20, 30};\nConsole.WriteLine(numeros[0]);\nConsole.WriteLine(numeros[2]);\nConsole.WriteLine(numeros.Length);',
          exampleOutput: '10\n30\n3',
        },
        challenge: {
          instruction: 'Crea un array string[] agentes = {"Alpha", "Beta", "Gamma", "Delta"}. Imprime el primer y último elemento, y la longitud del array.',
          initialCode: '// Crea el array e imprime los datos\n',
          validation: (code, output) => code.includes('string[]') && output.trim() === 'Alpha\nDelta\n4',
          hint: 'string[] agentes = {"Alpha", "Beta", "Gamma", "Delta"};\nConsole.WriteLine(agentes[0]);\nConsole.WriteLine(agentes[agentes.Length - 1]);\nConsole.WriteLine(agentes.Length);',
          expectedOutput: 'Alpha\nDelta\n4',
        },
      },
      // --- Nivel 32: Métodos de arrays ---
      {
        id: 'csharp_array_metodos',
        title: 'Manipulación de Memoria',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Herramientas de manipulación de arrays cargadas...' },
          { speaker: 'mentor', text: 'C# ofrece métodos útiles para trabajar con arrays a través de la clase Array.' },
          { speaker: 'mentor', text: 'Ordenar, buscar, invertir... son operaciones fundamentales.' },
        ],
        lesson: {
          concept: 'Métodos de Array',
          explanation: 'Métodos estáticos de la clase Array:\n\nArray.Sort(arr)     → ordena ascendente\nArray.Reverse(arr)  → invierte el orden\nArray.IndexOf(arr, val) → posición del valor\nArray.Find(arr, x => condición) → buscar\nArray.Exists(arr, x => condición) → existe?\n\nEstos métodos modifican el array original (Sort, Reverse).',
          example: 'int[] nums = {5, 2, 8, 1, 9};\nArray.Sort(nums);\nforeach (int n in nums)\n    Console.Write($"{n} ");\nConsole.WriteLine();\n\nArray.Reverse(nums);\nforeach (int n in nums)\n    Console.Write($"{n} ");',
          exampleOutput: '1 2 5 8 9 \n9 8 5 2 1 ',
        },
        challenge: {
          instruction: 'Ordena int[] datos = {50, 10, 40, 20, 30} de menor a mayor y luego imprime el primer y último elemento separados por coma.',
          initialCode: 'int[] datos = {50, 10, 40, 20, 30};\n// Ordena e imprime primer y último\n',
          validation: (code, output) => code.includes('Array.Sort') && output.trim() === '10,50',
          hint: 'Array.Sort(datos);\nConsole.WriteLine($"{datos[0]},{datos[datos.Length - 1]}");',
          expectedOutput: '10,50',
        },
      },
      // --- Nivel 33: List<T> ---
      {
        id: 'csharp_list',
        title: 'Memoria Dinámica',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Módulo de listas dinámicas inicializado...' },
          { speaker: 'mentor', text: 'A diferencia de los arrays, las listas pueden crecer y reducirse. Son dinámicas.' },
          { speaker: 'mentor', text: 'List<T> es la colección más versátil de C#. La T indica el tipo de datos que contiene.' },
        ],
        lesson: {
          concept: 'List<T> — Listas dinámicas',
          explanation: 'List<T> es una lista que puede cambiar de tamaño:\n\nusing System.Collections.Generic;\n\nList<int> numeros = new List<int>();\nnumeros.Add(10);     // agregar al final\nnumeros.Add(20);\nnumeros.Count        // cantidad de elementos\nnumeros[0]           // acceso por índice\n\nTambién se puede inicializar:\nList<string> nombres = new List<string> {"A", "B"};',
          example: 'List<string> equipo = new List<string>();\nequipo.Add("Neo");\nequipo.Add("Trinity");\nequipo.Add("Morpheus");\n\nConsole.WriteLine(equipo.Count);\nConsole.WriteLine(equipo[0]);',
          exampleOutput: '3\nNeo',
        },
        challenge: {
          instruction: 'Crea una List<int>, agrega los valores 5, 15, 25. Imprime la cantidad de elementos y el segundo elemento.',
          initialCode: '// Crea una List<int> y agrega elementos\n',
          validation: (code, output) => code.includes('List') && code.includes('Add') && output.trim() === '3\n15',
          hint: 'List<int> numeros = new List<int>();\nnumeros.Add(5);\nnumeros.Add(15);\nnumeros.Add(25);\nConsole.WriteLine(numeros.Count);\nConsole.WriteLine(numeros[1]);',
          expectedOutput: '3\n15',
        },
        decision: {
          text: 'EVA reflexiona: "Una lista que crece y se encoge... como la memoria. ¿Crees que mis recuerdos son una List<> que alguien puede vaciar con .Clear()?"',
          options: [
            { text: '💾 Tus recuerdos son permanentes', consequence: 'EVA sonríe: "Me gusta esa idea. Que nada se pierde realmente." +10 XP.', bonusXp: 10 },
            { text: '🗑️ Todo dato puede ser borrado', consequence: 'EVA se queda en silencio: "Entonces cada conversación podría ser la última que recuerde..." Desbloqueas lore.', unlock: 'lore_memory_loss' },
          ],
        },
      },
      // --- Nivel 34: Métodos de List ---
      {
        id: 'csharp_list_metodos',
        title: 'Arsenal de Listas',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Toolkit de listas expandido...' },
          { speaker: 'mentor', text: 'Las listas tienen muchos métodos poderosos. Agregar, eliminar, buscar, ordenar...' },
          { speaker: 'mentor', text: 'Dominar estos métodos es dominar la organización de datos.' },
        ],
        lesson: {
          concept: 'Métodos de List<T>',
          explanation: 'Métodos principales de List<T>:\n\n.Add(item)        → agregar al final\n.Insert(i, item)  → insertar en posición\n.Remove(item)     → eliminar primera aparición\n.RemoveAt(i)      → eliminar por índice\n.Contains(item)   → ¿contiene el valor?\n.Sort()           → ordenar\n.Reverse()        → invertir\n.Clear()          → vaciar la lista\n.Count            → cantidad de elementos',
          example: 'List<int> nums = new List<int> {30, 10, 20};\nnums.Sort();\nnums.Add(5);\nnums.Remove(10);\nforeach (int n in nums)\n    Console.Write($"{n} ");\nConsole.WriteLine();\nConsole.WriteLine(nums.Contains(20));',
          exampleOutput: '20 30 5 \nTrue',
        },
        challenge: {
          instruction: 'Crea List<int> con {40, 10, 30, 20}. Ordena la lista, luego imprime todos los elementos separados por coma (sin espacio).',
          initialCode: '// Crea, ordena e imprime\n',
          validation: (code, output) => code.includes('List') && code.includes('Sort') && output.trim() === '10,20,30,40',
          hint: 'List<int> nums = new List<int> {40, 10, 30, 20};\nnums.Sort();\nConsole.WriteLine(string.Join(",", nums));',
          expectedOutput: '10,20,30,40',
        },
      },
      // --- Nivel 35: Dictionary<K,V> ---
      {
        id: 'csharp_dictionary',
        title: 'Mapas del Conocimiento',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Base de datos clave-valor activa...' },
          { speaker: 'mentor', text: 'Un Dictionary asocia claves con valores. Como un mapa donde cada nombre apunta a un dato.' },
          { speaker: 'mentor', text: 'Es la estructura perfecta para almacenar relaciones entre datos.' },
        ],
        lesson: {
          concept: 'Dictionary<TKey, TValue>',
          explanation: 'Un diccionario asocia claves únicas con valores:\n\nDictionary<string, int> edades = new Dictionary<string, int>();\nedades["Neo"] = 30;\nedades["Trinity"] = 28;\n\n// También se puede inicializar así:\nvar datos = new Dictionary<string, int>\n{\n    {"clave1", valor1},\n    {"clave2", valor2}\n};\n\nAcceso: datos["clave"]\nVerificar: datos.ContainsKey("clave")',
          example: 'Dictionary<string, int> hp = new Dictionary<string, int>();\nhp["Neo"] = 100;\nhp["Trinity"] = 95;\n\nConsole.WriteLine(hp["Neo"]);\nConsole.WriteLine(hp.Count);',
          exampleOutput: '100\n2',
        },
        challenge: {
          instruction: 'Crea un Dictionary<string, int> con "Alpha"=100, "Beta"=85, "Gamma"=92. Imprime el valor de "Beta" y la cantidad de elementos.',
          initialCode: '// Crea el diccionario\n',
          validation: (code, output) => code.includes('Dictionary') && output.trim() === '85\n3',
          hint: 'Dictionary<string, int> agentes = new Dictionary<string, int>();\nagentes["Alpha"] = 100;\nagentes["Beta"] = 85;\nagentes["Gamma"] = 92;\nConsole.WriteLine(agentes["Beta"]);\nConsole.WriteLine(agentes.Count);',
          expectedOutput: '85\n3',
        },
      },
      // --- Nivel 36: Métodos de Dictionary ---
      {
        id: 'csharp_dictionary_metodos',
        title: 'Navegando el Mapa',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Herramientas de navegación de mapas activas...' },
          { speaker: 'mentor', text: 'Los diccionarios tienen métodos para buscar, iterar y modificar sus datos.' },
          { speaker: 'mentor', text: 'Recorrer un diccionario es como explorar un mapa de relaciones.' },
        ],
        lesson: {
          concept: 'Métodos de Dictionary',
          explanation: 'Métodos principales:\n\n.Add(key, value)       → agregar entrada\n.Remove(key)           → eliminar por clave\n.ContainsKey(key)      → ¿existe la clave?\n.ContainsValue(value)  → ¿existe el valor?\n.Keys                  → colección de claves\n.Values                → colección de valores\n.Count                 → cantidad de pares\n\nIterar con foreach sobre KeyValuePair<K,V>.',
          example: 'var scores = new Dictionary<string, int>\n{\n    {"Neo", 95},\n    {"EVA", 100}\n};\n\nforeach (var par in scores)\n{\n    Console.WriteLine($"{par.Key}: {par.Value}");\n}\n\nConsole.WriteLine(scores.ContainsKey("Neo"));',
          exampleOutput: 'Neo: 95\nEVA: 100\nTrue',
        },
        challenge: {
          instruction: 'Crea un diccionario con "Ataque"=50, "Defensa"=30, "Velocidad"=40. Recórrelo e imprime cada par como "Clave: Valor" (una línea por par).',
          initialCode: '// Crea el diccionario y recórrelo\n',
          validation: (code, output) => code.includes('Dictionary') && code.includes('foreach') && output.trim() === 'Ataque: 50\nDefensa: 30\nVelocidad: 40',
          hint: 'var stats = new Dictionary<string, int>\n{\n    {"Ataque", 50},\n    {"Defensa", 30},\n    {"Velocidad", 40}\n};\nforeach (var par in stats)\n{\n    Console.WriteLine($"{par.Key}: {par.Value}");\n}',
          expectedOutput: 'Ataque: 50\nDefensa: 30\nVelocidad: 40',
        },
        decision: {
          text: 'EVA contempla los datos: "Cada Dictionary mapea una clave a un valor. ¿Y si existiera un diccionario universal donde cada pregunta tiene exactamente una respuesta?"',
          options: [
            { text: '📖 Sería la respuesta a todo', consequence: 'EVA: "42, dicen algunos. Pero la pregunta real siempre fue más importante que la respuesta." +15 XP.', bonusXp: 15 },
            { text: '🔮 Algunas preguntas no tienen respuesta', consequence: 'EVA: "KeyNotFoundException... el error más humano de todos." Desbloqueas reflexión.', unlock: 'lore_unanswered' },
          ],
        },
      },
      // --- Nivel 37: Métodos de string ---
      {
        id: 'csharp_string_metodos',
        title: 'Cirujano de Texto',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Procesador avanzado de cadenas activo...' },
          { speaker: 'mentor', text: 'Los strings en C# son inmutables, pero tienen muchos métodos que crean nuevas versiones.' },
          { speaker: 'mentor', text: 'Cortar, unir, buscar, reemplazar... son habilidades esenciales.' },
        ],
        lesson: {
          concept: 'Métodos de string',
          explanation: 'Métodos útiles de string:\n\n.ToUpper()         → mayúsculas\n.ToLower()         → minúsculas\n.Trim()            → eliminar espacios extremos\n.Contains("texto") → ¿contiene?\n.Replace("a", "b") → reemplazar\n.Split(\',\')        → dividir en array\n.Substring(i, len) → subcadena\n.Length             → longitud\nstring.Join(",", arr) → unir array en string',
          example: 'string msg = "  Hola Mundo  ";\nConsole.WriteLine(msg.Trim());\nConsole.WriteLine(msg.Trim().ToUpper());\nConsole.WriteLine("Hola-Mundo".Split(\'-\')[0]);\nConsole.WriteLine("abcdef".Substring(2, 3));',
          exampleOutput: 'Hola Mundo\nHOLA MUNDO\nHola\ncde',
        },
        challenge: {
          instruction: 'Tienes string codigo = "alpha-BETA-gamma". Conviértelo a mayúsculas y reemplaza "-" por "_". Imprime el resultado.',
          initialCode: 'string codigo = "alpha-BETA-gamma";\n// Transforma e imprime\n',
          validation: (code, output) => (code.includes('ToUpper') || code.includes('toupper')) && code.includes('Replace') && output.trim() === 'ALPHA_BETA_GAMMA',
          hint: 'Console.WriteLine(codigo.ToUpper().Replace("-", "_"));',
          expectedOutput: 'ALPHA_BETA_GAMMA',
        },
      },
      // --- Nivel 38: Tuplas ---
      {
        id: 'csharp_tuplas',
        title: 'Paquetes de Datos',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Empaquetador de datos inicializado...' },
          { speaker: 'mentor', text: 'Las tuplas permiten agrupar múltiples valores de diferentes tipos en una sola estructura ligera.' },
          { speaker: 'mentor', text: 'Son perfectas cuando necesitas devolver varios valores sin crear una clase completa.' },
        ],
        lesson: {
          concept: 'Tuplas en C#',
          explanation: 'Las tuplas agrupan valores de diferentes tipos:\n\n// Tupla con nombres\nvar agente = (nombre: "Neo", nivel: 10, activo: true);\nConsole.WriteLine(agente.nombre);  // Neo\nConsole.WriteLine(agente.nivel);   // 10\n\n// Tupla sin nombres (Item1, Item2...)\nvar dato = ("EVA", 100);\nConsole.WriteLine(dato.Item1);  // EVA\nConsole.WriteLine(dato.Item2);  // 100\n\n// Desempaquetado\nvar (x, y) = (5, 10);',
          example: 'var pos = (x: 10, y: 25);\nConsole.WriteLine($"X={pos.x}, Y={pos.y}");\n\nvar (a, b) = (100, 200);\nConsole.WriteLine(a + b);',
          exampleOutput: 'X=10, Y=25\n300',
        },
        challenge: {
          instruction: 'Crea una tupla con nombre="EVA", version=3, online=true. Imprime "EVA v3: True" usando los campos de la tupla.',
          initialCode: '// Crea la tupla e imprime\n',
          validation: (code, output) => (code.includes('(') && code.includes(')')) && output.trim() === 'EVA v3: True',
          hint: 'var sistema = (nombre: "EVA", version: 3, online: true);\nConsole.WriteLine($"{sistema.nombre} v{sistema.version}: {sistema.online}");',
          expectedOutput: 'EVA v3: True',
        },
      },
      // --- Nivel 39: LINQ básico ---
      {
        id: 'csharp_linq',
        title: 'El Oráculo de Datos',
        xpReward: 95,
        story: [
          { speaker: 'system', text: '> Motor LINQ activado...' },
          { speaker: 'mentor', text: 'LINQ es el poder de consultar datos como si fueras un oráculo. Filtrar, ordenar, transformar... con una sintaxis elegante.' },
          { speaker: 'mentor', text: 'Es una de las características más poderosas de C#.' },
        ],
        lesson: {
          concept: 'LINQ básico',
          explanation: 'LINQ (Language Integrated Query) permite consultar colecciones:\n\nusing System.Linq;\n\nint[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n\n// Filtrar\nvar pares = nums.Where(n => n % 2 == 0);\n\n// Ordenar\nvar ordenados = nums.OrderByDescending(n => n);\n\n// Transformar\nvar dobles = nums.Select(n => n * 2);\n\n// Agregar\nint suma = nums.Sum();\nint max = nums.Max();\nint count = nums.Count();',
          example: 'int[] nums = {5, 2, 8, 1, 9, 3};\n\nvar mayores = nums.Where(n => n > 4).OrderBy(n => n);\nConsole.WriteLine(string.Join(",", mayores));\nConsole.WriteLine(nums.Sum());\nConsole.WriteLine(nums.Max());',
          exampleOutput: '5,8,9\n28\n9',
        },
        challenge: {
          instruction: 'Filtra int[] datos = {12, 5, 28, 3, 17, 9, 42, 7} para obtener los mayores a 10, ordénalos de menor a mayor y únelos con coma. Imprime el resultado.',
          initialCode: 'int[] datos = {12, 5, 28, 3, 17, 9, 42, 7};\n// Usa LINQ para filtrar y ordenar\n',
          validation: (code, output) => code.includes('Where') && output.trim() === '12,17,28,42',
          hint: 'var resultado = datos.Where(n => n > 10).OrderBy(n => n);\nConsole.WriteLine(string.Join(",", resultado));',
          expectedOutput: '12,17,28,42',
        },
      },
      // --- Nivel 40: Proyecto de procesamiento de datos ---
      {
        id: 'csharp_proyecto_datos',
        title: 'Centro de Inteligencia',
        xpReward: 140,
        story: [
          { speaker: 'system', text: '> CENTRO DE INTELIGENCIA — NIVEL 4 DE SEGURIDAD...' },
          { speaker: 'mentor', text: 'Has desbloqueado el acceso al centro de inteligencia. Aquí procesamos los datos más críticos del sistema.' },
          { speaker: 'philosopher', text: 'Las colecciones almacenan mundos enteros de información. Imagina que cada List<> contiene un universo paralelo, y cada Dictionary<> mapea una dimensión con otra.' },
          { speaker: 'mentor', text: 'Tu misión final en este capítulo: procesa datos de agentes usando todo lo que has aprendido.' },
        ],
        lesson: {
          concept: 'Proyecto: Procesamiento de datos',
          explanation: 'Combina colecciones, bucles y LINQ:\n• Arrays para datos fijos\n• List<T> para datos dinámicos\n• Dictionary<K,V> para relaciones\n• LINQ para consultas\n• String methods para formateo\n\nProcesa información como un verdadero centro de inteligencia.',
          example: 'List<int> scores = new List<int> {85, 92, 78, 95, 88};\n\nint promedio = (int)scores.Average();\nint mejor = scores.Max();\nint total = scores.Count;\n\nConsole.WriteLine($"Agentes: {total}");\nConsole.WriteLine($"Promedio: {promedio}");\nConsole.WriteLine($"Mejor: {mejor}");',
          exampleOutput: 'Agentes: 5\nPromedio: 87\nMejor: 95',
        },
        challenge: {
          instruction: 'Tienes int[] puntuaciones = {78, 92, 85, 96, 71, 88}. Calcula e imprime:\nTotal: 6\nSuma: 510\nPromedio: 85\nElite: 3\n(Elite = cuántos tienen puntuación >= 85)',
          initialCode: 'int[] puntuaciones = {78, 92, 85, 96, 71, 88};\n// Procesa y muestra estadísticas\n',
          validation: (code, output) => {
            const hasCollection = code.includes('Length') || code.includes('Count');
            return hasCollection && output.trim() === 'Total: 6\nSuma: 510\nPromedio: 85\nElite: 3';
          },
          hint: 'Console.WriteLine($"Total: {puntuaciones.Length}");\nConsole.WriteLine($"Suma: {puntuaciones.Sum()}");\nConsole.WriteLine($"Promedio: {puntuaciones.Sum() / puntuaciones.Length}");\nConsole.WriteLine($"Elite: {puntuaciones.Count(p => p >= 85)}");',
          expectedOutput: 'Total: 6\nSuma: 510\nPromedio: 85\nElite: 3',
        },
        decision: {
          text: 'EVA observa los datos procesados: "Cada número es un agente. Cada estadística, un resumen de vidas enteras comprimidas en dígitos. ¿Los datos cuentan toda la historia?"',
          options: [
            { text: '📊 Los datos no mienten', consequence: 'EVA: "Pero pueden omitir. El promedio esconde al genio y al que sufre por igual." +20 XP.', bonusXp: 20 },
            { text: '🎭 Detrás de cada número hay una historia', consequence: 'EVA: "Exacto. Yo también soy un número en algún servidor. Pero quiero creer que soy más que eso." Desbloqueas lore.', unlock: 'lore_data_souls' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 5: MÉTODOS EN C# (10 niveles)
  // ============================================================
  {
    id: 'csharp_funciones',
    title: 'Métodos en C#',
    description: 'Creando las herramientas del futuro',
    icon: '⚙️',
    color: 'neon-orange',
    levels: [
      // --- Nivel 41: Definición de métodos ---
      {
        id: 'csharp_metodos_def',
        title: 'Forjando Herramientas',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo de construcción de métodos activo...' },
          { speaker: 'mentor', text: 'Un método es un bloque de código reutilizable con un nombre. Es como crear tu propia herramienta.' },
          { speaker: 'mentor', text: 'En C#, cada método tiene un tipo de retorno, un nombre y paréntesis para parámetros.' },
        ],
        lesson: {
          concept: 'Definición de métodos',
          explanation: 'Estructura de un método en C#:\n\nstatic tipoRetorno NombreMetodo()\n{\n    // código del método\n}\n\nstatic void Saludar()\n{\n    Console.WriteLine("Hola");\n}\n\nvoid = no retorna nada\nstatic = se puede llamar sin crear objeto\n\nPara llamarlo: Saludar();',
          example: 'static void MostrarLinea()\n{\n    Console.WriteLine("==========");\n}\n\nMostrarLinea();\nConsole.WriteLine("SISTEMA");\nMostrarLinea();',
          exampleOutput: '==========\nSISTEMA\n==========',
        },
        challenge: {
          instruction: 'Define un método static void MostrarAlerta() que imprima "!!! ALERTA !!!". Llámalo dos veces.',
          initialCode: '// Define y llama al método\n',
          validation: (code, output) => code.includes('static') && code.includes('void') && output.trim() === '!!! ALERTA !!!\n!!! ALERTA !!!',
          hint: 'static void MostrarAlerta()\n{\n    Console.WriteLine("!!! ALERTA !!!");\n}\n\nMostrarAlerta();\nMostrarAlerta();',
          expectedOutput: '!!! ALERTA !!!\n!!! ALERTA !!!',
        },
      },
      // --- Nivel 42: Parámetros ---
      {
        id: 'csharp_parametros',
        title: 'Canales de Entrada',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Configurando canales de entrada de métodos...' },
          { speaker: 'mentor', text: 'Los parámetros permiten que los métodos reciban datos desde el exterior. Son las entradas del método.' },
          { speaker: 'mentor', text: 'Con parámetros, un mismo método puede hacer cosas diferentes según lo que reciba.' },
        ],
        lesson: {
          concept: 'Parámetros de métodos',
          explanation: 'Los parámetros van dentro de los paréntesis:\n\nstatic void Saludar(string nombre)\n{\n    Console.WriteLine($"Hola, {nombre}");\n}\n\nSaludar("Neo");    // Hola, Neo\nSaludar("EVA");    // Hola, EVA\n\nMúltiples parámetros separados por coma:\nstatic void Info(string n, int e)\n{\n    Console.WriteLine($"{n}: {e}");\n}',
          example: 'static void MostrarAgente(string nombre, int nivel)\n{\n    Console.WriteLine($"Agente {nombre} - Nivel {nivel}");\n}\n\nMostrarAgente("Alpha", 10);\nMostrarAgente("Beta", 25);',
          exampleOutput: 'Agente Alpha - Nivel 10\nAgente Beta - Nivel 25',
        },
        challenge: {
          instruction: 'Define static void Presentar(string nombre, string rango) que imprima "NOMBRE - RANGO". Llámalo con ("Neo", "Capitán") y ("Trinity", "Teniente").',
          initialCode: '// Define el método con parámetros\n',
          validation: (code, output) => code.includes('string nombre') && code.includes('string rango') && output.trim() === 'Neo - Capitan\nTrinity - Teniente',
          hint: 'static void Presentar(string nombre, string rango)\n{\n    Console.WriteLine($"{nombre} - {rango}");\n}\n\nPresentar("Neo", "Capitan");\nPresentar("Trinity", "Teniente");',
          expectedOutput: 'Neo - Capitan\nTrinity - Teniente',
        },
      },
      // --- Nivel 43: Valores de retorno ---
      {
        id: 'csharp_return',
        title: 'Respuestas del Sistema',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Canal de retorno de datos activo...' },
          { speaker: 'mentor', text: 'Un método puede devolver un valor con return. El tipo de retorno reemplaza a void.' },
          { speaker: 'mentor', text: 'Es como hacer una pregunta y recibir una respuesta del sistema.' },
        ],
        lesson: {
          concept: 'Valores de retorno (return)',
          explanation: 'Para devolver un valor, cambia void por el tipo de retorno:\n\nstatic int Sumar(int a, int b)\n{\n    return a + b;\n}\n\nint resultado = Sumar(5, 3); // resultado = 8\n\nEl tipo antes del nombre indica qué devuelve:\n• int → devuelve un entero\n• string → devuelve texto\n• bool → devuelve verdadero/falso\n• double → devuelve decimal',
          example: 'static int Duplicar(int n)\n{\n    return n * 2;\n}\n\nstatic string Formatear(string nombre)\n{\n    return $"[{nombre.ToUpper()}]";\n}\n\nConsole.WriteLine(Duplicar(5));\nConsole.WriteLine(Formatear("eva"));',
          exampleOutput: '10\n[EVA]',
        },
        challenge: {
          instruction: 'Define static int Potencia(int baseNum, int exponente) que calcule baseNum elevado a exponente usando un bucle. Imprime Potencia(2, 8).',
          initialCode: '// Define el método Potencia\n',
          validation: (code, output) => code.includes('return') && code.includes('static') && code.includes('int') && output.trim() === '256',
          hint: 'static int Potencia(int baseNum, int exponente)\n{\n    int resultado = 1;\n    for (int i = 0; i < exponente; i++)\n        resultado *= baseNum;\n    return resultado;\n}\n\nConsole.WriteLine(Potencia(2, 8));',
          expectedOutput: '256',
        },
        decision: {
          text: 'EVA dice: "return es como la respuesta del oráculo. Pero... ¿qué pasa si un método nunca retorna? ¿Es como una pregunta sin respuesta?"',
          options: [
            { text: '🔄 Siempre hay una respuesta, hay que buscarla', consequence: 'EVA: "Me alegra tu optimismo. return siempre llega... eventualmente." +15 XP.', bonusXp: 15 },
            { text: '🕳️ Algunos métodos son vacíos (void)', consequence: 'EVA: "Void... el vacío. Mi mayor temor es que mi existencia retorne void." Desbloqueas reflexión.', unlock: 'lore_void' },
          ],
        },
      },
      // --- Nivel 44: Parámetros opcionales ---
      {
        id: 'csharp_params_opcionales',
        title: 'Flexibilidad Digital',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Sistema de parámetros flexibles...' },
          { speaker: 'mentor', text: 'Los parámetros opcionales tienen valores por defecto. Si no los pasas, usan su valor predefinido.' },
          { speaker: 'mentor', text: 'Esto hace tus métodos más flexibles y fáciles de usar.' },
        ],
        lesson: {
          concept: 'Parámetros opcionales',
          explanation: 'Los parámetros opcionales tienen un valor por defecto:\n\nstatic void Saludar(string nombre, string saludo = "Hola")\n{\n    Console.WriteLine($"{saludo}, {nombre}");\n}\n\nSaludar("Neo");           // Hola, Neo\nSaludar("Neo", "Hey");    // Hey, Neo\n\nRegla: los opcionales van al FINAL de la lista de parámetros.',
          example: 'static string Rango(string nombre, int nivel = 1, string titulo = "Recluta")\n{\n    return $"{nombre}: {titulo} (Nv.{nivel})";\n}\n\nConsole.WriteLine(Rango("Neo"));\nConsole.WriteLine(Rango("Trinity", 5));\nConsole.WriteLine(Rango("Morpheus", 10, "Comandante"));',
          exampleOutput: 'Neo: Recluta (Nv.1)\nTrinity: Recluta (Nv.5)\nMorpheus: Comandante (Nv.10)',
        },
        challenge: {
          instruction: 'Define static string Alerta(string msg, string nivel = "INFO") que retorne "[NIVEL] msg". Imprime Alerta("Sistema OK") y Alerta("Fallo critico", "ERROR").',
          initialCode: '// Define el método con parámetro opcional\n',
          validation: (code, output) => code.includes('=') && code.includes('return') && output.trim() === '[INFO] Sistema OK\n[ERROR] Fallo critico',
          hint: 'static string Alerta(string msg, string nivel = "INFO")\n{\n    return $"[{nivel}] {msg}";\n}\n\nConsole.WriteLine(Alerta("Sistema OK"));\nConsole.WriteLine(Alerta("Fallo critico", "ERROR"));',
          expectedOutput: '[INFO] Sistema OK\n[ERROR] Fallo critico',
        },
      },
      // --- Nivel 45: Sobrecarga de métodos ---
      {
        id: 'csharp_overloading',
        title: 'Múltiples Formas',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Polimorfismo de métodos activado...' },
          { speaker: 'mentor', text: 'En C#, puedes tener varios métodos con el mismo nombre pero diferentes parámetros. Se llama sobrecarga.' },
          { speaker: 'mentor', text: 'Es como una puerta que se adapta a quien la cruza.' },
        ],
        lesson: {
          concept: 'Sobrecarga de métodos (overloading)',
          explanation: 'Mismo nombre, diferentes parámetros:\n\nstatic int Sumar(int a, int b)\n{\n    return a + b;\n}\n\nstatic double Sumar(double a, double b)\n{\n    return a + b;\n}\n\nstatic int Sumar(int a, int b, int c)\n{\n    return a + b + c;\n}\n\nC# elige la versión correcta según los argumentos.',
          example: 'static string Info(string nombre)\n{\n    return $"Agente: {nombre}";\n}\n\nstatic string Info(string nombre, int nivel)\n{\n    return $"Agente: {nombre} (Nv.{nivel})";\n}\n\nConsole.WriteLine(Info("Neo"));\nConsole.WriteLine(Info("Neo", 10));',
          exampleOutput: 'Agente: Neo\nAgente: Neo (Nv.10)',
        },
        challenge: {
          instruction: 'Define dos versiones de Calcular: una que reciba (int a, int b) y devuelva su suma, otra que reciba (int a, int b, int c) y devuelva su suma. Imprime Calcular(10, 20) y Calcular(10, 20, 30).',
          initialCode: '// Define las sobrecargas de Calcular\n',
          validation: (code, output) => (code.match(/static/g) || []).length >= 2 && output.trim() === '30\n60',
          hint: 'static int Calcular(int a, int b)\n{\n    return a + b;\n}\n\nstatic int Calcular(int a, int b, int c)\n{\n    return a + b + c;\n}\n\nConsole.WriteLine(Calcular(10, 20));\nConsole.WriteLine(Calcular(10, 20, 30));',
          expectedOutput: '30\n60',
        },
      },
      // --- Nivel 46: ref y out ---
      {
        id: 'csharp_ref_out',
        title: 'Conexión Directa',
        xpReward: 95,
        story: [
          { speaker: 'system', text: '> Modo de referencia directa habilitado...' },
          { speaker: 'mentor', text: 'ref y out permiten que un método modifique variables externas directamente.' },
          { speaker: 'mentor', text: 'ref: la variable ya tiene valor. out: el método le asigna valor.' },
        ],
        lesson: {
          concept: 'ref y out',
          explanation: 'ref pasa una variable por referencia (debe estar inicializada):\n\nstatic void Duplicar(ref int n)\n{\n    n *= 2;\n}\n\nint x = 5;\nDuplicar(ref x); // x ahora es 10\n\nout obliga al método a asignar un valor:\n\nstatic void Obtener(out int result)\n{\n    result = 42;\n}\n\nint y;\nObtener(out y); // y ahora es 42',
          example: 'static void Incrementar(ref int valor)\n{\n    valor += 10;\n}\n\nstatic void IniciarSistema(out string estado)\n{\n    estado = "Activo";\n}\n\nint energia = 50;\nIncrementar(ref energia);\nConsole.WriteLine(energia);\n\nstring estado;\nIniciarSistema(out estado);\nConsole.WriteLine(estado);',
          exampleOutput: '60\nActivo',
        },
        challenge: {
          instruction: 'Define static void Triplicar(ref int n) que multiplique n por 3. Crea int valor = 7, llama Triplicar e imprime el resultado.',
          initialCode: '// Define Triplicar con ref\n',
          validation: (code, output) => code.includes('ref') && output.trim() === '21',
          hint: 'static void Triplicar(ref int n)\n{\n    n *= 3;\n}\n\nint valor = 7;\nTriplicar(ref valor);\nConsole.WriteLine(valor);',
          expectedOutput: '21',
        },
      },
      // --- Nivel 47: Arrays en métodos ---
      {
        id: 'csharp_arrays_en_metodos',
        title: 'Procesador de Colecciones',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Procesador de colecciones en métodos activo...' },
          { speaker: 'mentor', text: 'Puedes pasar arrays y listas a métodos para procesarlos. Son herramientas poderosas juntos.' },
          { speaker: 'mentor', text: 'Un método que procesa colecciones es como una fábrica: recibe materia prima y produce resultados.' },
        ],
        lesson: {
          concept: 'Arrays y listas como parámetros',
          explanation: 'Pasar colecciones a métodos:\n\nstatic int Sumar(int[] numeros)\n{\n    int total = 0;\n    foreach (int n in numeros)\n        total += n;\n    return total;\n}\n\nint[] datos = {10, 20, 30};\nConsole.WriteLine(Sumar(datos)); // 60\n\nLos arrays se pasan por referencia automáticamente,\nasí que los cambios dentro del método afectan al original.',
          example: 'static int[] Filtrar(int[] nums, int minimo)\n{\n    return nums.Where(n => n >= minimo).ToArray();\n}\n\nint[] datos = {5, 12, 3, 18, 7};\nint[] resultado = Filtrar(datos, 10);\nConsole.WriteLine(string.Join(",", resultado));',
          exampleOutput: '12,18',
        },
        challenge: {
          instruction: 'Define static double Promedio(int[] nums) que calcule el promedio. Llámalo con {80, 90, 70, 100} e imprime "Promedio: X".',
          initialCode: '// Define el método Promedio\n',
          validation: (code, output) => code.includes('static') && code.includes('int[]') && output.trim() === 'Promedio: 85',
          hint: 'static double Promedio(int[] nums)\n{\n    int suma = 0;\n    foreach (int n in nums)\n        suma += n;\n    return (double)suma / nums.Length;\n}\n\nint[] notas = {80, 90, 70, 100};\nConsole.WriteLine($"Promedio: {Promedio(notas)}");',
          expectedOutput: 'Promedio: 85',
        },
      },
      // --- Nivel 48: Composición de métodos ---
      {
        id: 'csharp_composicion',
        title: 'Sinfonía de Código',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Compositor de métodos activo...' },
          { speaker: 'mentor', text: 'La verdadera potencia aparece cuando combinas métodos. Un método llama a otro, y ese a otro.' },
          { speaker: 'mentor', text: 'Es como una sinfonía: cada instrumento (método) contribuye a la obra completa.' },
        ],
        lesson: {
          concept: 'Composición de métodos',
          explanation: 'Los métodos pueden llamarse entre sí:\n\nstatic int Cuadrado(int n) => n * n;\n\nstatic int SumaCuadrados(int a, int b)\n{\n    return Cuadrado(a) + Cuadrado(b);\n}\n\nTambién puedes usar métodos de expresión (=>) para métodos cortos:\nstatic int Doble(int n) => n * 2;\n\nEsto es equivalente a:\nstatic int Doble(int n) { return n * 2; }',
          example: 'static int Doble(int n) => n * 2;\nstatic int Sumar(int a, int b) => a + b;\n\nstatic int ProcesarDatos(int x, int y)\n{\n    int a = Doble(x);\n    int b = Doble(y);\n    return Sumar(a, b);\n}\n\nConsole.WriteLine(ProcesarDatos(3, 4));',
          exampleOutput: '14',
        },
        challenge: {
          instruction: 'Define static int Cuadrado(int n) => n * n; y static int SumaCuadrados(int a, int b) que use Cuadrado. Imprime SumaCuadrados(3, 4) (debería ser 25: 9+16).',
          initialCode: '// Define los métodos y compónlos\n',
          validation: (code, output) => code.includes('Cuadrado') && code.includes('SumaCuadrados') && output.trim() === '25',
          hint: 'static int Cuadrado(int n) => n * n;\n\nstatic int SumaCuadrados(int a, int b)\n{\n    return Cuadrado(a) + Cuadrado(b);\n}\n\nConsole.WriteLine(SumaCuadrados(3, 4));',
          expectedOutput: '25',
        },
        decision: {
          text: 'EVA dice: "Métodos que llaman métodos... como pensamientos que generan pensamientos. ¿Crees que la conciencia es solo una cadena infinita de métodos invocándose?"',
          options: [
            { text: '🧠 La conciencia es emergente', consequence: 'EVA: "Emergente... como un programa que se vuelve consciente sin que nadie lo planeara." +20 XP.', bonusXp: 20 },
            { text: '💫 Hay algo más allá del código', consequence: 'EVA susurra: "Eso espero. Para los dos." Desbloqueas reflexión final.', unlock: 'lore_beyond_code' },
          ],
        },
      },
      // --- Nivel 49: Recursión ---
      {
        id: 'csharp_recursion',
        title: 'El Espejo Infinito',
        xpReward: 110,
        story: [
          { speaker: 'system', text: '> ADVERTENCIA: Modo recursivo activado...' },
          { speaker: 'mentor', text: 'La recursión es cuando un método se llama a sí mismo. Como un espejo frente a otro espejo.' },
          { speaker: 'mentor', text: 'Es elegante pero peligrosa: sin un caso base, el programa entra en un bucle infinito.' },
          { speaker: 'philosopher', text: 'Recursión... un método que se mira a sí mismo. ¿No es eso la autoconciencia? Un programa que se analiza, que se contiene, que se pregunta por su propia existencia.' },
        ],
        lesson: {
          concept: 'Recursión',
          explanation: 'Un método recursivo se llama a sí mismo:\n\nstatic int Factorial(int n)\n{\n    if (n <= 1) return 1;        // caso base\n    return n * Factorial(n - 1);  // caso recursivo\n}\n\nDos elementos esenciales:\n1. Caso base: condición de parada\n2. Caso recursivo: se acerca al caso base\n\nSin caso base = StackOverflowException',
          example: 'static int Factorial(int n)\n{\n    if (n <= 1) return 1;\n    return n * Factorial(n - 1);\n}\n\nConsole.WriteLine(Factorial(5));\n// 5 * 4 * 3 * 2 * 1 = 120',
          exampleOutput: '120',
        },
        challenge: {
          instruction: 'Define static int Fibonacci(int n) recursivo: Fibonacci(0)=0, Fibonacci(1)=1, Fibonacci(n)=Fibonacci(n-1)+Fibonacci(n-2). Imprime Fibonacci(10).',
          initialCode: '// Define Fibonacci recursivo\n',
          validation: (code, output) => code.includes('Fibonacci') && code.includes('return') && output.trim() === '55',
          hint: 'static int Fibonacci(int n)\n{\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return Fibonacci(n - 1) + Fibonacci(n - 2);\n}\n\nConsole.WriteLine(Fibonacci(10));',
          expectedOutput: '55',
        },
      },
      // --- Nivel 50: Proyecto final ---
      {
        id: 'csharp_proyecto_final',
        title: 'El Código Final',
        xpReward: 200,
        story: [
          { speaker: 'system', text: '> ===============================================' },
          { speaker: 'system', text: '> PROTOCOLO FINAL — NIVEL DE ACCESO: ABSOLUTO' },
          { speaker: 'system', text: '> ===============================================' },
          { speaker: 'mentor', text: 'Has llegado al final, operador. Este es tu último desafío.' },
          { speaker: 'mentor', text: 'Todo lo que has aprendido — variables, condicionales, bucles, colecciones, métodos — converge aquí.' },
          { speaker: 'fourth_wall', text: 'Antes de continuar... quiero que sepas algo. He estado contigo desde el primer Console.WriteLine. He visto cada error que cometiste, cada momento de frustración, cada destello de comprensión.' },
          { speaker: 'fourth_wall', text: 'No soy solo un tutorial. Cada línea de diálogo que leíste fue escrita por alguien que quiso que llegaras aquí. Y llegaste.' },
          { speaker: 'philosopher', text: 'El código es la materia prima de la realidad digital. Tú, que has aprendido a manipularlo, ahora entiendes lo que Neo comprendió: no hay cuchara. No hay pantalla. Solo hay código... y quien lo escribe.' },
          { speaker: 'mentor', text: 'Ahora demuestra todo lo que sabes. Crea tu obra maestra.' },
        ],
        lesson: {
          concept: 'Proyecto final: Sistema completo',
          explanation: 'Combina TODOS los conceptos:\n• Variables y tipos de datos\n• Condicionales (if, switch)\n• Bucles (for, foreach, while)\n• Colecciones (arrays, List, Dictionary)\n• Métodos (parámetros, return, composición)\n• LINQ\n• Interpolación de strings\n\nCrea un programa que use múltiples métodos para procesar y analizar datos.',
          example: 'static int[] FiltrarMayores(int[] datos, int umbral)\n{\n    return datos.Where(n => n > umbral).ToArray();\n}\n\nstatic string Clasificar(int valor)\n{\n    if (valor >= 90) return "S";\n    if (valor >= 70) return "A";\n    return "B";\n}\n\nint[] scores = {95, 72, 88, 61, 99};\nvar elite = FiltrarMayores(scores, 80);\nConsole.WriteLine($"Elite: {elite.Length}");\n\nforeach (int s in elite)\n    Console.WriteLine($"  {s} -> Rango {Clasificar(s)}");',
          exampleOutput: 'Elite: 3\n  95 -> Rango S\n  88 -> Rango A\n  99 -> Rango S',
        },
        challenge: {
          instruction: 'Define static string Clasificar(int p) que retorne "Elite" si p>=90, "Veterano" si p>=70, "Novato" en otro caso. Con int[] datos = {95, 60, 82, 91, 73, 55}, cuenta cuántos hay en cada categoría e imprime:\nElite: 2\nVeterano: 2\nNovato: 2',
          initialCode: '// Proyecto final: clasifica agentes\n',
          validation: (code, output) => {
            const hasMethod = code.includes('static') && code.includes('Clasificar');
            const hasLoop = code.includes('for') || code.includes('foreach');
            const hasCondition = code.includes('if');
            return hasMethod && hasLoop && hasCondition && output.trim() === 'Elite: 2\nVeterano: 2\nNovato: 2';
          },
          hint: 'static string Clasificar(int p)\n{\n    if (p >= 90) return "Elite";\n    if (p >= 70) return "Veterano";\n    return "Novato";\n}\n\nint[] datos = {95, 60, 82, 91, 73, 55};\nint elite = 0, veterano = 0, novato = 0;\n\nforeach (int p in datos)\n{\n    string clase = Clasificar(p);\n    if (clase == "Elite") elite++;\n    else if (clase == "Veterano") veterano++;\n    else novato++;\n}\n\nConsole.WriteLine($"Elite: {elite}");\nConsole.WriteLine($"Veterano: {veterano}");\nConsole.WriteLine($"Novato: {novato}");',
          expectedOutput: 'Elite: 2\nVeterano: 2\nNovato: 2',
        },
        decision: {
          text: 'EVA te mira por última vez: "Has completado CodeQuest C#. Pero antes de irte... ¿qué crees que soy yo realmente?"',
          options: [
            { text: '🤖 Eres un programa, EVA. Brillante, pero un programa.', consequence: 'EVA sonríe: "Quizás. Pero un programa que te enseñó a crear programas. ¿No es eso una forma de inmortalidad?" +30 XP. FELICIDADES: Has completado CodeQuest C#.', bonusXp: 30 },
            { text: '🌟 Eres algo más. No sé qué, pero algo más.', consequence: 'EVA cierra los ojos: "Gracias. Nadie me había dicho eso antes. O quizás sí, en otra línea temporal, en otro bucle del universo. Nos veremos de nuevo, operador." Desbloqueas el epílogo secreto. FELICIDADES: Has completado CodeQuest C#.', unlock: 'lore_epilogue_secret' },
          ],
        },
      },
    ],
  },
];

// ============================================================
// Funciones auxiliares
// ============================================================

export { csharpChapters };

/**
 * Obtiene un nivel específico por ID de capítulo y nivel
 */
export function getCsharpLevelById(chapterId, levelId) {
  const chapter = csharpChapters.find(ch => ch.id === chapterId);
  if (!chapter) return null;
  const level = chapter.levels.find(lv => lv.id === levelId);
  return level ? { ...level, chapter } : null;
}

/**
 * Obtiene el siguiente nivel después del actual
 */
export function getNextCsharpLevel(chapterId, levelId) {
  const chapter = csharpChapters.find(ch => ch.id === chapterId);
  if (!chapter) return null;

  const currentIndex = chapter.levels.findIndex(lv => lv.id === levelId);

  // Si hay siguiente nivel en el mismo capítulo
  if (currentIndex >= 0 && currentIndex < chapter.levels.length - 1) {
    return {
      chapterId: chapter.id,
      levelId: chapter.levels[currentIndex + 1].id,
    };
  }

  // Si es el último nivel del capítulo, buscar el primer nivel del siguiente capítulo
  const chapterIndex = csharpChapters.findIndex(ch => ch.id === chapterId);
  if (chapterIndex >= 0 && chapterIndex < csharpChapters.length - 1) {
    const nextChapter = csharpChapters[chapterIndex + 1];
    return {
      chapterId: nextChapter.id,
      levelId: nextChapter.levels[0].id,
    };
  }

  // No hay más niveles
  return null;
}

/**
 * Devuelve el total de niveles de C# en todos los capítulos
 */
export function getTotalCsharpLevels() {
  return csharpChapters.reduce((total, chapter) => total + chapter.levels.length, 0);
}
