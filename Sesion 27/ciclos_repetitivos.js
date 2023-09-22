// CICLO FOR

//for (desde ; Hasta;incremento){}

console.log('For en incremento')
for(let i = 0; i <= 5 ; i++){
    console.log(i)
}
console.log('For en decremento')

for(let i = 5; i>=0 ; i-- ){
    console.log(i)
}

for( let i = 0; i <= 10; i++){
    console.log(`${i} X ${i} = ${ i * i}`)
}

let vegetales = ['puerro', 'rábano', 'radicheta', 'remolacha', 'repollo', 'repollitos de Bruselas', 'zanahoria', 'zapallo', 'calabaza', 'banana']

for( let i= 0; i < vegetales.length ;i++){
    console.log(vegetales[i])
}


const numbers = [1,2,3,4,5,6,]

let suma = 0  //acumulador suma

for(let i = 0 ; i < numbers.length ;i++){
    suma = suma + numbers[i]
}

console.log('La suma es: ', suma)
console.log('El promedio es: ', suma / numbers.length )

const vegUpper = []

for(let i = 0 ; i < vegetales.length ; i++){
    vegUpper.push(vegetales[i].toUpperCase())
}

console.log(vegUpper)


//CICLO WHILE

let i = 0
while(i <= 5){
    console.log(i)
    i++
}

i = 0
while(i < vegUpper.length){
    console.log(vegUpper[i])
    i++
}

// CICLO DO WHILE 

i = 0

do {
    console.log(i)
    i++
} while(i <= 5)


i = 0

do {
    console.log(vegUpper[i])
    i++
}while( i < vegUpper.length)


// FOR OF

const number = [1, 2, 3, 4, 5 ,6 ,7 ]

for(const it of number){
    console.log(it)
}

const names = ['Luffy', 'Nami', 'Zoro', 'Sanji', 'Garp', 'Goku', 'Milk']

for(const nombre of names){
    console.log(nombre)
}

for(const nombre of names){
    if(nombre == 'Goku'){
        console.log('Encontre el nombre: ',nombre)
        break
    }
}

for(const nombre of names){
    if(nombre == 'Goku'){
         continue
    }
    console.log('Nombre',nombre)
}