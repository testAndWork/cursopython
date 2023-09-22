//Cristian - Noelia - Roberto

//Luis -Kevin - Henry

//Kerym -Samuel- Isaias

//Isaias - Jefte-Edwin

// ARREGLOS EN JS

let arreglo_1 = new Array();

let arreglo_2 = []

let frutas = ['mango', 'manzana', 'piña', 'naranja']

console.log(frutas)

let vegetales = ['puerro', 'rábano', 'radicheta', 'remolacha', 'repollo', 'repollitos de Bruselas', 'zanahoria', 'zapallo', 'calabaza', 'banana']

console.log(vegetales)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

frutas[1] = 'uva'

console.log(frutas)

console.log(vegetales.length)

//UN arreglo puede contener elementos de todo tipo.

let tipos = [ 23, 'Hello', true, {name: 'john'}, function(){console.log('hola')},function(){console.log('hola, hello')}  ];

console.log(tipos[0])
console.log(tipos[1])
console.log(tipos[2])
console.log(tipos[3])
console.log(tipos[3].name)
console.log(tipos[4])
tipos[4]()
tipos[5]()

// frutas = ['mango', 'uva', 'piña', 'naranja']
//USO DEL METODO POP

frutas.pop()
console.log(frutas)

// USO DEL METODO PUSH
frutas.push('Sandia')
console.log(frutas)

//METODO SHIFT 
frutas.shift()
console.log(frutas)

//METODO UNSHIFT
frutas.unshift('jocote')
console.log(frutas)


frutas.push('melón','Pera')
frutas.unshift('Zapote','guayaba')
console.log(frutas)

// Uso de length

let arr = []
arr[23] = 'hola'
console.log(arr.length)

//   indice [ 0 1  2   3]     
let arr2 =  [1, 2, 3, 4]
console.log(arr2.length)
arr2.length = 2
console.log(arr2[3])
console.log(arr2)

// ARREGLOS DE ARREGLOS

let matrix = [
    [ 1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix)
console.log(matrix[1][1])
console.log(matrix[2][2])

arr2.push(5, 6, 7, 8)
console.log(arr2)

//VErificar si existe un valor 

console.log(arr2.includes(6))
console.log(arr2.includes(9))


// Buscando el indice de un elemento

console.log(arr2.indexOf(5))

console.log(arr2.indexOf(3))

// CREANDO ARREGLOS ESTATICOS

const arrayStatic = Array()

console.log(arrayStatic)

arrayStatic.push('hoal')
console.log(arrayStatic)

arrayStatic.unshift ('hoal')
console.log(arrayStatic)


const arrayStatic2 = Array(6).fill('valor')
console.log(arrayStatic2)

const arrayStatic3 = Array(6).fill(5)
console.log(arrayStatic3)

//COncatenandolos

const arrayStatic4 = arrayStatic2.concat(arrayStatic3)
console.log(arrayStatic4)

console.log(arr2)
const numbers  =  arr2.toString()
console.log(numbers)

// Uso metodo del
console.log(frutas)
delete frutas[3]
console.log(frutas)

frutas[3] = 'maracuya'
console.log(frutas)

// Uso del Splice para remover y agregar

frutas.splice(1,1) // (indice, elemento a borrar desde el índice)
console.log(frutas)
frutas.splice(3, 0, 'mora','guineo', 'pitahaya')
console.log(frutas)
frutas.splice()
console.log(frutas)
// Metodo FOREACH
//frutas.forEach(alert)

