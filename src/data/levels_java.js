export const chapters = [
  // ============================================================
  // CAPÍTULO 1: FUNDAMENTOS (10 niveles)
  // ============================================================
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    description: 'Los cimientos de la programación',
    icon: '🧱',
    color: 'neon-green',
    levels: [
      {
        id: 'hola_mundo',
        title: 'Tu Primera Línea',
        xpReward: 50,
        story: [
          { speaker: 'system', text: '> Conexión establecida con CORE v2.1...' },
          { speaker: 'mentor', text: 'Bienvenido, recluta. Soy EVA, la inteligencia que mantiene este sistema funcionando.' },
          { speaker: 'mentor', text: 'El mundo exterior depende de programadores como tú para mantener las máquinas activas.' },
          { speaker: 'mentor', text: 'Tu primera misión es simple: envía un mensaje al sistema usando System.out.println().' },
        ],
        lesson: {
          concept: 'System.out.println() — Salida de datos',
          explanation: 'La función System.out.println() muestra información en la consola.\nTodo lo que pongas entre los paréntesis se mostrará en pantalla.\nLos textos (strings) van entre comillas dobles o simples.\n\nSystem.out.println("mensaje")',
          example: 'System.out.println("Hola mundo");\nSystem.out.println("Java es genial");',
          exampleOutput: 'Hola mundo\nJava es genial',
        },
        challenge: {
          instruction: 'Escribe un programa que imprima "Sistema activado" en pantalla.',
          initialCode: '// Usa System.out.println() para mostrar el mensaje\n',
          validation: (code, output) => output.trim() === 'Sistema activado',
          hint: 'System.out.println("Sistema activado");',
          expectedOutput: 'Sistema activado',
        },
        decision: {
          text: 'EVA te pregunta: "¿Quieres explorar los registros del sistema o continuar con el entrenamiento?"',
          options: [
            { text: '📂 Explorar registros', consequence: 'Descubres que el sistema fue creado hace 50 años. +10 XP bonus.', bonusXp: 10 },
            { text: '⚡ Continuar entrenamiento', consequence: 'Tu dedicación impresiona a EVA. Desbloqueas un tema de terminal especial.', unlock: 'theme_blue' },
          ],
        },
      },
      {
        id: 'multiples_prints',
        title: 'Mensajes Múltiples',
        xpReward: 50,
        story: [
          { speaker: 'system', text: '> Canal de comunicación abierto...' },
          { speaker: 'mentor', text: 'Puedes usar System.out.println() varias veces para mostrar múltiples líneas.' },
          { speaker: 'mentor', text: 'Cada System.out.println() genera una nueva línea en la salida.' },
        ],
        lesson: {
          concept: 'Múltiples System.out.println()',
          explanation: 'Puedes usar System.out.println() cuantas veces quieras.\nCada llamada imprime en una nueva línea.\nTambién puedes imprimir números sin comillas.\n\nSystem.out.println() sin argumentos imprime una línea vacía.',
          example: 'System.out.println("Línea 1");\nSystem.out.println("Línea 2");\nSystem.out.println(42);\nSystem.out.println(3.14);',
          exampleOutput: 'Línea 1\nLínea 2\n42\n3.14',
        },
        challenge: {
          instruction: 'Imprime estas 3 líneas exactas:\nNombre: CORE\nVersion: 2.1\nEstado: Activo',
          initialCode: '// Imprime las 3 líneas\n',
          validation: (code, output) => output.trim() === 'Nombre: CORE\nVersion: 2.1\nEstado: Activo',
          hint: 'Usa 3 System.out.println() separados, uno por línea;',
          expectedOutput: 'Nombre: CORE\nVersion: 2.1\nEstado: Activo',
        },
      },
      {
        id: 'variables',
        title: 'Memoria Digital',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de memoria inicializado...' },
          { speaker: 'mentor', text: 'Las variables son como cajas donde guardas datos. Les das un nombre y un valor.' },
          { speaker: 'mentor', text: 'Usa el signo = para asignar un valor a una variable.' },
        ],
        lesson: {
          concept: 'Variables — Almacenamiento de datos',
          explanation: 'Una variable guarda un valor en la memoria:\n\nnombre = valor\n\nReglas para nombres de variables:\n• Empiezan con letra o guión bajo\n• No pueden tener espacios (usa guión_bajo)\n• Son sensibles a mayúsculas (edad ≠ Edad)\n• No usar palabras reservadas (if, for, etc.)',
          example: 'nombre = "EVA";\nedad = 50;\nSystem.out.println(nombre);\nSystem.out.println(edad);',
          exampleOutput: 'EVA\n50',
        },
        challenge: {
          instruction: 'Crea una variable "agente" con el valor "Recluta-01" y luego imprímela.',
          initialCode: '// Crea la variable y muéstrala con System.out.println()\n',
          validation: (code, output) => code.includes('agente') && code.includes('=') && output.trim() === 'Recluta-01',
          hint: 'agente = "Recluta-01";\nSystem.out.println(agente);',
          expectedOutput: 'Recluta-01',
        },
      },
      {
        id: 'tipos_datos',
        title: 'Clasificación de Datos',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Escáner de tipos activado...' },
          { speaker: 'mentor', text: 'No todos los datos son iguales. Los números se comportan diferente al texto.' },
          { speaker: 'mentor', text: 'Java tiene tipos: str (texto), int (enteros), float (decimales), bool (verdadero/falso).' },
        ],
        lesson: {
          concept: 'Tipos de datos básicos',
          explanation: 'Cada dato tiene un tipo:\n• str (string): texto entre comillas → "hola"\n• int: números enteros → 42\n• float: números decimales → 3.14\n• bool: verdadero o falso → true / false\n\nPuedes ver el tipo con type()',
          example: 'texto = "Hola";\nnumero = 42;\ndecimal = 3.14;\nactivo = true;\nSystem.out.println(type(texto));\nSystem.out.println(type(numero));',
          exampleOutput: "<class 'str'>\n<class 'int'>",
        },
        challenge: {
          instruction: 'Crea una variable "vida" con valor 100 (entero) y "nombre" con valor "EVA". Imprime la suma de vida + 50.',
          initialCode: '// Define las variables y calcula\n',
          validation: (code, output) => code.includes('vida') && code.includes('nombre') && output.trim() === '150',
          hint: 'vida = 100;\nnombre = "EVA";\nSystem.out.println(vida + 50);',
          expectedOutput: '150',
        },
      },
      {
        id: 'aritmetica',
        title: 'Centro de Cálculo',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo aritmético en línea...' },
          { speaker: 'mentor', text: 'Java puede hacer matemáticas. Los operadores básicos son +, -, *, /' },
          { speaker: 'mentor', text: 'El reactor necesita cálculos precisos para funcionar.' },
        ],
        lesson: {
          concept: 'Operadores aritméticos',
          explanation: 'Operadores matemáticos en Java:\n\n+ suma          10 + 3  → 13\n- resta         10 - 3  → 7\n* multiplicar   10 * 3  → 30\n/ dividir       10 / 3  → 3.333...\n// div. entera  10 // 3 → 3\n%  módulo       10 % 3  → 1\n** potencia     2 ** 3  → 8',
          example: 'a = 10;\nb = 3;\nSystem.out.println(a + b);\nSystem.out.println(a * b);\nSystem.out.println(a // b);\nSystem.out.println(a % b);',
          exampleOutput: '13\n30\n3\n1',
        },
        challenge: {
          instruction: 'El reactor tiene 1000 unidades de energía. Cada módulo consume 150. Calcula cuántos módulos completos puedes alimentar (usa //) e imprime el resultado.',
          initialCode: 'energia = 1000;\nconsumo_modulo = 150;\n// Calcula e imprime\n',
          validation: (code, output) => code.includes('//') && output.trim() === '6',
          hint: 'System.out.println(energia // consumo_modulo);',
          expectedOutput: '6',
        },
      },
      {
        id: 'strings_basico',
        title: 'Procesador de Texto',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo de texto cargado...' },
          { speaker: 'mentor', text: 'Los strings (textos) son muy poderosos. Puedes unirlos, repetirlos y más.' },
          { speaker: 'mentor', text: 'Concatenar es unir textos con +. Repetir es multiplicar con *.' },
        ],
        lesson: {
          concept: 'Operaciones con strings',
          explanation: 'Operaciones con texto:\n\n"Hola" + " " + "mundo" → "Hola mundo" (concatenar)\n"ja" * 3 → "jajaja" (repetir)\nlen("Hola") → 4 (longitud)\n\nNo puedes sumar un string con un número directamente.\nUsa str(numero) para convertir.',
          example: 'saludo = "Hola";\nnombre = "Agente";\nSystem.out.println(saludo + " " + nombre);\nSystem.out.println("=" * 20);\nSystem.out.println(len(saludo));',
          exampleOutput: 'Hola Agente\n====================\n4',
        },
        challenge: {
          instruction: 'Crea una variable "titulo" con valor "CORE" y otra "version" con valor "2.1". Imprime "CORE v2.1" concatenándolas (añade " v" entre ellas).',
          initialCode: '// Define las variables y concaténalas\n',
          validation: (code, output) => code.includes('+') && output.trim() === 'CORE v2.1',
          hint: 'titulo = "CORE";\nversion = "2.1";\nSystem.out.println(titulo + " v" + version);',
          expectedOutput: 'CORE v2.1',
        },
      },
      {
        id: 'conversion_tipos',
        title: 'Transformador de Datos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Conversor de tipos activo...' },
          { speaker: 'mentor', text: 'A veces necesitas convertir un tipo a otro. Por ejemplo, un número a texto o viceversa.' },
          { speaker: 'mentor', text: 'Java tiene funciones de conversión: int(), float(), str(), bool().' },
        ],
        lesson: {
          concept: 'Conversión de tipos (casting)',
          explanation: 'Funciones de conversión:\n\nint("42")    → 42      (texto a entero)\nfloat("3.14") → 3.14   (texto a decimal)\nstr(42)      → "42"    (número a texto)\nbool(1)      → true    (a booleano)\n\nÚtil cuando necesitas mezclar tipos:\nSystem.out.println("Edad: " + str(25))',
          example: 'edad = 25;\nSystem.out.println("Tengo " + str(edad) + " años");\n\ntexto = "100";\nnumero = int(texto);\nSystem.out.println(numero + 50);',
          exampleOutput: 'Tengo 25 años\n150',
        },
        challenge: {
          instruction: 'Tienes precio = 49 (entero) e impuesto = "21" (string). Convierte impuesto a entero, súmalos e imprime el total.',
          initialCode: 'precio = 49;\nimpuesto = "21";\n// Convierte y suma\n',
          validation: (code, output) => code.includes('int(') && output.trim() === '70',
          hint: 'total = precio + int(impuesto);\nSystem.out.println(total);',
          expectedOutput: '70',
        },
      },
      {
        id: 'fstrings',
        title: 'Mensajes Dinámicos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Motor de plantillas cargado...' },
          { speaker: 'mentor', text: 'Las f-strings son la forma moderna de formatear texto en Java.' },
          { speaker: 'mentor', text: 'Pones una f antes de las comillas y usas {variable} dentro del texto.' },
        ],
        lesson: {
          concept: 'f-strings (formato de texto)',
          explanation: 'Las f-strings insertan variables dentro del texto:\n\nf"texto {variable} más texto"\n\nVentajas sobre concatenación:\n• Más legible\n• Puedes meter expresiones: "{2 + 3}"\n• No necesitas convertir tipos',
          example: 'nombre = "EVA";\nnivel = 10;\nSystem.out.println("Agente: {nombre}");\nSystem.out.println("Nivel: {nivel}");\nSystem.out.println("Doble: {nivel * 2}");',
          exampleOutput: 'Agente: EVA\nNivel: 10\nDoble: 20',
        },
        challenge: {
          instruction: 'Tienes hp = 85 y max_hp = 100. Imprime "Vida: 85/100" usando una f-string.',
          initialCode: 'hp = 85;\nmax_hp = 100;\n// Usa f-string para formatear\n',
          validation: (code, output) => code.includes('"') && output.trim() === 'Vida: 85/100',
          hint: 'System.out.println(f"Vida: {hp}/{max_hp}");',
          expectedOutput: 'Vida: 85/100',
        },
        decision: {
          text: 'Encuentras un archivo corrupto en el sistema. ¿Qué haces?',
          options: [
            { text: '🔧 Intentar repararlo', consequence: 'Recuperas datos antiguos sobre el creador del sistema. +15 XP.', bonusXp: 15 },
            { text: '🗑️ Eliminarlo', consequence: 'Liberas espacio en memoria. El sistema corre más rápido.', unlock: 'speed_boost' },
          ],
        },
      },
      {
        id: 'comentarios',
        title: 'Notas del Programador',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Documentación del sistema...' },
          { speaker: 'mentor', text: 'Los comentarios son notas que dejas en el código para ti o para otros programadores.' },
          { speaker: 'mentor', text: 'Java los ignora al ejecutar. Se escriben con // al inicio.' },
        ],
        lesson: {
          concept: 'Comentarios en Java',
          explanation: 'Los comentarios empiezan con #\nJava los ignora completamente.\n\n// Esto es un comentario\nSystem.out.println("Esto sí se ejecuta")\n\nSirven para:\n• Explicar código complejo\n• Dejar notas para el futuro\n• Desactivar líneas temporalmente',
          example: '// Esto es un comentario\nnombre = "EVA"  // comentario en línea;\n// System.out.println("Esto no se ejecuta")\nSystem.out.println(nombre);',
          exampleOutput: 'EVA',
        },
        challenge: {
          instruction: 'Escribe un comentario que diga "Calculo de energia" y debajo calcula e imprime 500 - 120.',
          initialCode: '// Escribe tu código aquí\n',
          validation: (code, output) => code.includes('#') && output.trim() === '380',
          hint: '// Calculo de energia\nSystem.out.println(500 - 120);',
          expectedOutput: '380',
        },
      },
      {
        id: 'proyecto_calculadora',
        title: 'Mini Calculadora',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> PRUEBA DE EVALUACIÓN INICIADA...' },
          { speaker: 'mentor', text: 'Es hora de combinar todo lo que has aprendido en un mini proyecto.' },
          { speaker: 'mentor', text: 'Crea un reporte de estado del sistema usando variables, operaciones y f-strings.' },
        ],
        lesson: {
          concept: 'Combinando fundamentos',
          explanation: 'Un buen programa combina:\n• Variables para guardar datos\n• Operaciones para calcular\n• f-strings para formatear la salida\n• Comentarios para documentar\n\nDivide el problema en pasos pequeños.',
          example: '// Reporte de recursos\noro = 500;\ngasto = 120;\nrestante = oro - gasto;\nSystem.out.println("Oro restante: {restante}");',
          exampleOutput: 'Oro restante: 380',
        },
        challenge: {
          instruction: 'Crea variables: cpu = 78, ram = 62, disco = 45. Calcula el promedio de las tres (suma / 3) y usa int() para quedarte solo con el entero. Imprime: "Rendimiento: XX%"  (donde XX es el promedio entero, debería ser 61).',
          initialCode: '// Sistema de monitoreo\n',
          validation: (code, output) => code.includes('cpu') && code.includes('ram') && code.includes('disco') && output.trim().includes('61'),
          hint: 'promedio = int((cpu + ram + disco) / 3);\nSystem.out.println("Rendimiento: {promedio}%");',
          expectedOutput: 'Rendimiento: 61%',
        },
        decision: {
          text: 'Has completado los fundamentos. EVA te ofrece una elección.',
          options: [
            { text: '📊 Ver estadísticas del sistema', consequence: 'Descubres métricas ocultas del rendimiento. +20 XP.', bonusXp: 20 },
            { text: '🚀 Avanzar directamente', consequence: 'Tu eficiencia impresiona al sistema. Desbloqueas velocidad extra.' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 2: CONDICIONALES (10 niveles)
  // ============================================================
  {
    id: 'condicionales',
    title: 'Condicionales',
    description: 'Toma decisiones con código',
    icon: '🔀',
    color: 'neon-blue',
    levels: [
      {
        id: 'comparaciones',
        title: 'Operadores de Comparación',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de comparación iniciado...' },
          { speaker: 'mentor', text: 'Antes de tomar decisiones, necesitas poder comparar valores.' },
          { speaker: 'mentor', text: 'Java usa operadores que devuelven true o false.' },
        ],
        lesson: {
          concept: 'Operadores de comparación',
          explanation: 'Comparan dos valores y devuelven true o false:\n\n==  igual a         5 == 5  → true\n!=  diferente de    5 != 3  → true\n>   mayor que       5 > 3   → true\n<   menor que       5 < 3   → false\n>=  mayor o igual   5 >= 5  → true\n<=  menor o igual   3 <= 5  → true',
          example: 'a = 10;\nb = 5;\nSystem.out.println(a == b);\nSystem.out.println(a > b);\nSystem.out.println(a != b);\nSystem.out.println(a <= b);',
          exampleOutput: 'false\nTrue\nTrue\nFalse',
        },
        challenge: {
          instruction: 'Tienes nivel = 7 y nivel_requerido = 5. Imprime el resultado de comparar si nivel es mayor o igual a nivel_requerido.',
          initialCode: 'nivel = 7;\nnivel_requerido = 5;\n// Compara e imprime\n',
          validation: (code, output) => code.includes('>=') && output.trim() === 'true',
          hint: 'System.out.println(nivel >= nivel_requerido);',
          expectedOutput: 'true',
        },
      },
      {
        id: 'if_simple',
        title: 'Primera Decisión',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Motor de decisiones activado...' },
          { speaker: 'mentor', text: 'La instrucción if ejecuta código solo SI una condición es verdadera.' },
          { speaker: 'mentor', text: 'El código dentro del if debe estar indentado (4 espacios).' },
        ],
        lesson: {
          concept: 'if — Condicional simple',
          explanation: 'Estructura básica:\n\nif condición:\n    código si es true\n\nIMPORTANTE: La indentación (4 espacios) es obligatoria.\nSin ella, Java da error.\n\nEl código indentado solo se ejecuta si la condición es true.',
          example: 'temperatura = 85;\nif temperatura > 70:\n    System.out.println("Alerta de calor");\nSystem.out.println("Monitoreo activo");',
          exampleOutput: 'Alerta de calor\nMonitoreo activo',
        },
        challenge: {
          instruction: 'Tienes energia = 80. Si energia es mayor a 50, imprime "Sistema estable". Después (fuera del if) imprime "Check completado".',
          initialCode: 'energia = 80;\n// Tu condicional aquí\n',
          validation: (code, output) => code.includes('if') && output.trim() === 'Sistema estable\nCheck completado',
          hint: 'if (energia > 50)\n    System.out.println("Sistema estable");\nSystem.out.println("Check completado");',
          expectedOutput: 'Sistema estable\nCheck completado',
        },
      },
      {
        id: 'if_else',
        title: 'Dos Caminos',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Bifurcación detectada...' },
          { speaker: 'mentor', text: 'Con else defines qué hacer cuando la condición es false.' },
          { speaker: 'mentor', text: 'Siempre se ejecuta uno u otro bloque, nunca ambos.' },
        ],
        lesson: {
          concept: 'if-else — Dos caminos',
          explanation: 'if (condición)\n    código si true\nelse:\n    código si false\n\nEl else no tiene condición propia.\nSe ejecuta cuando el if NO se cumple.\nSiempre se ejecuta exactamente uno de los dos bloques.',
          example: 'edad = 15;\nif edad >= 18:\n    System.out.println("Acceso permitido");\nelse:\n    System.out.println("Acceso denegado");',
          exampleOutput: 'Acceso denegado',
        },
        challenge: {
          instruction: 'Tienes puntos = 45. Si puntos es mayor o igual a 60, imprime "Aprobado". Si no, imprime "Reprobado".',
          initialCode: 'puntos = 45;\n// if-else\n',
          validation: (code, output) => code.includes('if') && code.includes('else') && output.trim() === 'Reprobado',
          hint: 'if (puntos >= 60)\n    System.out.println("Aprobado");\nelse:\n    System.out.println("Reprobado");',
          expectedOutput: 'Reprobado',
        },
        decision: {
          text: 'El sistema detecta una anomalía en el sector 7. ¿Cómo respondes?',
          options: [
            { text: '🔍 Investigar con cautela', consequence: 'Descubres un subsistema oculto con datos valiosos. +20 XP.', bonusXp: 20 },
            { text: '🚨 Activar protocolo de emergencia', consequence: 'El sector se sella. Estás a salvo.' },
          ],
        },
      },
      {
        id: 'if_elif_else',
        title: 'Múltiples Caminos',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Árbol de decisiones expandido...' },
          { speaker: 'mentor', text: 'else if (abreviatura de "else if") te permite verificar múltiples condiciones.' },
          { speaker: 'mentor', text: 'Java las evalúa en orden: la primera que sea true se ejecuta.' },
        ],
        lesson: {
          concept: 'if-else if-else — Múltiples caminos',
          explanation: 'if (condición1)\n    código 1\nelif condición2:\n    código 2\nelif condición3:\n    código 3\nelse:\n    código por defecto\n\nSolo se ejecuta UN bloque.\nSe evalúan en orden de arriba a abajo.\nPuedes tener cuantos else if necesites.',
          example: 'nota = 75;\nif nota >= 90:\n    System.out.println("Excelente");\nelif nota >= 70:;\n    System.out.println("Bueno");\nelif nota >= 50:;\n    System.out.println("Regular");\nelse:\n    System.out.println("Insuficiente");',
          exampleOutput: 'Bueno',
        },
        challenge: {
          instruction: 'Tienes temperatura = 85. Si >90 imprime "PELIGRO", si >70 imprime "ALERTA", si >50 imprime "NORMAL", si no imprime "FRIO".',
          initialCode: 'temperatura = 85;\n// Múltiples condiciones\n',
          validation: (code, output) => code.includes('else if') && output.trim() === 'ALERTA',
          hint: 'if (temperatura > 90)\n    System.out.println("PELIGRO");\nelif temperatura > 70:;\n    System.out.println("ALERTA");\n...;',
          expectedOutput: 'ALERTA',
        },
      },
      {
        id: 'logica_and',
        title: 'Operador AND',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo lógico AND conectado...' },
          { speaker: 'mentor', text: 'El operador && requiere que AMBAS condiciones sean true.' },
          { speaker: 'mentor', text: 'Si cualquiera es false, todo el resultado es false.' },
        ],
        lesson: {
          concept: 'Operador and',
          explanation: 'and — ambas deben ser true:\n\nTrue && true   → true\nTrue && false  → false\nFalse && true  → false\nFalse && false → false\n\nÚsalo cuando necesitas que se cumplan TODAS las condiciones.',
          example: 'nivel = 5;\ntiene_llave = true;\nif nivel >= 3 && tiene_llave:\n    System.out.println("Puerta abierta");\nelse:\n    System.out.println("No puedes pasar");',
          exampleOutput: 'Puerta abierta',
        },
        challenge: {
          instruction: 'Un agente tiene energia=80 y escudo=true. Si la energía es >50 AND tiene escudo, imprime "Listo para combate". Si no, imprime "No preparado".',
          initialCode: 'energia = 80;\nescudo = true;\n// Evalúa con and\n',
          validation: (code, output) => code.includes('and') && output.trim() === 'Listo para combate',
          hint: 'if (energia > 50 && escudo)\n    System.out.println("Listo para combate");',
          expectedOutput: 'Listo para combate',
        },
      },
      {
        id: 'logica_or',
        title: 'Operador OR',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo lógico OR conectado...' },
          { speaker: 'mentor', text: 'El operador || requiere que AL MENOS UNA condición sea true.' },
          { speaker: 'mentor', text: 'Solo es false cuando AMBAS son false.' },
        ],
        lesson: {
          concept: 'Operador or',
          explanation: 'or — al menos una debe ser true:\n\nTrue || true   → true\nTrue || false  → true\nFalse || true  → true\nFalse || false → false\n\nÚsalo cuando cualquiera de las condiciones es suficiente.',
          example: 'es_admin = false;\ntiene_permiso = true;\nif es_admin || tiene_permiso:\n    System.out.println("Acceso concedido");\nelse:\n    System.out.println("Acceso denegado");',
          exampleOutput: 'Acceso concedido',
        },
        challenge: {
          instruction: 'Tienes rango = "capitan" y nivel = 3. Si rango es "general" OR nivel > 5, imprime "Comando autorizado". Si no, imprime "Sin autorizacion".',
          initialCode: 'rango = "capitan";\nnivel = 3;\n// Evalúa con or\n',
          validation: (code, output) => code.includes('or') && output.trim() === 'Sin autorizacion',
          hint: 'if (rango == "general" or nivel > 5)\n    System.out.println("Comando autorizado");\nelse:\n    System.out.println("Sin autorizacion");',
          expectedOutput: 'Sin autorizacion',
        },
      },
      {
        id: 'logica_not',
        title: 'Operador NOT',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Inversor lógico activo...' },
          { speaker: 'mentor', text: 'El operador not invierte un valor: true se vuelve false y viceversa.' },
          { speaker: 'mentor', text: 'Es útil para verificar que algo NO sea verdadero.' },
        ],
        lesson: {
          concept: 'Operador not',
          explanation: 'not — invierte el valor:\n\nnot true  → false\nnot false → true\n\nSe puede combinar con && y or:\nif not es_peligroso && tiene_energia:\n    avanzar()',
          example: 'bloqueado = false;\nif not bloqueado:\n    System.out.println("Camino libre");\nelse:\n    System.out.println("Camino bloqueado");',
          exampleOutput: 'Camino libre',
        },
        challenge: {
          instruction: 'Tienes sistema_apagado = false. Si el sistema NO está apagado (usa not), imprime "Sistema operativo". Si no, imprime "Sistema offline".',
          initialCode: 'sistema_apagado = false;\n// Usa not\n',
          validation: (code, output) => code.includes('not') && output.trim() === 'Sistema operativo',
          hint: 'if (not sistema_apagado)\n    System.out.println("Sistema operativo");',
          expectedOutput: 'Sistema operativo',
        },
      },
      {
        id: 'condiciones_anidadas',
        title: 'Decisiones Complejas',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Procesador de decisiones avanzado...' },
          { speaker: 'mentor', text: 'Puedes poner un if dentro de otro if. Esto se llama anidamiento.' },
          { speaker: 'mentor', text: 'Cada nivel de anidamiento necesita más indentación.' },
        ],
        lesson: {
          concept: 'Condicionales anidados',
          explanation: 'Un if (dentro de otro if)\n\nif condición_externa:\n    if (condición_interna)\n        código\n    else\n        código\nelse:\n    código\n\nCada nivel añade 4 espacios de indentación.\nNo abuses: si tienes más de 3 niveles, replantea la lógica.',
          example: 'edad = 20;\ntiene_id = true;\nif edad >= 18:\n    if (tiene_id)\n        System.out.println("Puede entrar");\n    else\n        System.out.println("Necesita ID");\nelse:\n    System.out.println("Es menor de edad");',
          exampleOutput: 'Puede entrar',
        },
        challenge: {
          instruction: 'Tienes nivel=8 y tiene_clave=true. Si nivel>=5, verifica si tiene_clave: si sí imprime "Acceso total", si no "Necesitas clave". Si nivel<5 imprime "Nivel insuficiente".',
          initialCode: 'nivel = 8;\ntiene_clave = true;\n// Condicionales anidados\n',
          validation: (code, output) => output.trim() === 'Acceso total' && code.includes('if') && (code.match(/if/g) || []).length >= 2,
          hint: 'if (nivel >= 5)\n    if (tiene_clave)\n        System.out.println("Acceso total");\n    else\n        System.out.println("Necesitas clave");\nelse:\n    System.out.println("Nivel insuficiente");',
          expectedOutput: 'Acceso total',
        },
        decision: {
          text: 'Un virus intenta infiltrarse. Tienes 2 antivirus: uno rápido pero básico, otro lento pero avanzado.',
          options: [
            { text: '⚡ Antivirus rápido', consequence: 'Eliminas el virus a tiempo. +15 XP.', bonusXp: 15 },
            { text: '🛡️ Antivirus avanzado', consequence: 'Descubres que el virus era un test de EVA. Desbloqueas módulo secreto.', unlock: 'secret_module' },
          ],
        },
      },
      {
        id: 'in_operador',
        title: 'Verificar Pertenencia',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Buscador de pertenencia activo...' },
          { speaker: 'mentor', text: 'El operador in verifica si un elemento existe dentro de otro.' },
          { speaker: 'mentor', text: 'Funciona con strings, listas y más.' },
        ],
        lesson: {
          concept: 'Operador in',
          explanation: 'in verifica pertenencia:\n\n"a" in "hola"     → true (letra en texto)\n5 in [1, 3, 5, 7] → true (en lista)\n"x" not in "hola" → true (no está)\n\nMuy útil para buscar dentro de colecciones.',
          example: 'fruta = "manzana";\nif "ana" in fruta:\n    System.out.println("Contiene ana");\n\nnumeros = [1, 2, 3, 4, 5];\nif 3 in numeros:\n    System.out.println("El 3 está en la lista");',
          exampleOutput: 'Contiene ana\nEl 3 está en la lista',
        },
        challenge: {
          instruction: 'Tienes password = "admin123". Verifica si "admin" está dentro de password. Si sí, imprime "Password debil". Si no, imprime "Password aceptable".',
          initialCode: 'password = "admin123";\n// Verifica con in\n',
          validation: (code, output) => code.includes(' in ') && output.trim() === 'Password debil',
          hint: 'if ("admin" in password)\n    System.out.println("Password debil");',
          expectedOutput: 'Password debil',
        },
      },
      {
        id: 'proyecto_acceso',
        title: 'Sistema de Acceso',
        xpReward: 120,
        story: [
          { speaker: 'system', text: '> EVALUACIÓN DE CONDICIONALES...' },
          { speaker: 'mentor', text: 'Construye un sistema de control de acceso completo usando todo lo aprendido.' },
        ],
        lesson: {
          concept: 'Proyecto: Sistema de acceso',
          explanation: 'Combina:\n• Comparaciones (==, >=, <=)\n• if / else if / else\n• and / or / not\n• in para verificar pertenencia\n\nPiensa en los casos posibles antes de escribir.',
          example: 'usuario = "admin";\nnivel = 10;\nif usuario == "admin" and nivel >= 5:\n    System.out.println("Bienvenido, administrador");\nelif nivel >= 3:;\n    System.out.println("Acceso básico");\nelse:\n    System.out.println("Sin acceso");',
          exampleOutput: 'Bienvenido, administrador',
        },
        challenge: {
          instruction: 'Tienes rol="operador" y clearance=7. Si rol es "admin", imprime "Control total". Si rol es "operador" AND clearance>=5, imprime "Acceso operativo". Si no, imprime "Acceso denegado".',
          initialCode: 'rol = "operador";\nclearance = 7;\n// Sistema de acceso\n',
          validation: (code, output) => code.includes('else if') && code.includes('and') && output.trim() === 'Acceso operativo',
          hint: 'if (rol == "admin")\n    System.out.println("Control total");\nelif rol == "operador" and clearance >= 5:;\n    System.out.println("Acceso operativo");\nelse:\n    System.out.println("Acceso denegado");',
          expectedOutput: 'Acceso operativo',
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 3: BUCLES (10 niveles)
  // ============================================================
  {
    id: 'bucles',
    title: 'Bucles',
    description: 'Repite acciones automáticamente',
    icon: '🔄',
    color: 'neon-purple',
    levels: [
      {
        id: 'for_basico',
        title: 'Tu Primer Bucle',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Motor de iteración iniciado...' },
          { speaker: 'mentor', text: 'Los bucles repiten código automáticamente. Imagina revisar 1000 sensores uno por uno... tedioso.' },
          { speaker: 'mentor', text: 'El bucle for recorre una secuencia y ejecuta código para cada elemento.' },
        ],
        lesson: {
          concept: 'for — Bucle básico',
          explanation: '¿Para qué sirve for?\nPara repetir código un número conocido de veces\no para recorrer cada elemento de una colección.\n\nfor variable in secuencia:\n    código a repetir\n\nLa variable toma el valor de cada elemento.',
          example: 'for i in range(5):\n    System.out.println(i);',
          exampleOutput: '0\n1\n2\n3\n4',
        },
        challenge: {
          instruction: 'Imprime los números del 1 al 5, cada uno en una línea.',
          initialCode: '// Usa for con range()\n',
          validation: (code, output) => code.includes('for') && code.includes('range') && output.trim() === '1\n2\n3\n4\n5',
          hint: 'for i in range(1, 6):\n    System.out.println(i);',
          expectedOutput: '1\n2\n3\n4\n5',
        },
      },
      {
        id: 'range_detalle',
        title: 'El Poder de range()',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Generador de rangos calibrado...' },
          { speaker: 'mentor', text: 'range() es más flexible de lo que parece. Puede empezar donde quieras y saltar de N en N.' },
        ],
        lesson: {
          concept: 'range() en detalle',
          explanation: 'range() genera secuencias de números:\n\nrange(fin)           → 0, 1, ..., fin-1\nrange(inicio, fin)   → inicio, ..., fin-1\nrange(inicio, fin, paso) → con incremento\n\nEl fin NUNCA se incluye.\nEl paso puede ser negativo para contar hacia atrás.',
          example: 'for i in range(0, 10, 2):\n    System.out.println(i);\nSystem.out.println("---");\nfor i in range(3, 0, -1):\n    System.out.println(i);',
          exampleOutput: '0\n2\n4\n6\n8\n---\n3\n2\n1',
        },
        challenge: {
          instruction: 'Imprime los números pares del 2 al 10 (incluido) usando range con paso de 2.',
          initialCode: '// Usa range con 3 argumentos\n',
          validation: (code, output) => code.includes('range') && output.trim() === '2\n4\n6\n8\n10',
          hint: 'for i in range(2, 11, 2):\n    System.out.println(i);',
          expectedOutput: '2\n4\n6\n8\n10',
        },
      },
      {
        id: 'for_listas',
        title: 'Recorrer Colecciones',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Escáner de datos secuencial...' },
          { speaker: 'mentor', text: 'for no solo funciona con range(). Puede recorrer cualquier lista o texto.' },
        ],
        lesson: {
          concept: 'for con listas y strings',
          explanation: 'for recorre cualquier secuencia:\n\nfor letra in "Java":\n    System.out.println(letra)\n\nfor fruta in ["manzana", "pera"]:\n    System.out.println(fruta)\n\nLa variable toma cada elemento de la secuencia.',
          example: 'sensores = [25, 30, 28, 35];\nfor s in sensores:\n    System.out.println("Temp: {s}C");',
          exampleOutput: 'Temp: 25C\nTemp: 30C\nTemp: 28C\nTemp: 35C',
        },
        challenge: {
          instruction: 'Tienes la lista modulos = ["motor", "radar", "escudo"]. Recórrela e imprime cada módulo en formato "- modulo".',
          initialCode: 'modulos = ["motor", "radar", "escudo"];\n// Recorre e imprime\n',
          validation: (code, output) => code.includes('for') && output.trim() === '- motor\n- radar\n- escudo',
          hint: 'for m in modulos:\n    System.out.println("- {m}");',
          expectedOutput: '- motor\n- radar\n- escudo',
        },
        decision: {
          text: 'Encuentras un bucle infinito en el sistema que consume recursos.',
          options: [
            { text: '🛑 Terminarlo inmediatamente', consequence: 'El sistema se estabiliza. +15 XP.', bonusXp: 15 },
            { text: '📊 Analizar qué calculaba', consequence: 'Era un algoritmo de optimización antiguo. Obtienes código legacy.', unlock: 'legacy_code' },
          ],
        },
      },
      {
        id: 'for_acumulador',
        title: 'Acumuladores',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Módulo de acumulación activo...' },
          { speaker: 'mentor', text: 'Un patrón muy común es usar una variable para ir acumulando resultados dentro de un bucle.' },
        ],
        lesson: {
          concept: 'Patrón acumulador',
          explanation: 'El patrón acumulador:\n1. Inicializa una variable antes del bucle\n2. En cada iteración, actualízala\n3. Después del bucle, tiene el resultado\n\ntotal = 0\nfor n in numeros:\n    total += n\n// total tiene la suma\n\n+= es abreviación de total = total + n',
          example: 'numeros = [10, 20, 30, 40];\ntotal = 0;\nfor n in numeros:\n    total += n;\nSystem.out.println("Suma: {total}");',
          exampleOutput: 'Suma: 100',
        },
        challenge: {
          instruction: 'Calcula el producto de todos los números en datos = [2, 3, 4, 5]. Usa un acumulador iniciando en 1 y multiplicando (usa *=). Imprime el resultado.',
          initialCode: 'datos = [2, 3, 4, 5];\n// Acumulador de producto\n',
          validation: (code, output) => code.includes('for') && code.includes('*=') && output.trim() === '120',
          hint: 'producto = 1;\nfor n in datos:\n    producto *= n;\nSystem.out.println(producto);',
          expectedOutput: '120',
        },
      },
      {
        id: 'while_basico',
        title: 'Bucle While',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Control de flujo condicional...' },
          { speaker: 'mentor', text: 'El bucle while repite código MIENTRAS una condición sea verdadera.' },
          { speaker: 'mentor', text: '¿Cuándo usar while en vez de for? Cuando NO sabes cuántas veces necesitas repetir.' },
        ],
        lesson: {
          concept: 'while — Bucle condicional',
          explanation: '¿Para qué sirve while?\nPara repetir cuando no sabes cuántas iteraciones habrá.\n\nwhile condición:\n    código\n    actualizar condición  ← ¡CRUCIAL!\n\nSi la condición nunca cambia a false = bucle infinito.\n\nfor = sabes cuántas veces\nwhile = depende de una condición',
          example: 'combustible = 5;\nwhile combustible > 0:\n    System.out.println("Fuel: {combustible}");\n    combustible -= 1;\nSystem.out.println("Tanque vacio");',
          exampleOutput: 'Fuel: 5\nFuel: 4\nFuel: 3\nFuel: 2\nFuel: 1\nTanque vacio',
        },
        challenge: {
          instruction: 'Simula una cuenta regresiva desde 3. Imprime cada número y al final imprime "Despegue!".',
          initialCode: 'cuenta = 3;\n// Cuenta regresiva con while\n',
          validation: (code, output) => code.includes('while') && output.trim() === '3\n2\n1\nDespegue!',
          hint: 'while (cuenta > 0)\n    System.out.println(cuenta);\n    cuenta -= 1;\nSystem.out.println("Despegue!");',
          expectedOutput: '3\n2\n1\nDespegue!',
        },
      },
      {
        id: 'while_vs_for',
        title: '¿For o While?',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Comparador de bucles...' },
          { speaker: 'mentor', text: 'Saber cuándo usar for y cuándo while es clave para un buen programador.' },
        ],
        lesson: {
          concept: 'Cuándo usar cada bucle',
          explanation: 'USA FOR cuando:\n• Sabes cuántas veces repetir\n• Recorres una lista/rango\n• Iteras sobre una colección\n\nUSA WHILE cuando:\n• Dependes de una condición variable\n• No sabes cuántas iteraciones habrá\n• Esperas un evento o cambio de estado\n• Necesitas un bucle "hasta que..."',
          example: '// for: sé que son 5 sensores\nfor i in range(5):\n    System.out.println("Sensor {i}: OK");\n\n// while: hasta que el valor sea correcto\nvalor = 100;\nwhile valor > 10:\n    valor = valor // 2;\nSystem.out.println("Final: {valor}");',
          exampleOutput: 'Sensor 0: OK\nSensor 1: OK\nSensor 2: OK\nSensor 3: OK\nSensor 4: OK\nFinal: 6',
        },
        challenge: {
          instruction: 'Tienes potencia = 1024. Divide entre 2 con while MIENTRAS sea mayor a 1. Imprime cada valor. Al final debería llegar a 1.',
          initialCode: 'potencia = 1024;\n// Divide hasta llegar a 1\n',
          validation: (code, output) => code.includes('while') && output.trim() === '1024\n512\n256\n128\n64\n32\n16\n8\n4\n2\n1',
          hint: 'while (potencia >= 1)\n    System.out.println(potencia);\n    potencia = potencia // 2;',
          expectedOutput: '1024\n512\n256\n128\n64\n32\n16\n8\n4\n2\n1',
        },
      },
      {
        id: 'break_continue',
        title: 'Break y Continue',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Controles de flujo de bucle...' },
          { speaker: 'mentor', text: 'break detiene el bucle completamente. continue salta a la siguiente iteración.' },
        ],
        lesson: {
          concept: 'break y continue',
          explanation: 'break → sale del bucle inmediatamente\ncontinue → salta al siguiente ciclo\n\nbreak: úsalo para salir cuando encuentres lo que buscas.\ncontinue: úsalo para saltar elementos que no te interesan.',
          example: '// break: buscar un número\nfor n in [1, 2, 3, 4, 5]:\n    if (n == 3)\n        System.out.println("Encontrado: {n}");\n        break;\n\n// continue: saltar pares\nfor n in range(1, 6):\n    if (n % 2 == 0)\n        continue;\n    System.out.println(n);',
          exampleOutput: 'Encontrado: 3\n1\n3\n5',
        },
        challenge: {
          instruction: 'Recorre los números del 1 al 10. Si el número es 7, imprime "Alerta: 7" y sal del bucle con break. Si el número es par, sáltalo con continue. Imprime los demás.',
          initialCode: '// Usa break y continue\n',
          validation: (code, output) => code.includes('break') && code.includes('continue') && output.trim() === '1\n3\n5\nAlerta: 7',
          hint: 'for i in range(1, 11):\n    if (i == 7)\n        System.out.println("Alerta: 7");\n        break;\n    if (i % 2 == 0)\n        continue;\n    System.out.println(i);',
          expectedOutput: '1\n3\n5\nAlerta: 7',
        },
      },
      {
        id: 'bucles_anidados',
        title: 'Bucles Anidados',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Motor de iteración multinivel...' },
          { speaker: 'mentor', text: 'Un bucle dentro de otro bucle. El interno se ejecuta COMPLETAMENTE por cada paso del externo.' },
        ],
        lesson: {
          concept: 'Bucles dentro de bucles',
          explanation: 'for externo:\n    for interno:\n        código\n\nSi externo itera 3 veces e interno 4 veces:\nel código interno se ejecuta 3 × 4 = 12 veces.\n\nÚtil para matrices, tablas, combinaciones.',
          example: 'for fila in range(1, 4):\n    for col in range(1, 4):\n        System.out.println("({fila},{col})", end=" ");\n    System.out.println();',
          exampleOutput: '(1,1) (1,2) (1,3) \n(2,1) (2,2) (2,3) \n(3,1) (3,2) (3,3) ',
        },
        challenge: {
          instruction: 'Imprime la tabla de multiplicar del 3 (del 3x1 al 3x5). Formato: "3 x 1 = 3"',
          initialCode: '// Tabla del 3\n',
          validation: (code, output) => code.includes('for') && output.trim() === '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15',
          hint: 'for i in range(1, 6):\n    System.out.println("3 x {i} = {3 * i}");',
          expectedOutput: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15',
        },
        decision: {
          text: 'EVA detecta que un proceso consume muchos recursos con bucles innecesarios.',
          options: [
            { text: '🔧 Optimizar el código', consequence: 'Aprendes sobre eficiencia. +25 XP.', bonusXp: 25 },
            { text: '💾 Guardar para analizar', consequence: 'Obtienes un ejemplo de código legacy para estudiar.', unlock: 'efficiency' },
          ],
        },
      },
      {
        id: 'patrones_bucles',
        title: 'Patrones con Bucles',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Generador de patrones...' },
          { speaker: 'mentor', text: 'Los bucles son perfectos para generar patrones y secuencias.' },
        ],
        lesson: {
          concept: 'Patrones comunes con bucles',
          explanation: 'Patrones útiles:\n\n1. Contar con condición:\ncontador = 0\nfor item in lista:\n    if (condición)\n        contador += 1\n\n2. Construir strings:\nresultado = ""\nfor letra in texto:\n    resultado += letra.upper()\n\n3. Filtrar:\nfor n in numeros:\n    if (n > 0)\n        System.out.println(n)',
          example: 'nums = [3, -1, 4, -2, 7, -5];\npositivos = 0;\nfor n in nums:\n    if (n > 0)\n        positivos += 1;\nSystem.out.println("Positivos: {positivos}");',
          exampleOutput: 'Positivos: 3',
        },
        challenge: {
          instruction: 'Tienes valores = [12, 5, 8, 3, 15, 7, 20]. Cuenta cuántos son mayores a 10 e imprime "Mayores a 10: X" donde X es la cantidad.',
          initialCode: 'valores = [12, 5, 8, 3, 15, 7, 20];\n// Cuenta los mayores a 10\n',
          validation: (code, output) => code.includes('for') && output.trim() === 'Mayores a 10: 3',
          hint: 'contador = 0;\nfor v in valores:\n    if (v > 10)\n        contador += 1;\nSystem.out.println("Mayores a 10: {contador}");',
          expectedOutput: 'Mayores a 10: 3',
        },
      },
      {
        id: 'proyecto_bucles',
        title: 'Escáner de Sistema',
        xpReward: 130,
        story: [
          { speaker: 'system', text: '> EVALUACIÓN DE BUCLES...' },
          { speaker: 'mentor', text: 'Demuestra tu dominio de los bucles creando un escáner que analice datos del sistema.' },
        ],
        lesson: {
          concept: 'Proyecto: Análisis con bucles',
          explanation: 'Combina for, while, break, continue, acumuladores\ny condicionales para resolver problemas complejos.\n\nPiensa en:\n1. ¿Qué necesito recorrer?\n2. ¿Qué condiciones aplican?\n3. ¿Qué acumulo?',
          example: 'datos = [88, 92, 45, 67, 91, 34];\naltos = 0;\nfor d in datos:\n    if (d >= 80)\n        altos += 1;\nSystem.out.println("{altos} valores altos de {len(datos)}");',
          exampleOutput: '3 valores altos de 6',
        },
        challenge: {
          instruction: 'Tienes temps = [72, 85, 91, 68, 95, 78, 88]. Recorre la lista: imprime "OK" si temp<=80, "WARN" si <=90, "CRIT" si >90. Al final imprime cuántos son críticos: "Criticos: X".',
          initialCode: 'temps = [72, 85, 91, 68, 95, 78, 88];\ncriticos = 0;\n// Analiza cada temperatura\n',
          validation: (code, output) => {
            const lines = output.trim().split('\n');
            return code.includes('for') && lines.length === 8 && lines[0] === 'OK' && lines[2] === 'CRIT' && lines[7] === 'Criticos: 2';
          },
          hint: 'for t in temps:\n    if (t > 90)\n        System.out.println("CRIT");\n        criticos += 1;\n    else if (t > 80)\n        System.out.println("WARN");\n    else\n        System.out.println("OK");\nSystem.out.println("Criticos: {criticos}");',
          expectedOutput: 'OK\nWARN\nCRIT\nOK\nCRIT\nOK\nWARN\nCriticos: 2',
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 4: ESTRUCTURAS DE DATOS (10 niveles)
  // ============================================================
  {
    id: 'estructuras',
    title: 'Estructuras de Datos',
    description: 'Organiza y manipula información',
    icon: '📦',
    color: 'neon-yellow',
    levels: [
      {
        id: 'listas_crear',
        title: 'Crear Listas',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Banco de datos conectado...' },
          { speaker: 'mentor', text: 'Las listas guardan múltiples valores en orden. Son la estructura más usada en Java.' },
        ],
        lesson: {
          concept: 'Listas — Crear y acceder',
          explanation: 'Una lista es una colección ordenada:\n\nlista = [elem1, elem2, elem3]\n\nAcceso por índice (empieza en 0):\nlista[0] → primer elemento\nlista[-1] → último elemento\nlen(lista) → cantidad de elementos',
          example: 'colores = ["rojo", "verde", "azul"];\nSystem.out.println(colores[0]);\nSystem.out.println(colores[-1]);\nSystem.out.println(len(colores));',
          exampleOutput: 'rojo\nazul\n3',
        },
        challenge: {
          instruction: 'Crea una lista "sensores" con valores [25, 30, 28, 35, 22]. Imprime el primer valor y el último.',
          initialCode: '// Crea la lista e imprime\n',
          validation: (code, output) => code.includes('sensores') && output.trim() === '25\n22',
          hint: 'sensores = [25, 30, 28, 35, 22];\nSystem.out.println(sensores[0]);\nSystem.out.println(sensores[-1]);',
          expectedOutput: '25\n22',
        },
      },
      {
        id: 'listas_metodos',
        title: 'Modificar Listas',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Herramientas de lista cargadas...' },
          { speaker: 'mentor', text: 'Las listas son mutables: puedes agregar, eliminar y cambiar elementos.' },
        ],
        lesson: {
          concept: 'Métodos de listas',
          explanation: 'Métodos principales:\n\n.append(elem)  → agrega al final\n.insert(i, e)  → inserta en posición i\n.remove(elem)  → elimina primera aparición\n.pop()         → elimina y retorna el último\n.pop(i)        → elimina en posición i\n.sort()        → ordena la lista\n.reverse()     → invierte el orden',
          example: 'nums = [3, 1, 4];\nnums.append(2);\nSystem.out.println(nums);\nnums.sort();\nSystem.out.println(nums);\nnums.remove(3);\nSystem.out.println(nums);',
          exampleOutput: '[3, 1, 4, 2]\n[1, 2, 3, 4]\n[1, 2, 4]',
        },
        challenge: {
          instruction: 'Tienes equipos = ["motor", "radar"]. Agrega "escudo" con append, luego agrega "laser" con append. Imprime la lista final.',
          initialCode: 'equipos = ["motor", "radar"];\n// Agrega elementos\n',
          validation: (code, output) => code.includes('append') && output.trim().includes('escudo') && output.trim().includes('laser'),
          hint: 'equipos.append("escudo");\nequipos.append("laser");\nSystem.out.println(equipos);',
          expectedOutput: "['motor', 'radar', 'escudo', 'laser']",
        },
      },
      {
        id: 'listas_slicing',
        title: 'Cortar Listas',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Cortador de secuencias activo...' },
          { speaker: 'mentor', text: 'Slicing te permite obtener partes de una lista o string.' },
        ],
        lesson: {
          concept: 'Slicing — Subcadenas y sublistas',
          explanation: 'Slicing: lista[inicio:fin:paso]\n\nlista[1:4]  → del índice 1 al 3\nlista[:3]   → del inicio al 2\nlista[2:]   → del 2 al final\nlista[::2]  → todos, saltando de 2 en 2\nlista[::-1] → invertir\n\nFunciona igual con strings.',
          example: 'datos = [10, 20, 30, 40, 50, 60];\nSystem.out.println(datos[1:4]);\nSystem.out.println(datos[:3]);\nSystem.out.println(datos[::2]);',
          exampleOutput: '[20, 30, 40]\n[10, 20, 30]\n[10, 30, 50]',
        },
        challenge: {
          instruction: 'Tienes codigos = [100, 200, 300, 400, 500]. Imprime los 3 primeros elementos usando slicing.',
          initialCode: 'codigos = [100, 200, 300, 400, 500];\n// Usa slicing\n',
          validation: (code, output) => code.includes(':') && output.trim() === '[100, 200, 300]',
          hint: 'System.out.println(codigos[:3]);',
          expectedOutput: '[100, 200, 300]',
        },
        decision: {
          text: 'Descubres coordenadas encriptadas en una lista.',
          options: [
            { text: '🔓 Desencriptar', consequence: 'Encuentras la ubicación de un servidor antiguo. +25 XP.', bonusXp: 25 },
            { text: '📋 Guardar para después', consequence: 'Las almacenas de forma segura.' },
          ],
        },
      },
      {
        id: 'listas_funciones',
        title: 'Funciones con Listas',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Procesador de listas...' },
          { speaker: 'mentor', text: 'Java tiene funciones integradas muy útiles para trabajar con listas.' },
        ],
        lesson: {
          concept: 'Funciones útiles con listas',
          explanation: 'Funciones integradas:\n\nmax(lista)    → valor máximo\nmin(lista)    → valor mínimo\nsum(lista)    → suma total\nlen(lista)    → cantidad\nsorted(lista) → nueva lista ordenada\n\nmax y min también funcionan con strings (orden alfabético).',
          example: 'notas = [85, 92, 78, 95, 88];\nSystem.out.println("Max: {max(notas)}");\nSystem.out.println("Min: {min(notas)}");\nSystem.out.println("Suma: {sum(notas)}");\nSystem.out.println("Promedio: {sum(notas) // len(notas)}");',
          exampleOutput: 'Max: 95\nMin: 78\nSuma: 438\nPromedio: 87',
        },
        challenge: {
          instruction: 'Tienes lecturas = [45, 67, 89, 23, 56, 78]. Imprime el máximo, el mínimo y el promedio entero (usa // para dividir).',
          initialCode: 'lecturas = [45, 67, 89, 23, 56, 78];\n// Analiza la lista\n',
          validation: (code, output) => output.trim() === '89\n23\n59',
          hint: 'System.out.println(max(lecturas));\nSystem.out.println(min(lecturas));\nSystem.out.println(sum(lecturas) // len(lecturas));',
          expectedOutput: '89\n23\n59',
        },
      },
      {
        id: 'diccionarios_crear',
        title: 'Registros Clave-Valor',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Base de registros activa...' },
          { speaker: 'mentor', text: 'Los diccionarios almacenan pares de clave-valor. Como una ficha técnica.' },
        ],
        lesson: {
          concept: 'Diccionarios — Crear y acceder',
          explanation: 'Un diccionario asocia claves con valores:\n\ndicc = {"clave": valor, "otra": valor2}\n\nAcceso: dicc["clave"]\nAgregar: dicc["nueva"] = valor\nVerificar: "clave" in dicc\nlen(dicc) → cantidad de pares',
          example: 'agente = {\n    "nombre": "EVA",;\n    "nivel": 10,;\n    "activo": true;\n}\nSystem.out.println(agente["nombre"]);\nSystem.out.println(agente["nivel"]);',
          exampleOutput: 'EVA\n10',
        },
        challenge: {
          instruction: 'Crea un diccionario "servidor" con "nombre": "CORE", "estado": "activo", "usuarios": 42. Imprime el número de usuarios.',
          initialCode: '// Crea el diccionario\n',
          validation: (code, output) => code.includes('{') && output.trim() === '42',
          hint: 'servidor = {"nombre": "CORE", "estado": "activo", "usuarios": 42}\nSystem.out.println(servidor["usuarios"]);',
          expectedOutput: '42',
        },
      },
      {
        id: 'diccionarios_metodos',
        title: 'Manipular Diccionarios',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Herramientas de diccionario...' },
          { speaker: 'mentor', text: 'Los diccionarios tienen métodos poderosos para acceder y recorrer datos.' },
        ],
        lesson: {
          concept: 'Métodos de diccionarios',
          explanation: '.keys()   → todas las claves\n.values() → todos los valores\n.items()  → pares (clave, valor)\n.get(clave, default) → valor o default si no existe\n\nRecorrer:\nfor clave, valor in dicc.items():\n    System.out.println(clave, valor)',
          example: 'stats = {"hp": 100, "atk": 25, "void": 15}\nfor stat, val in stats.items():\n    System.out.println("{stat}: {val}");',
          exampleOutput: 'hp: 100\natk: 25\ndef: 15',
        },
        challenge: {
          instruction: 'Tienes inventario = {"metal": 50, "cristal": 30, "energia": 100}. Recórrelo con .items() e imprime cada par en formato "recurso: cantidad".',
          initialCode: 'inventario = {"metal": 50, "cristal": 30, "energia": 100}\n// Recorre el diccionario\n',
          validation: (code, output) => code.includes('.items()') && output.trim() === 'metal: 50\ncristal: 30\nenergia: 100',
          hint: 'for recurso, cantidad in inventario.items():\n    System.out.println("{recurso}: {cantidad}");',
          expectedOutput: 'metal: 50\ncristal: 30\nenergia: 100',
        },
      },
      {
        id: 'strings_metodos',
        title: 'Superpoderes de Texto',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Procesador de texto avanzado...' },
          { speaker: 'mentor', text: 'Los strings tienen muchos métodos útiles para transformar y analizar texto.' },
        ],
        lesson: {
          concept: 'Métodos de strings',
          explanation: '.upper()     → MAYÚSCULAS\n.lower()     → minúsculas\n.strip()     → quitar espacios\n.replace(a,b) → reemplazar\n.split(sep)  → dividir en lista\n.count(sub)  → contar apariciones\n.startswith() → empieza con\n.endswith()   → termina con',
          example: 'msg = "  Hola Mundo  ";\nSystem.out.println(msg.strip());\nSystem.out.println(msg.strip().upper());\nSystem.out.println("a-b-c".split("-"));\nSystem.out.println("banana".count("a"));',
          exampleOutput: 'Hola Mundo\nHOLA MUNDO\n[\'a\', \'b\', \'c\']\n3',
        },
        challenge: {
          instruction: 'Tienes mensaje = "error:sistema:critico". Sepáralo por ":" con split() e imprime la última palabra en mayúsculas.',
          initialCode: 'mensaje = "error:sistema:critico";\n// Separa e imprime\n',
          validation: (code, output) => code.includes('split') && code.includes('upper') && output.trim() === 'CRITICO',
          hint: 'partes = mensaje.split(":");\nSystem.out.println(partes[-1].upper());',
          expectedOutput: 'CRITICO',
        },
      },
      {
        id: 'tuplas',
        title: 'Datos Inmutables',
        xpReward: 75,
        story: [
          { speaker: 'system', text: '> Registros protegidos...' },
          { speaker: 'mentor', text: 'Las tuplas son como listas, pero no se pueden modificar después de crearlas.' },
        ],
        lesson: {
          concept: 'Tuplas — Colecciones inmutables',
          explanation: 'Tupla: colección ordenada e inmutable\n\ntupla = (elem1, elem2, elem3)\n\nAcceso igual que listas: tupla[0]\nNo puedes usar append, remove, etc.\n\n¿Cuándo usar tuplas?\n• Datos que no deben cambiar\n• Coordenadas: (x, y)\n• Retornar múltiples valores de funciones',
          example: 'coord = (10, 25);\nSystem.out.println("X: {coord[0]}");\nSystem.out.println("Y: {coord[1]}");\n\ncolores = ("rojo", "verde", "azul");\nfor c in colores:\n    System.out.println(c);',
          exampleOutput: 'X: 10\nY: 25\nrojo\nverde\nazul',
        },
        challenge: {
          instruction: 'Crea una tupla "posicion" con valores (5, 10). Imprime "X: 5, Y: 10" usando f-string y los índices de la tupla.',
          initialCode: '// Crea la tupla e imprime\n',
          validation: (code, output) => code.includes('(') && output.trim() === 'X: 5, Y: 10',
          hint: 'posicion = (5, 10);\nSystem.out.println("X: {posicion[0]}, Y: {posicion[1]}");',
          expectedOutput: 'X: 5, Y: 10',
        },
      },
      {
        id: 'listas_diccionarios',
        title: 'Datos Complejos',
        xpReward: 95,
        story: [
          { speaker: 'system', text: '> Estructuras compuestas...' },
          { speaker: 'mentor', text: 'Las listas pueden contener diccionarios y viceversa. Esto permite modelar datos complejos.' },
        ],
        lesson: {
          concept: 'Listas de diccionarios',
          explanation: 'Puedes combinar estructuras:\n\nusuarios = [\n    {"nombre": "Ana", "edad": 25},\n    {"nombre": "Luis", "edad": 30}\n]\n\nAcceso: usuarios[0]["nombre"]\nRecorrer: for u in usuarios: u["nombre"]',
          example: 'items = [;\n    {"nombre": "espada", "poder": 10},;\n    {"nombre": "escudo", "poder": 8}\n];\nfor item in items:\n    System.out.println("{item[\"nombre\"]}: {item[\"poder\"]}");',
          exampleOutput: 'espada: 10\nescudo: 8',
        },
        challenge: {
          instruction: 'Tienes la lista:\nequipo = [{"nombre": "Motor", "estado": "ok"}, {"nombre": "Radar", "estado": "fallo"}, {"nombre": "Arma", "estado": "ok"}]\nRecórrela e imprime solo los que tengan estado "fallo" en formato "FALLO: nombre".',
          initialCode: 'equipo = [{"nombre": "Motor", "estado": "ok"}, {"nombre": "Radar", "estado": "fallo"}, {"nombre": "Arma", "estado": "ok"}];\n// Filtra los que fallen\n',
          validation: (code, output) => code.includes('for') && output.trim() === 'FALLO: Radar',
          hint: 'for e in equipo:\n    if (e["estado"] == "fallo")\n        System.out.println("FALLO: {e[\"nombre\"]}");',
          expectedOutput: 'FALLO: Radar',
        },
        decision: {
          text: 'EVA encuentra una base de datos antigua con información clasificada.',
          options: [
            { text: '🔓 Descifrar los datos', consequence: 'Obtienes el mapa completo del sistema. +30 XP.', bonusXp: 30 },
            { text: '🛡️ Reforzar la seguridad', consequence: 'Proteges el sistema. Desbloqueas encriptación.', unlock: 'encryption' },
          ],
        },
      },
      {
        id: 'proyecto_inventario',
        title: 'Sistema de Inventario',
        xpReward: 140,
        story: [
          { speaker: 'system', text: '> EVALUACIÓN DE ESTRUCTURAS...' },
          { speaker: 'mentor', text: 'Crea un procesador de datos que combine listas, diccionarios y bucles.' },
        ],
        lesson: {
          concept: 'Proyecto: Procesador de datos',
          explanation: 'Combina todo:\n• Listas para colecciones\n• Diccionarios para datos estructurados\n• Bucles para procesar\n• Condicionales para filtrar\n• Acumuladores para resumir',
          example: 'void contar(items)\n    conteo = {}\n    for item in items:\n        if (item in conteo)\n            conteo[item] += 1;\n        else\n            conteo[item] = 1;\n    return conteo;',
          exampleOutput: '',
        },
        challenge: {
          instruction: 'Crea una función "contar_recursos" que reciba una lista de strings y retorne un diccionario con la cuenta de cada uno. Pruébala con ["metal", "cristal", "metal", "energia", "metal"] e imprime el resultado.',
          initialCode: '// Crea la función contar_recursos\n',
          validation: (code, output) => {
            const out = output.trim();
            return code.includes('void') && code.includes('contar_recursos') && out.includes('metal') && out.includes('3');
          },
          hint: 'void contar_recursos(items)\n    conteo = {}\n    for item in items:\n        if (item in conteo)\n            conteo[item] += 1;\n        else\n            conteo[item] = 1;\n    return conteo;',
          expectedOutput: "{'metal': 3, 'cristal': 1, 'energia': 1}",
        },
      },
    ],
  },

  // ============================================================
  // CAPÍTULO 5: FUNCIONES (10 niveles)
  // ============================================================
  {
    id: 'funciones',
    title: 'Funciones',
    description: 'Crea bloques reutilizables de código',
    icon: '⚙️',
    color: 'neon-orange',
    levels: [
      {
        id: 'def_basico',
        title: 'Tu Primera Función',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Compilador de funciones activo...' },
          { speaker: 'mentor', text: 'Las funciones son bloques de código reutilizables. Las defines una vez y las usas cuantas veces quieras.' },
        ],
        lesson: {
          concept: 'Definir y llamar funciones',
          explanation: 'Se definen con void:\n\ndef nombre():\n    código\n\nSe llaman por su nombre:\nnombre()\n\nVentajas:\n• Reutilización de código\n• Organización\n• Evitar repetición',
          example: 'void saludar()\n    System.out.println("Hola desde la funcion!");\n\nsaludar();\nsaludar();',
          exampleOutput: 'Hola desde la funcion!\nHola desde la funcion!',
        },
        challenge: {
          instruction: 'Crea una función "alerta" que imprima "ALERTA: Sistema activo". Llámala 2 veces.',
          initialCode: '// Define la función y llámala\n',
          validation: (code, output) => code.includes('void') && code.includes('alerta') && output.trim() === 'ALERTA: Sistema activo\nALERTA: Sistema activo',
          hint: 'void alerta()\n    System.out.println("ALERTA: Sistema activo");\n\nalerta();\nalerta();',
          expectedOutput: 'ALERTA: Sistema activo\nALERTA: Sistema activo',
        },
      },
      {
        id: 'parametros',
        title: 'Parámetros',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Módulo de parámetros...' },
          { speaker: 'mentor', text: 'Los parámetros permiten que una función reciba datos desde afuera.' },
        ],
        lesson: {
          concept: 'Funciones con parámetros',
          explanation: 'Los parámetros van entre paréntesis:\n\ndef saludar(nombre):\n    System.out.println("Hola, {nombre}!")\n\nsaludar("EVA")  → Hola, EVA!\nsaludar("CORE") → Hola, CORE!\n\nPuedes tener varios parámetros separados por coma.',
          example: 'void presentar(nombre, rol)\n    System.out.println("{nombre} - {rol}");\n\npresentar("EVA", "IA");\npresentar("Core", "Sistema");',
          exampleOutput: 'EVA - IA\nCore - Sistema',
        },
        challenge: {
          instruction: 'Crea una función "estado" que reciba "nombre" y "nivel". Debe imprimir "Agente: nombre (Nivel nivel)". Llámala con ("EVA", 10).',
          initialCode: '// Define la función con 2 parámetros\n',
          validation: (code, output) => code.includes('void') && code.includes('nombre') && output.trim() === 'Agente: EVA (Nivel 10)',
          hint: 'void estado(nombre, nivel)\n    System.out.println("Agente: {nombre} (Nivel {nivel})");\n\nestado("EVA", 10);',
          expectedOutput: 'Agente: EVA (Nivel 10)',
        },
      },
      {
        id: 'return_valor',
        title: 'Retornar Valores',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Motor de retorno activo...' },
          { speaker: 'mentor', text: 'return hace que la función devuelva un resultado que puedes usar después.' },
        ],
        lesson: {
          concept: 'return — Devolver resultados',
          explanation: 'return envía un valor de vuelta:\n\ndef doble(n):\n    return n * 2\n\nresultado = doble(5)  → 10\n\nDiferencia clave:\n• System.out.println() muestra en pantalla\n• return devuelve un valor para usar\n\nDespués de return, la función termina.',
          example: 'void sumar(a, b)\n    return a + b;\n\nresultado = sumar(10, 20);\nSystem.out.println(resultado);\nSystem.out.println(sumar(3, 4));',
          exampleOutput: '30\n7',
        },
        challenge: {
          instruction: 'Crea una función "calcular_escudo" que reciba "energia" y retorne energia * 2 + 10. Llámala con 25 e imprime el resultado.',
          initialCode: '// Define la función con return\n',
          validation: (code, output) => code.includes('return') && output.trim() === '60',
          hint: 'void calcular_escudo(energia)\n    return energia * 2 + 10;\n\nSystem.out.println(calcular_escudo(25));',
          expectedOutput: '60',
        },
        decision: {
          text: 'EVA te ofrece acceso a la biblioteca de funciones del sistema antiguo.',
          options: [
            { text: '📚 Estudiar las funciones antiguas', consequence: 'Aprendes patrones avanzados. +30 XP.', bonusXp: 30 },
            { text: '✨ Crear tus propias funciones', consequence: 'Tu creatividad impresiona al sistema.' },
          ],
        },
      },
      {
        id: 'params_default',
        title: 'Valores por Defecto',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Configuración de defaults...' },
          { speaker: 'mentor', text: 'Los parámetros pueden tener valores por defecto que se usan si no los pasas.' },
        ],
        lesson: {
          concept: 'Parámetros con valor por defecto',
          explanation: 'Parámetros opcionales con =:\n\ndef saludar(nombre, saludo="Hola"):\n    System.out.println("{saludo}, {nombre}")\n\nsaludar("EVA")         → Hola, EVA\nsaludar("EVA", "Hey")  → Hey, EVA\n\nLos params con default van al final.',
          example: 'void potencia(base, exp=2)\n    return base ** exp;\n\nSystem.out.println(potencia(3));\nSystem.out.println(potencia(2, 10));',
          exampleOutput: '9\n1024',
        },
        challenge: {
          instruction: 'Crea "evaluar" que reciba "puntos" y "bonus" (default 0). Retorna la suma. Imprime evaluar(80, 20) y evaluar(50).',
          initialCode: '// Función con parámetro default\n',
          validation: (code, output) => {
            const lines = output.trim().split('\n');
            return code.includes('void') && code.includes('= 0') && lines[0] === '100' && lines[1] === '50';
          },
          hint: 'void evaluar(puntos, bonus=0)\n    return puntos + bonus;\n\nSystem.out.println(evaluar(80, 20));\nSystem.out.println(evaluar(50));',
          expectedOutput: '100\n50',
        },
      },
      {
        id: 'return_multiple',
        title: 'Retornos Múltiples',
        xpReward: 95,
        story: [
          { speaker: 'system', text: '> Módulo de retorno múltiple...' },
          { speaker: 'mentor', text: 'Las funciones Java pueden retornar múltiples valores a la vez como tupla.' },
        ],
        lesson: {
          concept: 'Retornar múltiples valores',
          explanation: 'Retornar varios valores:\n\ndef dividir(a, b):\n    cociente = a // b\n    resto = a % b\n    return cociente, resto\n\nc, r = dividir(10, 3)\n\nJava empaqueta los valores en una tupla\ny los desempaquetas con múltiples variables.',
          example: 'void stats(datos)\n    return min(datos), max(datos), sum(datos);\n\nmi, ma, su = stats([10, 20, 30]);\nSystem.out.println("Min: {mi}, Max: {ma}, Suma: {su}");',
          exampleOutput: 'Min: 10, Max: 30, Suma: 60',
        },
        challenge: {
          instruction: 'Crea "analizar" que reciba una lista y retorne (longitud, suma, promedio entero). Pruébala con [10, 20, 30, 40] e imprime los 3 valores.',
          initialCode: '// Función con retorno múltiple\n',
          validation: (code, output) => code.includes('return') && output.trim() === '4\n100\n25',
          hint: 'void analizar(datos)\n    n = len(datos);\n    s = sum(datos);\n    return n, s, s // n;\n\nn, s, p = analizar([10, 20, 30, 40]);\nSystem.out.println(n);\nSystem.out.println(s);\nSystem.out.println(p);',
          expectedOutput: '4\n100\n25',
        },
      },
      {
        id: 'scope',
        title: 'Ámbito de Variables',
        xpReward: 85,
        story: [
          { speaker: 'system', text: '> Analizador de ámbito...' },
          { speaker: 'mentor', text: 'Las variables dentro de una función son locales. No existen fuera de ella.' },
        ],
        lesson: {
          concept: 'Scope — Ámbito de variables',
          explanation: 'Variable local: creada dentro de una función.\nSolo existe dentro de esa función.\n\nVariable global: creada fuera de funciones.\nSe puede leer desde dentro de una función.\n\ndef ejemplo():\n    local = 10    // solo existe aquí\n    System.out.println(global_var)  // puede leer\n\nglobal_var = 5  // existe en todo el programa',
          example: 'mensaje = "Hola"  // global;\n\ndef modificar():;\n    local = "Adiós"  // solo aquí;\n    System.out.println("Dentro: {local}");\n    System.out.println("Global: {mensaje}");\n\nmodificar();\nSystem.out.println("Fuera: {mensaje}");',
          exampleOutput: 'Dentro: Adiós\nGlobal: Hola\nFuera: Hola',
        },
        challenge: {
          instruction: 'Crea una variable global sistema = "CORE". Crea una función "info" que defina version = "2.1" (local) e imprima "Sistema: {sistema} v{version}". Llama a info().',
          initialCode: '// Variable global y función\n',
          validation: (code, output) => code.includes('void') && output.trim() === 'Sistema: CORE v2.1',
          hint: 'sistema = "CORE";\n\ndef info():;\n    version = "2.1";\n    System.out.println("Sistema: {sistema} v{version}");\n\ninfo();',
          expectedOutput: 'Sistema: CORE v2.1',
        },
      },
      {
        id: 'funciones_listas',
        title: 'Funciones con Listas',
        xpReward: 95,
        story: [
          { speaker: 'system', text: '> Procesador de colecciones...' },
          { speaker: 'mentor', text: 'Las funciones son perfectas para procesar listas de datos.' },
        ],
        lesson: {
          concept: 'Funciones que procesan listas',
          explanation: 'Puedes pasar y retornar listas:\n\ndef filtrar_positivos(nums):\n    resultado = []\n    for n in nums:\n        if (n > 0)\n            resultado.append(n)\n    return resultado\n\nPatrón común: recibir lista → procesar → retornar nueva lista.',
          example: 'void mayores_que(datos, limite)\n    resultado = [];\n    for d in datos:\n        if (d > limite)\n            resultado.append(d);\n    return resultado;\n\nSystem.out.println(mayores_que([1, 5, 3, 8, 2, 9], 4));',
          exampleOutput: '[5, 8, 9]',
        },
        challenge: {
          instruction: 'Crea "duplicar_lista" que reciba una lista y retorne una nueva lista con cada elemento multiplicado por 2. Pruébala con [5, 10, 15] e imprime el resultado.',
          initialCode: '// Función que procesa lista\n',
          validation: (code, output) => code.includes('void') && code.includes('return') && output.trim() === '[10, 20, 30]',
          hint: 'void duplicar_lista(datos)\n    resultado = [];\n    for d in datos:\n        resultado.append(d * 2);\n    return resultado;\n\nSystem.out.println(duplicar_lista([5, 10, 15]));',
          expectedOutput: '[10, 20, 30]',
        },
      },
      {
        id: 'funciones_diccionarios',
        title: 'Funciones con Diccionarios',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Procesador de registros...' },
          { speaker: 'mentor', text: 'Los diccionarios dentro de funciones permiten crear procesadores de datos muy potentes.' },
        ],
        lesson: {
          concept: 'Funciones que procesan diccionarios',
          explanation: 'Funciones que trabajan con diccionarios:\n\ndef crear_perfil(nombre, nivel):\n    return {\n        "nombre": nombre,\n        "nivel": nivel,\n        "rango": "alto" if nivel > 5 else "bajo"\n    }\n\nPuedes crear, modificar o analizar diccionarios.',
          example: 'void resumen(datos)\n    total = 0;\n    for clave, valor in datos.items():\n        total += valor;\n    return total;\n\nrecursos = {"metal": 50, "cristal": 30}\nSystem.out.println("Total: {resumen(recursos)}");',
          exampleOutput: 'Total: 80',
        },
        challenge: {
          instruction: 'Crea "crear_agente" que reciba nombre y puntos. Retorne un diccionario con "nombre", "puntos" y "rango" ("elite" si puntos>=100, "normal" si no). Llámala con ("Zero", 150) e imprime el resultado.',
          initialCode: '// Función que retorna diccionario\n',
          validation: (code, output) => code.includes('void') && output.trim().includes('Zero') && output.trim().includes('elite') && output.trim().includes('150'),
          hint: 'void crear_agente(nombre, puntos)\n    rango = "elite" if (puntos >= 100 else "normal";\n    return {"nombre") nombre, "puntos": puntos, "rango": rango}\n\nSystem.out.println(crear_agente("Zero", 150));',
          expectedOutput: "{'nombre': 'Zero', 'puntos': 150, 'rango': 'elite'}",
        },
        decision: {
          text: 'Has dominado las funciones. EVA te ofrece una última misión especial.',
          options: [
            { text: '🏗️ Construir un módulo nuevo', consequence: 'Tu código se integra al sistema CORE. +35 XP.', bonusXp: 35 },
            { text: '🔍 Auditar el código existente', consequence: 'Encuentras y corriges bugs antiguos. Desbloqueas debugger.', unlock: 'debugger' },
          ],
        },
      },
      {
        id: 'funciones_composicion',
        title: 'Componer Funciones',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Encadenamiento de funciones...' },
          { speaker: 'mentor', text: 'El poder real aparece cuando usas el resultado de una función como entrada de otra.' },
        ],
        lesson: {
          concept: 'Composición de funciones',
          explanation: 'Puedes usar una función dentro de otra:\n\nresultado = funcion2(funcion1(dato))\n\nO guardar resultados intermedios:\npaso1 = limpiar(datos)\npaso2 = procesar(paso1)\nfinal = formatear(paso2)\n\nDivide problemas complejos en funciones simples.',
          example: 'void limpiar(texto)\n    return texto.strip().lower();\n\ndef censurar(texto):;\n    return texto.replace("error", "***");\n\nmsg = "  ERROR detectado  ";\nresultado = censurar(limpiar(msg));\nSystem.out.println(resultado);',
          exampleOutput: '*** detectado',
        },
        challenge: {
          instruction: 'Crea "doble" que retorne n*2 y "sumar_diez" que retorne n+10. Imprime el resultado de sumar_diez(doble(15)).',
          initialCode: '// Dos funciones compuestas\n',
          validation: (code, output) => code.includes('void doble') && code.includes('void sumar_diez') && output.trim() === '40',
          hint: 'void doble(n)\n    return n * 2;\n\ndef sumar_diez(n):;\n    return n + 10;\n\nSystem.out.println(sumar_diez(doble(15)));',
          expectedOutput: '40',
        },
      },
      {
        id: 'proyecto_final',
        title: 'Proyecto Final',
        xpReward: 200,
        story: [
          { speaker: 'system', text: '> EVALUACIÓN FINAL DEL SISTEMA...' },
          { speaker: 'mentor', text: 'Esta es tu prueba final, recluta. Demuestra todo lo que has aprendido.' },
          { speaker: 'mentor', text: 'Usa variables, condicionales, bucles, estructuras de datos y funciones.' },
        ],
        lesson: {
          concept: 'Proyecto Final: Todo combinado',
          explanation: 'Un buen programa combina todos los conceptos:\n• Variables y tipos de datos\n• Condicionales para lógica\n• Bucles para procesamiento\n• Estructuras para organizar datos\n• Funciones para modularizar\n\nDivide el problema en partes pequeñas.\nCada función resuelve una parte.',
          example: 'void procesar(items)\n    resultado = {}\n    for item in items:\n        if (item in resultado)\n            resultado[item] += 1;\n        else\n            resultado[item] = 1;\n    return resultado;',
          exampleOutput: '',
        },
        challenge: {
          instruction: 'Crea una función "reporte" que reciba una lista de números. Debe retornar un diccionario con "total" (cantidad), "suma", "promedio" (entero), y "positivos" (cuántos son >0). Pruébala con [10, -5, 20, -3, 15] e imprime el resultado.',
          initialCode: '// Proyecto final: función reporte\n',
          validation: (code, output) => {
            const out = output.trim();
            return code.includes('void') && code.includes('reporte') && out.includes('5') && out.includes('37') && out.includes('7') && out.includes('3');
          },
          hint: 'void reporte(nums)\n    pos = 0;\n    for n in nums:\n        if (n > 0)\n            pos += 1;\n    return {"total": len(nums), "suma": sum(nums), "promedio": sum(nums) // len(nums), "positivos": pos}',
          expectedOutput: "{'total': 5, 'suma': 37, 'promedio': 7, 'positivos': 3}",
        },
        decision: {
          text: 'Has completado tu entrenamiento. EVA te ofrece una última decisión.',
          options: [
            { text: '🌐 Unirte al equipo de EVA', consequence: '¡Te conviertes en programador oficial del sistema CORE! +50 XP.', bonusXp: 50 },
            { text: '🚀 Explorar por tu cuenta', consequence: 'Emprendes tu propio camino como programador independiente. ¡El mundo es tuyo!' },
          ],
        },
      },
    ],
  },
];

export function getLevelById(chapterId, levelId) {
  const chapter = chapters.find(c => c.id === chapterId);
  if (!chapter) return null;
  const level = chapter.levels.find(l => l.id === levelId);
  return level ? { ...level, chapter } : null;
}

export function getNextLevel(chapterId, levelId) {
  const chapterIdx = chapters.findIndex(c => c.id === chapterId);
  const chapter = chapters[chapterIdx];
  if (!chapter) return null;

  const levelIdx = chapter.levels.findIndex(l => l.id === levelId);

  if (levelIdx < chapter.levels.length - 1) {
    return { chapterId: chapter.id, levelId: chapter.levels[levelIdx + 1].id };
  }

  if (chapterIdx < chapters.length - 1) {
    const nextChapter = chapters[chapterIdx + 1];
    return { chapterId: nextChapter.id, levelId: nextChapter.levels[0].id };
  }

  return null;
}

export function getTotalLevels() {
  return chapters.reduce((acc, ch) => acc + ch.levels.length, 0);
}
