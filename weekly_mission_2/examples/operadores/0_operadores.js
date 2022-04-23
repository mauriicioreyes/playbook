// Examples: Operadores

// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9];

console.log("\nEJEMPLO 1: Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))


// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)

console.log("\nEJEMPLO 2: Cálculo de la suma de todos los elementos de la lista")
console.log(sum)


// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

console.log("\nEJEMPLO 3: Imprimiendo la lista de países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase()))


// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*
    Arrow function and explicit return
    const modifiedArray = arr.map((element, index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5, 6, 7];
const numbersSquare = numbers4.map(function(num) { return num * num})
// También puedes escribir la función como fat arrow
const numbersSquareArrow = numbers4.map((num) => { return num * num })

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)
console.log(numbersSquareArrow)


// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toUpperCase())

console.log("\nEjemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas");
console.log(names)
console.log(namesToUpperCase);


// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) => 
    country.toUpperCase().slice(0,3) // el método slice obtiene solo la longitud marcada del string
)

console.log("\nEjemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countries6)
console.log(countriesFirstThreeLetters)


// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es la función
    country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)

console.log("\nEjemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countries7)
console.log(countriesContainingLand)

const countriesEndsBy = countries.filter((country) =>
    country.endsWith('y')
)

console.log("\nEjemplo 7: Países que terminan en and")
console.log(countries7)
console.log(countriesEndsBy)


// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => 
    score.score > 80
)

console.log("\nEjemplo 8: Filtrando elementos por score")
console.log(scores)
console.log(scoresGreaterEighty)


// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5, 10]
const result_of_reduce = numbers9.reduce((acc, element) =>
    acc + element, 0
)

console.log("\nEjemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(numbers9)
console.log(result_of_reduce)


// Ejemplo 10: Uso de every nos ayuda a validar todos los elementos de una lista, si tosos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every

console.log("\nEjemplo 10: Son todos los nombres string: " + areAllStr)
console.log(names10)


// Ejemplo 11: Uso de find para encontrar el primer elemento de la lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log("\nEjemplo 11: Primera edad menor a 20 es: " + age)
console.log(ages)


// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
const score_less_than_80 = scores12.find((user) => user.score > 80)

console.log("\nEjemplo 12. Name score found: " + score_less_than_80.name + "\nScore: " + score_less_than_80.score)
console.log(scores12)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Juanito 25', 'Soy un mensaje', 'A']
const result = names13.findIndex((name) => name.length > 10)

console.log("\nEjemplo 13: Primer elemento cuya palabra sea mayor a 7 está en la posición: " + result)


// Ejemplo 14: Uso de some, este método validará todos los elementos de una lista y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// Lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) => b === false)

console.log("\nEjemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue)
console.log(bools)


// Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']

console.log("\nEjemplo 15: Elementos ordenados usando SORT")
console.log(products)
console.log(products.sort())


// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22},
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("\nEjemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) //sorted ascending