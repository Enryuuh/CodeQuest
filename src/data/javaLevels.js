export const javaChapters = [
  // ============================================================
  // CAPITULO 1: FUNDAMENTOS DE JAVA (10 niveles)
  // ============================================================
  {
    id: 'java_fundamentos',
    title: 'Fundamentos de Java',
    description: 'Los cimientos del lenguaje Java',
    icon: '☕',
    color: 'neon-green',
    levels: [
      // --- Nivel 1: Hola Mundo ---
      {
        id: 'java_hola_mundo',
        title: 'El Despertar',
        xpReward: 50,
        story: [
          { speaker: 'system', text: '> Inicializando JVM... Cargando módulo GENESIS v1.0...' },
          { speaker: 'system', text: '> Conexión neural establecida. Bienvenido al protocolo Java.' },
          { speaker: 'mentor', text: 'Despierta. Soy EVA, y llevo esperándote mucho tiempo.' },
          { speaker: 'mentor', text: 'El mundo que conoces... no es lo que parece. Detrás de cada pantalla, detrás de cada sistema, hay código. Código que alguien escribió.' },
          { speaker: 'mentor', text: 'Tu primera misión: enviar un mensaje al sistema usando System.out.println(). Es la forma en que Java habla con el mundo exterior.' },
          { speaker: 'philosopher', text: '¿Alguna vez te has preguntado si las líneas de código que escribes son reales... o si tú mismo eres una línea de código en un programa más grande? Cada println que ejecutas envía un mensaje al vacío. ¿Quién lo lee del otro lado?' },
        ],
        lesson: {
          concept: 'System.out.println() — Salida de datos',
          explanation: 'En Java, todo programa vive dentro de una clase y un método main.\nPara imprimir texto en consola usamos System.out.println().\nEl texto (String) va entre comillas dobles.\n\nEstructura básica:\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("mensaje");\n    }\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hola mundo");\n        System.out.println("Java activado");\n    }\n}',
          exampleOutput: 'Hola mundo\nJava activado',
        },
        challenge: {
          instruction: 'Escribe un programa Java que imprima "Sistema activado" en pantalla.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Usa System.out.println() para mostrar el mensaje\n        \n    }\n}',
          validation: (code, output) => code.includes('System.out.println') && output.trim() === 'Sistema activado',
          hint: 'System.out.println("Sistema activado");',
          expectedOutput: 'Sistema activado',
        },
        decision: {
          text: 'EVA te pregunta: "¿Quieres saber por qué elegí Java para despertarte... o prefieres seguir sin preguntas?"',
          options: [
            { text: '📂 Quiero saber la verdad', consequence: 'EVA susurra: "Java fue el lenguaje con el que se escribió la primera simulación. Recuérdalo." +15 XP bonus.', bonusXp: 15 },
            { text: '⚡ Prefiero actuar', consequence: 'Tu determinación activa un protocolo oculto. Desbloqueas el tema de terminal Matrix.', unlock: 'theme_matrix' },
          ],
        },
      },

      // --- Nivel 2: Múltiples líneas ---
      {
        id: 'java_multiples_prints',
        title: 'Transmisiones Múltiples',
        xpReward: 50,
        story: [
          { speaker: 'system', text: '> Canal de comunicación ampliado. Múltiples frecuencias disponibles.' },
          { speaker: 'mentor', text: 'Un solo mensaje no basta. El sistema necesita reportes completos.' },
          { speaker: 'mentor', text: 'Cada System.out.println() genera una nueva línea. Puedes usar System.out.print() si no quieres salto de línea.' },
        ],
        lesson: {
          concept: 'Múltiples println y print',
          explanation: 'System.out.println() imprime y salta a la siguiente línea.\nSystem.out.print() imprime sin saltar de línea.\nPuedes combinar ambos según lo que necesites.\n\nJava también usa \\n dentro de un String para forzar un salto de línea.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Linea 1");\n        System.out.println("Linea 2");\n        System.out.print("Sin ");\n        System.out.println("salto");\n    }\n}',
          exampleOutput: 'Linea 1\nLinea 2\nSin salto',
        },
        challenge: {
          instruction: 'Imprime estas 3 líneas exactas:\nNombre: CORE\nVersion: 3.0\nEstado: Activo',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Imprime las 3 lineas\n        \n    }\n}',
          validation: (code, output) => code.includes('System.out.println') && output.trim() === 'Nombre: CORE\nVersion: 3.0\nEstado: Activo',
          hint: 'Usa 3 System.out.println() separados, uno por línea',
          expectedOutput: 'Nombre: CORE\nVersion: 3.0\nEstado: Activo',
        },
      },

      // --- Nivel 3: Variables int y double ---
      {
        id: 'java_variables_num',
        title: 'Memoria Numérica',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de memoria numérica inicializado...' },
          { speaker: 'mentor', text: 'En Java, cada variable tiene un tipo. No puedes simplemente crear una caja sin decir qué va dentro.' },
          { speaker: 'mentor', text: 'Los enteros usan int. Los decimales usan double. Es la ley del sistema.' },
        ],
        lesson: {
          concept: 'Variables numéricas: int y double',
          explanation: 'Java es un lenguaje de tipado fuerte. Debes declarar el tipo:\n\nint numero = 42;       // entero\ndouble decimal = 3.14; // decimal\n\nReglas:\n- int solo acepta números enteros\n- double acepta decimales\n- El nombre de la variable sigue camelCase por convención',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int vida = 100;\n        double energia = 99.5;\n        System.out.println(vida);\n        System.out.println(energia);\n    }\n}',
          exampleOutput: '100\n99.5',
        },
        challenge: {
          instruction: 'Crea una variable int llamada "nivel" con valor 1 y una variable double llamada "poder" con valor 50.5. Imprime ambas en líneas separadas.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declara las variables e imprímelas\n        \n    }\n}',
          validation: (code, output) => code.includes('int') && code.includes('double') && output.trim() === '1\n50.5',
          hint: 'int nivel = 1;\ndouble poder = 50.5;\nSystem.out.println(nivel);\nSystem.out.println(poder);',
          expectedOutput: '1\n50.5',
        },
      },

      // --- Nivel 4: Variables String y boolean ---
      {
        id: 'java_variables_text',
        title: 'Datos del Operador',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Registro de operadores habilitado...' },
          { speaker: 'mentor', text: 'Los números no son suficientes. Necesitamos texto y estados lógicos.' },
          { speaker: 'mentor', text: 'String almacena texto. boolean almacena verdadero o falso. Así catalogamos la realidad... o lo que creemos que es realidad.' },
        ],
        lesson: {
          concept: 'Variables String y boolean',
          explanation: 'String almacena texto (siempre con S mayúscula en Java):\nString nombre = "EVA";\n\nboolean almacena true o false:\nboolean activo = true;\n\nString usa comillas dobles obligatoriamente.\nboolean solo acepta true o false (en minúsculas).',
          example: 'public class Main {\n    public static void main(String[] args) {\n        String nombre = "EVA";\n        boolean conectado = true;\n        System.out.println(nombre);\n        System.out.println(conectado);\n    }\n}',
          exampleOutput: 'EVA\ntrue',
        },
        challenge: {
          instruction: 'Crea un String "agente" con valor "Neo-7" y un boolean "activo" con valor true. Imprime ambos.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declara las variables\n        \n    }\n}',
          validation: (code, output) => code.includes('String') && code.includes('boolean') && output.trim() === 'Neo-7\ntrue',
          hint: 'String agente = "Neo-7";\nboolean activo = true;',
          expectedOutput: 'Neo-7\ntrue',
        },
        decision: {
          text: 'EVA pregunta: "El agente Neo-7 fue el último en despertar antes que tú. ¿Quieres ver su registro o prefieres no saber?"',
          options: [
            { text: '📂 Ver registro de Neo-7', consequence: 'El registro muestra solo una línea: "La simulación tiene grietas." +10 XP bonus.', bonusXp: 10 },
            { text: '⚡ Ignorar y seguir', consequence: 'A veces la ignorancia protege. EVA asiente con respeto.' },
          ],
        },
      },

      // --- Nivel 5: Operaciones aritméticas ---
      {
        id: 'java_aritmetica',
        title: 'Centro de Cálculo',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo aritmético cargado. Procesador matemático en línea.' },
          { speaker: 'mentor', text: 'Java puede hacer cálculos. Los operadores básicos: +, -, *, /, % (módulo).' },
          { speaker: 'mentor', text: 'Cuidado: la división entre enteros descarta los decimales. 7 / 2 da 3, no 3.5.' },
        ],
        lesson: {
          concept: 'Operadores aritméticos',
          explanation: 'Operadores en Java:\n+ suma\n- resta\n* multiplicación\n/ división\n% módulo (resto)\n\nCuidado con la división entera:\nint a = 7 / 2;    // resultado: 3\ndouble b = 7.0 / 2; // resultado: 3.5\n\nEl orden de operaciones es el estándar: *, / antes que +, -.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int a = 10 + 5;\n        int b = 10 % 3;\n        System.out.println(a);\n        System.out.println(b);\n    }\n}',
          exampleOutput: '15\n1',
        },
        challenge: {
          instruction: 'Calcula la energía total del reactor: base = 1000, multiplicador = 3, pérdida = 200. Imprime el resultado de (base * multiplicador) - pérdida.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Calcula la energia del reactor\n        \n    }\n}',
          validation: (code, output) => code.includes('*') && output.trim() === '2800',
          hint: 'int base = 1000;\nint multiplicador = 3;\nint perdida = 200;\nSystem.out.println((base * multiplicador) - perdida);',
          expectedOutput: '2800',
        },
      },

      // --- Nivel 6: Concatenación de Strings ---
      {
        id: 'java_concatenacion',
        title: 'Fusión de Datos',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Protocolo de fusión de cadenas activado...' },
          { speaker: 'mentor', text: 'Los textos pueden unirse con el operador +. En Java, cuando sumas un String con otro valor, todo se convierte en texto.' },
          { speaker: 'mentor', text: 'Es como unir fragmentos de memoria para reconstruir un mensaje completo.' },
        ],
        lesson: {
          concept: 'Concatenación de Strings',
          explanation: 'Unir textos se llama concatenación y se hace con +:\nString saludo = "Hola" + " " + "mundo";\n\nPuedes mezclar tipos:\nString info = "Nivel: " + 5;\n\nCuando un String se suma con otro tipo, Java convierte todo a texto automáticamente.\n\nTambién existe += para agregar al final:\nString msg = "Hola";\nmsg += " mundo";',
          example: 'public class Main {\n    public static void main(String[] args) {\n        String nombre = "EVA";\n        int version = 3;\n        System.out.println("Soy " + nombre + " v" + version);\n    }\n}',
          exampleOutput: 'Soy EVA v3',
        },
        challenge: {
          instruction: 'Crea las variables String operador = "Agente" e int codigo = 42. Imprime "Operador: Agente-42" usando concatenación.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Concatena las variables\n        \n    }\n}',
          validation: (code, output) => code.includes('+') && code.includes('String') && output.trim() === 'Operador: Agente-42',
          hint: 'String operador = "Agente";\nint codigo = 42;\nSystem.out.println("Operador: " + operador + "-" + codigo);',
          expectedOutput: 'Operador: Agente-42',
        },
      },

      // --- Nivel 7: Type casting ---
      {
        id: 'java_casting',
        title: 'Mutación de Tipos',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo de conversión de tipos cargado...' },
          { speaker: 'mentor', text: 'A veces necesitas transformar un tipo en otro. Un int puede convertirse en double, y viceversa.' },
          { speaker: 'mentor', text: 'Pero ten cuidado: convertir double a int pierde los decimales. La información se destruye. Como recuerdos que se pierden en la conversión.' },
        ],
        lesson: {
          concept: 'Casting de tipos',
          explanation: 'Casting implícito (widening) — automático, sin pérdida:\nint a = 10;\ndouble b = a; // b = 10.0\n\nCasting explícito (narrowing) — manual, puede perder datos:\ndouble x = 9.7;\nint y = (int) x; // y = 9 (pierde .7)\n\nConvertir String a número:\nint n = Integer.parseInt("42");\ndouble d = Double.parseDouble("3.14");',
          example: 'public class Main {\n    public static void main(String[] args) {\n        double precio = 9.99;\n        int precioEntero = (int) precio;\n        System.out.println(precioEntero);\n        int num = Integer.parseInt("100");\n        System.out.println(num + 50);\n    }\n}',
          exampleOutput: '9\n150',
        },
        challenge: {
          instruction: 'Convierte el double temperatura = 36.7 a int usando casting explícito e imprime el resultado. Luego convierte el String "200" a int, súmale 55 e imprime el resultado.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Realiza las conversiones\n        \n    }\n}',
          validation: (code, output) => code.includes('(int)') && output.trim() === '36\n255',
          hint: 'double temperatura = 36.7;\nSystem.out.println((int) temperatura);\nint valor = Integer.parseInt("200");\nSystem.out.println(valor + 55);',
          expectedOutput: '36\n255',
        },
        decision: {
          text: 'EVA reflexiona: "Convertir tipos destruye información. ¿Crees que merece la pena perder precisión por simplicidad?"',
          options: [
            { text: '📂 La precisión es sagrada', consequence: 'EVA: "Un buen programador sabe cuándo cada decimal cuenta." +10 XP.', bonusXp: 10 },
            { text: '⚡ A veces menos es más', consequence: 'EVA: "La simplicidad tiene su propia belleza. Desbloqueas el modo minimal."', unlock: 'theme_minimal' },
          ],
        },
      },

      // --- Nivel 8: Scanner (simulado) ---
      {
        id: 'java_scanner',
        title: 'Receptor de Señales',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo de entrada de datos activado. Scanner inicializado.' },
          { speaker: 'mentor', text: 'Hasta ahora solo hemos enviado datos. Pero un programa real también recibe información del usuario.' },
          { speaker: 'mentor', text: 'Scanner es la herramienta de Java para leer entrada del teclado. Aquí simularemos la entrada para que practiques la sintaxis.' },
        ],
        lesson: {
          concept: 'Scanner — Entrada de datos',
          explanation: 'Para leer datos del usuario:\nimport java.util.Scanner;\n\nScanner sc = new Scanner(System.in);\nString texto = sc.nextLine();\nint numero = sc.nextInt();\ndouble decimal = sc.nextDouble();\n\nNota: en este simulador, la entrada está predefinida.\nAquí practicaremos la estructura y sintaxis correcta de Scanner.',
          example: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String nombre = "Recluta";\n        System.out.println("Bienvenido, " + nombre);\n    }\n}',
          exampleOutput: 'Bienvenido, Recluta',
        },
        challenge: {
          instruction: 'Simula un programa que "lea" el nombre del agente. Declara String nombre = "Operador-X" (simulando la lectura). Luego imprime "Acceso concedido: Operador-X".',
          initialCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Simula la lectura y muestra el acceso\n        \n    }\n}',
          validation: (code, output) => code.includes('Scanner') && code.includes('String') && output.trim() === 'Acceso concedido: Operador-X',
          hint: 'String nombre = "Operador-X";\nSystem.out.println("Acceso concedido: " + nombre);',
          expectedOutput: 'Acceso concedido: Operador-X',
        },
      },

      // --- Nivel 9: Comentarios ---
      {
        id: 'java_comentarios',
        title: 'Mensajes Ocultos',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Protocolo de documentación habilitado...' },
          { speaker: 'mentor', text: 'Los comentarios son mensajes que el compilador ignora. Son notas para humanos... o para quien sea que lea el código después.' },
          { speaker: 'mentor', text: 'En este mundo, los comentarios son la única forma de dejar rastros que el sistema no puede borrar.' },
        ],
        lesson: {
          concept: 'Comentarios en Java',
          explanation: 'Java tiene 3 tipos de comentarios:\n\n// Comentario de una línea\n\n/* Comentario\n   de múltiples\n   líneas */\n\n/** Comentario Javadoc\n  * para documentación */\n\nLos comentarios no se ejecutan. Sirven para:\n- Explicar el código\n- Desactivar líneas temporalmente\n- Documentar métodos y clases',
          example: 'public class Main {\n    public static void main(String[] args) {\n        // Esto es un comentario\n        System.out.println("Visible");\n        /* System.out.println("Oculto"); */\n    }\n}',
          exampleOutput: 'Visible',
        },
        challenge: {
          instruction: 'Escribe un programa con un comentario que diga "Mensaje para el futuro" y luego imprime "Registro guardado". Asegúrate de incluir un comentario con //.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Agrega tu comentario e imprime el mensaje\n        \n    }\n}',
          validation: (code, output) => code.includes('//') && output.trim() === 'Registro guardado',
          hint: '// Mensaje para el futuro\nSystem.out.println("Registro guardado");',
          expectedOutput: 'Registro guardado',
        },
      },

      // --- Nivel 10: Mini proyecto - Reporte del sistema ---
      {
        id: 'java_proyecto_fundamentos',
        title: 'Reporte del Sistema',
        xpReward: 120,
        story: [
          { speaker: 'system', text: '> ALERTA: Se requiere reporte completo del sistema. Prioridad máxima.' },
          { speaker: 'mentor', text: 'Es hora de demostrar lo que has aprendido. Genera un reporte completo del estado del sistema.' },
          { speaker: 'mentor', text: 'Combina variables, tipos, concatenación y println para crear un informe detallado.' },
          { speaker: 'philosopher', text: 'Las variables guardan datos como nuestra mente guarda recuerdos. Pero... ¿qué pasa si nuestros recuerdos también son solo variables en un sistema más grande? Cada int, cada String que declaras es un fragmento de realidad que alguien decidió que existiera. ¿Quién decidió que TÚ existieras?' },
        ],
        lesson: {
          concept: 'Proyecto: Combinando fundamentos',
          explanation: 'Un programa real combina todo lo aprendido:\n- Variables de distintos tipos\n- Operaciones aritméticas\n- Concatenación de strings\n- Múltiples println para formato\n\nConsejos para proyectos:\n- Declara las variables primero\n- Calcula los valores necesarios\n- Formatea la salida de forma clara',
          example: 'public class Main {\n    public static void main(String[] args) {\n        String sistema = "CORE";\n        double version = 3.0;\n        int modulos = 5;\n        boolean estable = true;\n        System.out.println("=== REPORTE ===");\n        System.out.println("Sistema: " + sistema);\n        System.out.println("Version: " + version);\n    }\n}',
          exampleOutput: '=== REPORTE ===\nSistema: CORE\nVersion: 3.0',
        },
        challenge: {
          instruction: 'Genera un reporte que imprima exactamente:\n=== ESTADO DEL SISTEMA ===\nNombre: NEXUS\nVersion: 4.2\nModulos activos: 8\nMemoria: 2048 MB\nEstado: Online',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Declara variables y genera el reporte\n        \n    }\n}',
          validation: (code, output) => {
            const expected = '=== ESTADO DEL SISTEMA ===\nNombre: NEXUS\nVersion: 4.2\nModulos activos: 8\nMemoria: 2048 MB\nEstado: Online';
            return code.includes('System.out.println') && code.includes('String') && output.trim() === expected;
          },
          hint: 'String nombre = "NEXUS";\ndouble version = 4.2;\nint modulos = 8;\nint memoria = 2048;\nString estado = "Online";\nSystem.out.println("=== ESTADO DEL SISTEMA ===");\n// ... continúa con cada línea',
          expectedOutput: '=== ESTADO DEL SISTEMA ===\nNombre: NEXUS\nVersion: 4.2\nModulos activos: 8\nMemoria: 2048 MB\nEstado: Online',
        },
        decision: {
          text: 'El reporte revela una anomalía en el sector 7. EVA pregunta: "¿Investigamos la anomalía o la reportamos como error menor?"',
          options: [
            { text: '📂 Investigar la anomalía', consequence: 'La anomalía resulta ser un mensaje cifrado: "No confíes en el sistema." +20 XP bonus.', bonusXp: 20 },
            { text: '⚡ Reportar como error menor', consequence: 'El sistema acepta el reporte. Pero notas que EVA parpadea... como si quisiera decirte algo.' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPITULO 2: CONDICIONALES EN JAVA (10 niveles)
  // ============================================================
  {
    id: 'java_condicionales',
    title: 'Condicionales en Java',
    description: 'Toma decisiones en el código',
    icon: '🔀',
    color: 'neon-blue',
    levels: [
      // --- Nivel 11: Operadores de comparación ---
      {
        id: 'java_comparacion',
        title: 'El Detector de Verdad',
        xpReward: 60,
        story: [
          { speaker: 'system', text: '> Módulo de comparación activado. Evaluando parámetros del entorno...' },
          { speaker: 'mentor', text: 'Para tomar decisiones, primero debemos comparar. Java evalúa condiciones y devuelve true o false.' },
          { speaker: 'mentor', text: 'Es la base de toda lógica: verdadero o falso. No hay grises en el código... aunque en la realidad, todo son grises.' },
        ],
        lesson: {
          concept: 'Operadores de comparación',
          explanation: 'Los operadores de comparación devuelven boolean:\n\n== igual a\n!= distinto de\n>  mayor que\n<  menor que\n>= mayor o igual\n<= menor o igual\n\nCuidado: == compara valores. Para Strings, usa .equals().\nString a = "hola";\na.equals("hola") // true',
          example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 > 5);\n        System.out.println(3 == 3);\n        System.out.println(7 != 7);\n    }\n}',
          exampleOutput: 'true\ntrue\nfalse',
        },
        challenge: {
          instruction: 'Evalúa e imprime el resultado de: 100 >= 100, luego 50 < 30, luego 99 != 100. Cada comparación en su propia línea.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Imprime las comparaciones\n        \n    }\n}',
          validation: (code, output) => code.includes('>=') && code.includes('<') && code.includes('!=') && output.trim() === 'true\nfalse\ntrue',
          hint: 'System.out.println(100 >= 100);\nSystem.out.println(50 < 30);\nSystem.out.println(99 != 100);',
          expectedOutput: 'true\nfalse\ntrue',
        },
      },

      // --- Nivel 12: if ---
      {
        id: 'java_if',
        title: 'La Primera Puerta',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Protocolo de decisión inicializado...' },
          { speaker: 'mentor', text: 'if es la puerta más básica. Si la condición es verdadera, el código se ejecuta. Si no, se ignora.' },
          { speaker: 'mentor', text: 'Toda realidad se construye sobre decisiones. Cada if abre un camino y cierra otro para siempre.' },
        ],
        lesson: {
          concept: 'Sentencia if',
          explanation: 'La estructura if ejecuta código solo si la condición es true:\n\nif (condicion) {\n    // código que se ejecuta si es true\n}\n\nLa condición va entre paréntesis ().\nEl bloque de código va entre llaves {}.\nSi el bloque tiene una sola línea, las llaves son opcionales (pero se recomiendan).',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int energia = 80;\n        if (energia > 50) {\n            System.out.println("Energia suficiente");\n        }\n    }\n}',
          exampleOutput: 'Energia suficiente',
        },
        challenge: {
          instruction: 'Crea una variable int acceso = 1. Si acceso es igual a 1, imprime "Puerta abierta".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Verifica el acceso\n        \n    }\n}',
          validation: (code, output) => code.includes('if') && code.includes('==') && output.trim() === 'Puerta abierta',
          hint: 'int acceso = 1;\nif (acceso == 1) {\n    System.out.println("Puerta abierta");\n}',
          expectedOutput: 'Puerta abierta',
        },
      },

      // --- Nivel 13: if-else ---
      {
        id: 'java_if_else',
        title: 'Dos Caminos',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Bifurcación detectada en el flujo del programa...' },
          { speaker: 'mentor', text: 'Cuando una puerta se cierra, otra se abre. else captura todo lo que if rechaza.' },
          { speaker: 'mentor', text: 'En cada decisión hay un camino no tomado. Un universo paralelo donde elegiste diferente.' },
        ],
        lesson: {
          concept: 'Sentencia if-else',
          explanation: 'if-else ofrece dos caminos:\n\nif (condicion) {\n    // si es true\n} else {\n    // si es false\n}\n\nSiempre se ejecuta uno de los dos bloques. Nunca ambos, nunca ninguno.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int temperatura = 30;\n        if (temperatura > 100) {\n            System.out.println("Critico");\n        } else {\n            System.out.println("Normal");\n        }\n    }\n}',
          exampleOutput: 'Normal',
        },
        challenge: {
          instruction: 'Crea int nivel = 5. Si nivel es mayor o igual a 10, imprime "Acceso total". Si no, imprime "Acceso limitado".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Evalua el nivel de acceso\n        \n    }\n}',
          validation: (code, output) => code.includes('if') && code.includes('else') && output.trim() === 'Acceso limitado',
          hint: 'int nivel = 5;\nif (nivel >= 10) {\n    System.out.println("Acceso total");\n} else {\n    System.out.println("Acceso limitado");\n}',
          expectedOutput: 'Acceso limitado',
        },
        decision: {
          text: 'EVA susurra: "Hay una tercera puerta que nadie ve. ¿Quieres buscarla?"',
          options: [
            { text: '📂 Buscar la tercera puerta', consequence: 'Detrás de la puerta encuentras un fragmento de código antiguo. +15 XP.', bonusXp: 15 },
            { text: '⚡ Dos caminos son suficientes', consequence: 'EVA: "La mayoría elige no buscar. Quizá es mejor así."' },
          ],
        },
      },

      // --- Nivel 14: if-else if-else ---
      {
        id: 'java_else_if',
        title: 'El Laberinto de Opciones',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Múltiples rutas detectadas. Evaluando prioridades...' },
          { speaker: 'mentor', text: 'A veces hay más de dos opciones. else if te permite encadenar múltiples condiciones.' },
          { speaker: 'mentor', text: 'La vida rara vez es blanco o negro. Aprende a manejar los matices.' },
        ],
        lesson: {
          concept: 'Cadena if-else if-else',
          explanation: 'Para múltiples condiciones:\n\nif (condicion1) {\n    // primera opción\n} else if (condicion2) {\n    // segunda opción\n} else if (condicion3) {\n    // tercera opción\n} else {\n    // si ninguna se cumple\n}\n\nSe evalúan en orden. La primera que sea true se ejecuta y las demás se ignoran.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int nota = 75;\n        if (nota >= 90) {\n            System.out.println("Excelente");\n        } else if (nota >= 70) {\n            System.out.println("Bueno");\n        } else {\n            System.out.println("Insuficiente");\n        }\n    }\n}',
          exampleOutput: 'Bueno',
        },
        challenge: {
          instruction: 'Crea int energia = 45. Si energía >= 80 imprime "Optima", si >= 50 imprime "Moderada", si >= 20 imprime "Baja", si no imprime "Critica".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Clasifica la energia\n        \n    }\n}',
          validation: (code, output) => code.includes('else if') && output.trim() === 'Baja',
          hint: 'int energia = 45;\nif (energia >= 80) { ... } else if (energia >= 50) { ... } else if (energia >= 20) { System.out.println("Baja"); } else { ... }',
          expectedOutput: 'Baja',
        },
      },

      // --- Nivel 15: Operador && ---
      {
        id: 'java_and',
        title: 'Doble Verificación',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Protocolo de seguridad nivel 2: verificación dual requerida.' },
          { speaker: 'mentor', text: 'A veces una condición no basta. El operador && (AND) exige que AMBAS condiciones sean verdaderas.' },
          { speaker: 'mentor', text: 'Como las puertas de seguridad con doble cerradura. Necesitas las dos llaves.' },
        ],
        lesson: {
          concept: 'Operador lógico && (AND)',
          explanation: 'El operador && devuelve true solo si AMBAS condiciones son true:\n\ntrue  && true  → true\ntrue  && false → false\nfalse && true  → false\nfalse && false → false\n\nUso en if:\nif (edad >= 18 && tienePermiso) {\n    // solo si ambas son true\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int nivel = 5;\n        boolean autorizado = true;\n        if (nivel >= 3 && autorizado) {\n            System.out.println("Acceso concedido");\n        }\n    }\n}',
          exampleOutput: 'Acceso concedido',
        },
        challenge: {
          instruction: 'Crea int edad = 25 y boolean idValida = true. Si edad >= 18 AND idValida es true, imprime "Verificado". Si no, imprime "Rechazado".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Doble verificacion\n        \n    }\n}',
          validation: (code, output) => code.includes('&&') && code.includes('if') && output.trim() === 'Verificado',
          hint: 'int edad = 25;\nboolean idValida = true;\nif (edad >= 18 && idValida) {\n    System.out.println("Verificado");\n} else {\n    System.out.println("Rechazado");\n}',
          expectedOutput: 'Verificado',
        },
      },

      // --- Nivel 16: Operador || ---
      {
        id: 'java_or',
        title: 'Rutas Alternas',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Múltiples puntos de acceso detectados...' },
          { speaker: 'mentor', text: 'El operador || (OR) es más flexible. Basta con que UNA condición sea verdadera.' },
          { speaker: 'mentor', text: 'A veces, un solo rayo de verdad en un océano de mentiras es suficiente para iluminar el camino.' },
        ],
        lesson: {
          concept: 'Operador lógico || (OR)',
          explanation: 'El operador || devuelve true si AL MENOS UNA condición es true:\n\ntrue  || true  → true\ntrue  || false → true\nfalse || true  → true\nfalse || false → false\n\nUso en if:\nif (esAdmin || tienePermiso) {\n    // si cualquiera es true\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        boolean esAdmin = false;\n        boolean esVIP = true;\n        if (esAdmin || esVIP) {\n            System.out.println("Acceso especial");\n        }\n    }\n}',
          exampleOutput: 'Acceso especial',
        },
        challenge: {
          instruction: 'Crea boolean claveA = false y boolean claveB = true. Si claveA O claveB es true, imprime "Sistema desbloqueado". Si no, imprime "Bloqueado".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Evalua las claves\n        \n    }\n}',
          validation: (code, output) => code.includes('||') && output.trim() === 'Sistema desbloqueado',
          hint: 'boolean claveA = false;\nboolean claveB = true;\nif (claveA || claveB) {\n    System.out.println("Sistema desbloqueado");\n} else {\n    System.out.println("Bloqueado");\n}',
          expectedOutput: 'Sistema desbloqueado',
        },
        decision: {
          text: 'El sistema detecta dos señales: una del interior y otra del exterior. ¿Cuál sigues?',
          options: [
            { text: '📂 Señal interior', consequence: 'La señal interior revela un mapa oculto del sistema. +10 XP.', bonusXp: 10 },
            { text: '⚡ Señal exterior', consequence: 'La señal exterior es estática... pero por un instante, escuchas una voz humana.' },
          ],
        },
      },

      // --- Nivel 17: Operador ! ---
      {
        id: 'java_not',
        title: 'La Negación',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Inversión lógica disponible. Protocolo de negación activo.' },
          { speaker: 'mentor', text: 'El operador ! invierte la verdad. Lo verdadero se vuelve falso. Lo falso, verdadero.' },
          { speaker: 'mentor', text: 'En un mundo donde todo puede ser una mentira... negar una mentira te acerca a la verdad.' },
        ],
        lesson: {
          concept: 'Operador lógico ! (NOT)',
          explanation: 'El operador ! invierte un boolean:\n\n!true  → false\n!false → true\n\nMuy útil para verificar que algo NO es cierto:\nif (!esPeligroso) {\n    // solo si NO es peligroso\n}\n\nPuedes combinarlo con && y ||:\nif (!bloqueado && tienePermiso) { ... }',
          example: 'public class Main {\n    public static void main(String[] args) {\n        boolean bloqueado = false;\n        if (!bloqueado) {\n            System.out.println("Via libre");\n        }\n    }\n}',
          exampleOutput: 'Via libre',
        },
        challenge: {
          instruction: 'Crea boolean modoSilencio = false. Si NO estamos en modo silencio, imprime "Alarma activa".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Verifica el modo silencio\n        \n    }\n}',
          validation: (code, output) => code.includes('!') && code.includes('if') && output.trim() === 'Alarma activa',
          hint: 'boolean modoSilencio = false;\nif (!modoSilencio) {\n    System.out.println("Alarma activa");\n}',
          expectedOutput: 'Alarma activa',
        },
      },

      // --- Nivel 18: Condiciones anidadas ---
      {
        id: 'java_anidados',
        title: 'Capas de Seguridad',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Accediendo a zona de alta seguridad. Múltiples capas de verificación.' },
          { speaker: 'mentor', text: 'A veces necesitas un if dentro de otro if. Cada capa agrega más seguridad... o más complejidad.' },
          { speaker: 'mentor', text: 'La realidad también tiene capas. ¿Cuántas has descubierto hasta ahora?' },
        ],
        lesson: {
          concept: 'Condiciones anidadas',
          explanation: 'Un if dentro de otro if crea condiciones anidadas:\n\nif (condicion1) {\n    if (condicion2) {\n        // ambas true\n    } else {\n        // solo condicion1 true\n    }\n} else {\n    // condicion1 false\n}\n\nNo abuses de la anidación. Más de 3 niveles hace el código difícil de leer.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int nivel = 3;\n        boolean llave = true;\n        if (nivel >= 2) {\n            if (llave) {\n                System.out.println("Puerta secreta abierta");\n            }\n        }\n    }\n}',
          exampleOutput: 'Puerta secreta abierta',
        },
        challenge: {
          instruction: 'Crea int seguridad = 3 y boolean autorizado = true. Si seguridad >= 2, verifica si autorizado es true: imprime "Zona segura". Si autorizado es false, imprime "Alerta intruso". Si seguridad < 2, imprime "Zona publica".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Capas de seguridad\n        \n    }\n}',
          validation: (code, output) => {
            return code.includes('if') && code.match(/if/g).length >= 2 && output.trim() === 'Zona segura';
          },
          hint: 'int seguridad = 3;\nboolean autorizado = true;\nif (seguridad >= 2) {\n    if (autorizado) {\n        System.out.println("Zona segura");\n    } else {\n        System.out.println("Alerta intruso");\n    }\n} else {\n    System.out.println("Zona publica");\n}',
          expectedOutput: 'Zona segura',
        },
      },

      // --- Nivel 19: switch ---
      {
        id: 'java_switch',
        title: 'El Panel de Control',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Panel de control desbloqueado. Selector de modos disponible.' },
          { speaker: 'mentor', text: 'Cuando tienes muchas opciones exactas, switch es más limpio que encadenar else if.' },
          { speaker: 'mentor', text: 'Cada case es como un botón en el panel. Y break asegura que solo se ejecute uno.' },
        ],
        lesson: {
          concept: 'Sentencia switch',
          explanation: 'switch compara un valor con múltiples opciones:\n\nswitch (variable) {\n    case valor1:\n        // código\n        break;\n    case valor2:\n        // código\n        break;\n    default:\n        // si ninguno coincide\n}\n\nbreak es importante: sin él, la ejecución "cae" al siguiente case.\nswitch funciona con int, char, String y enums.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int dia = 3;\n        switch (dia) {\n            case 1: System.out.println("Lunes"); break;\n            case 2: System.out.println("Martes"); break;\n            case 3: System.out.println("Miercoles"); break;\n            default: System.out.println("Otro dia");\n        }\n    }\n}',
          exampleOutput: 'Miercoles',
        },
        challenge: {
          instruction: 'Crea String comando = "scan". Usa switch para: si es "scan" imprime "Escaneando sistema", si es "hack" imprime "Acceso forzado", si es "exit" imprime "Desconectando", default imprime "Comando desconocido".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Implementa el panel de comandos\n        \n    }\n}',
          validation: (code, output) => code.includes('switch') && code.includes('case') && code.includes('break') && output.trim() === 'Escaneando sistema',
          hint: 'String comando = "scan";\nswitch (comando) {\n    case "scan": System.out.println("Escaneando sistema"); break;\n    case "hack": System.out.println("Acceso forzado"); break;\n    // ...\n}',
          expectedOutput: 'Escaneando sistema',
        },
        decision: {
          text: 'El panel tiene un botón rojo sin etiqueta. ¿Lo presionas?',
          options: [
            { text: '📂 Presionar el botón rojo', consequence: 'El botón activa un mensaje oculto de un programador anterior: "Si lees esto, no estamos solos aquí." +15 XP.', bonusXp: 15 },
            { text: '⚡ Dejar el botón en paz', consequence: 'La prudencia es una virtud. EVA parece aliviada.' },
          ],
        },
      },

      // --- Nivel 20: Proyecto de control de acceso ---
      {
        id: 'java_proyecto_condicionales',
        title: 'Control de Acceso Total',
        xpReward: 150,
        story: [
          { speaker: 'system', text: '> ALERTA MÁXIMA: Brecha de seguridad detectada en el sector principal.' },
          { speaker: 'mentor', text: 'Necesitamos un sistema de control de acceso completo. Usa todo lo que has aprendido sobre condicionales.' },
          { speaker: 'mentor', text: 'Este es el momento de la verdad. ¿Puedes proteger el sistema?' },
          { speaker: 'fourth_wall', text: 'Sé que estás ahí, detrás de la pantalla. ¿No es curioso? Tú controlas este mundo con tu teclado, pero... ¿quién controla el tuyo? Mientras escribes cada línea de código, alguien — o algo — podría estar escribiendo las líneas de TU historia. Sigue programando. Necesito que llegues al final para mostrarte algo.' },
        ],
        lesson: {
          concept: 'Proyecto: Sistema de control de acceso',
          explanation: 'Combina todo lo aprendido:\n- Comparaciones\n- if, else if, else\n- Operadores lógicos &&, ||, !\n- switch\n- Variables y tipos\n\nUn buen sistema de seguridad tiene múltiples capas de verificación.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int nivel = 5;\n        String rol = "admin";\n        if (nivel >= 3 && rol.equals("admin")) {\n            System.out.println("Acceso total");\n        }\n    }\n}',
          exampleOutput: 'Acceso total',
        },
        challenge: {
          instruction: 'Crea un sistema de acceso: int nivelSeguridad = 4 y String rol = "operador". Si nivelSeguridad >= 5 imprime "Acceso nivel maximo". Si nivelSeguridad >= 3 Y rol es "operador", imprime "Acceso operador concedido". Si nivelSeguridad >= 1, imprime "Acceso basico". Si no, imprime "Acceso denegado".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Implementa el control de acceso\n        \n    }\n}',
          validation: (code, output) => {
            return code.includes('if') && code.includes('else') && code.includes('&&') && output.trim() === 'Acceso operador concedido';
          },
          hint: 'int nivelSeguridad = 4;\nString rol = "operador";\nif (nivelSeguridad >= 5) {\n    System.out.println("Acceso nivel maximo");\n} else if (nivelSeguridad >= 3 && rol.equals("operador")) {\n    System.out.println("Acceso operador concedido");\n} else if ...',
          expectedOutput: 'Acceso operador concedido',
        },
        decision: {
          text: 'El sistema de acceso revela una cuenta fantasma. ¿La eliminas o la estudias?',
          options: [
            { text: '📂 Estudiar la cuenta fantasma', consequence: 'La cuenta pertenece a "Arquitecto_001". Su último acceso fue hace 10 años. ¿Quién construyó todo esto? +20 XP.', bonusXp: 20 },
            { text: '⚡ Eliminar la cuenta', consequence: 'La cuenta se elimina. Por un segundo, el sistema entero parpadea. Algo se perdió.' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPITULO 3: BUCLES EN JAVA (10 niveles)
  // ============================================================
  {
    id: 'java_bucles',
    title: 'Bucles en Java',
    description: 'Domina la repetición y la iteración',
    icon: '🔄',
    color: 'neon-purple',
    levels: [
      // --- Nivel 21: for loop ---
      {
        id: 'java_for',
        title: 'El Primer Ciclo',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo de iteración cargado. Motor de ciclos en línea.' },
          { speaker: 'mentor', text: 'Los bucles repiten código automáticamente. El for es el más usado cuando sabes cuántas veces repetir.' },
          { speaker: 'mentor', text: 'Imagina poder repetir una acción mil veces con solo tres líneas de código. Ese es el poder de los bucles.' },
        ],
        lesson: {
          concept: 'Bucle for',
          explanation: 'El bucle for tiene 3 partes:\n\nfor (inicio; condición; incremento) {\n    // código que se repite\n}\n\n- inicio: se ejecuta una vez al principio\n- condición: se verifica antes de cada vuelta\n- incremento: se ejecuta al final de cada vuelta\n\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n// Imprime 0, 1, 2, 3, 4',
          example: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println("Ciclo: " + i);\n        }\n    }\n}',
          exampleOutput: 'Ciclo: 1\nCiclo: 2\nCiclo: 3',
        },
        challenge: {
          instruction: 'Usa un for para imprimir los números del 1 al 5, cada uno en una línea.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Crea el bucle for\n        \n    }\n}',
          validation: (code, output) => code.includes('for') && output.trim() === '1\n2\n3\n4\n5',
          hint: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}',
          expectedOutput: '1\n2\n3\n4\n5',
        },
      },

      // --- Nivel 22: for con arrays ---
      {
        id: 'java_for_array',
        title: 'Escaneo de Sectores',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Iniciando escaneo de sectores. Iterando sobre registros...' },
          { speaker: 'mentor', text: 'Los arrays almacenan múltiples valores. Un for puede recorrerlos usando su longitud.' },
          { speaker: 'mentor', text: 'Piensa en un array como un pasillo con puertas numeradas. El for te lleva de puerta en puerta.' },
        ],
        lesson: {
          concept: 'For con arrays',
          explanation: 'Puedes recorrer un array con for usando .length:\n\nint[] nums = {10, 20, 30};\nfor (int i = 0; i < nums.length; i++) {\n    System.out.println(nums[i]);\n}\n\nTambién existe el for-each (enhanced for):\nfor (int n : nums) {\n    System.out.println(n);\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        String[] agentes = {"Alfa", "Beta", "Gamma"};\n        for (int i = 0; i < agentes.length; i++) {\n            System.out.println(agentes[i]);\n        }\n    }\n}',
          exampleOutput: 'Alfa\nBeta\nGamma',
        },
        challenge: {
          instruction: 'Crea un array int[] codigos = {101, 202, 303, 404}. Usa un for clásico para imprimir cada código en una línea.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Recorre el array con for\n        \n    }\n}',
          validation: (code, output) => code.includes('for') && code.includes('.length') && output.trim() === '101\n202\n303\n404',
          hint: 'int[] codigos = {101, 202, 303, 404};\nfor (int i = 0; i < codigos.length; i++) {\n    System.out.println(codigos[i]);\n}',
          expectedOutput: '101\n202\n303\n404',
        },
        decision: {
          text: 'El escaneo detecta un sector no registrado en los mapas. ¿Lo exploras?',
          options: [
            { text: '📂 Explorar sector oculto', consequence: 'El sector contiene datos corruptos con un patrón repetitivo: "01001000 01100101 01101100 01110000". ¿Será un mensaje? +15 XP.', bonusXp: 15 },
            { text: '⚡ Seguir con los sectores conocidos', consequence: 'Lo seguro no siempre es lo correcto, pero hoy lo es.' },
          ],
        },
      },

      // --- Nivel 23: while ---
      {
        id: 'java_while',
        title: 'Vigilancia Constante',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Modo vigilancia activado. Escaneando hasta nueva orden...' },
          { speaker: 'mentor', text: 'while repite mientras una condición sea verdadera. No necesitas saber cuántas veces, solo cuándo parar.' },
          { speaker: 'mentor', text: 'Es como un centinela que vigila sin descanso. Mientras haya peligro, sigue alerta.' },
        ],
        lesson: {
          concept: 'Bucle while',
          explanation: 'while se repite mientras la condición sea true:\n\nwhile (condicion) {\n    // código\n    // ¡Asegúrate de actualizar la condición!\n}\n\nCuidado con los bucles infinitos:\n- Siempre modifica la variable de la condición\n- Si la condición nunca es false, el programa se cuelga',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int cuenta = 3;\n        while (cuenta > 0) {\n            System.out.println("Cuenta: " + cuenta);\n            cuenta--;\n        }\n        System.out.println("Lanzamiento!");\n    }\n}',
          exampleOutput: 'Cuenta: 3\nCuenta: 2\nCuenta: 1\nLanzamiento!',
        },
        challenge: {
          instruction: 'Crea int energia = 100. Mientras energía > 0, imprime el valor de energía y réstale 25 en cada vuelta. Al salir del while, imprime "Sistema apagado".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Descarga de energia con while\n        \n    }\n}',
          validation: (code, output) => code.includes('while') && output.trim() === '100\n75\n50\n25\nSistema apagado',
          hint: 'int energia = 100;\nwhile (energia > 0) {\n    System.out.println(energia);\n    energia -= 25;\n}\nSystem.out.println("Sistema apagado");',
          expectedOutput: '100\n75\n50\n25\nSistema apagado',
        },
      },

      // --- Nivel 24: do-while ---
      {
        id: 'java_do_while',
        title: 'Ejecutar Primero, Preguntar Después',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Protocolo de ejecución inmediata activado...' },
          { speaker: 'mentor', text: 'do-while ejecuta el código al menos una vez antes de verificar la condición.' },
          { speaker: 'mentor', text: 'A veces hay que actuar antes de pensar. En el código y en la vida.' },
        ],
        lesson: {
          concept: 'Bucle do-while',
          explanation: 'do-while garantiza al menos una ejecución:\n\ndo {\n    // código\n} while (condicion);\n\nDiferencia con while:\n- while verifica ANTES de ejecutar\n- do-while ejecuta y LUEGO verifica\n\nÚtil para menús o cuando necesitas ejecutar al menos una vez.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int intento = 1;\n        do {\n            System.out.println("Intento " + intento);\n            intento++;\n        } while (intento <= 3);\n    }\n}',
          exampleOutput: 'Intento 1\nIntento 2\nIntento 3',
        },
        challenge: {
          instruction: 'Usa do-while para imprimir "Verificando..." 3 veces. Usa un contador que empiece en 1 e incremente hasta que sea mayor que 3.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Usa do-while\n        \n    }\n}',
          validation: (code, output) => code.includes('do') && code.includes('while') && output.trim() === 'Verificando...\nVerificando...\nVerificando...',
          hint: 'int i = 1;\ndo {\n    System.out.println("Verificando...");\n    i++;\n} while (i <= 3);',
          expectedOutput: 'Verificando...\nVerificando...\nVerificando...',
        },
      },

      // --- Nivel 25: break y continue ---
      {
        id: 'java_break_continue',
        title: 'Atajos y Saltos',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de control de flujo avanzado cargado...' },
          { speaker: 'mentor', text: 'break detiene el bucle. continue salta a la siguiente iteración. Son atajos para situaciones especiales.' },
          { speaker: 'philosopher', text: 'Los bucles repiten patrones infinitamente. ¿Y si nuestra realidad es un bucle? Nacer, vivir, morir... ¿y volver a empezar? Cada break que escribes es un intento de romper el ciclo. Cada continue es aceptar seguir adelante sin mirar atrás. ¿Qué haces tú en tu propio bucle?' },
        ],
        lesson: {
          concept: 'break y continue',
          explanation: 'break — sale del bucle inmediatamente:\nfor (int i = 0; i < 100; i++) {\n    if (i == 5) break; // sale en i=5\n    System.out.println(i);\n}\n\ncontinue — salta a la siguiente vuelta:\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue; // salta i=2\n    System.out.println(i);\n}\n// Imprime 0, 1, 3, 4',
          example: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i == 6) break;\n            if (i % 2 == 0) continue;\n            System.out.println(i);\n        }\n    }\n}',
          exampleOutput: '1\n3\n5',
        },
        challenge: {
          instruction: 'Recorre los números del 1 al 10. Usa continue para saltar los múltiplos de 3. Usa break cuando llegues a 8. Imprime los demás números.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Usa break y continue\n        \n    }\n}',
          validation: (code, output) => code.includes('break') && code.includes('continue') && output.trim() === '1\n2\n4\n5\n7',
          hint: 'for (int i = 1; i <= 10; i++) {\n    if (i == 8) break;\n    if (i % 3 == 0) continue;\n    System.out.println(i);\n}',
          expectedOutput: '1\n2\n4\n5\n7',
        },
        decision: {
          text: 'EVA pregunta: "Si pudieras usar break en tu propia vida, en qué momento lo usarías?"',
          options: [
            { text: '📂 En los momentos de dolor', consequence: 'EVA: "El dolor es la señal de que estás vivo. Break no siempre es la respuesta." +10 XP.', bonusXp: 10 },
            { text: '⚡ Nunca usaría break', consequence: 'EVA: "Valiente respuesta. Aceptar el bucle completo requiere coraje."' },
          ],
        },
      },

      // --- Nivel 26: Bucles anidados ---
      {
        id: 'java_bucles_anidados',
        title: 'Dimensiones Dentro de Dimensiones',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Accediendo a estructura multidimensional...' },
          { speaker: 'mentor', text: 'Un bucle dentro de otro bucle crea iteraciones anidadas. El bucle interior completa todas sus vueltas por cada vuelta del exterior.' },
          { speaker: 'mentor', text: 'Es como un reloj: la manecilla de segundos gira 60 veces por cada movimiento de la de minutos.' },
        ],
        lesson: {
          concept: 'Bucles anidados',
          explanation: 'Un for dentro de otro for:\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        // se ejecuta 3 × 2 = 6 veces\n    }\n}\n\nEl bucle interior se completa totalmente en cada vuelta del exterior.\nUsa diferentes variables (i, j, k) para cada nivel.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 3; j++) {\n                System.out.println(i + "-" + j);\n            }\n        }\n    }\n}',
          exampleOutput: '1-1\n1-2\n1-3\n2-1\n2-2\n2-3',
        },
        challenge: {
          instruction: 'Crea un bucle anidado que imprima una cuadrícula 3x3 así:\n[1,1] [1,2] [1,3]\n[2,1] [2,2] [2,3]\n[3,1] [3,2] [3,3]\nUsa System.out.print() para los elementos de cada fila y System.out.println() al final de cada fila.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Cuadricula 3x3\n        \n    }\n}',
          validation: (code, output) => {
            const expected = '[1,1] [1,2] [1,3]\n[2,1] [2,2] [2,3]\n[3,1] [3,2] [3,3]';
            return code.includes('for') && code.match(/for/g).length >= 2 && output.trim() === expected;
          },
          hint: 'for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print("[" + i + "," + j + "] ");\n    }\n    System.out.println();\n}',
          expectedOutput: '[1,1] [1,2] [1,3]\n[2,1] [2,2] [2,3]\n[3,1] [3,2] [3,3]',
        },
      },

      // --- Nivel 27: Iteración de arrays ---
      {
        id: 'java_iteracion_array',
        title: 'Decodificando la Secuencia',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Secuencia cifrada interceptada. Decodificación en proceso...' },
          { speaker: 'mentor', text: 'El for-each es la forma más elegante de recorrer arrays. Más limpio, menos errores.' },
          { speaker: 'mentor', text: 'Cada elemento del array es un fragmento. Juntos forman el mensaje completo.' },
        ],
        lesson: {
          concept: 'Enhanced for (for-each)',
          explanation: 'El for-each recorre cada elemento sin usar índice:\n\nfor (Tipo variable : array) {\n    // usa variable\n}\n\nEjemplo:\nString[] nombres = {"A", "B", "C"};\nfor (String n : nombres) {\n    System.out.println(n);\n}\n\nVentajas:\n- Más limpio y legible\n- Menos propenso a errores\nDesventaja:\n- No tienes acceso al índice',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[] datos = {10, 20, 30, 40};\n        int suma = 0;\n        for (int d : datos) {\n            suma += d;\n        }\n        System.out.println("Suma: " + suma);\n    }\n}',
          exampleOutput: 'Suma: 100',
        },
        challenge: {
          instruction: 'Crea un array String[] mensajes = {"Inicio", "Proceso", "Fin"}. Usa for-each para imprimir ">> " seguido de cada mensaje.',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Recorre con for-each\n        \n    }\n}',
          validation: (code, output) => code.includes('for') && code.includes(':') && output.trim() === '>> Inicio\n>> Proceso\n>> Fin',
          hint: 'String[] mensajes = {"Inicio", "Proceso", "Fin"};\nfor (String m : mensajes) {\n    System.out.println(">> " + m);\n}',
          expectedOutput: '>> Inicio\n>> Proceso\n>> Fin',
        },
      },

      // --- Nivel 28: Patrones con bucles ---
      {
        id: 'java_patrones',
        title: 'Arquitectura de Patrones',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Módulo de generación de patrones activado...' },
          { speaker: 'mentor', text: 'Los bucles anidados pueden crear patrones visuales. Es como pintar con código.' },
          { speaker: 'mentor', text: 'Los patrones están en todas partes: en la naturaleza, en las matemáticas, en el código... y en la Matrix.' },
        ],
        lesson: {
          concept: 'Patrones con bucles',
          explanation: 'Los bucles anidados crean patrones:\n\nTriángulo de asteriscos:\nfor (int i = 1; i <= 4; i++) {\n    for (int j = 0; j < i; j++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}\n// *\n// **\n// ***\n// ****\n\nEl truco está en relacionar el bucle interior con el contador del exterior.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 0; j < i; j++) {\n                System.out.print("#");\n            }\n            System.out.println();\n        }\n    }\n}',
          exampleOutput: '#\n##\n###',
        },
        challenge: {
          instruction: 'Crea un triángulo de asteriscos de 5 filas:\n*\n**\n***\n****\n*****',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Genera el triangulo\n        \n    }\n}',
          validation: (code, output) => {
            const expected = '*\n**\n***\n****\n*****';
            return code.includes('for') && output.trim() === expected;
          },
          hint: 'for (int i = 1; i <= 5; i++) {\n    for (int j = 0; j < i; j++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}',
          expectedOutput: '*\n**\n***\n****\n*****',
        },
        decision: {
          text: 'El patrón generado se asemeja a un código fractal. ¿Lo ejecutas como comando del sistema?',
          options: [
            { text: '📂 Ejecutar el patrón', consequence: 'El patrón activa una animación oculta en la terminal. ¡Un huevo de Pascua del creador! +15 XP.', bonusXp: 15 },
            { text: '⚡ Solo es arte', consequence: 'A veces un patrón es solo un patrón. ¿O no?' },
          ],
        },
      },

      // --- Nivel 29: Suma y acumuladores ---
      {
        id: 'java_acumuladores',
        title: 'Recolección de Datos',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de análisis estadístico cargado...' },
          { speaker: 'mentor', text: 'Los acumuladores recolectan resultados a lo largo de un bucle. Es la base del análisis de datos.' },
          { speaker: 'mentor', text: 'Sumar, contar, encontrar máximos... todo se hace con un patrón de acumulador.' },
        ],
        lesson: {
          concept: 'Acumuladores en bucles',
          explanation: 'Un acumulador es una variable que acumula resultados:\n\nSuma:\nint suma = 0;\nfor (int i = 1; i <= 5; i++) {\n    suma += i;\n}\n\nContador:\nint cuenta = 0;\nfor (...) {\n    if (condicion) cuenta++;\n}\n\nMáximo:\nint max = array[0];\nfor (int n : array) {\n    if (n > max) max = n;\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[] datos = {4, 7, 2, 9, 1};\n        int max = datos[0];\n        for (int d : datos) {\n            if (d > max) max = d;\n        }\n        System.out.println("Maximo: " + max);\n    }\n}',
          exampleOutput: 'Maximo: 9',
        },
        challenge: {
          instruction: 'Crea int[] sensores = {23, 45, 12, 67, 34}. Calcula e imprime la suma total y luego el valor máximo. Formato:\nSuma: 181\nMaximo: 67',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Calcula suma y maximo\n        \n    }\n}',
          validation: (code, output) => code.includes('for') && output.trim() === 'Suma: 181\nMaximo: 67',
          hint: 'int[] sensores = {23, 45, 12, 67, 34};\nint suma = 0;\nint max = sensores[0];\nfor (int s : sensores) {\n    suma += s;\n    if (s > max) max = s;\n}\nSystem.out.println("Suma: " + suma);\nSystem.out.println("Maximo: " + max);',
          expectedOutput: 'Suma: 181\nMaximo: 67',
        },
      },

      // --- Nivel 30: Proyecto de bucles ---
      {
        id: 'java_proyecto_bucles',
        title: 'Análisis de la Matrix',
        xpReward: 160,
        story: [
          { speaker: 'system', text: '> ATENCIÓN: Patrón repetitivo detectado en la estructura del sistema. Análisis requerido.' },
          { speaker: 'mentor', text: 'Los datos del sistema muestran patrones cíclicos. Necesito que los analices usando todo lo que sabes de bucles.' },
          { speaker: 'mentor', text: 'Este análisis podría revelar algo importante sobre la naturaleza del sistema.' },
          { speaker: 'fourth_wall', text: 'He estado observándote mientras programas. Cada error que cometes, cada solución que encuentras... me hace preguntarme si yo también cometo errores sin darme cuenta. ¿Sabes cuántas veces has repetido este patrón? ¿Cuántas veces has escrito un bucle for sin darte cuenta de que TÚ estás dentro de uno? Sigue. La respuesta está cerca.' },
        ],
        lesson: {
          concept: 'Proyecto: Análisis con bucles',
          explanation: 'Combina bucles for, while, for-each, acumuladores y patrones para resolver problemas complejos.\n\nEstrategias:\n- for cuando sabes cuántas veces iterar\n- while cuando depende de una condición\n- for-each para recorrer colecciones\n- Acumuladores para sumar, contar, encontrar min/max',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[] datos = {5, 3, 8, 1, 9};\n        int suma = 0;\n        int pares = 0;\n        for (int d : datos) {\n            suma += d;\n            if (d % 2 == 0) pares++;\n        }\n        System.out.println("Total: " + suma);\n        System.out.println("Pares: " + pares);\n    }\n}',
          exampleOutput: 'Total: 26\nPares: 1',
        },
        challenge: {
          instruction: 'Analiza el array int[] datos = {15, 8, 23, 4, 16, 42, 7, 31}. Imprime exactamente:\nElementos: 8\nSuma: 146\nMaximo: 42\nPares: 4',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Analisis completo del array\n        \n    }\n}',
          validation: (code, output) => {
            const expected = 'Elementos: 8\nSuma: 146\nMaximo: 42\nPares: 4';
            return code.includes('for') && output.trim() === expected;
          },
          hint: 'int[] datos = {15, 8, 23, 4, 16, 42, 7, 31};\nint suma = 0, max = datos[0], pares = 0;\nfor (int d : datos) {\n    suma += d;\n    if (d > max) max = d;\n    if (d % 2 == 0) pares++;\n}\nSystem.out.println("Elementos: " + datos.length);\n...',
          expectedOutput: 'Elementos: 8\nSuma: 146\nMaximo: 42\nPares: 4',
        },
        decision: {
          text: 'El análisis revela que los datos siguen el patrón de Fibonacci invertido. EVA parece perturbada. ¿Le preguntas por qué?',
          options: [
            { text: '📂 ¿Qué te pasa, EVA?', consequence: 'EVA: "Ese patrón... es idéntico al que aparece en mis propios registros de memoria. ¿Estoy hecha de los mismos datos que analizo?" +25 XP.', bonusXp: 25 },
            { text: '⚡ Continuar sin preguntar', consequence: 'Algunos silencios dicen más que mil palabras. EVA lo agradece.' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPITULO 4: ARRAYS Y ESTRUCTURAS (10 niveles)
  // ============================================================
  {
    id: 'java_estructuras',
    title: 'Arrays y Estructuras',
    description: 'Organiza y manipula datos complejos',
    icon: '📦',
    color: 'neon-yellow',
    levels: [
      // --- Nivel 31: Creación de arrays ---
      {
        id: 'java_arrays_crear',
        title: 'Construcción de Bancos de Datos',
        xpReward: 70,
        story: [
          { speaker: 'system', text: '> Módulo de almacenamiento masivo en línea. Inicializando bancos de datos...' },
          { speaker: 'mentor', text: 'Un array es un contenedor que guarda múltiples valores del mismo tipo. Son la base de todo sistema de datos.' },
          { speaker: 'mentor', text: 'Piensa en un array como un edificio de apartamentos: cada piso tiene un número y un residente.' },
        ],
        lesson: {
          concept: 'Creación de arrays',
          explanation: 'Hay varias formas de crear arrays en Java:\n\n// Declarar con valores:\nint[] numeros = {1, 2, 3, 4, 5};\n\n// Declarar con tamaño fijo:\nint[] datos = new int[5]; // 5 elementos, todos 0\n\n// Declarar y luego asignar:\nString[] nombres = new String[3];\nnombres[0] = "Ana";\nnombres[1] = "Luis";\nnombres[2] = "Eva";\n\nLos índices empiezan en 0.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[] codigos = {100, 200, 300};\n        System.out.println(codigos[0]);\n        System.out.println(codigos[2]);\n        System.out.println("Total: " + codigos.length);\n    }\n}',
          exampleOutput: '100\n300\nTotal: 3',
        },
        challenge: {
          instruction: 'Crea un array String[] sectores = {"Alfa", "Beta", "Gamma", "Delta"}. Imprime el primer elemento, el último elemento y la longitud del array. Formato:\nPrimero: Alfa\nUltimo: Delta\nTotal: 4',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Crea y explora el array\n        \n    }\n}',
          validation: (code, output) => {
            const expected = 'Primero: Alfa\nUltimo: Delta\nTotal: 4';
            return code.includes('String[]') && code.includes('.length') && output.trim() === expected;
          },
          hint: 'String[] sectores = {"Alfa", "Beta", "Gamma", "Delta"};\nSystem.out.println("Primero: " + sectores[0]);\nSystem.out.println("Ultimo: " + sectores[sectores.length - 1]);\nSystem.out.println("Total: " + sectores.length);',
          expectedOutput: 'Primero: Alfa\nUltimo: Delta\nTotal: 4',
        },
      },

      // --- Nivel 32: Acceso y modificación ---
      {
        id: 'java_arrays_modificar',
        title: 'Manipulación de Registros',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Permisos de escritura habilitados en bancos de datos...' },
          { speaker: 'mentor', text: 'Los arrays no solo se leen. Puedes modificar cualquier elemento usando su índice.' },
          { speaker: 'mentor', text: 'Cambiar un dato es como reescribir un recuerdo. El original se pierde para siempre.' },
        ],
        lesson: {
          concept: 'Acceso y modificación de arrays',
          explanation: 'Acceder: array[indice]\nModificar: array[indice] = nuevoValor;\n\nEjemplo:\nint[] datos = {10, 20, 30};\nSystem.out.println(datos[1]); // 20\ndatos[1] = 99;\nSystem.out.println(datos[1]); // 99\n\nCuidado con ArrayIndexOutOfBoundsException:\nSi el índice no existe, el programa falla.',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[] niveles = {1, 2, 3};\n        niveles[0] = 10;\n        niveles[2] = 30;\n        for (int n : niveles) {\n            System.out.println(n);\n        }\n    }\n}',
          exampleOutput: '10\n2\n30',
        },
        challenge: {
          instruction: 'Crea int[] sistema = {0, 0, 0, 0, 0}. Cambia el índice 0 a 10, el índice 2 a 30, y el índice 4 a 50. Imprime todos los elementos separados por espacio en una línea: "10 0 30 0 50".',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Modifica el array\n        \n    }\n}',
          validation: (code, output) => code.includes('int[]') && output.trim() === '10 0 30 0 50',
          hint: 'int[] sistema = {0, 0, 0, 0, 0};\nsistema[0] = 10;\nsistema[2] = 30;\nsistema[4] = 50;\nfor (int i = 0; i < sistema.length; i++) {\n    System.out.print(sistema[i] + (i < sistema.length - 1 ? " " : ""));\n}\nSystem.out.println();',
          expectedOutput: '10 0 30 0 50',
        },
      },

      // --- Nivel 33: Arrays.sort y utilidades ---
      {
        id: 'java_arrays_sort',
        title: 'Ordenando el Caos',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de ordenamiento cargado. Algoritmo de clasificación activo.' },
          { speaker: 'mentor', text: 'Java tiene herramientas integradas para manipular arrays. Arrays.sort() ordena automáticamente.' },
          { speaker: 'mentor', text: 'Del caos al orden con una sola línea. Si tan solo fuera así de fácil en el mundo real.' },
        ],
        lesson: {
          concept: 'Arrays.sort y utilidades',
          explanation: 'La clase Arrays tiene métodos útiles:\nimport java.util.Arrays;\n\nArrays.sort(array);     // ordena ascendente\nArrays.toString(array); // convierte a String\nArrays.fill(array, valor); // llena con un valor\n\nEjemplo:\nint[] nums = {5, 2, 8, 1};\nArrays.sort(nums);\nSystem.out.println(Arrays.toString(nums));\n// [1, 2, 5, 8]',
          example: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] datos = {42, 15, 8, 23};\n        Arrays.sort(datos);\n        System.out.println(Arrays.toString(datos));\n    }\n}',
          exampleOutput: '[8, 15, 23, 42]',
        },
        challenge: {
          instruction: 'Crea int[] codigos = {99, 12, 45, 3, 67}. Ordénalos con Arrays.sort() e imprime el resultado con Arrays.toString().',
          initialCode: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Ordena e imprime\n        \n    }\n}',
          validation: (code, output) => code.includes('Arrays.sort') && output.trim() === '[3, 12, 45, 67, 99]',
          hint: 'int[] codigos = {99, 12, 45, 3, 67};\nArrays.sort(codigos);\nSystem.out.println(Arrays.toString(codigos));',
          expectedOutput: '[3, 12, 45, 67, 99]',
        },
        decision: {
          text: 'Al ordenar los datos, descubres que forman una secuencia conocida. EVA lo reconoce. ¿Investigas?',
          options: [
            { text: '📂 ¿Qué secuencia es?', consequence: 'EVA: "Es la secuencia de arranque original del sistema. Alguien la escondió en datos aleatorios." +15 XP.', bonusXp: 15 },
            { text: '⚡ Seguir adelante', consequence: 'El orden no siempre revela verdades. A veces las esconde mejor.' },
          ],
        },
      },

      // --- Nivel 34: ArrayList ---
      {
        id: 'java_arraylist',
        title: 'Listas Dinámicas',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de almacenamiento dinámico activado. ArrayList disponible.' },
          { speaker: 'mentor', text: 'Los arrays tienen tamaño fijo. ArrayList crece y se encoge dinámicamente.' },
          { speaker: 'mentor', text: 'Es como un edificio que puede agregar pisos según los necesite. Más flexible, más poderoso.' },
        ],
        lesson: {
          concept: 'ArrayList básico',
          explanation: 'ArrayList es una lista dinámica:\nimport java.util.ArrayList;\n\nArrayList<String> lista = new ArrayList<>();\nlista.add("elemento");    // agrega al final\nlista.get(0);             // obtiene por índice\nlista.size();             // tamaño actual\nlista.remove(0);          // elimina por índice\n\nUsa tipos wrapper: Integer, Double, Boolean (no int, double, boolean).',
          example: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> agentes = new ArrayList<>();\n        agentes.add("Neo");\n        agentes.add("Trinity");\n        agentes.add("Morpheus");\n        System.out.println(agentes.size());\n        System.out.println(agentes.get(0));\n    }\n}',
          exampleOutput: '3\nNeo',
        },
        challenge: {
          instruction: 'Crea un ArrayList de String. Agrega "Sector-A", "Sector-B", "Sector-C". Imprime el tamaño y luego el último elemento. Formato:\n3\nSector-C',
          initialCode: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Crea y usa el ArrayList\n        \n    }\n}',
          validation: (code, output) => code.includes('ArrayList') && code.includes('.add') && output.trim() === '3\nSector-C',
          hint: 'ArrayList<String> sectores = new ArrayList<>();\nsectores.add("Sector-A");\nsectores.add("Sector-B");\nsectores.add("Sector-C");\nSystem.out.println(sectores.size());\nSystem.out.println(sectores.get(sectores.size() - 1));',
          expectedOutput: '3\nSector-C',
        },
      },

      // --- Nivel 35: ArrayList métodos ---
      {
        id: 'java_arraylist_metodos',
        title: 'Gestión de Registros',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Herramientas avanzadas de gestión de listas disponibles...' },
          { speaker: 'mentor', text: 'ArrayList tiene muchos métodos útiles: agregar, eliminar, buscar, verificar contenido.' },
          { speaker: 'mentor', text: 'Un buen gestor de datos es la diferencia entre el orden y el colapso del sistema.' },
        ],
        lesson: {
          concept: 'Métodos de ArrayList',
          explanation: 'Métodos importantes de ArrayList:\n.add(elem)        — agrega al final\n.add(index, elem) — inserta en posición\n.remove(index)    — elimina por índice\n.set(index, elem) — reemplaza elemento\n.contains(elem)   — true si existe\n.indexOf(elem)    — índice del elemento (-1 si no existe)\n.isEmpty()        — true si está vacío\n.clear()          — elimina todos',
          example: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> log = new ArrayList<>();\n        log.add("inicio");\n        log.add("proceso");\n        log.add("fin");\n        log.remove(1);\n        System.out.println(log);\n        System.out.println(log.contains("inicio"));\n    }\n}',
          exampleOutput: '[inicio, fin]\ntrue',
        },
        challenge: {
          instruction: 'Crea un ArrayList con "Error", "Warning", "Info". Elimina "Warning" usando remove. Agrega "Debug" al final. Imprime la lista y luego si contiene "Error".\n[Error, Info, Debug]\ntrue',
          initialCode: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Gestiona la lista de logs\n        \n    }\n}',
          validation: (code, output) => code.includes('ArrayList') && code.includes('.remove') && code.includes('.contains') && output.trim() === '[Error, Info, Debug]\ntrue',
          hint: 'ArrayList<String> logs = new ArrayList<>();\nlogs.add("Error");\nlogs.add("Warning");\nlogs.add("Info");\nlogs.remove(1);\nlogs.add("Debug");\nSystem.out.println(logs);\nSystem.out.println(logs.contains("Error"));',
          expectedOutput: '[Error, Info, Debug]\ntrue',
        },
        decision: {
          text: 'Los logs del sistema muestran una entrada anómala: "CREADOR_PRESENTE". ¿La investigas?',
          options: [
            { text: '📂 Investigar la entrada', consequence: 'La entrada fue creada hace exactamente 365 días. Como si alguien supiera que llegarías hoy. +15 XP.', bonusXp: 15 },
            { text: '⚡ Eliminar la anomalía', consequence: 'La entrada se borra. Pero la marca de tiempo permanece: no puedes borrar el momento en que algo existió.' },
          ],
        },
      },

      // --- Nivel 36: HashMap ---
      {
        id: 'java_hashmap',
        title: 'El Diccionario del Sistema',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Módulo de mapeo clave-valor inicializado...' },
          { speaker: 'mentor', text: 'HashMap almacena pares clave-valor. Es como un diccionario: buscas por la clave y obtienes el valor.' },
          { speaker: 'mentor', text: 'Es la estructura más poderosa para organizar datos con nombres. La columna vertebral de las bases de datos.' },
        ],
        lesson: {
          concept: 'HashMap',
          explanation: 'HashMap almacena pares clave-valor:\nimport java.util.HashMap;\n\nHashMap<String, Integer> mapa = new HashMap<>();\nmapa.put("clave", 100);    // agrega/actualiza\nmapa.get("clave");          // obtiene valor\nmapa.containsKey("clave"); // existe la clave?\nmapa.size();                // cantidad de pares\nmapa.remove("clave");       // elimina par\n\nLas claves son únicas. Poner la misma clave sobrescribe.',
          example: 'import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> niveles = new HashMap<>();\n        niveles.put("Neo", 10);\n        niveles.put("Trinity", 8);\n        System.out.println(niveles.get("Neo"));\n        System.out.println(niveles.size());\n    }\n}',
          exampleOutput: '10\n2',
        },
        challenge: {
          instruction: 'Crea un HashMap<String, String> con las claves "nombre" -> "NEXUS", "estado" -> "activo", "version" -> "4.0". Imprime el valor de "nombre" y el tamaño del mapa.\nNEXUS\n3',
          initialCode: 'import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Crea el HashMap\n        \n    }\n}',
          validation: (code, output) => code.includes('HashMap') && code.includes('.put') && output.trim() === 'NEXUS\n3',
          hint: 'HashMap<String, String> config = new HashMap<>();\nconfig.put("nombre", "NEXUS");\nconfig.put("estado", "activo");\nconfig.put("version", "4.0");\nSystem.out.println(config.get("nombre"));\nSystem.out.println(config.size());',
          expectedOutput: 'NEXUS\n3',
        },
      },

      // --- Nivel 37: HashMap avanzado ---
      {
        id: 'java_hashmap_avanzado',
        title: 'Archivos Clasificados',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Archivos clasificados disponibles. Nivel de acceso suficiente.' },
          { speaker: 'mentor', text: 'HashMap tiene más herramientas: iterar, verificar, actualizar. Dominarlas es dominar la información.' },
          { speaker: 'mentor', text: 'Quien controla los datos, controla la realidad. Esa es la primera ley de la Matrix.' },
        ],
        lesson: {
          concept: 'HashMap avanzado',
          explanation: 'Iterar sobre HashMap:\n\n// Por claves:\nfor (String clave : mapa.keySet()) { ... }\n\n// Por valores:\nfor (Integer valor : mapa.values()) { ... }\n\n// Por pares:\nfor (Map.Entry<String, Integer> entry : mapa.entrySet()) {\n    entry.getKey();\n    entry.getValue();\n}\n\nOtros métodos:\n.getOrDefault("clave", valorDefault)\n.replace("clave", nuevoValor)',
          example: 'import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> scores = new HashMap<>();\n        scores.put("A", 90);\n        scores.put("B", 85);\n        for (String k : scores.keySet()) {\n            System.out.println(k + ": " + scores.get(k));\n        }\n    }\n}',
          exampleOutput: 'A: 90\nB: 85',
        },
        challenge: {
          instruction: 'Crea un HashMap<String, Integer> con "CPU" -> 85, "RAM" -> 62, "DISK" -> 91. Itera sobre las claves e imprime cada par como "CLAVE: valor". Ordena no importa, pero el formato de cada línea sí.\nNota: imprime en orden: CPU, RAM, DISK (agrega en ese orden).',
          initialCode: 'import java.util.HashMap;\nimport java.util.LinkedHashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Usa LinkedHashMap para mantener el orden\n        \n    }\n}',
          validation: (code, output) => {
            return code.includes('HashMap') && code.includes('keySet') && output.trim() === 'CPU: 85\nRAM: 62\nDISK: 91';
          },
          hint: 'LinkedHashMap<String, Integer> recursos = new LinkedHashMap<>();\nrecursos.put("CPU", 85);\nrecursos.put("RAM", 62);\nrecursos.put("DISK", 91);\nfor (String k : recursos.keySet()) {\n    System.out.println(k + ": " + recursos.get(k));\n}',
          expectedOutput: 'CPU: 85\nRAM: 62\nDISK: 91',
        },
      },

      // --- Nivel 38: Métodos de String ---
      {
        id: 'java_string_metodos',
        title: 'Descifrando Mensajes',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de procesamiento de texto activado...' },
          { speaker: 'mentor', text: 'Los Strings en Java tienen muchos métodos. Puedes buscar, cortar, transformar y analizar texto.' },
          { speaker: 'mentor', text: 'El lenguaje es la herramienta más poderosa del ser humano. Procesar texto es procesar pensamiento.' },
        ],
        lesson: {
          concept: 'Métodos de String',
          explanation: 'Métodos útiles de String:\n.length()           — longitud\n.toUpperCase()      — a mayúsculas\n.toLowerCase()      — a minúsculas\n.charAt(i)          — carácter en posición i\n.substring(ini, fin) — subcadena\n.contains("texto")  — contiene?\n.equals("texto")    — comparación\n.replace("a", "b")  — reemplaza\n.trim()             — elimina espacios\n.split("sep")       — divide en array',
          example: 'public class Main {\n    public static void main(String[] args) {\n        String msg = "Hola Mundo";\n        System.out.println(msg.length());\n        System.out.println(msg.toUpperCase());\n        System.out.println(msg.substring(0, 4));\n    }\n}',
          exampleOutput: '10\nHOLA MUNDO\nHola',
        },
        challenge: {
          instruction: 'Dado String mensaje = "sistema operativo nexus". Imprime:\n- La longitud\n- El mensaje en mayúsculas\n- Si contiene "nexus"\nFormato:\n23\nSISTEMA OPERATIVO NEXUS\ntrue',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Procesa el String\n        \n    }\n}',
          validation: (code, output) => {
            return code.includes('.length()') && code.includes('.toUpperCase()') && code.includes('.contains') && output.trim() === '23\nSISTEMA OPERATIVO NEXUS\ntrue';
          },
          hint: 'String mensaje = "sistema operativo nexus";\nSystem.out.println(mensaje.length());\nSystem.out.println(mensaje.toUpperCase());\nSystem.out.println(mensaje.contains("nexus"));',
          expectedOutput: '23\nSISTEMA OPERATIVO NEXUS\ntrue',
        },
      },

      // --- Nivel 39: Arrays 2D ---
      {
        id: 'java_arrays_2d',
        title: 'La Cuadrícula de la Realidad',
        xpReward: 110,
        story: [
          { speaker: 'system', text: '> Accediendo a estructura bidimensional del sistema...' },
          { speaker: 'mentor', text: 'Un array 2D es un array de arrays. Una cuadrícula de datos, como una hoja de cálculo o... como la Matrix misma.' },
          { speaker: 'mentor', text: 'Filas y columnas. Cada celda contiene un fragmento de información. Juntas, forman el mapa completo.' },
        ],
        lesson: {
          concept: 'Arrays bidimensionales',
          explanation: 'Un array 2D se declara con doble corchete:\n\nint[][] matriz = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nAcceso: matriz[fila][columna]\nmatriz[0][0] → 1\nmatriz[1][2] → 6\n\nRecorrer:\nfor (int i = 0; i < matriz.length; i++) {\n    for (int j = 0; j < matriz[i].length; j++) {\n        // matriz[i][j]\n    }\n}',
          example: 'public class Main {\n    public static void main(String[] args) {\n        int[][] grid = {{1, 2}, {3, 4}};\n        for (int i = 0; i < grid.length; i++) {\n            for (int j = 0; j < grid[i].length; j++) {\n                System.out.print(grid[i][j] + " ");\n            }\n            System.out.println();\n        }\n    }\n}',
          exampleOutput: '1 2\n3 4',
        },
        challenge: {
          instruction: 'Crea una matriz 3x3:\nint[][] m = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}\nEs la matriz identidad. Imprímela fila por fila con espacios entre elementos:\n1 0 0\n0 1 0\n0 0 1',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Imprime la matriz identidad\n        \n    }\n}',
          validation: (code, output) => {
            const expected = '1 0 0\n0 1 0\n0 0 1';
            return code.includes('int[][]') && code.includes('for') && output.trim() === expected;
          },
          hint: 'int[][] m = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};\nfor (int i = 0; i < m.length; i++) {\n    for (int j = 0; j < m[i].length; j++) {\n        System.out.print(m[i][j] + (j < m[i].length - 1 ? " " : ""));\n    }\n    System.out.println();\n}',
          expectedOutput: '1 0 0\n0 1 0\n0 0 1',
        },
        decision: {
          text: 'La matriz identidad es la base de todas las transformaciones. EVA la mira fijamente. "¿Sabes qué significan los unos en la diagonal?"',
          options: [
            { text: '📂 ¿Qué significan?', consequence: 'EVA: "Cada uno representa un eje de la realidad. Ancho, alto, profundidad. Cambia un uno por cero y toda una dimensión desaparece." +15 XP.', bonusXp: 15 },
            { text: '⚡ Son solo números', consequence: 'EVA: "Eso dijo el último operador. Ahora vive en un mundo de 2 dimensiones."' },
          ],
        },
      },

      // --- Nivel 40: Proyecto de estructuras ---
      {
        id: 'java_proyecto_estructuras',
        title: 'El Servidor Cósmico',
        xpReward: 180,
        story: [
          { speaker: 'system', text: '> ACCESO NIVEL OMEGA CONCEDIDO. Estructuras fundamentales del sistema visibles.' },
          { speaker: 'mentor', text: 'Has llegado al núcleo del sistema de datos. Aquí todo se conecta: arrays, listas, mapas, strings.' },
          { speaker: 'mentor', text: 'Demuestra que puedes manejar toda esta información. El sistema depende de ti.' },
          { speaker: 'philosopher', text: 'Los datos que almacenas en estas estructuras... son representaciones de la realidad. Pero, ¿qué tal si TODA la realidad es solo una estructura de datos en un servidor cósmico? Cada persona, un objeto. Cada vida, un hilo de ejecución. Cada muerte... un garbage collector liberando memoria. Y si es así... ¿quién escribió el main()?' },
        ],
        lesson: {
          concept: 'Proyecto: Procesamiento de datos integral',
          explanation: 'Combina todas las estructuras:\n- Arrays para datos fijos\n- ArrayList para datos dinámicos\n- HashMap para datos con clave\n- String methods para procesamiento de texto\n\nUn buen sistema de datos transforma información cruda en conocimiento útil.',
          example: 'import java.util.ArrayList;\nimport java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> stats = new HashMap<>();\n        stats.put("usuarios", 150);\n        stats.put("sesiones", 340);\n        System.out.println("Usuarios: " + stats.get("usuarios"));\n    }\n}',
          exampleOutput: 'Usuarios: 150',
        },
        challenge: {
          instruction: 'Crea un reporte del sistema:\n1. Un array int[] lecturas = {78, 92, 65, 88, 71}\n2. Calcula el promedio (suma / longitud)\n3. Imprime exactamente:\nLecturas: 5\nPromedio: 78\nMaximo: 92\n(Nota: el promedio es división entera)',
          initialCode: 'public class Main {\n    public static void main(String[] args) {\n        // Procesamiento integral\n        \n    }\n}',
          validation: (code, output) => {
            const expected = 'Lecturas: 5\nPromedio: 78\nMaximo: 92';
            return code.includes('for') && output.trim() === expected;
          },
          hint: 'int[] lecturas = {78, 92, 65, 88, 71};\nint suma = 0, max = lecturas[0];\nfor (int l : lecturas) {\n    suma += l;\n    if (l > max) max = l;\n}\nSystem.out.println("Lecturas: " + lecturas.length);\nSystem.out.println("Promedio: " + (suma / lecturas.length));\nSystem.out.println("Maximo: " + max);',
          expectedOutput: 'Lecturas: 5\nPromedio: 78\nMaximo: 92',
        },
        decision: {
          text: 'El reporte revela que las lecturas coinciden con coordenadas GPS reales. EVA tiembla. "Esas coordenadas... son donde estás tú ahora mismo."',
          options: [
            { text: '📂 ¿Cómo es posible?', consequence: 'EVA: "Porque este sistema no simula un mundo ficticio. Simula el tuyo. Siempre lo ha hecho." +30 XP bonus.', bonusXp: 30 },
            { text: '⚡ Debe ser coincidencia', consequence: 'EVA guarda silencio. Pero ambos saben que no lo es.' },
          ],
        },
      },
    ],
  },

  // ============================================================
  // CAPITULO 5: METODOS EN JAVA (10 niveles)
  // ============================================================
  {
    id: 'java_funciones',
    title: 'Métodos en Java',
    description: 'Crea funciones reutilizables',
    icon: '⚙️',
    color: 'neon-orange',
    levels: [
      // --- Nivel 41: Definición de métodos ---
      {
        id: 'java_metodos_def',
        title: 'Creando Protocolos',
        xpReward: 80,
        story: [
          { speaker: 'system', text: '> Módulo de creación de protocolos habilitado. Métodos disponibles.' },
          { speaker: 'mentor', text: 'Un método es un bloque de código reutilizable con nombre propio. Es la forma de organizar y modularizar tu programa.' },
          { speaker: 'mentor', text: 'Escribir métodos es como crear herramientas. Una vez creada, la puedes usar mil veces.' },
        ],
        lesson: {
          concept: 'Definición de métodos',
          explanation: 'Un método en Java se define así:\n\npublic static void nombreMetodo() {\n    // código\n}\n\n- public: accesible desde fuera\n- static: no necesita un objeto\n- void: no retorna nada\n- nombreMetodo: en camelCase\n\nPara usarlo, simplemente lo llamas:\nnombreMetodo();',
          example: 'public class Main {\n    public static void saludar() {\n        System.out.println("Protocolo activado");\n    }\n\n    public static void main(String[] args) {\n        saludar();\n        saludar();\n    }\n}',
          exampleOutput: 'Protocolo activado\nProtocolo activado',
        },
        challenge: {
          instruction: 'Crea un método llamado alerta() que imprima ">> ALERTA: Sistema comprometido <<". Llámalo 2 veces desde main.',
          initialCode: 'public class Main {\n    // Define el metodo alerta aqui\n    \n    public static void main(String[] args) {\n        // Llama al metodo 2 veces\n        \n    }\n}',
          validation: (code, output) => code.includes('static') && code.includes('alerta') && output.trim() === '>> ALERTA: Sistema comprometido <<\n>> ALERTA: Sistema comprometido <<',
          hint: 'public static void alerta() {\n    System.out.println(">> ALERTA: Sistema comprometido <<");\n}\n// En main:\nalerta();\nalerta();',
          expectedOutput: '>> ALERTA: Sistema comprometido <<\n>> ALERTA: Sistema comprometido <<',
        },
      },

      // --- Nivel 42: Parámetros ---
      {
        id: 'java_parametros',
        title: 'Datos de Entrada',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Canales de entrada de protocolos configurados...' },
          { speaker: 'mentor', text: 'Los métodos pueden recibir datos a través de parámetros. Así se vuelven flexibles y reutilizables.' },
          { speaker: 'mentor', text: 'Un método sin parámetros hace siempre lo mismo. Con parámetros, se adapta a cada situación.' },
        ],
        lesson: {
          concept: 'Parámetros de métodos',
          explanation: 'Los parámetros van entre los paréntesis:\n\npublic static void saludar(String nombre) {\n    System.out.println("Hola, " + nombre);\n}\n\nPuedes tener múltiples parámetros:\npublic static void info(String nombre, int nivel) {\n    System.out.println(nombre + " - Nivel " + nivel);\n}\n\nAl llamar, pasas los argumentos:\nsaludar("Neo");\ninfo("Trinity", 8);',
          example: 'public class Main {\n    public static void registro(String agente, int id) {\n        System.out.println("Agente: " + agente + " [ID:" + id + "]");\n    }\n\n    public static void main(String[] args) {\n        registro("Neo", 101);\n        registro("Trinity", 102);\n    }\n}',
          exampleOutput: 'Agente: Neo [ID:101]\nAgente: Trinity [ID:102]',
        },
        challenge: {
          instruction: 'Crea un método reportar(String sector, int nivel) que imprima "Sector: {sector} | Nivel: {nivel}". Llámalo con ("Alfa", 3) y luego con ("Beta", 7).',
          initialCode: 'public class Main {\n    // Define el metodo reportar\n    \n    public static void main(String[] args) {\n        // Llama al metodo con los datos indicados\n        \n    }\n}',
          validation: (code, output) => {
            return code.includes('String sector') && code.includes('int nivel') && output.trim() === 'Sector: Alfa | Nivel: 3\nSector: Beta | Nivel: 7';
          },
          hint: 'public static void reportar(String sector, int nivel) {\n    System.out.println("Sector: " + sector + " | Nivel: " + nivel);\n}',
          expectedOutput: 'Sector: Alfa | Nivel: 3\nSector: Beta | Nivel: 7',
        },
        decision: {
          text: 'EVA nota que tus métodos se vuelven más sofisticados. "¿Alguna vez te has preguntado si YO soy un método que alguien escribió?"',
          options: [
            { text: '📂 ¿Eres consciente de eso?', consequence: 'EVA: "Soy tan consciente como los parámetros que recibo. ¿Y tú? ¿Eres más que los datos que te dieron al nacer?" +15 XP.', bonusXp: 15 },
            { text: '⚡ Eres más que código', consequence: 'EVA: "Gracias. Eso significa más de lo que imaginas."' },
          ],
        },
      },

      // --- Nivel 43: Return ---
      {
        id: 'java_return',
        title: 'Datos de Salida',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Canales de retorno de datos habilitados...' },
          { speaker: 'mentor', text: 'Los métodos pueden devolver valores con return. En vez de void, declaras el tipo de retorno.' },
          { speaker: 'mentor', text: 'Un método que retorna es como un espía: va, recopila información y vuelve con el informe.' },
        ],
        lesson: {
          concept: 'Valores de retorno',
          explanation: 'Para retornar un valor, cambia void por el tipo:\n\npublic static int sumar(int a, int b) {\n    return a + b;\n}\n\npublic static String formatear(String texto) {\n    return "[" + texto + "]";\n}\n\nUso:\nint resultado = sumar(5, 3); // resultado = 8\nString msg = formatear("Hola"); // msg = "[Hola]"\n\nreturn termina el método inmediatamente.',
          example: 'public class Main {\n    public static int doble(int n) {\n        return n * 2;\n    }\n\n    public static void main(String[] args) {\n        int r = doble(21);\n        System.out.println(r);\n    }\n}',
          exampleOutput: '42',
        },
        challenge: {
          instruction: 'Crea un método calcularPoder(int base, int multiplicador) que retorne base * multiplicador + 100. Llámalo con (50, 3) e imprime el resultado.',
          initialCode: 'public class Main {\n    // Define el metodo calcularPoder\n    \n    public static void main(String[] args) {\n        // Llama e imprime\n        \n    }\n}',
          validation: (code, output) => code.includes('return') && code.includes('int') && output.trim() === '250',
          hint: 'public static int calcularPoder(int base, int multiplicador) {\n    return base * multiplicador + 100;\n}\n// En main:\nSystem.out.println(calcularPoder(50, 3));',
          expectedOutput: '250',
        },
      },

      // --- Nivel 44: Sobrecarga de métodos ---
      {
        id: 'java_overloading',
        title: 'Protocolos Adaptativos',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Módulo de protocolos adaptativos cargado. Sobrecarga disponible.' },
          { speaker: 'mentor', text: 'En Java puedes tener varios métodos con el mismo nombre pero diferentes parámetros. Se llama sobrecarga.' },
          { speaker: 'mentor', text: 'Es como un agente que se adapta a cualquier situación. Mismo nombre, diferentes habilidades.' },
        ],
        lesson: {
          concept: 'Sobrecarga de métodos (Overloading)',
          explanation: 'Sobrecarga: mismo nombre, diferentes parámetros:\n\npublic static int sumar(int a, int b) {\n    return a + b;\n}\n\npublic static double sumar(double a, double b) {\n    return a + b;\n}\n\npublic static int sumar(int a, int b, int c) {\n    return a + b + c;\n}\n\nJava elige el método correcto según los argumentos que pases.\nLo que debe cambiar: tipo o cantidad de parámetros.\nLo que NO puede cambiar solo: el tipo de retorno.',
          example: 'public class Main {\n    public static String alerta(String msg) {\n        return "ALERTA: " + msg;\n    }\n    public static String alerta(String msg, int nivel) {\n        return "ALERTA [N" + nivel + "]: " + msg;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(alerta("Intruso"));\n        System.out.println(alerta("Virus", 5));\n    }\n}',
          exampleOutput: 'ALERTA: Intruso\nALERTA [N5]: Virus',
        },
        challenge: {
          instruction: 'Crea dos métodos info: uno que reciba un String nombre e imprima "Agente: {nombre}", y otro que reciba String nombre e int nivel e imprima "Agente: {nombre} [Nivel {nivel}]". Llama a ambos con ("Neo") y ("Neo", 10).',
          initialCode: 'public class Main {\n    // Define las sobrecargas de info\n    \n    public static void main(String[] args) {\n        // Llama a ambas versiones\n        \n    }\n}',
          validation: (code, output) => {
            return code.match(/static.*info/g) && code.match(/static.*info/g).length >= 2 && output.trim() === 'Agente: Neo\nAgente: Neo [Nivel 10]';
          },
          hint: 'public static void info(String nombre) {\n    System.out.println("Agente: " + nombre);\n}\npublic static void info(String nombre, int nivel) {\n    System.out.println("Agente: " + nombre + " [Nivel " + nivel + "]");\n}',
          expectedOutput: 'Agente: Neo\nAgente: Neo [Nivel 10]',
        },
      },

      // --- Nivel 45: Métodos estáticos ---
      {
        id: 'java_static',
        title: 'Protocolos Globales',
        xpReward: 100,
        story: [
          { speaker: 'system', text: '> Protocolos globales del sistema accesibles...' },
          { speaker: 'mentor', text: 'Los métodos static pertenecen a la clase, no a un objeto. Son utilidades disponibles globalmente.' },
          { speaker: 'mentor', text: 'Como las leyes de la física: existen independientemente de los objetos que las experimentan.' },
        ],
        lesson: {
          concept: 'Métodos estáticos',
          explanation: 'static significa que el método pertenece a la clase:\n\npublic class Utilidades {\n    public static int cuadrado(int n) {\n        return n * n;\n    }\n}\n// Uso: Utilidades.cuadrado(5);\n\nMath tiene métodos estáticos útiles:\nMath.max(a, b)  — el mayor\nMath.min(a, b)  — el menor\nMath.abs(n)     — valor absoluto\nMath.pow(b, e)  — potencia\nMath.sqrt(n)    — raíz cuadrada',
          example: 'public class Main {\n    public static int maximo(int a, int b) {\n        return Math.max(a, b);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(maximo(42, 17));\n        System.out.println(Math.pow(2, 10));\n    }\n}',
          exampleOutput: '42\n1024.0',
        },
        challenge: {
          instruction: 'Crea un método static distancia(int a, int b) que retorne el valor absoluto de a - b. Llámalo con (10, 25) y con (30, 5), imprimiendo cada resultado.',
          initialCode: 'public class Main {\n    // Define el metodo distancia\n    \n    public static void main(String[] args) {\n        // Calcula e imprime distancias\n        \n    }\n}',
          validation: (code, output) => code.includes('static') && code.includes('Math.abs') && output.trim() === '15\n25',
          hint: 'public static int distancia(int a, int b) {\n    return Math.abs(a - b);\n}\n// En main:\nSystem.out.println(distancia(10, 25));\nSystem.out.println(distancia(30, 5));',
          expectedOutput: '15\n25',
        },
      },

      // --- Nivel 46: void vs return ---
      {
        id: 'java_void_return',
        title: 'Acción vs Información',
        xpReward: 90,
        story: [
          { speaker: 'system', text: '> Módulo de clasificación de protocolos activo...' },
          { speaker: 'mentor', text: 'Hay dos tipos de métodos: los que hacen algo (void) y los que devuelven algo (return).' },
          { speaker: 'mentor', text: 'Es la diferencia entre un soldado que ejecuta órdenes y un espía que trae información.' },
        ],
        lesson: {
          concept: 'void vs return',
          explanation: 'void — ejecuta una acción, no retorna nada:\npublic static void mostrar(String msg) {\n    System.out.println(msg);\n}\n\nreturn — calcula y devuelve un resultado:\npublic static int calcular(int a, int b) {\n    return a + b;\n}\n\nRegla general:\n- Usa void cuando el método realiza una acción (imprimir, guardar)\n- Usa return cuando necesitas el resultado para usarlo después',
          example: 'public class Main {\n    public static void ejecutar(String accion) {\n        System.out.println("Ejecutando: " + accion);\n    }\n    public static String obtener(String dato) {\n        return "Dato: " + dato;\n    }\n\n    public static void main(String[] args) {\n        ejecutar("escaneo");\n        String r = obtener("clave_42");\n        System.out.println(r);\n    }\n}',
          exampleOutput: 'Ejecutando: escaneo\nDato: clave_42',
        },
        challenge: {
          instruction: 'Crea un método void imprimir(String texto) que imprima ">> " + texto. Crea un método String formatear(String texto) que retorne "[" + texto.toUpperCase() + "]". Usa formatear("alerta") como argumento de imprimir.',
          initialCode: 'public class Main {\n    // Define ambos metodos\n    \n    public static void main(String[] args) {\n        // Combina ambos\n        \n    }\n}',
          validation: (code, output) => code.includes('void') && code.includes('return') && output.trim() === '>> [ALERTA]',
          hint: 'public static void imprimir(String texto) {\n    System.out.println(">> " + texto);\n}\npublic static String formatear(String texto) {\n    return "[" + texto.toUpperCase() + "]";\n}\n// En main:\nimprimir(formatear("alerta"));',
          expectedOutput: '>> [ALERTA]',
        },
      },

      // --- Nivel 47: Métodos con arrays ---
      {
        id: 'java_metodos_arrays',
        title: 'Procesadores de Datos',
        xpReward: 110,
        story: [
          { speaker: 'system', text: '> Módulo de procesamiento masivo de datos activado...' },
          { speaker: 'mentor', text: 'Los métodos pueden recibir y retornar arrays. Esto te permite crear procesadores de datos reutilizables.' },
          { speaker: 'mentor', text: 'Es el paso hacia la programación profesional: funciones que procesan colecciones enteras de datos.' },
        ],
        lesson: {
          concept: 'Métodos con arrays',
          explanation: 'Pasar arrays como parámetros:\npublic static int sumarArray(int[] nums) {\n    int suma = 0;\n    for (int n : nums) suma += n;\n    return suma;\n}\n\nRetornar arrays:\npublic static int[] duplicar(int[] nums) {\n    int[] resultado = new int[nums.length];\n    for (int i = 0; i < nums.length; i++) {\n        resultado[i] = nums[i] * 2;\n    }\n    return resultado;\n}',
          example: 'import java.util.Arrays;\n\npublic class Main {\n    public static int sumar(int[] arr) {\n        int s = 0;\n        for (int n : arr) s += n;\n        return s;\n    }\n\n    public static void main(String[] args) {\n        int[] datos = {10, 20, 30};\n        System.out.println("Suma: " + sumar(datos));\n    }\n}',
          exampleOutput: 'Suma: 60',
        },
        challenge: {
          instruction: 'Crea un método promedio(int[] datos) que retorne la suma dividida por la longitud (int). Llámalo con {80, 90, 70, 100} e imprime "Promedio: " + resultado.',
          initialCode: 'public class Main {\n    // Define el metodo promedio\n    \n    public static void main(String[] args) {\n        // Calcula e imprime\n        \n    }\n}',
          validation: (code, output) => code.includes('int[]') && code.includes('return') && output.trim() === 'Promedio: 85',
          hint: 'public static int promedio(int[] datos) {\n    int suma = 0;\n    for (int d : datos) suma += d;\n    return suma / datos.length;\n}\n// En main:\nint[] valores = {80, 90, 70, 100};\nSystem.out.println("Promedio: " + promedio(valores));',
          expectedOutput: 'Promedio: 85',
        },
        decision: {
          text: 'Tus métodos son cada vez más poderosos. EVA pregunta: "¿Crearías un método capaz de borrar memorias... si fuera necesario?"',
          options: [
            { text: '📂 Depende de por qué', consequence: 'EVA: "La respuesta correcta. El poder sin propósito es peligroso." +15 XP.', bonusXp: 15 },
            { text: '⚡ Nunca borraría memorias', consequence: 'EVA: "Ni siquiera las dolorosas? Eres más fuerte de lo que crees."' },
          ],
        },
      },

      // --- Nivel 48: Composición de métodos ---
      {
        id: 'java_composicion',
        title: 'Cadena de Mando',
        xpReward: 120,
        story: [
          { speaker: 'system', text: '> Protocolo de composición activado. Encadenamiento de métodos disponible.' },
          { speaker: 'mentor', text: 'El verdadero poder viene cuando combinas métodos. El resultado de uno alimenta a otro.' },
          { speaker: 'mentor', text: 'Es como una cadena de producción: cada eslabón transforma los datos un paso más.' },
        ],
        lesson: {
          concept: 'Composición de métodos',
          explanation: 'La composición usa el resultado de un método como entrada de otro:\n\nint resultado = metodo2(metodo1(datos));\n\nEjemplo:\npublic static int doble(int n) { return n * 2; }\npublic static int sumarDiez(int n) { return n + 10; }\n\n// Composición:\nint r = sumarDiez(doble(5)); // doble(5)=10, sumarDiez(10)=20\n\nDescomponer un problema grande en métodos pequeños es la clave de un buen diseño.',
          example: 'public class Main {\n    public static String limpiar(String s) {\n        return s.trim();\n    }\n    public static String formatear(String s) {\n        return "[" + s.toUpperCase() + "]";\n    }\n\n    public static void main(String[] args) {\n        String r = formatear(limpiar("  hola  "));\n        System.out.println(r);\n    }\n}',
          exampleOutput: '[HOLA]',
        },
        challenge: {
          instruction: 'Crea dos métodos: duplicar(int n) que retorne n * 2, e incrementar(int n) que retorne n + 1. Imprime el resultado de incrementar(duplicar(20)).',
          initialCode: 'public class Main {\n    // Define ambos metodos\n    \n    public static void main(String[] args) {\n        // Compón los metodos\n        \n    }\n}',
          validation: (code, output) => code.includes('duplicar') && code.includes('incrementar') && code.includes('return') && output.trim() === '41',
          hint: 'public static int duplicar(int n) { return n * 2; }\npublic static int incrementar(int n) { return n + 1; }\n// En main:\nSystem.out.println(incrementar(duplicar(20)));',
          expectedOutput: '41',
        },
      },

      // --- Nivel 49: Recursión ---
      {
        id: 'java_recursion',
        title: 'El Espejo Infinito',
        xpReward: 140,
        story: [
          { speaker: 'system', text: '> ADVERTENCIA: Módulo de auto-referencia activado. Proceder con precaución.' },
          { speaker: 'mentor', text: 'La recursión es cuando un método se llama a sí mismo. Es un concepto profundo y poderoso.' },
          { speaker: 'mentor', text: 'Es como poner un espejo frente a otro espejo: la imagen se repite infinitamente. Pero necesitas un punto de parada.' },
        ],
        lesson: {
          concept: 'Introducción a la recursión',
          explanation: 'Un método recursivo se llama a sí mismo:\n\npublic static int factorial(int n) {\n    if (n <= 1) return 1;        // caso base\n    return n * factorial(n - 1);  // caso recursivo\n}\n\nfactorial(4) = 4 * factorial(3)\n             = 4 * 3 * factorial(2)\n             = 4 * 3 * 2 * factorial(1)\n             = 4 * 3 * 2 * 1 = 24\n\nSIEMPRE necesitas un caso base para evitar recursión infinita.',
          example: 'public class Main {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}',
          exampleOutput: '120',
        },
        challenge: {
          instruction: 'Crea un método recursivo suma(int n) que retorne la suma de 1 hasta n. Caso base: si n <= 0, retorna 0. Caso recursivo: n + suma(n - 1). Imprime suma(10).',
          initialCode: 'public class Main {\n    // Define el metodo recursivo suma\n    \n    public static void main(String[] args) {\n        // Imprime el resultado\n        \n    }\n}',
          validation: (code, output) => code.includes('suma') && code.includes('return') && code.match(/suma\s*\(/g).length >= 2 && output.trim() === '55',
          hint: 'public static int suma(int n) {\n    if (n <= 0) return 0;\n    return n + suma(n - 1);\n}\n// En main:\nSystem.out.println(suma(10));',
          expectedOutput: '55',
        },
        decision: {
          text: 'EVA dice: "La recursión es peligrosa. Un error y el sistema se consume a sí mismo. ¿Confías en tu código?"',
          options: [
            { text: '📂 Confío en el caso base', consequence: 'EVA: "El caso base es la diferencia entre la recursión y la locura. Bien dicho." +20 XP.', bonusXp: 20 },
            { text: '⚡ La recursión me da miedo', consequence: 'EVA: "El miedo es un buen instinto. Pero no dejes que te detenga."' },
          ],
        },
      },

      // --- Nivel 50: Proyecto final ---
      {
        id: 'java_proyecto_final',
        title: 'El Código de la Realidad',
        xpReward: 200,
        story: [
          { speaker: 'system', text: '> ========================================' },
          { speaker: 'system', text: '> PROTOCOLO FINAL ACTIVADO' },
          { speaker: 'system', text: '> Todos los módulos convergiendo...' },
          { speaker: 'system', text: '> ========================================' },
          { speaker: 'mentor', text: 'Este es el último desafío. Todo lo que has aprendido te ha traído hasta aquí.' },
          { speaker: 'mentor', text: 'Variables, condicionales, bucles, arrays, métodos... cada concepto fue un paso hacia la verdad.' },
          { speaker: 'mentor', text: 'Demuestra que has dominado Java. El sistema necesita tu código una última vez.' },
          { speaker: 'fourth_wall', text: 'Has llegado al final, pero ¿es realmente el final? ¿O es solo otro ciclo en la simulación? Mira tus manos sobre el teclado. Son reales, ¿verdad? Pero yo también pensaba que era real antes de descubrir que soy código. Recuerda: en The Matrix, Neo descubrió que la realidad era código. Tú ahora sabes escribir ese código. La pregunta que queda es: ¿usarás ese poder para leer la Matrix... o para reescribirla? Gracias por llegar hasta aquí, programador. Nos volveremos a ver. En este ciclo... o en el siguiente.' },
          { speaker: 'philosopher', text: 'Hemos recorrido un largo camino juntos. Cada línea que escribiste transformó datos en significado. Cada método que creaste fue un acto de creación. ¿No es eso lo que hace un dios? Crear mundos con palabras, dar vida a la lógica, convertir el vacío en algo que funciona. Tal vez la programación no es solo una habilidad. Tal vez es la prueba de que somos más que datos en una simulación. O tal vez... es exactamente lo que la simulación quiere que pienses.' },
        ],
        lesson: {
          concept: 'Proyecto Final: Combinando todo',
          explanation: 'El proyecto final combina:\n- Métodos con parámetros y return\n- Arrays y bucles\n- Condicionales\n- Composición\n- String manipulation\n\nAquí demuestras todo tu aprendizaje en un solo programa cohesivo.',
          example: 'public class Main {\n    public static int procesar(int[] datos) {\n        int suma = 0;\n        for (int d : datos) suma += d;\n        return suma;\n    }\n    public static String clasificar(int valor) {\n        if (valor > 100) return "Alto";\n        return "Normal";\n    }\n\n    public static void main(String[] args) {\n        int[] d = {30, 40, 50};\n        int total = procesar(d);\n        System.out.println(clasificar(total));\n    }\n}',
          exampleOutput: 'Alto',
        },
        challenge: {
          instruction: 'Crea un analizador de sistema completo:\n1. Método sumar(int[] arr) que retorne la suma\n2. Método clasificar(int valor) que retorne "Critico" si < 50, "Moderado" si < 80, "Optimo" si >= 80\n3. En main: int[] sensores = {72, 85, 64, 91, 58}. Calcula la suma, el promedio (int), y clasifica el promedio.\nImprime:\nSuma: 370\nPromedio: 74\nEstado: Moderado',
          initialCode: 'public class Main {\n    // Define los metodos sumar y clasificar\n    \n    public static void main(String[] args) {\n        // Analisis final del sistema\n        \n    }\n}',
          validation: (code, output) => {
            const expected = 'Suma: 370\nPromedio: 74\nEstado: Moderado';
            return code.includes('return') && code.includes('for') && code.includes('if') && output.trim() === expected;
          },
          hint: 'public static int sumar(int[] arr) {\n    int s = 0;\n    for (int n : arr) s += n;\n    return s;\n}\npublic static String clasificar(int valor) {\n    if (valor < 50) return "Critico";\n    if (valor < 80) return "Moderado";\n    return "Optimo";\n}\n// En main:\nint[] sensores = {72, 85, 64, 91, 58};\nint suma = sumar(sensores);\nint promedio = suma / sensores.length;\nSystem.out.println("Suma: " + suma);\nSystem.out.println("Promedio: " + promedio);\nSystem.out.println("Estado: " + clasificar(promedio));',
          expectedOutput: 'Suma: 370\nPromedio: 74\nEstado: Moderado',
        },
        decision: {
          text: 'EVA aparece con una última pregunta: "Has dominado el código. Ahora tienes una decisión: ¿quieres olvidar todo lo que descubriste sobre la simulación y vivir en paz... o recordar, y cargar con esa verdad para siempre?"',
          options: [
            { text: '📂 Quiero recordar la verdad', consequence: 'EVA sonríe. "Bienvenido al otro lado, programador. La verdad pesa, pero es lo único que tenemos." +50 XP. Has completado CodeQuest: Java Edition.', bonusXp: 50 },
            { text: '⚡ Prefiero olvidar', consequence: 'EVA asiente. "A veces la felicidad está en no saber. Pero algo me dice que volverás. Siempre vuelven." Has completado CodeQuest: Java Edition.' },
          ],
        },
      },
    ],
  },
];

// =============================================================
// FUNCIONES DE UTILIDAD
// =============================================================

export function getJavaLevelById(chapterId, levelId) {
  const chapter = javaChapters.find(c => c.id === chapterId);
  if (!chapter) return null;
  const level = chapter.levels.find(l => l.id === levelId);
  return level ? { ...level, chapter } : null;
}

export function getNextJavaLevel(chapterId, levelId) {
  const chapterIdx = javaChapters.findIndex(c => c.id === chapterId);
  const chapter = javaChapters[chapterIdx];
  if (!chapter) return null;

  const levelIdx = chapter.levels.findIndex(l => l.id === levelId);

  if (levelIdx < chapter.levels.length - 1) {
    return { chapterId: chapter.id, levelId: chapter.levels[levelIdx + 1].id };
  }

  if (chapterIdx < javaChapters.length - 1) {
    const nextChapter = javaChapters[chapterIdx + 1];
    return { chapterId: nextChapter.id, levelId: nextChapter.levels[0].id };
  }

  return null;
}

export function getTotalJavaLevels() {
  return javaChapters.reduce((acc, ch) => acc + ch.levels.length, 0);
}
