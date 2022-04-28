// Modelado de objetos
// EJERCICIO 1.1

const repo = {
    name : "LaunchX",
    author: "mauriicioreyes",
    language: "JavaScript",
    numberOfCommits: 30,
    stars: 100,
    forks: 50,
    issues_open: 10,
    issues_close: 15,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("\nEJERCICIO 1.1 - repo")
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


// EJERCICIO 1.2
const issue = {
    title: "Error en conexión a BD",
    repositoryNameAssociaded: "repoPro",
    status: "Open",
    numberOfComments: 99,
    labels: ["Bugs", "porReparar", "ayDiomio"],
    author: "carlosgarcia",
    dateCreated: Date(),
    lastUpdated: Date(),
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, Author: ${this.author}`
    },
    getGeneralInfo: function() {
        return `issue: ${this.title}, author: ${this.author}, name asociaded: ${this.repositoryNameAssociaded}, number_of_comments: ${this.numberOfComments}, labels: ${this.labels}, dateCreated: ${this.dateCreated}, lastUpdate: ${this.lastUpdated}`
    }
}

console.log("\nEJERCICIO 1.2 - issue")
// console.log(issue)
console.log(issue.getTitleAndAuthor())
// console.log(issue.getGeneralInfo())
console.log("El issue: '" + issue.title + "' creado por " + issue.author + " debe resolverse, ya que afecta al repositorio " + issue.repositoryNameAssociaded)


// EJERCICIO 1.3
const pullRequest = {
    title: "Cambios en titulo",
    branchName: "development",
    dateCreated: new Date(),
    status: "Open",
    repositoryNameAssociated: "LaunchX Package",
    getStatus: function() {
        return this.status
    },
    getTitleAndAutor: function(author) {
        return `title: ${this.title}, author: ${author}`
    }
}

console.log("\nEJERCICIO 1.3 - pullRequest")
// console.log(pullRequest)
console.log("Pull Request: " + pullRequest.getTitleAndAutor("mauricioreyes") + ", Status: " + pullRequest.getStatus())


// EJERCICIO 1.4 - Twitter: user, trending_topic, hashtag


// EJERCICIO 1.5 - Facebook: user, post, biography


// EJERCICIO 1.6 - Uber: profile, travel