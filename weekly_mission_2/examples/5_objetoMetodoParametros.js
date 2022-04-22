// Ejemplo 5: Objeto con método que recibe parámetros

const myPet = {
    name: "Yuri",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
console.log("\nEjemplo 5: Objeto con método que recibe parámetros")
console.log(myPet)
myPet.sayHelloToMyPet('Jacobo')
console.log(myPet.sayHelloToMyPet('Crazy'))