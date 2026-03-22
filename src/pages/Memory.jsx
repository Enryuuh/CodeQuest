import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { chapters } from '../data/levels';
import { ChevronLeft, BookOpen, Lock, Zap } from 'lucide-react';

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
  const { completedLevels, availableXp, getPlayerRank } = useGame();

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
