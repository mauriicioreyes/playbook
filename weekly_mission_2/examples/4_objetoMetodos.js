// Ejemplo 4: Objeto con métodos

const pet = {
    name: "Camila",
    // Esta es una función que se guarda como propiedad
    sayHello: function() {
        console.log(`${this.name} te saluda en perruno!`)
    }
}
console.log("\nEjemplo 4: Objeto con métodos")
console.log(pet)
pet.sayHello()
console.log(pet.sayHello())