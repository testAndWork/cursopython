// FUNCIONES EN JAVASCRIPT

function numCuadrado (  ){
    let n = 3
    console.log(n**2)
}

numCuadrado()

function numCuadrado2(n){
    console.log(n**2)
}

numCuadrado2(7)

function numCuadrado3(n){
    return n**2
}

console.log(numCuadrado3(6))

let square = numCuadrado3(5)

console.log(square)

function printArr(arr){
    console.log(arr)
}

const names = ['Luffy', 'Nami', 'Zoro', 'Sanji', 'Garp', 'Goku', 'Milk']

printArr(names)

function printArr2(arr){
    for(nom of arr){
        console.log('EL nombre es: ',nom)
    }
    console.log(arr)
}
printArr2(names)


//FUNCIONES ANONIMAS
const calculoAnonima = function(){
    console.log('Hola soy una función anónima')
}


calculoAnonima()

const calculoArea = function(base, altura){
    return base * altura
}

console.log('El área de el rectángulo es: ',calculoArea(2,4))


// autoinvocacion de funciones anónimas

let calculo = (function(n){
    console.log(n*n)
})(3)

//TIPO DE ESCRITURA DE FUNCIONES ALTERNATIVAS
// FUNCIONES FLECHA - ARROW FUNCTIONS

//Forma 1
function cuadrado(n){
    return n * n
}

//Forma 2
console.log(cuadrado(2))

const cuadrados = n => { 
    return n * n
} 

console.log(cuadrados(2))

//Forma 3
const cuadro = n => n * n

console.log(cuadro(2))

const printFullName = (fname, lname) => {
    return `${fname} ${lname}`
}

console.log(printFullName('john', 'Snow'))



function sq(n = 2){
    return n * n
}

console.log(sq(3))
