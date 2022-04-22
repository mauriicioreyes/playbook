// Example 9: Ejercicio 2

export default class Pokemon {
    constructor (name) {
        this.name = name
    }
    
    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
}