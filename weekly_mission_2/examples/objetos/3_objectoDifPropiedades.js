// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Crazy",
    age: 999,
    nicknames: [
        "Creizi",
        "Perro peludo",
        "Ratón mayor",
        "Pelos"
    ],
    address: {
        zip_code: 49099,
        street: "La Calle de los Perritos #123",
        city: "Aguascalientes"
    }
}
console.log("\nEjemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3['nicknames'])
console.log(myObject3.nicknames[1])
console.log(myObject3['nicknames'][0])
console.log(myObject3.address)
console.log(myObject3.address.zip_code)
console.log(myObject3['address']['street'])
console.log(myObject3['address']['city'][0])