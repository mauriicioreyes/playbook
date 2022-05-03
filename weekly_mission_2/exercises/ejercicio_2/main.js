const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "JavaScript",
            "C#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "JavaScript"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]


// https://parzibyte.me/blog/2019/09/24/foreach-javascript-recorrer-arreglos/
console.log("\n1. Imprimir nombre de cada explorer")
explorers.forEach(explorer => console.log(explorer.name))
// console.log(explorers[0]['name'])


console.log("\n2. Imprimir el stack de cada explorer")
explorers.forEach(explorer => console.log(explorer.name + ": " + explorer.stack))


console.log("\n3. Crear una nueva lista de stacks de cada explorer (MAP)")
const stackExplorer = explorers.map((explorer) => {
    return explorer.stack})
console.log(stackExplorer)


console.log("\n4. Obtener lista de explorers 'js' (FILTER)")
const stackJS = stackExplorer.filter((explorer) => explorer.includes('JavaScript'))
console.log(stackJS)