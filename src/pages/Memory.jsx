import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { ChevronLeft, BookOpen, Lock, Zap } from 'lucide-react';

const extendedLessons = {
  "fundamentos/hola_mundo": {
    "title": "Salida de datos — Tu herramienta de comunicación",
    "content": "print() es la función más básica pero más usada en Python. Sirve para mostrar información en la consola.\n\nPuedes imprimir texto, números, variables, y hasta resultados de operaciones:\n  print(\"Hola\")       → texto\n  print(42)            → número\n  print(3 + 4)         → resultado: 7\n  print(\"A\", \"B\", \"C\") → A B C (separados por espacio)\n\nEl separador por defecto es un espacio. Puedes cambiarlo:\n  print(\"A\", \"B\", sep=\"-\")  → A-B\n\nY el final por defecto es un salto de línea. Puedes cambiarlo:\n  print(\"Hola\", end=\" \")\n  print(\"Mundo\")       → Hola Mundo (en una línea)\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nprint(\"Hola\", \"Mundo\")\n\n// --- Java ---\nSystem.out.println(\"Hola\", \"Mundo\");\n\n// --- C# ---\nConsole.WriteLine(\"Hola\", \"Mundo\");",
        "output": "Hola Mundo"
      },
      {
        "code": "// --- Python ---\nprint(10 + 20)\n\n// --- Java ---\nSystem.out.println(10 + 20);\n\n// --- C# ---\nConsole.WriteLine(10 + 20);",
        "output": "30"
      },
      {
        "code": "// --- Python ---\nprint(\"Línea 1\")\nprint(\"Línea 2\")\n\n// --- Java ---\nSystem.out.println(\"Línea 1\");\nSystem.out.println(\"Línea 2\");\n\n// --- C# ---\nConsole.WriteLine(\"Línea 1\");\nConsole.WriteLine(\"Línea 2\");",
        "output": "Línea 1\nLínea 2"
      }
    ]
  },
  "fundamentos/multiples_prints": {
    "title": "Comunicación secuencial",
    "content": "Cada print() genera una nueva línea. Esto te permite construir salidas complejas línea por línea.\n\nTip práctico: En proyectos reales usarás print() constantemente para:\n• Debugging (ver qué valor tiene una variable)\n• Mostrar resultados al usuario\n• Crear interfaces de texto\n\nRecuerda que print() sin argumentos imprime una línea vacía, útil para separar secciones de salida.",
    "examples": [
      {
        "code": "// --- Python ---\nprint(\"=== Reporte ===\")\nprint()\nprint(\"Todo OK\")\n\n// --- Java ---\nSystem.out.println(\"=== Reporte ===\");\nSystem.out.println();\nSystem.out.println(\"Todo OK\");\n\n// --- C# ---\nConsole.WriteLine(\"=== Reporte ===\");\nConsole.WriteLine();\nConsole.WriteLine(\"Todo OK\");",
        "output": "=== Reporte ===\n\nTodo OK"
      }
    ]
  },
  "fundamentos/variables": {
    "title": "Variables — La memoria de tu programa",
    "content": "Las variables almacenan datos que puedes usar y modificar durante la ejecución.\n\nReglas de nombres:\n• Solo letras, números y guión bajo (_)\n• No pueden empezar con número\n• Son case-sensitive: edad ≠ Edad ≠ EDAD\n• Convención Python: usa snake_case (mi_variable)\n\nUna variable puede cambiar de valor y hasta de tipo:\n  x = 10       # int\n  x = \"diez\"   # ahora es str\n\nReasignación con operadores:\n  x = 10\n  x = x + 5   # x ahora es 15\n  x += 5       # atajo: lo mismo\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nnombre = \"Python\"\nversion = 3\nprint(nombre, version)\n\n// --- Java ---\nnombre = \"Python\";\nversion = 3;\nSystem.out.println(nombre, version);\n\n// --- C# ---\nnombre = \"Python\";\nversion = 3;\nConsole.WriteLine(nombre, version);",
        "output": "Python 3"
      },
      {
        "code": "// --- Python ---\nx = 10\nx += 5\nprint(x)\n\n// --- Java ---\nx = 10;\nx += 5;\nSystem.out.println(x);\n\n// --- C# ---\nx = 10;\nx += 5;\nConsole.WriteLine(x);",
        "output": "15"
      }
    ]
  },
  "fundamentos/tipos_datos": {
    "title": "Tipos de datos — El ADN de la información",
    "content": "Todo en Python tiene un tipo. El tipo determina qué operaciones puedes hacer.\n\nstr (string): Texto. Siempre entre comillas.\n  \"Hola\"  'Mundo'  \"\"\"Multi línea\"\"\"\n\nint (integer): Números enteros, sin decimales.\n  42  -10  0  1000000\n\nfloat: Números con decimales.\n  3.14  -0.5  2.0\n\nbool: Solo dos valores posibles.\n  True  False  (¡con mayúscula!)\n\nNoneType: Representa \"nada\" o \"vacío\".\n  None\n\nPuedes verificar el tipo con type():\n  type(42) → <class 'int'>\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nprint(type(\"hola\"))\nprint(type(42))\nprint(type(3.14))\nprint(type(True))\n\n// --- Java ---\nSystem.out.println(type(\"hola\"));\nSystem.out.println(type(42));\nSystem.out.println(type(3.14));\nSystem.out.println(type(true));\n\n// --- C# ---\nConsole.WriteLine(type(\"hola\"));\nConsole.WriteLine(type(42));\nConsole.WriteLine(type(3.14));\nConsole.WriteLine(type(true));",
        "output": "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>"
      }
    ]
  },
  "fundamentos/aritmetica": {
    "title": "Aritmética — Python como calculadora",
    "content": "Python soporta todas las operaciones matemáticas básicas y más:\n\nOperadores básicos:\n  +   Suma            10 + 3   → 13\n  -   Resta           10 - 3   → 7\n  *   Multiplicación  10 * 3   → 30\n  /   División        10 / 3   → 3.333...\n  //  División entera 10 // 3  → 3\n  %   Módulo (resto)  10 % 3   → 1\n  **  Potencia        2 ** 10  → 1024\n\nOrden de operaciones (PEMDAS):\n  Paréntesis > Exponentes > Multiplicación/División > Suma/Resta\n\n  2 + 3 * 4     → 14 (no 20)\n  (2 + 3) * 4   → 20\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nprint(10 / 3)\nprint(10 // 3)\nprint(10 % 3)\n\n// --- Java ---\nSystem.out.println(10 / 3);\nSystem.out.println(10 // 3);\nSystem.out.println(10 % 3);\n\n// --- C# ---\nConsole.WriteLine(10 / 3);\nConsole.WriteLine(10 // 3);\nConsole.WriteLine(10 % 3);",
        "output": "3.3333333333333335\n3\n1"
      },
      {
        "code": "// --- Python ---\nprint(2 ** 8)\n\n// --- Java ---\nSystem.out.println(2 ** 8);\n\n// --- C# ---\nConsole.WriteLine(2 ** 8);",
        "output": "256"
      }
    ]
  },
  "fundamentos/strings_basico": {
    "title": "Strings — Manipulando texto",
    "content": "Los strings son secuencias de caracteres inmutables.\n\nOperaciones:\n  \"Hola\" + \" Mundo\"  → concatenar\n  \"ja\" * 3           → repetir: \"jajaja\"\n  len(\"Hola\")        → longitud: 4\n\nAcceso por índice:\n  texto = \"Python\"\n  texto[0]   → \"P\" (primer carácter)\n  texto[-1]  → \"n\" (último)\n  texto[0:3] → \"Pyt\" (slice)\n\nImportante: No puedes sumar str + int directamente.\n  \"Edad: \" + str(25) → funciona\n  \"Edad: \" + 25      → ¡Error!\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nprint(\"Py\" + \"thon\")\nprint(\"-\" * 20)\nprint(len(\"Hola Mundo\"))\n\n// --- Java ---\nSystem.out.println(\"Py\" + \"thon\");\nSystem.out.println(\"-\" * 20);\nSystem.out.println(len(\"Hola Mundo\"));\n\n// --- C# ---\nConsole.WriteLine(\"Py\" + \"thon\");\nConsole.WriteLine(\"-\" * 20);\nConsole.WriteLine(len(\"Hola Mundo\"));",
        "output": "Python\n--------------------\n10"
      }
    ]
  },
  "fundamentos/conversion_tipos": {
    "title": "Casting — Convertir entre tipos",
    "content": "A veces necesitas convertir un tipo a otro:\n\nint()   → a entero      int(\"42\") → 42\nfloat() → a decimal     float(\"3.14\") → 3.14\nstr()   → a texto       str(42) → \"42\"\nbool()  → a booleano    bool(0) → False, bool(1) → True\n\nCuidado con conversiones inválidas:\n  int(\"hola\")  → ¡Error!\n  int(\"3.14\")  → ¡Error! (usa float primero)\n  int(3.14)    → 3 (trunca, no redondea)\n\nValores \"falsy\" en bool():\n  bool(0) → False\n  bool(\"\") → False\n  bool([]) → False\n  bool(None) → False\n  Todo lo demás → True",
    "examples": [
      {
        "code": "// --- Python ---\nprint(int(\"42\") + 8)\nprint(str(100) + \" puntos\")\nprint(float(\"3.14\") * 2)\n\n// --- Java ---\nSystem.out.println(int(\"42\") + 8);\nSystem.out.println(str(100) + \" puntos\");\nSystem.out.println(float(\"3.14\") * 2);\n\n// --- C# ---\nConsole.WriteLine(int(\"42\") + 8);\nConsole.WriteLine(str(100) + \" puntos\");\nConsole.WriteLine(float(\"3.14\") * 2);",
        "output": "50\n100 puntos\n6.28"
      }
    ]
  },
  "fundamentos/fstrings": {
    "title": "Formato moderno de texto",
    "content": "Las f-strings (Python 3.6+) son la mejor forma de formatear texto.\n\nSintaxis: f\"texto {expresión} texto\"\n\nVentajas sobre concatenación (+):\n• Más legible\n• Puedes meter cualquier expresión Python\n• No necesitas convertir tipos manualmente\n\nTrucos avanzados:\n  f\"{numero:.2f}\"   → 2 decimales\n  f\"{nombre:>10}\"   → alinear a la derecha\n  f\"{nombre:<10}\"   → alinear a la izquierda\n  f\"{numero:05d}\"   → rellenar con ceros\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nnombre = \"EVA\"\nnivel = 10\nprint(f\"Agente {nombre} - Nivel {nivel}\")\nprint(f\"Poder: {nivel * 100}\")\n\n// --- Java ---\nnombre = \"EVA\";\nnivel = 10;\nSystem.out.println(f\"Agente {nombre} - Nivel {nivel}\");\nSystem.out.println(f\"Poder: {nivel * 100}\");\n\n// --- C# ---\nnombre = \"EVA\";\nnivel = 10;\nConsole.WriteLine(f\"Agente {nombre} - Nivel {nivel}\");\nConsole.WriteLine(f\"Poder: {nivel * 100}\");",
        "output": "Agente EVA - Nivel 10\nPoder: 1000"
      }
    ]
  },
  "fundamentos/comentarios": {
    "title": "Comentarios — Documentar tu código",
    "content": "Los comentarios son ignorados por Python. Solo son para humanos.\n\n# Comentario de una línea\nx = 10  # Comentario al final de una línea\n\nPython no tiene comentarios multilinea como /*, pero\npuedes usar strings triples como alternativa:\n  \"\"\"\n  Esto técnicamente es un string,\n  pero se usa como comentario multilinea\n  \"\"\"\n\nBuenas prácticas:\n• Comenta el POR QUÉ, no el QUÉ\n• Malo: # sumar a y b\n• Bueno: # Calcular el total con impuestos incluidos\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\n# Calcular el área\nbase = 10\naltura = 5\narea = base * altura  # b * h\nprint(area)\n\n// --- Java ---\n// Calcular el área\nbase = 10;\naltura = 5;\narea = base * altura  // b * h;\nSystem.out.println(area);\n\n// --- C# ---\n// Calcular el área\nbase = 10;\naltura = 5;\narea = base * altura  // b * h;\nConsole.WriteLine(area);",
        "output": "50"
      }
    ]
  },
  "fundamentos/proyecto_calculadora": {
    "title": "Proyecto: Combinando fundamentos",
    "content": "En un proyecto real, todos los fundamentos trabajan juntos:\n\n1. Variables para almacenar datos de entrada\n2. Operaciones para procesar\n3. f-strings para formatear la salida\n4. Comentarios para documentar\n\nTip de estructura de un programa:\n  # 1. Definir datos\n  # 2. Procesar / Calcular\n  # 3. Mostrar resultados\n\nEste patrón \"Entrada → Proceso → Salida\" se repite en casi todo programa.",
    "examples": [
      {
        "code": "// --- Python ---\n# Datos\nprecio = 100\ndescuento = 15\n# Proceso\nfinal = precio - (precio * descuento / 100)\n# Salida\nprint(f\"Total: ${int(final)}\")\n\n// --- Java ---\n// Datos\nprecio = 100;\ndescuento = 15;\n// Proceso\nfinal = precio - (precio * descuento / 100);\n// Salida\nSystem.out.println(f\"Total: ${int(final)}\");\n\n// --- C# ---\n// Datos\nprecio = 100;\ndescuento = 15;\n// Proceso\nfinal = precio - (precio * descuento / 100);\n// Salida\nConsole.WriteLine(f\"Total: ${int(final)}\");",
        "output": "Total: $85"
      }
    ]
  },
  "condicionales/comparaciones": {
    "title": "Comparaciones — La base de las decisiones",
    "content": "Los operadores de comparación siempre retornan True o False.\n\n==  ¿Son iguales?          5 == 5  → True\n!=  ¿Son diferentes?       5 != 3  → True\n>   ¿Es mayor?             5 > 3   → True\n<   ¿Es menor?             5 < 3   → False\n>=  ¿Es mayor o igual?     5 >= 5  → True\n<=  ¿Es menor o igual?     3 <= 5  → True\n\nCuidado: == compara valores, = asigna valores.\n  x = 5    # asignar\n  x == 5   # comparar → True\n\nTambién puedes comparar strings (orden alfabético):\n  \"apple\" < \"banana\" → True",
    "examples": [
      {
        "code": "// --- Python ---\nprint(10 == 10)\nprint(10 != 5)\nprint(\"a\" < \"b\")\n\n// --- Java ---\nSystem.out.println(10 == 10);\nSystem.out.println(10 != 5);\nSystem.out.println(\"a\" < \"b\");\n\n// --- C# ---\nConsole.WriteLine(10 == 10);\nConsole.WriteLine(10 != 5);\nConsole.WriteLine(\"a\" < \"b\");",
        "output": "True\nTrue\nTrue"
      }
    ]
  },
  "condicionales/if_simple": {
    "title": "if — Tu primera decisión en código",
    "content": "if ejecuta código SOLO si la condición es verdadera.\n\nLa indentación (4 espacios) es OBLIGATORIA en Python.\nDefine qué código pertenece al bloque del if.\n\n  if condición:\n      esto se ejecuta si True\n      esto también\n  esto siempre se ejecuta (fuera del if)\n\nLa condición puede ser cualquier expresión que sea True/False:\n  if x > 0:\n  if nombre == \"admin\":\n  if tiene_permiso:\n  if len(lista) > 0:\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nx = 10\nif x > 0:\n    print(\"Positivo\")\nprint(\"Fin\")\n\n// --- Java ---\nx = 10;\nif x > 0:\n    System.out.println(\"Positivo\");\nSystem.out.println(\"Fin\");\n\n// --- C# ---\nx = 10;\nif x > 0:\n    Console.WriteLine(\"Positivo\");\nConsole.WriteLine(\"Fin\");",
        "output": "Positivo\nFin"
      }
    ]
  },
  "condicionales/if_else": {
    "title": "if-else — Siempre hay un camino",
    "content": "else captura todo lo que NO cumple la condición del if.\n\nGarantiza que SIEMPRE se ejecuta algo:\n  if condición:\n      # camino A\n  else:\n      # camino B\n\nNunca ambos. Nunca ninguno. Siempre exactamente uno.\n\nExpresión ternaria (versión corta):\n  resultado = \"par\" if n % 2 == 0 else \"impar\"\n\nEs útil para asignaciones simples en una línea.",
    "examples": [
      {
        "code": "// --- Python ---\nn = 7\ntipo = \"par\" if n % 2 == 0 else \"impar\"\nprint(f\"{n} es {tipo}\")\n\n// --- Java ---\nn = 7;\ntipo = \"par\" if n % 2 == 0 else \"impar\";\nSystem.out.println(f\"{n} es {tipo}\");\n\n// --- C# ---\nn = 7;\ntipo = \"par\" if n % 2 == 0 else \"impar\";\nConsole.WriteLine(f\"{n} es {tipo}\");",
        "output": "7 es impar"
      }
    ]
  },
  "condicionales/if_elif_else": {
    "title": "elif — Múltiples condiciones",
    "content": "elif (else if) permite encadenar múltiples condiciones.\n\nReglas importantes:\n1. Se evalúan de ARRIBA a ABAJO\n2. La PRIMERA que sea True se ejecuta\n3. Las demás se IGNORAN (aunque sean True)\n4. else es opcional (captura \"todo lo demás\")\n\nEsto importa para el ORDEN:\n  # MAL                    # BIEN\n  if nota >= 60:           if nota >= 90:\n      \"Aprobado\"               \"Excelente\"\n  elif nota >= 90:         elif nota >= 60:\n      \"Excelente\"              \"Aprobado\"\n  # ¡90 nunca llega aquí!  # Correcto!",
    "examples": [
      {
        "code": "// --- Python ---\nnota = 85\nif nota >= 90:\n    print(\"A\")\nelif nota >= 80:\n    print(\"B\")\nelif nota >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n\n// --- Java ---\nnota = 85;\nif nota >= 90:\n    System.out.println(\"A\");\nelif nota >= 80:\n    System.out.println(\"B\");\nelif nota >= 70:\n    System.out.println(\"C\");\nelse:\n    System.out.println(\"F\");\n\n// --- C# ---\nnota = 85;\nif nota >= 90:\n    Console.WriteLine(\"A\");\nelif nota >= 80:\n    Console.WriteLine(\"B\");\nelif nota >= 70:\n    Console.WriteLine(\"C\");\nelse:\n    Console.WriteLine(\"F\");",
        "output": "B"
      }
    ]
  },
  "condicionales/logica_and": {
    "title": "and — Ambas deben cumplirse",
    "content": "and requiere que TODAS las condiciones sean True.\n\n  True and True   → True    ✓\n  True and False  → False   ✗\n  False and True  → False   ✗\n  False and False → False   ✗\n\nEvaluación cortocircuito: si la primera es False, Python ni siquiera evalúa la segunda (ya sabe que será False).\n\nEjemplo práctico:\n  if edad >= 18 and tiene_licencia:\n      print(\"Puede conducir\")\n\n  # Verificar rango válido:\n  if x >= 0 and x <= 100:\n      print(\"Valor válido\")\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\nx = 50\nif x >= 0 and x <= 100:\n    print(\"En rango\")\n\n// --- Java ---\nx = 50;\nif x >= 0 and x <= 100:\n    System.out.println(\"En rango\");\n\n// --- C# ---\nx = 50;\nif x >= 0 and x <= 100:\n    Console.WriteLine(\"En rango\");",
        "output": "En rango"
      }
    ]
  },
  "condicionales/logica_or": {
    "title": "or — Al menos una debe cumplirse",
    "content": "or requiere que AL MENOS UNA condición sea True.\n\n  True or True   → True\n  True or False  → True\n  False or True  → True\n  False or False → False\n\nEvaluación cortocircuito: si la primera es True, no evalúa la segunda.\n\nUso práctico: verificar múltiples opciones válidas.\n  if dia == \"sábado\" or dia == \"domingo\":\n      print(\"Es fin de semana\")",
    "examples": [
      {
        "code": "// --- Python ---\ndia = \"domingo\"\nif dia == \"sabado\" or dia == \"domingo\":\n    print(\"Fin de semana!\")\n\n// --- Java ---\ndia = \"domingo\";\nif dia == \"sabado\" or dia == \"domingo\":\n    System.out.println(\"Fin de semana!\");\n\n// --- C# ---\ndia = \"domingo\";\nif dia == \"sabado\" or dia == \"domingo\":\n    Console.WriteLine(\"Fin de semana!\");",
        "output": "Fin de semana!"
      }
    ]
  },
  "condicionales/logica_not": {
    "title": "not — Invertir la lógica",
    "content": "not invierte cualquier valor booleano.\n\n  not True  → False\n  not False → True\n\nCasos de uso:\n  if not lista_vacia:     # si NO está vacía\n  if not es_admin:        # si NO es admin\n  if not (x > 10):        # equivale a x <= 10\n\nCombinaciones:\n  if not (a and b):       # al menos uno es False\n  if not (a or b):        # ambos son False",
    "examples": [
      {
        "code": "// --- Python ---\nactivo = True\nif not activo:\n    print(\"Apagado\")\nelse:\n    print(\"Encendido\")\n\n// --- Java ---\nactivo = true;\nif not activo:\n    System.out.println(\"Apagado\");\nelse:\n    System.out.println(\"Encendido\");\n\n// --- C# ---\nactivo = true;\nif not activo:\n    Console.WriteLine(\"Apagado\");\nelse:\n    Console.WriteLine(\"Encendido\");",
        "output": "Encendido"
      }
    ]
  },
  "condicionales/condiciones_anidadas": {
    "title": "Condicionales anidados",
    "content": "Un if dentro de otro if. Cada nivel agrega 4 espacios.\n\nCuándo usar:\n• Cuando necesitas verificar una condición DESPUÉS de otra\n• Lógica que depende de pasos previos\n\nCuándo NO usar:\n• Si puedes lograrlo con and/or (más limpio)\n• Si tienes más de 3 niveles (refactoriza)\n\nAlternativa con and:\n  # Anidado:\n  if edad >= 18:\n      if tiene_id:\n          entrar()\n\n  # Equivalente plano:\n  if edad >= 18 and tiene_id:\n      entrar()",
    "examples": [
      {
        "code": "// --- Python ---\nnivel = 5\nif nivel >= 3:\n    if nivel >= 7:\n        print(\"Avanzado\")\n    else:\n        print(\"Intermedio\")\nelse:\n    print(\"Básico\")\n\n// --- Java ---\nnivel = 5;\nif nivel >= 3:\n    if nivel >= 7:\n        System.out.println(\"Avanzado\");\n    else:\n        System.out.println(\"Intermedio\");\nelse:\n    System.out.println(\"Básico\");\n\n// --- C# ---\nnivel = 5;\nif nivel >= 3:\n    if nivel >= 7:\n        Console.WriteLine(\"Avanzado\");\n    else:\n        Console.WriteLine(\"Intermedio\");\nelse:\n    Console.WriteLine(\"Básico\");",
        "output": "Intermedio"
      }
    ]
  },
  "condicionales/in_operador": {
    "title": "in — Buscar dentro de colecciones",
    "content": "in verifica si un elemento existe dentro de una colección.\n\nCon strings: busca subcadena\n  \"py\" in \"python\"  → True\n\nCon listas: busca elemento\n  3 in [1, 2, 3]    → True\n\nCon diccionarios: busca en las CLAVES\n  \"nombre\" in {\"nombre\": \"EVA\"}  → True\n\nnot in: verifica que NO exista\n  \"x\" not in \"hola\"  → True\n\nEs mucho más legible que un bucle de búsqueda manual.",
    "examples": [
      {
        "code": "// --- Python ---\nfrutas = [\"manzana\", \"pera\", \"uva\"]\nif \"pera\" in frutas:\n    print(\"Encontrada!\")\n\n// --- Java ---\nfrutas = [\"manzana\", \"pera\", \"uva\"];\nif \"pera\" in frutas:\n    System.out.println(\"Encontrada!\");\n\n// --- C# ---\nfrutas = [\"manzana\", \"pera\", \"uva\"];\nif \"pera\" in frutas:\n    Console.WriteLine(\"Encontrada!\");",
        "output": "Encontrada!"
      }
    ]
  },
  "condicionales/proyecto_acceso": {
    "title": "Proyecto: Sistema de control de acceso",
    "content": "Un sistema de acceso real combina múltiples condicionales:\n\nPatrón de autenticación:\n  1. Verificar identidad (== con username)\n  2. Verificar permisos (nivel, rol)\n  3. Verificar estado (activo, no bloqueado)\n\nCombina: if/elif/else + and/or/not + in\n\nTip: Piensa en los casos PRIMERO, luego codifica:\n  - ¿Qué pasa si es admin?\n  - ¿Qué pasa si es operador con permisos?\n  - ¿Qué pasa si no cumple nada?",
    "examples": [
      {
        "code": "// --- Python ---\nrol = \"admin\"\nactivo = True\nif rol == \"admin\" and activo:\n    print(\"Control total\")\nelif activo:\n    print(\"Acceso limitado\")\nelse:\n    print(\"Bloqueado\")\n\n// --- Java ---\nrol = \"admin\";\nactivo = true;\nif rol == \"admin\" and activo:\n    System.out.println(\"Control total\");\nelif activo:\n    System.out.println(\"Acceso limitado\");\nelse:\n    System.out.println(\"Bloqueado\");\n\n// --- C# ---\nrol = \"admin\";\nactivo = true;\nif rol == \"admin\" and activo:\n    Console.WriteLine(\"Control total\");\nelif activo:\n    Console.WriteLine(\"Acceso limitado\");\nelse:\n    Console.WriteLine(\"Bloqueado\");",
        "output": "Control total"
      }
    ]
  },
  "bucles/for_basico": {
    "title": "for — Repetir un número conocido de veces",
    "content": "El bucle for itera sobre una secuencia (lista, rango, string, etc.).\n\n¿Cuándo usar for?\n• Sabes cuántas veces repetir\n• Recorres una colección\n• Procesas cada elemento\n\nAnatomía:\n  for variable in secuencia:\n      # variable toma cada valor\n      # de la secuencia, uno a uno\n\nrange(n) genera: 0, 1, 2, ..., n-1\nEs la forma más común de repetir N veces.",
    "examples": [
      {
        "code": "// --- Python ---\nfor i in range(3):\n    print(f\"Iteración {i}\")\n\n// --- Java ---\nfor i in range(3):\n    System.out.println(f\"Iteración {i}\");\n\n// --- C# ---\nfor i in range(3):\n    Console.WriteLine(f\"Iteración {i}\");",
        "output": "Iteración 0\nIteración 1\nIteración 2"
      }
    ]
  },
  "bucles/range_detalle": {
    "title": "range() — Control total sobre secuencias",
    "content": "range() es increíblemente flexible:\n\nrange(5)        → 0, 1, 2, 3, 4\nrange(2, 8)     → 2, 3, 4, 5, 6, 7\nrange(0, 10, 2) → 0, 2, 4, 6, 8\nrange(10, 0, -1)→ 10, 9, 8, ..., 1\nrange(5, 0, -2) → 5, 3, 1\n\nRegla: el valor final NUNCA se incluye.\n\nrange() no crea una lista en memoria, genera los números bajo demanda (eficiente para millones de iteraciones).",
    "examples": [
      {
        "code": "// --- Python ---\n# Contar hacia atrás\nfor i in range(5, 0, -1):\n    print(i)\n\n// --- Java ---\n// Contar hacia atrás\nfor i in range(5, 0, -1):\n    System.out.println(i);\n\n// --- C# ---\n// Contar hacia atrás\nfor i in range(5, 0, -1):\n    Console.WriteLine(i);",
        "output": "5\n4\n3\n2\n1"
      }
    ]
  },
  "bucles/for_listas": {
    "title": "for con colecciones",
    "content": "for puede recorrer cualquier iterable:\n\nListas: for item in [1, 2, 3]:\nStrings: for char in \"Python\":\nDiccionarios: for key in dicc:\n              for key, val in dicc.items():\n\nenumerate() te da índice + valor:\n  for i, nombre in enumerate([\"a\", \"b\", \"c\"]):\n      print(i, nombre)\n  # 0 a\n  # 1 b\n  # 2 c\n\nzip() recorre dos listas en paralelo:\n  for a, b in zip([1, 2], [\"x\", \"y\"]):\n      print(a, b)\n\nNOTA: En Java y C#, la sintaxis cambia (p. ej. Console.WriteLine o System.out.println) pero la lógica es la misma.",
    "examples": [
      {
        "code": "// --- Python ---\npalabra = \"CODE\"\nfor letra in palabra:\n    print(letra)\n\n// --- Java ---\npalabra = \"CODE\";\nfor letra in palabra:\n    System.out.println(letra);\n\n// --- C# ---\npalabra = \"CODE\";\nfor letra in palabra:\n    Console.WriteLine(letra);",
        "output": "C\nO\nD\nE"
      }
    ]
  },
  "bucles/for_acumulador": {
    "title": "Patrón acumulador",
    "content": "El patrón más importante en programación con bucles.\n\nPasos:\n1. Inicializar variable ANTES del bucle\n2. Actualizar en cada iteración\n3. Usar el resultado DESPUÉS del bucle\n\nVariantes:\n  total = 0       # Suma\n  for n in nums: total += n\n\n  maximo = nums[0] # Máximo manual\n  for n in nums:\n      if n > maximo: maximo = n\n\n  resultado = []   # Construir lista\n  for n in nums:\n      resultado.append(n * 2)\n\n  texto = \"\"       # Construir string\n  for c in chars:\n      texto += c",
    "examples": [
      {
        "code": "// --- Python ---\nnums = [4, 7, 2, 9, 1]\nmayor = nums[0]\nfor n in nums:\n    if n > mayor:\n        mayor = n\nprint(f\"Mayor: {mayor}\")\n\n// --- Java ---\nnums = [4, 7, 2, 9, 1];\nmayor = nums[0];\nfor n in nums:\n    if n > mayor:\n        mayor = n;\nSystem.out.println(f\"Mayor: {mayor}\");\n\n// --- C# ---\nnums = [4, 7, 2, 9, 1];\nmayor = nums[0];\nfor n in nums:\n    if n > mayor:\n        mayor = n;\nConsole.WriteLine(f\"Mayor: {mayor}\");",
        "output": "Mayor: 9"
      }
    ]
  },
  "bucles/while_basico": {
    "title": "while — Repetir hasta que se cumpla algo",
    "content": "while repite MIENTRAS la condición sea True.\n\n¿Cuándo usar while?\n• No sabes cuántas iteraciones necesitas\n• Esperas un evento o condición\n• Simulaciones de tiempo real\n• Menús interactivos\n\nPELIGRO: Si la condición nunca cambia a False = bucle infinito.\nSiempre asegúrate de que algo dentro del while modifique la condición.\n\nPatrón seguro:\n  while condición:\n      hacer_algo()\n      actualizar_condición()  # ¡CRUCIAL!",
    "examples": [
      {
        "code": "// --- Python ---\nn = 1\nwhile n <= 100:\n    n = n * 2\nprint(f\"Primer valor > 100: {n}\")\n\n// --- Java ---\nn = 1;\nwhile n <= 100:\n    n = n * 2;\nSystem.out.println(f\"Primer valor > 100: {n}\");\n\n// --- C# ---\nn = 1;\nwhile n <= 100:\n    n = n * 2;\nConsole.WriteLine(f\"Primer valor > 100: {n}\");",
        "output": "Primer valor > 100: 128"
      }
    ]
  },
  "bucles/while_vs_for": {
    "title": "¿for o while? — Guía de decisión",
    "content": "Regla simple:\n\nFOR cuando: \"Haz esto N veces\" o \"Para cada elemento...\"\n  for i in range(10):\n  for item in lista:\n\nWHILE cuando: \"Mientras no pase X...\" o \"Hasta que...\"\n  while not encontrado:\n  while intentos > 0:\n  while usuario != \"salir\":\n\nEn la práctica, for se usa ~80% de las veces.\nwhile es más para lógica de control y espera.",
    "examples": [
      {
        "code": "// --- Python ---\n# for: recorrer lista\nfor x in [1, 2, 3]:\n    print(x)\n\n# while: buscar condición\nn = 256\nwhile n > 1:\n    n = n // 2\nprint(f\"Final: {n}\")\n\n// --- Java ---\n// for: recorrer lista\nfor x in [1, 2, 3]:\n    System.out.println(x);\n\n// while: buscar condición\nn = 256;\nwhile n > 1:\n    n = n // 2;\nSystem.out.println(f\"Final: {n}\");\n\n// --- C# ---\n// for: recorrer lista\nfor x in [1, 2, 3]:\n    Console.WriteLine(x);\n\n// while: buscar condición\nn = 256;\nwhile n > 1:\n    n = n // 2;\nConsole.WriteLine(f\"Final: {n}\");",
        "output": "1\n2\n3\nFinal: 1"
      }
    ]
  },
  "bucles/break_continue": {
    "title": "break y continue — Control fino de bucles",
    "content": "break: SALE del bucle completamente.\n  for n in range(100):\n      if n == 5:\n          break  # sale aquí, no sigue hasta 99\n      print(n)\n\ncontinue: SALTA a la siguiente iteración.\n  for n in range(5):\n      if n == 2:\n          continue  # salta el 2\n      print(n)  # imprime 0,1,3,4\n\nÚsalos con moderación. Demasiados break/continue hacen el código difícil de seguir.\n\nTip: break es perfecto para búsquedas (encontré lo que buscaba, paro).",
    "examples": [
      {
        "code": "// --- Python ---\n# Buscar el primer par\nfor n in [1, 3, 7, 4, 9]:\n    if n % 2 == 0:\n        print(f\"Primer par: {n}\")\n        break\n\n// --- Java ---\n// Buscar el primer par\nfor n in [1, 3, 7, 4, 9]:\n    if n % 2 == 0:\n        System.out.println(f\"Primer par: {n}\");\n        break;\n\n// --- C# ---\n// Buscar el primer par\nfor n in [1, 3, 7, 4, 9]:\n    if n % 2 == 0:\n        Console.WriteLine(f\"Primer par: {n}\");\n        break;",
        "output": "Primer par: 4"
      }
    ]
  },
  "bucles/bucles_anidados": {
    "title": "Bucles anidados — Tablas y matrices",
    "content": "Un bucle dentro de otro. El interno se ejecuta COMPLETAMENTE por cada paso del externo.\n\nSi externo va 3 veces e interno 4 veces:\n  Total de ejecuciones del cuerpo interno = 3 × 4 = 12\n\nUsos comunes:\n• Tablas de multiplicar\n• Recorrer matrices (listas de listas)\n• Generar combinaciones\n• Dibujar patrones\n\nCuidado con la eficiencia: bucles anidados de 1000×1000 = 1,000,000 operaciones.",
    "examples": [
      {
        "code": "// --- Python ---\nfor i in range(1, 4):\n    linea = \"\"\n    for j in range(1, 4):\n        linea += f\"{i*j}\\t\"\n    print(linea)\n\n// --- Java ---\nfor i in range(1, 4):\n    linea = \"\";\n    for j in range(1, 4):\n        linea += f\"{i*j}\\t\";\n    System.out.println(linea);\n\n// --- C# ---\nfor i in range(1, 4):\n    linea = \"\";\n    for j in range(1, 4):\n        linea += f\"{i*j}\\t\";\n    Console.WriteLine(linea);",
        "output": "1\t2\t3\t\n2\t4\t6\t\n3\t6\t9\t"
      }
    ]
  },
  "bucles/patrones_bucles": {
    "title": "Patrones comunes con bucles",
    "content": "Los programadores usan los mismos patrones una y otra vez:\n\n1. Contar elementos que cumplen condición\n2. Sumar/acumular valores\n3. Encontrar máximo/mínimo\n4. Filtrar (construir nueva lista)\n5. Transformar (aplicar operación a cada elemento)\n6. Buscar (encontrar primer elemento que cumple)\n\nReconocer estos patrones te hace más rápido programando. La mayoría son: inicializar → iterar → actualizar → resultado.",
    "examples": [
      {
        "code": "// --- Python ---\n# Filtrar: solo positivos\nnums = [3, -1, 4, -2, 7]\npositivos = []\nfor n in nums:\n    if n > 0:\n        positivos.append(n)\nprint(positivos)\n\n// --- Java ---\n// Filtrar: solo positivos\nnums = [3, -1, 4, -2, 7];\npositivos = [];\nfor n in nums:\n    if n > 0:\n        positivos.append(n);\nSystem.out.println(positivos);\n\n// --- C# ---\n// Filtrar: solo positivos\nnums = [3, -1, 4, -2, 7];\npositivos = [];\nfor n in nums:\n    if n > 0:\n        positivos.append(n);\nConsole.WriteLine(positivos);",
        "output": "[3, 4, 7]"
      }
    ]
  },
  "bucles/proyecto_bucles": {
    "title": "Proyecto: Análisis de datos con bucles",
    "content": "En el mundo real, los bucles se usan constantemente para analizar datos:\n• Procesar logs de servidor\n• Analizar lecturas de sensores\n• Calcular estadísticas\n• Generar reportes\n\nPatrón de análisis:\n  1. Definir datos y acumuladores\n  2. Recorrer con bucle\n  3. Clasificar con condicionales\n  4. Acumular resultados\n  5. Mostrar resumen",
    "examples": [
      {
        "code": "// --- Python ---\ndatos = [88, 45, 92, 67, 95]\nok = warn = crit = 0\nfor d in datos:\n    if d > 90: crit += 1\n    elif d > 70: warn += 1\n    else: ok += 1\nprint(f\"OK:{ok} WARN:{warn} CRIT:{crit}\")\n\n// --- Java ---\ndatos = [88, 45, 92, 67, 95];\nok = warn = crit = 0;\nfor d in datos:\n    if d > 90: crit += 1;\n    elif d > 70: warn += 1;\n    else: ok += 1;\nSystem.out.println(f\"OK:{ok} WARN:{warn} CRIT:{crit}\");\n\n// --- C# ---\ndatos = [88, 45, 92, 67, 95];\nok = warn = crit = 0;\nfor d in datos:\n    if d > 90: crit += 1;\n    elif d > 70: warn += 1;\n    else: ok += 1;\nConsole.WriteLine(f\"OK:{ok} WARN:{warn} CRIT:{crit}\");",
        "output": "OK:2 WARN:1 CRIT:2"
      }
    ]
  }
};

