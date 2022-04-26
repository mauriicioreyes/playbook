// Example: Clases y Objetos

// EJEMPLO 1: Crear una clase vacía
class Person {

}

console.log("\nEJEMPLO 1: Crear una clase vacía")
console.log(Person)


// EJEMPLO 2: Crear un objeto a partir de una clase
class Pet {

}
const myPet1 = new Pet() // puedo crear muchos objetos de la clase Pet

console.log("\nEJEMPLO 2: Crear un objeto a partir de una clase")
console.log(myPet1) // un objeto de la clase Pet


// EJEMPLO 3: Instanciar un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects) {
        this.name = name,
        this.age = age,
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const JuanStudent = new Student("Juanito", 12, ["NodeJS", "JavaScript", "Python"])

console.log("\nEJEMPLO 3: Instanciar un objeto con atributos")
console.log(JuanStudent)
console.log(JuanStudent.name)
console.log(JuanStudent['age'])
console.log(JuanStudent['subjects'][0])
console.log(JuanStudent.subjects[1])


// EJEMPLO 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars) {
        this.name = name,
        this.author = author, 
        this.language = language,
        this.stars = stars
    }

    getInfo() { // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
const myRepo = new Repository("LaunchX", "mauriicioreyes", "JavaScript", 20)

console.log("\nEJEMPLO 4: Métodos en los objetos")
console.log(myRepo.getInfo())


// EJEMPLO 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo,
        this.title = title,
        this.lines_changed = lines_changed,
        this.status = "OPEN",
        this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
    }

    getInfo() {
        return `\nThis PR is in the repo: ${this.repo} (status: ${this.status}) and was creaded on ${this.dateCreated}. Message: ${this.title}`
    }
}
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)

console.log("\nEJEMPLO 5: Atributos con valores por default")
console.log(myPR1.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi Segundo PR", 150)
console.log(myPR2.getInfo())


// EJEMPLO 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name,
        this.age = age,
        this.stack = stack,
        this.exercises_completed = 0,
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted () {
        return this.exercises_completed
    }
}
const woopa = new Ajolonauta("Woopa", 1, [])

console.log("\nEJEMPLO 6: Getters para acceder a los atributos del objeto")
console.log(woopa.getExercisesCompleted)


// EJEMPLO 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission) {
        this.name = name,
        this.mission = mission,
        this.students = 0,
        this.lives = 0
    }

    get getStudents() {
        return this.students
    }

    get getLives() {
        return this.lives
    }

    set setStudents(students) {
        this.students = students
    }

    set setLives(lives) {
        this.lives = lives
    }
}
const missionCommanderNode = new MissionCommander("Carlos", "NodeJS")

console.log("\nEJEMPLO 7: Setters para modificar los atributos del objeto")
console.log(missionCommanderNode)
console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives) // 0 por default

// Actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 5

console.log(missionCommanderNode)
console.log(missionCommanderNode.getStudents) // 100 valor modificado
console.log(missionCommanderNode.getLives) // 5 valor modificado


// EJEMPLO 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools() {
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("\nEJEMPLO 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto")

// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())

// Si intentamos instanciar un objeto, no podremos llamar este método static
// const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // is not a function


/* 

HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes

*/

// EJEMPLO 9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack) {
        this.name = name,
        this.mainLang = mainLang,
        this.stack = stack
    }

    get getName() {
        return this.name
    }
}
const mauricioDev = new Developer("Mauricio", "JavaScript", ["mongoDB", "Express", "React", "NodeJS"])

console.log("\nEJEMPLO 9: Herencia entre dos clases")
console.log(mauricioDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase padre (Developer) en la clase definida.
// Podemos definir una clase vacía y reusar todos los componentes de la clase padre

class LaunchXStudent extends Developer {

}
const carlosLaunchXDev = new LaunchXStudent("Carlos", "JavaScript", ["mongoDB", "Express", "React", "NodeJS"])

console.log(carlosLaunchXDev)
console.log(carlosLaunchXDev.getName) // getter de la clase padre reusada en la clase hija


// EJEMPLO 10: Overriding methods
class Explorer {
    constructor(name, username, mission) {
        this.name = name, 
        this.username = username,
        this.mission = mission
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle) {
        super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
        this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
        // nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla.
        
        return `${nameAndUsername}, Ciclo: ${this.cycle}`
    }
}
const viajero1 = new Viajero("Rafael", "LaunchX", "Node JS", "Abril 2022")

console.log("\nEJEMPLO 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija