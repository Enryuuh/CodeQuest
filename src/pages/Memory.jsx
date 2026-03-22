import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { chapters } from '../data/levels';
import { ChevronLeft, BookOpen, Lock, Zap, ChevronDown, ChevronRight } from 'lucide-react';

const extendedLessons = {
  // FUNDAMENTOS
  'fundamentos/hola_mundo': {
    title: 'print() — Tu herramienta de comunicación',
    content: `print() es la función más básica pero más usada en Python. Sirve para mostrar información en la consola.

Puedes imprimir texto, números, variables, y hasta resultados de operaciones:
  print("Hola")       → texto
  print(42)            → número
  print(3 + 4)         → resultado: 7
  print("A", "B", "C") → A B C (separados por espacio)

El separador por defecto es un espacio. Puedes cambiarlo:
  print("A", "B", sep="-")  → A-B

Y el final por defecto es un salto de línea. Puedes cambiarlo:
  print("Hola", end=" ")
  print("Mundo")       → Hola Mundo (en una línea)`,
    examples: [
      { code: 'print("Hola", "Mundo")', output: 'Hola Mundo' },
      { code: 'print(10 + 20)', output: '30' },
      { code: 'print("Línea 1")\nprint("Línea 2")', output: 'Línea 1\nLínea 2' },
    ],
  },
  'fundamentos/multiples_prints': {
    title: 'Comunicación secuencial',
    content: `Cada print() genera una nueva línea. Esto te permite construir salidas complejas línea por línea.

Tip práctico: En proyectos reales usarás print() constantemente para:
• Debugging (ver qué valor tiene una variable)
• Mostrar resultados al usuario
• Crear interfaces de texto

Recuerda que print() sin argumentos imprime una línea vacía, útil para separar secciones de salida.`,
    examples: [
      { code: 'print("=== Reporte ===")\nprint()\nprint("Todo OK")', output: '=== Reporte ===\n\nTodo OK' },
    ],
  },
  'fundamentos/variables': {
    title: 'Variables — La memoria de tu programa',
    content: `Las variables almacenan datos que puedes usar y modificar durante la ejecución.

Reglas de nombres:
• Solo letras, números y guión bajo (_)
• No pueden empezar con número
• Son case-sensitive: edad ≠ Edad ≠ EDAD
• Convención Python: usa snake_case (mi_variable)

Una variable puede cambiar de valor y hasta de tipo:
  x = 10       # int
  x = "diez"   # ahora es str

Reasignación con operadores:
  x = 10
  x = x + 5   # x ahora es 15
  x += 5       # atajo: lo mismo`,
    examples: [
      { code: 'nombre = "Python"\nversion = 3\nprint(nombre, version)', output: 'Python 3' },
      { code: 'x = 10\nx += 5\nprint(x)', output: '15' },
    ],
  },
  'fundamentos/tipos_datos': {
    title: 'Tipos de datos — El ADN de la información',
    content: `Todo en Python tiene un tipo. El tipo determina qué operaciones puedes hacer.

str (string): Texto. Siempre entre comillas.
  "Hola"  'Mundo'  """Multi línea"""

int (integer): Números enteros, sin decimales.
  42  -10  0  1000000

float: Números con decimales.
  3.14  -0.5  2.0

bool: Solo dos valores posibles.
  True  False  (¡con mayúscula!)

NoneType: Representa "nada" o "vacío".
  None

Puedes verificar el tipo con type():
  type(42) → <class 'int'>`,
    examples: [
      { code: 'print(type("hola"))\nprint(type(42))\nprint(type(3.14))\nprint(type(True))', output: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>" },
    ],
  },
  'fundamentos/aritmetica': {
    title: 'Aritmética — Python como calculadora',
    content: `Python soporta todas las operaciones matemáticas básicas y más:

Operadores básicos:
  +   Suma            10 + 3   → 13
  -   Resta           10 - 3   → 7
  *   Multiplicación  10 * 3   → 30
  /   División        10 / 3   → 3.333...
  //  División entera 10 // 3  → 3
  %   Módulo (resto)  10 % 3   → 1
  **  Potencia        2 ** 10  → 1024

Orden de operaciones (PEMDAS):
  Paréntesis > Exponentes > Multiplicación/División > Suma/Resta

  2 + 3 * 4     → 14 (no 20)
  (2 + 3) * 4   → 20`,
    examples: [
      { code: 'print(10 / 3)\nprint(10 // 3)\nprint(10 % 3)', output: '3.3333333333333335\n3\n1' },
      { code: 'print(2 ** 8)', output: '256' },
    ],
  },
  'fundamentos/strings_basico': {
    title: 'Strings — Manipulando texto',
    content: `Los strings son secuencias de caracteres inmutables.

Operaciones:
  "Hola" + " Mundo"  → concatenar
  "ja" * 3           → repetir: "jajaja"
  len("Hola")        → longitud: 4

Acceso por índice:
  texto = "Python"
  texto[0]   → "P" (primer carácter)
  texto[-1]  → "n" (último)
  texto[0:3] → "Pyt" (slice)

Importante: No puedes sumar str + int directamente.
  "Edad: " + str(25) → funciona
  "Edad: " + 25      → ¡Error!`,
    examples: [
      { code: 'print("Py" + "thon")\nprint("-" * 20)\nprint(len("Hola Mundo"))', output: 'Python\n--------------------\n10' },
    ],
  },
  'fundamentos/conversion_tipos': {
    title: 'Casting — Convertir entre tipos',
    content: `A veces necesitas convertir un tipo a otro:

int()   → a entero      int("42") → 42
float() → a decimal     float("3.14") → 3.14
str()   → a texto       str(42) → "42"
bool()  → a booleano    bool(0) → False, bool(1) → True

Cuidado con conversiones inválidas:
  int("hola")  → ¡Error!
  int("3.14")  → ¡Error! (usa float primero)
  int(3.14)    → 3 (trunca, no redondea)

Valores "falsy" en bool():
  bool(0) → False
  bool("") → False
  bool([]) → False
  bool(None) → False
  Todo lo demás → True`,
    examples: [
      { code: 'print(int("42") + 8)\nprint(str(100) + " puntos")\nprint(float("3.14") * 2)', output: '50\n100 puntos\n6.28' },
    ],
  },
  'fundamentos/fstrings': {
    title: 'f-strings — Formato moderno de texto',
    content: `Las f-strings (Python 3.6+) son la mejor forma de formatear texto.

Sintaxis: f"texto {expresión} texto"

Ventajas sobre concatenación (+):
• Más legible
• Puedes meter cualquier expresión Python
• No necesitas convertir tipos manualmente

Trucos avanzados:
  f"{numero:.2f}"   → 2 decimales
  f"{nombre:>10}"   → alinear a la derecha
  f"{nombre:<10}"   → alinear a la izquierda
  f"{numero:05d}"   → rellenar con ceros`,
    examples: [
      { code: 'nombre = "EVA"\nnivel = 10\nprint(f"Agente {nombre} - Nivel {nivel}")\nprint(f"Poder: {nivel * 100}")', output: 'Agente EVA - Nivel 10\nPoder: 1000' },
    ],
  },
  'fundamentos/comentarios': {
    title: 'Comentarios — Documentar tu código',
    content: `Los comentarios son ignorados por Python. Solo son para humanos.

# Comentario de una línea
x = 10  # Comentario al final de una línea

Python no tiene comentarios multilinea como /*, pero
puedes usar strings triples como alternativa:
  """
  Esto técnicamente es un string,
  pero se usa como comentario multilinea
  """

Buenas prácticas:
• Comenta el POR QUÉ, no el QUÉ
• Malo: # sumar a y b
• Bueno: # Calcular el total con impuestos incluidos`,
    examples: [
      { code: '# Calcular el área\nbase = 10\naltura = 5\narea = base * altura  # b * h\nprint(area)', output: '50' },
    ],
  },
  'fundamentos/proyecto_calculadora': {
    title: 'Proyecto: Combinando fundamentos',
    content: `En un proyecto real, todos los fundamentos trabajan juntos:

1. Variables para almacenar datos de entrada
2. Operaciones para procesar
3. f-strings para formatear la salida
4. Comentarios para documentar

Tip de estructura de un programa:
  # 1. Definir datos
  # 2. Procesar / Calcular
  # 3. Mostrar resultados

Este patrón "Entrada → Proceso → Salida" se repite en casi todo programa.`,
    examples: [
      { code: '# Datos\nprecio = 100\ndescuento = 15\n# Proceso\nfinal = precio - (precio * descuento / 100)\n# Salida\nprint(f"Total: ${int(final)}")', output: 'Total: $85' },
    ],
  },

  // CONDICIONALES
  'condicionales/comparaciones': {
    title: 'Comparaciones — La base de las decisiones',
    content: `Los operadores de comparación siempre retornan True o False.

==  ¿Son iguales?          5 == 5  → True
!=  ¿Son diferentes?       5 != 3  → True
>   ¿Es mayor?             5 > 3   → True
<   ¿Es menor?             5 < 3   → False
>=  ¿Es mayor o igual?     5 >= 5  → True
<=  ¿Es menor o igual?     3 <= 5  → True

Cuidado: == compara valores, = asigna valores.
  x = 5    # asignar
  x == 5   # comparar → True

También puedes comparar strings (orden alfabético):
  "apple" < "banana" → True`,
    examples: [
      { code: 'print(10 == 10)\nprint(10 != 5)\nprint("a" < "b")', output: 'True\nTrue\nTrue' },
    ],
  },
  'condicionales/if_simple': {
    title: 'if — Tu primera decisión en código',
    content: `if ejecuta código SOLO si la condición es verdadera.

La indentación (4 espacios) es OBLIGATORIA en Python.
Define qué código pertenece al bloque del if.

  if condición:
      esto se ejecuta si True
      esto también
  esto siempre se ejecuta (fuera del if)

La condición puede ser cualquier expresión que sea True/False:
  if x > 0:
  if nombre == "admin":
  if tiene_permiso:
  if len(lista) > 0:`,
    examples: [
      { code: 'x = 10\nif x > 0:\n    print("Positivo")\nprint("Fin")', output: 'Positivo\nFin' },
    ],
  },
  'condicionales/if_else': {
    title: 'if-else — Siempre hay un camino',
    content: `else captura todo lo que NO cumple la condición del if.

Garantiza que SIEMPRE se ejecuta algo:
  if condición:
      # camino A
  else:
      # camino B

Nunca ambos. Nunca ninguno. Siempre exactamente uno.

Expresión ternaria (versión corta):
  resultado = "par" if n % 2 == 0 else "impar"

Es útil para asignaciones simples en una línea.`,
    examples: [
      { code: 'n = 7\ntipo = "par" if n % 2 == 0 else "impar"\nprint(f"{n} es {tipo}")', output: '7 es impar' },
    ],
  },
  'condicionales/if_elif_else': {
    title: 'elif — Múltiples condiciones',
    content: `elif (else if) permite encadenar múltiples condiciones.

Reglas importantes:
1. Se evalúan de ARRIBA a ABAJO
2. La PRIMERA que sea True se ejecuta
3. Las demás se IGNORAN (aunque sean True)
4. else es opcional (captura "todo lo demás")

Esto importa para el ORDEN:
  # MAL                    # BIEN
  if nota >= 60:           if nota >= 90:
      "Aprobado"               "Excelente"
  elif nota >= 90:         elif nota >= 60:
      "Excelente"              "Aprobado"
  # ¡90 nunca llega aquí!  # Correcto!`,
    examples: [
      { code: 'nota = 85\nif nota >= 90:\n    print("A")\nelif nota >= 80:\n    print("B")\nelif nota >= 70:\n    print("C")\nelse:\n    print("F")', output: 'B' },
    ],
  },
  'condicionales/logica_and': {
    title: 'and — Ambas deben cumplirse',
    content: `and requiere que TODAS las condiciones sean True.

  True and True   → True    ✓
  True and False  → False   ✗
  False and True  → False   ✗
  False and False → False   ✗

Evaluación cortocircuito: si la primera es False, Python ni siquiera evalúa la segunda (ya sabe que será False).

Ejemplo práctico:
  if edad >= 18 and tiene_licencia:
      print("Puede conducir")

  # Verificar rango válido:
  if x >= 0 and x <= 100:
      print("Valor válido")`,
    examples: [
      { code: 'x = 50\nif x >= 0 and x <= 100:\n    print("En rango")', output: 'En rango' },
    ],
  },
  'condicionales/logica_or': {
    title: 'or — Al menos una debe cumplirse',
    content: `or requiere que AL MENOS UNA condición sea True.

  True or True   → True
  True or False  → True
  False or True  → True
  False or False → False

Evaluación cortocircuito: si la primera es True, no evalúa la segunda.

Uso práctico: verificar múltiples opciones válidas.
  if dia == "sábado" or dia == "domingo":
      print("Es fin de semana")`,
    examples: [
      { code: 'dia = "domingo"\nif dia == "sabado" or dia == "domingo":\n    print("Fin de semana!")', output: 'Fin de semana!' },
    ],
  },
  'condicionales/logica_not': {
    title: 'not — Invertir la lógica',
    content: `not invierte cualquier valor booleano.

  not True  → False
  not False → True

Casos de uso:
  if not lista_vacia:     # si NO está vacía
  if not es_admin:        # si NO es admin
  if not (x > 10):        # equivale a x <= 10

Combinaciones:
  if not (a and b):       # al menos uno es False
  if not (a or b):        # ambos son False`,
    examples: [
      { code: 'activo = True\nif not activo:\n    print("Apagado")\nelse:\n    print("Encendido")', output: 'Encendido' },
    ],
  },
  'condicionales/condiciones_anidadas': {
    title: 'Condicionales anidados',
    content: `Un if dentro de otro if. Cada nivel agrega 4 espacios.

Cuándo usar:
• Cuando necesitas verificar una condición DESPUÉS de otra
• Lógica que depende de pasos previos

Cuándo NO usar:
• Si puedes lograrlo con and/or (más limpio)
• Si tienes más de 3 niveles (refactoriza)

Alternativa con and:
  # Anidado:
  if edad >= 18:
      if tiene_id:
          entrar()

  # Equivalente plano:
  if edad >= 18 and tiene_id:
      entrar()`,
    examples: [
      { code: 'nivel = 5\nif nivel >= 3:\n    if nivel >= 7:\n        print("Avanzado")\n    else:\n        print("Intermedio")\nelse:\n    print("Básico")', output: 'Intermedio' },
    ],
  },
  'condicionales/in_operador': {
    title: 'in — Buscar dentro de colecciones',
    content: `in verifica si un elemento existe dentro de una colección.

Con strings: busca subcadena
  "py" in "python"  → True

Con listas: busca elemento
  3 in [1, 2, 3]    → True

Con diccionarios: busca en las CLAVES
  "nombre" in {"nombre": "EVA"}  → True

not in: verifica que NO exista
  "x" not in "hola"  → True

Es mucho más legible que un bucle de búsqueda manual.`,
    examples: [
      { code: 'frutas = ["manzana", "pera", "uva"]\nif "pera" in frutas:\n    print("Encontrada!")', output: 'Encontrada!' },
    ],
  },
  'condicionales/proyecto_acceso': {
    title: 'Proyecto: Sistema de control de acceso',
    content: `Un sistema de acceso real combina múltiples condicionales:

Patrón de autenticación:
  1. Verificar identidad (== con username)
  2. Verificar permisos (nivel, rol)
  3. Verificar estado (activo, no bloqueado)

Combina: if/elif/else + and/or/not + in

Tip: Piensa en los casos PRIMERO, luego codifica:
  - ¿Qué pasa si es admin?
  - ¿Qué pasa si es operador con permisos?
  - ¿Qué pasa si no cumple nada?`,
    examples: [
      { code: 'rol = "admin"\nactivo = True\nif rol == "admin" and activo:\n    print("Control total")\nelif activo:\n    print("Acceso limitado")\nelse:\n    print("Bloqueado")', output: 'Control total' },
    ],
  },

  // BUCLES
  'bucles/for_basico': {
    title: 'for — Repetir un número conocido de veces',
    content: `El bucle for itera sobre una secuencia (lista, rango, string, etc.).

¿Cuándo usar for?
• Sabes cuántas veces repetir
• Recorres una colección
• Procesas cada elemento

Anatomía:
  for variable in secuencia:
      # variable toma cada valor
      # de la secuencia, uno a uno

range(n) genera: 0, 1, 2, ..., n-1
Es la forma más común de repetir N veces.`,
    examples: [
      { code: 'for i in range(3):\n    print(f"Iteración {i}")', output: 'Iteración 0\nIteración 1\nIteración 2' },
    ],
  },
  'bucles/range_detalle': {
    title: 'range() — Control total sobre secuencias',
    content: `range() es increíblemente flexible:

range(5)        → 0, 1, 2, 3, 4
range(2, 8)     → 2, 3, 4, 5, 6, 7
range(0, 10, 2) → 0, 2, 4, 6, 8
range(10, 0, -1)→ 10, 9, 8, ..., 1
range(5, 0, -2) → 5, 3, 1

Regla: el valor final NUNCA se incluye.

range() no crea una lista en memoria, genera los números bajo demanda (eficiente para millones de iteraciones).`,
    examples: [
      { code: '# Contar hacia atrás\nfor i in range(5, 0, -1):\n    print(i)', output: '5\n4\n3\n2\n1' },
    ],
  },
  'bucles/for_listas': {
    title: 'for con colecciones',
    content: `for puede recorrer cualquier iterable:

Listas: for item in [1, 2, 3]:
Strings: for char in "Python":
Diccionarios: for key in dicc:
              for key, val in dicc.items():

enumerate() te da índice + valor:
  for i, nombre in enumerate(["a", "b", "c"]):
      print(i, nombre)
  # 0 a
  # 1 b
  # 2 c

zip() recorre dos listas en paralelo:
  for a, b in zip([1, 2], ["x", "y"]):
      print(a, b)`,
    examples: [
      { code: 'palabra = "CODE"\nfor letra in palabra:\n    print(letra)', output: 'C\nO\nD\nE' },
    ],
  },
  'bucles/for_acumulador': {
    title: 'Patrón acumulador',
    content: `El patrón más importante en programación con bucles.

Pasos:
1. Inicializar variable ANTES del bucle
2. Actualizar en cada iteración
3. Usar el resultado DESPUÉS del bucle

Variantes:
  total = 0       # Suma
  for n in nums: total += n

  maximo = nums[0] # Máximo manual
  for n in nums:
      if n > maximo: maximo = n

  resultado = []   # Construir lista
  for n in nums:
      resultado.append(n * 2)

  texto = ""       # Construir string
  for c in chars:
      texto += c`,
    examples: [
      { code: 'nums = [4, 7, 2, 9, 1]\nmayor = nums[0]\nfor n in nums:\n    if n > mayor:\n        mayor = n\nprint(f"Mayor: {mayor}")', output: 'Mayor: 9' },
    ],
  },
  'bucles/while_basico': {
    title: 'while — Repetir hasta que se cumpla algo',
    content: `while repite MIENTRAS la condición sea True.

¿Cuándo usar while?
• No sabes cuántas iteraciones necesitas
• Esperas un evento o condición
• Simulaciones de tiempo real
• Menús interactivos

PELIGRO: Si la condición nunca cambia a False = bucle infinito.
Siempre asegúrate de que algo dentro del while modifique la condición.

Patrón seguro:
  while condición:
      hacer_algo()
      actualizar_condición()  # ¡CRUCIAL!`,
    examples: [
      { code: 'n = 1\nwhile n <= 100:\n    n = n * 2\nprint(f"Primer valor > 100: {n}")', output: 'Primer valor > 100: 128' },
    ],
  },
  'bucles/while_vs_for': {
    title: '¿for o while? — Guía de decisión',
    content: `Regla simple:

FOR cuando: "Haz esto N veces" o "Para cada elemento..."
  for i in range(10):
  for item in lista:

WHILE cuando: "Mientras no pase X..." o "Hasta que..."
  while not encontrado:
  while intentos > 0:
  while usuario != "salir":

En la práctica, for se usa ~80% de las veces.
while es más para lógica de control y espera.`,
    examples: [
      { code: '# for: recorrer lista\nfor x in [1, 2, 3]:\n    print(x)\n\n# while: buscar condición\nn = 256\nwhile n > 1:\n    n = n // 2\nprint(f"Final: {n}")', output: '1\n2\n3\nFinal: 1' },
    ],
  },
  'bucles/break_continue': {
    title: 'break y continue — Control fino de bucles',
    content: `break: SALE del bucle completamente.
  for n in range(100):
      if n == 5:
          break  # sale aquí, no sigue hasta 99
      print(n)

continue: SALTA a la siguiente iteración.
  for n in range(5):
      if n == 2:
          continue  # salta el 2
      print(n)  # imprime 0,1,3,4

Úsalos con moderación. Demasiados break/continue hacen el código difícil de seguir.

Tip: break es perfecto para búsquedas (encontré lo que buscaba, paro).`,
    examples: [
      { code: '# Buscar el primer par\nfor n in [1, 3, 7, 4, 9]:\n    if n % 2 == 0:\n        print(f"Primer par: {n}")\n        break', output: 'Primer par: 4' },
    ],
  },
  'bucles/bucles_anidados': {
    title: 'Bucles anidados — Tablas y matrices',
    content: `Un bucle dentro de otro. El interno se ejecuta COMPLETAMENTE por cada paso del externo.

Si externo va 3 veces e interno 4 veces:
  Total de ejecuciones del cuerpo interno = 3 × 4 = 12

Usos comunes:
• Tablas de multiplicar
• Recorrer matrices (listas de listas)
• Generar combinaciones
• Dibujar patrones

Cuidado con la eficiencia: bucles anidados de 1000×1000 = 1,000,000 operaciones.`,
    examples: [
      { code: 'for i in range(1, 4):\n    linea = ""\n    for j in range(1, 4):\n        linea += f"{i*j}\\t"\n    print(linea)', output: '1\t2\t3\t\n2\t4\t6\t\n3\t6\t9\t' },
    ],
  },
  'bucles/patrones_bucles': {
    title: 'Patrones comunes con bucles',
    content: `Los programadores usan los mismos patrones una y otra vez:

1. Contar elementos que cumplen condición
2. Sumar/acumular valores
3. Encontrar máximo/mínimo
4. Filtrar (construir nueva lista)
5. Transformar (aplicar operación a cada elemento)
6. Buscar (encontrar primer elemento que cumple)

Reconocer estos patrones te hace más rápido programando. La mayoría son: inicializar → iterar → actualizar → resultado.`,
    examples: [
      { code: '# Filtrar: solo positivos\nnums = [3, -1, 4, -2, 7]\npositivos = []\nfor n in nums:\n    if n > 0:\n        positivos.append(n)\nprint(positivos)', output: '[3, 4, 7]' },
    ],
  },
  'bucles/proyecto_bucles': {
    title: 'Proyecto: Análisis de datos con bucles',
    content: `En el mundo real, los bucles se usan constantemente para analizar datos:
• Procesar logs de servidor
• Analizar lecturas de sensores
• Calcular estadísticas
• Generar reportes

Patrón de análisis:
  1. Definir datos y acumuladores
  2. Recorrer con bucle
  3. Clasificar con condicionales
  4. Acumular resultados
  5. Mostrar resumen`,
    examples: [
      { code: 'datos = [88, 45, 92, 67, 95]\nok = warn = crit = 0\nfor d in datos:\n    if d > 90: crit += 1\n    elif d > 70: warn += 1\n    else: ok += 1\nprint(f"OK:{ok} WARN:{warn} CRIT:{crit}")', output: 'OK:2 WARN:1 CRIT:2' },
    ],
  },

  // ESTRUCTURAS
  'estructuras/listas_crear': {
    title: 'Listas — La estructura más usada en Python',
    content: `Una lista es una colección ordenada y mutable. Puede contener cualquier tipo de dato.

Crear listas:
  vacia = []
  nums = [1, 2, 3, 4, 5]
  mixta = [1, "hola", True, 3.14]

Acceso por índice (empieza en 0):
  lista[0]   → primer elemento
  lista[1]   → segundo elemento
  lista[-1]  → último (contando desde atrás)
  lista[-2]  → penúltimo

Información básica:
  len(lista)     → número de elementos
  3 in lista     → True si 3 está en la lista
  lista.index(x) → posición de x en la lista`,
    examples: [
      { code: 'planetas = ["Tierra", "Marte", "Venus"]\nprint(planetas[0])\nprint(planetas[-1])\nprint(len(planetas))', output: 'Tierra\nVenus\n3' },
      { code: 'nums = [10, 20, 30, 40, 50]\nprint(30 in nums)\nprint(nums.index(40))', output: 'True\n3' },
    ],
  },
  'estructuras/listas_metodos': {
    title: 'Métodos de listas — Modificar colecciones',
    content: `Las listas son mutables: puedes modificarlas después de crearlas.

Agregar elementos:
  lista.append(x)     → agrega x al final
  lista.insert(i, x)  → inserta x en posición i

Eliminar elementos:
  lista.remove(x)  → elimina la primera aparición de x
  lista.pop()      → elimina y retorna el último
  lista.pop(i)     → elimina y retorna el elemento en posición i

Ordenar y reorganizar:
  lista.sort()      → ordena de menor a mayor (modifica la lista)
  lista.reverse()   → invierte el orden (modifica la lista)
  sorted(lista)     → retorna nueva lista ordenada (no modifica)

Otros:
  lista.count(x)  → cuántas veces aparece x
  lista.clear()   → vacía la lista`,
    examples: [
      { code: 'equipo = ["radar", "motor"]\nequipo.append("laser")\nequipo.insert(0, "escudo")\nprint(equipo)', output: "['escudo', 'radar', 'motor', 'laser']" },
      { code: 'nums = [3, 1, 4, 1, 5, 9]\nnums.sort()\nprint(nums)\nprint(nums.count(1))', output: '[1, 1, 3, 4, 5, 9]\n2' },
    ],
  },
  'estructuras/listas_slicing': {
    title: 'Slicing — Extraer porciones de datos',
    content: `Slicing es una de las características más poderosas de Python. Funciona con listas y strings.

Sintaxis: secuencia[inicio:fin:paso]

• inicio: índice donde empieza (incluido). Default: 0
• fin: índice donde termina (excluido). Default: final
• paso: salto entre elementos. Default: 1

Ejemplos clave:
  lista[1:4]   → del índice 1 al 3
  lista[:3]    → del inicio al 2
  lista[2:]    → del 2 hasta el final
  lista[::2]   → uno sí, uno no (paso 2)
  lista[::-1]  → invertida (paso -1)
  lista[-3:]   → los 3 últimos

El original NO se modifica. Slicing crea una copia.`,
    examples: [
      { code: 'datos = [10, 20, 30, 40, 50, 60, 70]\nprint(datos[2:5])\nprint(datos[:3])\nprint(datos[-3:])\nprint(datos[::2])', output: '[30, 40, 50]\n[10, 20, 30]\n[50, 60, 70]\n[10, 30, 50, 70]' },
      { code: 'codigo = "PYTHON3"\nprint(codigo[::-1])\nprint(codigo[::2])', output: '3NOHTYP\nPTO3' },
    ],
  },
  'estructuras/listas_funciones': {
    title: 'Funciones integradas con listas',
    content: `Python incluye funciones muy útiles que trabajan directamente con listas.

Estadísticas básicas:
  max(lista)    → el valor más alto
  min(lista)    → el valor más bajo
  sum(lista)    → suma de todos los elementos
  len(lista)    → cantidad de elementos

Transformación:
  sorted(lista)           → nueva lista ordenada (ascendente)
  sorted(lista, reverse=True) → descendente
  list(range(n))          → lista de números

Promedio (no viene incluido, debes calcularlo):
  promedio = sum(lista) / len(lista)

Truco de min/max con strings: comparan alfabéticamente.
  max(["b", "a", "c"]) → "c"`,
    examples: [
      { code: 'notas = [85, 92, 78, 95, 88]\nprint(f"Max: {max(notas)}")\nprint(f"Min: {min(notas)}")\nprint(f"Promedio: {sum(notas) / len(notas):.1f}")', output: 'Max: 95\nMin: 78\nPromedio: 87.6' },
      { code: 'nombres = ["Carlos", "Ana", "Zoe", "Bruno"]\nprint(sorted(nombres))', output: "['Ana', 'Bruno', 'Carlos', 'Zoe']" },
    ],
  },
  'estructuras/diccionarios_crear': {
    title: 'Diccionarios — Datos con etiquetas',
    content: `Un diccionario asocia claves únicas con valores. Perfectos para datos estructurados.

Crear un diccionario:
  dicc = {}                          # vacío
  persona = {"nombre": "EVA", "edad": 5, "activo": True}

Acceder a valores:
  persona["nombre"]       → "EVA"
  persona.get("edad")     → 5
  persona.get("x", 0)     → 0 (valor por defecto si no existe)

Modificar:
  persona["edad"] = 6     → actualiza
  persona["rol"] = "IA"   → agrega nueva clave

Verificar existencia:
  "nombre" in persona     → True
  "peso" in persona       → False

len(dicc) → número de claves`,
    examples: [
      { code: 'config = {"host": "localhost", "puerto": 8080, "debug": True}\nprint(config["host"])\nprint(config.get("timeout", 30))', output: 'localhost\n30' },
      { code: 'inv = {}\ninv["espada"] = 50\ninv["escudo"] = 1\nprint(inv)', output: "{'espada': 50, 'escudo': 1}" },
    ],
  },
  'estructuras/diccionarios_metodos': {
    title: 'Métodos de diccionarios — Recorrer y extraer datos',
    content: `Los diccionarios tienen métodos especializados para trabajar con claves y valores.

Los tres métodos principales de iteración:
  dicc.keys()    → todas las claves
  dicc.values()  → todos los valores
  dicc.items()   → pares (clave, valor) — el más usado

Otros métodos útiles:
  dicc.get(clave, default)  → valor o default si no existe
  dicc.update(otro_dicc)    → fusiona dos diccionarios
  dicc.pop(clave)           → elimina y retorna el valor

Recorrer con items():
  for clave, valor in dicc.items():
      print(f"{clave}: {valor}")

Crear diccionario desde listas (zip):
  claves = ["a", "b", "c"]
  valores = [1, 2, 3]
  dicc = dict(zip(claves, valores))`,
    examples: [
      { code: 'stats = {"hp": 100, "mp": 50, "atk": 25}\nfor stat, val in stats.items():\n    print(f"  {stat.upper()}: {val}")', output: '  HP: 100\n  MP: 50\n  ATK: 25' },
      { code: 'precios = {"manzana": 1.5, "pera": 2.0, "uva": 3.0}\ntotal = sum(precios.values())\nprint(f"Total: {total}")', output: 'Total: 6.5' },
    ],
  },
  'estructuras/strings_metodos': {
    title: 'Métodos de strings — Superpoderes del texto',
    content: `Los strings tienen docenas de métodos incorporados. Los más importantes:

Transformación de caso:
  .upper()      → "HOLA"
  .lower()      → "hola"
  .title()      → "Hola Mundo"
  .capitalize() → "Hola mundo"

Limpieza:
  .strip()       → quita espacios al inicio y final
  .lstrip()      → solo al inicio (left)
  .rstrip()      → solo al final (right)

Búsqueda y reemplazo:
  .replace(viejo, nuevo)  → reemplaza ocurrencias
  .count(sub)             → cuenta apariciones
  .find(sub)              → índice o -1 si no existe
  .startswith(sub)        → True/False
  .endswith(sub)          → True/False

División y unión:
  .split(sep)           → divide en lista
  sep.join(lista)       → une lista en string`,
    examples: [
      { code: 'log = "  ERROR: fallo_critico  "\nprint(log.strip())\nprint(log.strip().replace("_", " ").title())', output: 'ERROR: fallo_critico\nError: Fallo Critico' },
      { code: 'csv = "a,b,c,d"\npartes = csv.split(",")\nprint(partes)\nprint(" | ".join(partes))', output: "['a', 'b', 'c', 'd']\na | b | c | d" },
    ],
  },
  'estructuras/tuplas': {
    title: 'Tuplas — Datos que no deben cambiar',
    content: `Una tupla es como una lista, pero inmutable. Una vez creada, no se puede modificar.

Sintaxis con paréntesis:
  punto = (10, 25)
  rgb = (255, 128, 0)
  vacia = ()
  un_elem = (42,)   # coma necesaria para tupla de un elemento

¿Por qué usar tuplas?
• Datos que no deben cambiar (coordenadas, configuraciones)
• Más rápidas que las listas en lectura
• Se usan como claves de diccionarios (las listas no pueden)
• Retornar múltiples valores de funciones

Desempaquetado de tuplas:
  x, y = (10, 25)    # x=10, y=25
  a, b, c = (1, 2, 3)

Las tuplas soportan: indexado, slicing, len(), in, iteración.
No soportan: append, remove, sort, ni ninguna modificación.`,
    examples: [
      { code: 'coordenadas = (40.7128, -74.0060)\nlat, lon = coordenadas\nprint(f"Lat: {lat}, Lon: {lon}")', output: 'Lat: 40.7128, Lon: -74.006' },
      { code: 'colores = ("rojo", "verde", "azul")\nfor i, color in enumerate(colores):\n    print(f"{i}: {color}")', output: '0: rojo\n1: verde\n2: azul' },
    ],
  },
  'estructuras/listas_diccionarios': {
    title: 'Estructuras anidadas — Modelar datos del mundo real',
    content: `Combinar listas y diccionarios permite modelar cualquier dato complejo.

Lista de diccionarios (la más común):
  usuarios = [
      {"nombre": "Ana", "edad": 25, "activo": True},
      {"nombre": "Luis", "edad": 30, "activo": False}
  ]
  usuarios[0]["nombre"]  → "Ana"

Diccionario de listas:
  inventario = {
      "armas": ["espada", "arco"],
      "pociones": ["vida", "mana", "vida"]
  }
  inventario["armas"][0]  → "espada"

Patrón de filtrado de estructuras complejas:
  activos = [u for u in usuarios if u["activo"]]

Patrón de búsqueda:
  for u in usuarios:
      if u["nombre"] == "Ana":
          print(u["edad"])`,
    examples: [
      { code: 'flota = [\n    {"nave": "X-Wing", "clase": "caza", "hp": 100},\n    {"nave": "Halcon", "clase": "fragata", "hp": 250}\n]\nfor nave in flota:\n    print(f"{nave[\'nave\']}: {nave[\'hp\']} HP")', output: 'X-Wing: 100 HP\nHalcon: 250 HP' },
    ],
  },
  'estructuras/proyecto_inventario': {
    title: 'Proyecto: Procesador de datos completo',
    content: `Este proyecto integra todas las estructuras de datos en un sistema real.

Patrón de conteo con diccionario:
  conteo = {}
  for item in lista:
      if item in conteo:
          conteo[item] += 1
      else:
          conteo[item] = 1

Patrón alternativo con .get():
  for item in lista:
      conteo[item] = conteo.get(item, 0) + 1

En el mundo real este patrón se usa para:
• Contar palabras en un texto
• Analizar frecuencias de eventos
• Agrupar datos por categoría
• Construir histogramas

La clave es: inicializar → iterar → condicional → acumular → resultado.`,
    examples: [
      { code: 'items = ["metal", "cristal", "metal", "energia", "metal"]\nconteo = {}\nfor item in items:\n    conteo[item] = conteo.get(item, 0) + 1\nprint(conteo)', output: "{'metal': 3, 'cristal': 1, 'energia': 1}" },
    ],
  },

  // FUNCIONES
  'funciones/def_basico': {
    title: 'def — Crear bloques de código reutilizables',
    content: `Una función es un bloque de código con nombre que puedes ejecutar cuantas veces quieras.

Sintaxis:
  def nombre_funcion():
      # código de la función
      # indentado 4 espacios

Llamar (ejecutar) una función:
  nombre_funcion()

¿Por qué usar funciones?
• DRY: Don't Repeat Yourself — escribe el código una vez, úsalo muchas
• Organización: divide el programa en partes manejables
• Legibilidad: el nombre de la función describe qué hace
• Mantenimiento: cambias la función una vez, cambia en todos lados

Convención de nombres: snake_case, verbos descriptivos.
  calcular_area()  ✓
  f1()             ✗ (poco descriptivo)`,
    examples: [
      { code: 'def separador():\n    print("=" * 30)\n\ndef mostrar_titulo(texto):\n    separador()\n    print(f"  {texto}")\n    separador()\n\nmostrar_titulo("Sistema CORE v2.1")', output: '==============================\n  Sistema CORE v2.1\n==============================' },
    ],
  },
  'funciones/parametros': {
    title: 'Parámetros — Datos de entrada para funciones',
    content: `Los parámetros permiten que una función reciba datos y opere sobre ellos.

Parámetro vs Argumento:
  • Parámetro: la variable en la definición (def f(x))
  • Argumento: el valor que pasas al llamar (f(10))

Múltiples parámetros (separados por coma):
  def area(base, altura):
      return base * altura

Orden importa:
  def presentar(nombre, rol, nivel):
      ...
  presentar("EVA", "IA", 10)  # posicional

Argumentos nombrados (keyword arguments):
  presentar(rol="IA", nombre="EVA", nivel=10)  # cualquier orden

Puedes mezclar, pero posicionales deben ir primero:
  presentar("EVA", nivel=10, rol="IA")`,
    examples: [
      { code: 'def bienvenida(nombre, sistema="CORE"):\n    print(f"Bienvenido, {nombre}. Sistema: {sistema}")\n\nbienvenida("Recluta")\nbienvenida("EVA", "NEXUS")', output: 'Bienvenido, Recluta. Sistema: CORE\nBienvenido, EVA. Sistema: NEXUS' },
    ],
  },
  'funciones/return_valor': {
    title: 'return — La función te da una respuesta',
    content: `return envía un valor de vuelta al código que llamó a la función.

Diferencia fundamental:
  def con_print(n):
      print(n * 2)    # muestra, pero no devuelve nada útil

  def con_return(n):
      return n * 2    # devuelve el resultado para usar

Con return puedes:
  resultado = con_return(5)   # guardar en variable
  print(con_return(5))        # imprimir directamente
  if con_return(5) > 8:       # usar en condición
  lista.append(con_return(5)) # agregar a colección

Una función sin return (o con return vacío) retorna None.

return termina la función inmediatamente:
  def positivo(n):
      if n < 0:
          return 0      # termina aquí si n es negativo
      return n          # solo llega aquí si n >= 0`,
    examples: [
      { code: 'def potencia(base, exp):\n    return base ** exp\n\ndef formatear_resultado(val):\n    return f"Resultado: {val}"\n\nprint(formatear_resultado(potencia(2, 8)))', output: 'Resultado: 256' },
    ],
  },
  'funciones/params_default': {
    title: 'Parámetros con valor por defecto',
    content: `Los valores por defecto hacen que los parámetros sean opcionales.

Sintaxis: def f(param=valor_default):

Regla: los parámetros con default van SIEMPRE al final.
  def f(a, b=10, c=20):  ✓
  def f(a=10, b):         ✗ Error de sintaxis

Cuándo usar valores por defecto:
• Configuraciones opcionales
• Comportamiento estándar con opción de personalizar
• API ergonómica (fácil de usar para el caso más común)

Cuidado con mutables como default (bug clásico de Python):
  def agregar(item, lista=[]):  # ¡MAL! La lista persiste entre llamadas
  def agregar(item, lista=None):  # BIEN
      if lista is None:
          lista = []`,
    examples: [
      { code: 'def conectar(host, puerto=80, seguro=False):\n    protocolo = "https" if seguro else "http"\n    return f"{protocolo}://{host}:{puerto}"\n\nprint(conectar("core.io"))\nprint(conectar("core.io", 443, True))', output: 'http://core.io:80\nhttps://core.io:443' },
    ],
  },
  'funciones/return_multiple': {
    title: 'Retornos múltiples — Una función, varios resultados',
    content: `Python permite retornar múltiples valores separados por coma. Se empaquetan en una tupla.

Sintaxis:
  def f():
      return valor1, valor2, valor3

Formas de recibirlo:
  # Desempaquetado (lo más común):
  a, b, c = f()

  # Como tupla:
  resultado = f()
  resultado[0]   # primer valor

  # Ignorar valores con _:
  a, _, c = f()  # ignora el segundo valor

Cuándo usar retornos múltiples:
• Estadísticas: min, max, promedio
• Coordenadas: x, y, z
• Estado + mensaje: éxito, mensaje_error
• División: cociente, resto`,
    examples: [
      { code: 'def analizar_lista(nums):\n    return min(nums), max(nums), sum(nums) / len(nums)\n\nmi, ma, prom = analizar_lista([10, 25, 5, 40, 20])\nprint(f"Min: {mi}, Max: {ma}, Prom: {prom}")', output: 'Min: 5, Max: 40, Prom: 20.0' },
    ],
  },
  'funciones/scope': {
    title: 'Scope — El ámbito de vida de una variable',
    content: `El scope determina desde dónde puedes acceder a una variable.

Variable local:
  • Creada dentro de una función
  • Solo existe mientras la función ejecuta
  • No es accesible desde afuera

  def f():
      local = 10  # solo existe aquí
  print(local)    # ¡Error! no existe aquí

Variable global:
  • Creada fuera de toda función
  • Accesible desde cualquier parte del programa (solo lectura)
  • Para modificarla dentro de una función: declarar global

Jerarquía de búsqueda (LEGB):
  Local → Enclosing → Global → Built-in

Buena práctica: evita modificar variables globales dentro de funciones. Pasa los datos como parámetros y usa return.`,
    examples: [
      { code: 'VERSION = "2.1"  # global\n\ndef mostrar_info(nombre):\n    estado = "online"  # local\n    print(f"{nombre} v{VERSION} - {estado}")\n\nmostrar_info("CORE")\nprint(VERSION)  # global accesible', output: 'CORE v2.1 - online\n2.1' },
    ],
  },
  'funciones/funciones_listas': {
    title: 'Funciones que procesan listas',
    content: `Las funciones son ideales para encapsular operaciones sobre listas.

Patrón más común — filtrar y transformar:
  def filtrar(lista, condicion):
      resultado = []
      for item in lista:
          if condicion(item):
              resultado.append(item)
      return resultado

Patrón de transformación:
  def transformar(lista):
      return [operacion(x) for x in lista]

Principio importante: las funciones NO deben modificar la lista original sin avisar. Crea una nueva lista y retórnala.

Funciones útiles del módulo:
  max(lista)    → máximo
  min(lista)    → mínimo
  sum(lista)    → suma
  sorted(lista) → nueva lista ordenada`,
    examples: [
      { code: 'def duplicar(lista):\n    resultado = []\n    for x in lista:\n        resultado.append(x * 2)\n    return resultado\n\ndef solo_pares(lista):\n    resultado = []\n    for x in lista:\n        if x % 2 == 0:\n            resultado.append(x)\n    return resultado\n\nnums = [1, 2, 3, 4, 5]\nprint(duplicar(nums))\nprint(solo_pares(nums))', output: '[2, 4, 6, 8, 10]\n[2, 4]' },
    ],
  },
  'funciones/funciones_diccionarios': {
    title: 'Funciones que crean y procesan diccionarios',
    content: `Las funciones son perfectas para construir y analizar diccionarios de forma controlada.

Funciones que crean diccionarios (fábricas):
  def crear_usuario(nombre, nivel, xp=0):
      return {
          "nombre": nombre,
          "nivel": nivel,
          "xp": xp,
          "rango": "elite" if nivel > 5 else "normal"
      }

Funciones que analizan diccionarios:
  def total_recursos(inventario):
      return sum(inventario.values())

Funciones que transforman diccionarios:
  def subir_nivel(usuario):
      nuevo = dict(usuario)  # copia
      nuevo["nivel"] += 1
      return nuevo

Siempre es mejor retornar un diccionario nuevo que modificar el original directamente.`,
    examples: [
      { code: 'def crear_agente(nombre, puntos):\n    return {\n        "nombre": nombre,\n        "puntos": puntos,\n        "rango": "elite" if puntos >= 100 else "normal"\n    }\n\nagente = crear_agente("Zero", 150)\nfor k, v in agente.items():\n    print(f"  {k}: {v}")', output: '  nombre: Zero\n  puntos: 150\n  rango: elite' },
    ],
  },
  'funciones/funciones_composicion': {
    title: 'Composición de funciones — El poder de combinar',
    content: `La composición es usar el resultado de una función como entrada de otra.

Composición directa:
  resultado = f(g(h(x)))
  # h se ejecuta primero, luego g, luego f

Composición con pasos intermedios (más legible):
  paso1 = limpiar(datos)
  paso2 = validar(paso1)
  resultado = formatear(paso2)

Ventajas:
• Cada función hace UNA cosa bien (principio de responsabilidad única)
• Fácil de testear cada parte
• Reutilizable en diferentes contextos
• Más fácil de leer y entender

Este es el fundamento de la programación funcional y del diseño de software limpio.`,
    examples: [
      { code: 'def limpiar(texto):\n    return texto.strip().lower()\n\ndef capitalizar(texto):\n    return texto.replace("_", " ").title()\n\ndef formatear_nombre(raw):\n    return capitalizar(limpiar(raw))\n\nprint(formatear_nombre("  juan_perez  "))', output: 'Juan Perez' },
    ],
  },
  'funciones/proyecto_final': {
    title: 'Proyecto Final — Todo el conocimiento integrado',
    content: `Este es el patrón de un programa Python completo y bien estructurado.

Arquitectura de un buen programa:
  1. Funciones de datos → crean/transforman datos
  2. Funciones de lógica → procesan y calculan
  3. Funciones de presentación → muestran resultados
  4. Función principal → orquesta todo

Ejemplo de estructura:
  def cargar_datos():     # obtiene datos
  def procesar(datos):    # aplica lógica
  def mostrar(resultado): # formatea salida

  datos = cargar_datos()
  resultado = procesar(datos)
  mostrar(resultado)

Con todo lo que aprendiste puedes:
• Variables y tipos para representar datos
• Condicionales para tomar decisiones
• Bucles para procesar colecciones
• Listas y dicts para organizar información
• Funciones para estructurar y reutilizar código`,
    examples: [
      { code: 'def reporte(nums):\n    positivos = sum(1 for n in nums if n > 0)\n    return {\n        "total": len(nums),\n        "suma": sum(nums),\n        "promedio": sum(nums) // len(nums),\n        "positivos": positivos\n    }\n\nresultado = reporte([10, -5, 20, -3, 15])\nfor k, v in resultado.items():\n    print(f"{k}: {v}")', output: 'total: 5\nsuma: 37\npromedio: 7\npositivos: 3' },
    ],
  },
};

const colorClasses = {
  'neon-green':  { text: 'text-neon-green',  border: 'border-neon-green',  bg: 'bg-neon-green/10',  progress: 'bg-neon-green' },
  'neon-blue':   { text: 'text-neon-blue',   border: 'border-neon-blue',   bg: 'bg-neon-blue/10',   progress: 'bg-neon-blue' },
  'neon-purple': { text: 'text-neon-purple', border: 'border-neon-purple', bg: 'bg-neon-purple/10', progress: 'bg-neon-purple' },
  'neon-yellow': { text: 'text-neon-yellow', border: 'border-neon-yellow', bg: 'bg-neon-yellow/10', progress: 'bg-neon-yellow' },
  'neon-orange': { text: 'text-neon-orange', border: 'border-neon-orange', bg: 'bg-neon-orange/10', progress: 'bg-neon-orange' },
};

// ─── Componente de memoria de un nivel individual ────────────────────────────
function LevelMemory({ level, chapterId, isCompleted, color }) {
  const [open, setOpen] = useState(false);
  const key = `${chapterId}/${level.id}`;
  const extended = extendedLessons[key];
  const cc = colorClasses[color] || colorClasses['neon-green'];

  if (!isCompleted) {
    return (
      <div className="p-3 bg-terminal-surface/20 border border-terminal-border/20 rounded-lg flex items-center gap-3 opacity-40">
        <Lock className="w-3.5 h-3.5 text-terminal-muted/40 flex-shrink-0" />
        <span className="text-sm text-terminal-muted/40">{level.title}</span>
        <span className="ml-auto text-xs text-terminal-muted/30">{level.lesson.concept}</span>
      </div>
    );
  }

  return (
    <div className={`bg-terminal-surface border ${cc.border}/30 rounded-lg overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3 flex items-center gap-3 hover:bg-terminal-border/10 transition-colors cursor-pointer text-left"
      >
        <BookOpen className={`w-3.5 h-3.5 ${cc.text} flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          <span className="text-sm font-bold text-terminal-text">{level.title}</span>
          <span className="text-xs text-terminal-muted ml-2 truncate">{level.lesson.concept}</span>
        </div>
        {open ? <ChevronDown className="w-4 h-4 text-terminal-muted flex-shrink-0" /> : <ChevronRight className="w-4 h-4 text-terminal-muted flex-shrink-0" />}
      </button>

      {open && (
        <div className="border-t border-terminal-border/30 p-4 space-y-4">
          {/* Concepto */}
          <div>
            <h4 className="text-xs font-bold text-neon-green mb-2 uppercase tracking-wider">Concepto</h4>
            <pre className="text-sm text-terminal-text whitespace-pre-wrap leading-relaxed">{level.lesson.explanation}</pre>
          </div>

          {/* Ejemplo */}
          <div className="bg-terminal-bg rounded-lg overflow-hidden">
            <div className="px-3 py-1.5 border-b border-terminal-border/30 text-xs text-terminal-muted">Ejemplo</div>
            <pre className="p-3 text-sm text-neon-green">{level.lesson.example}</pre>
            {level.lesson.exampleOutput && (
              <div className="border-t border-terminal-border/30 px-3 py-2">
                <span className="text-xs text-terminal-muted">→ </span>
                <pre className="text-sm text-neon-yellow inline">{level.lesson.exampleOutput}</pre>
              </div>
            )}
          </div>

          {/* Explicación extendida */}
          {extended && (
            <>
              <div className="border-t border-terminal-border/20 pt-4">
                <h4 className="text-xs font-bold text-neon-purple mb-2 uppercase tracking-wider">Explicación Extendida</h4>
                <h3 className={`text-sm font-bold ${cc.text} mb-2`}>{extended.title}</h3>
                <pre className="text-sm text-terminal-text whitespace-pre-wrap leading-relaxed">{extended.content}</pre>
              </div>
              {extended.examples?.length > 0 && (
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
      )}
    </div>
  );
}

// ─── Vista de detalle de un capítulo ─────────────────────────────────────────
function ChapterDetail({ chapter, completedLevels, onBack }) {
  const cc = colorClasses[chapter.color] || colorClasses['neon-green'];
  const completed = chapter.levels.filter(l => completedLevels.includes(`${chapter.id}/${l.id}`)).length;
  const total = chapter.levels.length;

  return (
    <div>
      {/* Header del capítulo */}
      <div className={`mb-6 p-4 bg-terminal-surface border ${cc.border}/40 rounded-lg`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-terminal-muted hover:text-terminal-text transition-colors cursor-pointer mb-3 text-sm"
        >
          <ChevronLeft className="w-4 h-4" /> Todos los capítulos
        </button>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{chapter.icon}</span>
          <div>
            <h2 className={`text-lg font-bold ${cc.text}`}>{chapter.title}</h2>
            <p className="text-xs text-terminal-muted">{chapter.description}</p>
          </div>
          <div className={`ml-auto text-right`}>
            <div className={`text-2xl font-bold ${cc.text}`}>{completed}/{total}</div>
            <div className="text-xs text-terminal-muted">desbloqueadas</div>
          </div>
        </div>
        <div className="h-1.5 bg-terminal-border rounded-full overflow-hidden">
          <div className={`h-full ${cc.progress} rounded-full transition-all duration-500`} style={{ width: `${(completed / total) * 100}%` }} />
        </div>
      </div>

      {/* Lista de niveles */}
      <div className="space-y-2">
        {chapter.levels.map((level) => (
          <LevelMemory
            key={level.id}
            level={level}
            chapterId={chapter.id}
            isCompleted={completedLevels.includes(`${chapter.id}/${level.id}`)}
            color={chapter.color}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Vista principal: grid de capítulos ──────────────────────────────────────
export default function Memory() {
  const navigate = useNavigate();
  const { completedLevels, availableXp, getPlayerRank } = useGame();
  const [selectedChapter, setSelectedChapter] = useState(null);

  const totalCompleted = completedLevels.length;
  const totalLevels = chapters.reduce((acc, c) => acc + c.levels.length, 0);

  const chapter = selectedChapter ? chapters.find(c => c.id === selectedChapter) : null;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => selectedChapter ? setSelectedChapter(null) : navigate('/')}
          className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> {selectedChapter ? 'Capítulos' : 'Volver'}
        </button>
        <div className="flex items-center gap-4">
          <span className="text-neon-purple text-sm">{getPlayerRank()}</span>
          <div className="flex items-center gap-1 text-neon-yellow">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">{availableXp} XP</span>
          </div>
        </div>
      </div>

      {chapter ? (
        // ── Detalle del capítulo
        <ChapterDetail
          chapter={chapter}
          completedLevels={completedLevels}
          onBack={() => setSelectedChapter(null)}
        />
      ) : (
        // ── Grid de capítulos
        <>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-6 h-6 text-neon-blue" />
              <h1 className="text-2xl font-bold text-terminal-text">Memoria</h1>
            </div>
            <p className="text-terminal-muted text-sm">Tus conocimientos acumulados — se desbloquean al completar niveles</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-1.5 w-48 bg-terminal-border rounded-full overflow-hidden">
                <div className="h-full bg-neon-blue rounded-full transition-all duration-500" style={{ width: `${(totalCompleted / totalLevels) * 100}%` }} />
              </div>
              <span className="text-xs text-neon-blue font-bold">{totalCompleted}/{totalLevels}</span>
            </div>
          </div>

          {/* Lenguaje actual */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-terminal-muted uppercase tracking-wider">Lenguaje</span>
            <span className="px-3 py-1 bg-neon-green/10 border border-neon-green/40 text-neon-green text-xs font-bold rounded-full">🐍 Python</span>
          </div>

          {/* Grid de capítulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((ch) => {
              const cc = colorClasses[ch.color] || colorClasses['neon-green'];
              const done = ch.levels.filter(l => completedLevels.includes(`${ch.id}/${l.id}`)).length;
              const total = ch.levels.length;
              const pct = (done / total) * 100;
              const isLocked = done === 0;

              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapter(ch.id)}
                  className={`text-left p-4 bg-terminal-surface border ${cc.border}/30 rounded-lg hover:${cc.bg} hover:border-opacity-60 transition-all cursor-pointer group ${isLocked ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{ch.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-sm ${cc.text} group-hover:brightness-125 transition-all`}>{ch.title}</div>
                      <div className="text-xs text-terminal-muted mt-0.5 truncate">{ch.description}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {isLocked
                        ? <Lock className="w-4 h-4 text-terminal-muted/40" />
                        : <span className={`text-sm font-bold ${cc.text}`}>{done}/{total}</span>
                      }
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-terminal-border rounded-full overflow-hidden">
                    <div className={`h-full ${cc.progress} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      {ch.levels.map((l) => {
                        const done = completedLevels.includes(`${ch.id}/${l.id}`);
                        return <div key={l.id} className={`w-2 h-2 rounded-full ${done ? cc.progress : 'bg-terminal-border'}`} />;
                      })}
                    </div>
                    <ChevronRight className={`w-4 h-4 ${cc.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </button>
              );
            })}
          </div>

          {totalCompleted === 0 && (
            <div className="mt-8 text-center p-6 border border-terminal-border/30 rounded-lg">
              <p className="text-terminal-muted text-sm">Completa tu primer nivel para desbloquear memorias</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