const colorMap = {
  'neon-green': 'border-neon-green',
  'neon-blue': 'border-neon-blue',
  'neon-purple': 'border-neon-purple',
  'neon-yellow': 'border-neon-yellow',
  'neon-orange': 'border-neon-orange',
};

export default function Memory() {
  const navigate = useNavigate();
  const { completedLevels, availableXp, getPlayerRank, chapters } = useGame();

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer">
          <ChevronLeft className="w-4 h-4" /> Volver
        </button>
        <div className="flex items-center gap-4">
          <span className="text-neon-purple text-sm">{getPlayerRank()}</span>
          <div className="flex items-center gap-1 text-neon-yellow">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">{availableXp} XP</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BookOpen className="w-6 h-6 text-neon-blue" />
          <h1 className="text-2xl font-bold text-terminal-text">Memoria</h1>
        </div>
        <p className="text-terminal-muted text-sm">Explicaciones extendidas de cada lección aprendida</p>
        <p className="text-terminal-muted text-xs mt-1">{completedLevels.length} lecciones desbloqueadas</p>
      </div>

      <div className="space-y-8">
        {chapters.map((chapter) => {
          const borderColor = colorMap[chapter.color] || 'border-terminal-border';
          const hasAnyCompleted = chapter.levels.some(l => completedLevels.includes(`${chapter.id}/${l.id}`));

          if (!hasAnyCompleted) return null;

          return (
            <div key={chapter.id}>
              <h2 className={`text-sm font-bold mb-4 flex items-center gap-2 ${chapter.color === 'neon-green' ? 'text-neon-green' : chapter.color === 'neon-blue' ? 'text-neon-blue' : chapter.color === 'neon-purple' ? 'text-neon-purple' : chapter.color === 'neon-yellow' ? 'text-neon-yellow' : 'text-neon-orange'}`}>
                <span>{chapter.icon}</span> {chapter.title}
              </h2>

              <div className="space-y-4">
                {chapter.levels.map((level) => {
                  const key = `${chapter.id}/${level.id}`;
                  const isCompleted = completedLevels.includes(key);
                  const extended = extendedLessons[key];

                  if (!isCompleted) {
                    return (
                      <div key={level.id} className="p-4 bg-terminal-surface/30 border border-terminal-border/20 rounded-lg opacity-40">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-terminal-muted/30" />
                          <span className="text-sm text-terminal-muted/30">{level.title}</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <details key={level.id} className={`bg-terminal-surface border ${borderColor}/30 rounded-lg overflow-hidden group`}>
                      <summary className="p-4 cursor-pointer hover:bg-terminal-border/10 transition-colors flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-neon-blue flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm font-bold text-terminal-text">{level.title}</span>
                          <span className="text-xs text-terminal-muted ml-2">{level.lesson.concept}</span>
                        </div>
                      </summary>

                      <div className="border-t border-terminal-border/30 p-4 space-y-4">
                        {/* Lección original */}
                        <div>
                          <h4 className="text-xs font-bold text-neon-green mb-2 uppercase tracking-wider">Concepto</h4>
                          <pre className="text-sm text-terminal-text whitespace-pre-wrap leading-relaxed">{level.lesson.explanation}</pre>
                        </div>

                        {/* Ejemplo original */}
                        <div className="bg-terminal-bg rounded-lg overflow-hidden">
                          <div className="px-3 py-1.5 border-b border-terminal-border/30 text-xs text-terminal-muted">Ejemplo</div>
                          <pre className="p-3 text-sm text-neon-green">{level.lesson.example}</pre>
                          {level.lesson.exampleOutput && (
                            <div className="border-t border-terminal-border/30 px-3 py-2">
                              <span className="text-xs text-terminal-muted">Salida: </span>
                              <pre className="text-sm text-neon-yellow inline">{level.lesson.exampleOutput}</pre>
                            </div>
                          )}
                        </div>

                        {/* Explicación extendida */}
                        {extended && (
                          <>
                            <div className="border-t border-terminal-border/20 pt-4">
                              <h4 className="text-xs font-bold text-neon-purple mb-2 uppercase tracking-wider">Explicación Extendida</h4>
                              <h3 className="text-sm font-bold text-neon-blue mb-2">{extended.title}</h3>
                              <pre className="text-sm text-terminal-text whitespace-pre-wrap leading-relaxed">{extended.content}</pre>
                            </div>

                            {extended.examples && extended.examples.length > 0 && (
                              <div>
                                <h4 className="text-xs font-bold text-neon-yellow mb-2 uppercase tracking-wider">Ejemplos Prácticos</h4>
                                {extended.examples.map((ex, i) => (
                                  <div key={i} className="bg-terminal-bg rounded-lg overflow-hidden mb-2">
                                    <pre className="p-3 text-sm text-neon-green">{ex.code}</pre>
                                    <div className="border-t border-terminal-border/30 px-3 py-2">
                                      <span className="text-xs text-terminal-muted">→ </span>
                                      <pre className="text-sm text-neon-yellow inline">{ex.output}</pre>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
