// Examples: Objetos

console.log("\nObjetos")

// Ejemplo 1: Crear un objeto
const myObject = {} // Esto es un objeto vacío
console.log("\nEjemplo 1: Crear un objeto vacío")
console.log(myObject)

// Ejemplo 2: Crear un objeto con propiedades
const myObject2 = {
    name: "Mauricio",
    age: "25"
}
console.log("\nEjemplo 2: Crear un objeto con propiedades")
console.log(myObject2)

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Crazy",
    age: 1000,
    nicknames: [
        "La Creisi",
        "Creisi",
        "Perro peludo"
    ],
    address: {
        zip_code: 40490,
        street: "Miguel Leandro Guerra 89",
        city: "Lagos de Moreno"
    }
}
console.log("\nEjemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])
console.log(myObject3.nicknames[1])
console.log(myObject3['nicknames'][2])

// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tomasa",
    // Esta es una función que se guarda como propiedad
    sayHello: function() {
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en perruno!`)
    }
}
console.log("\nEjemplo 4: Objeto con métodos")
console.log(pet)
pet.sayHello()
console.log(pet.sayHello())

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Sandy",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
console.log("\nEjemplo 5: Objeto con método que recibe parámetros")
console.log(myPet)
myPet.sayHelloToMyPet('Emilio')