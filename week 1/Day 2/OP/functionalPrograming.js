//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?


// A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//  a way to solve problems by using a programming language.


// As you know, each problem needs a specific approach to its solution. So,
//  we would have a set of paradigms for different sets of problems. As programming
//  languages are a way to solve the problems using the code, they will offer support to these paradigms.



// So, any programming language which offers multiple programming paradigms is
// referred to as a multi-paradigm programming language.Some of the well-known paradigms are mentioned below.


//?--------Object-Oriented Programming Paradigm


//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript,



//?--------Functional Programming Paradigm


//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript


//?--------Callback Functions

// setTimeout(function () {// function
//     console.log("the race is over")
// }, 3000) // a number
// console.log("go")

// function callBack(input) {
//     console.log(input)
// }

// function parentFunction(callBack) {
//     callBack("information from the parent function")

// }
// parentFunction(callBack)

// console.log(typeof (parentFunction))


//?--------The Big Freeze


// const freeze = [1, 2, 3, 4];

// freeze.push(7)
// console.log(freeze)

// // ---- Object.freeze

// const arraywithFreese = Object.freeze([1, 2, 3, 4])
// freeze.push(7)
// console.log(arraywithFreese)

// // ? --- Concat

// var arr1 = [1, 2, 3]
// var arr2 = [4, 5, 6]

// const newArr = arr1.concat(arr2)

// console.log(newArr)


//!-------------------------------Map and Filter
//?-------.map()

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"]

// for (animal of animals) {
//     console.log(animal)
// }

// animals.map(function (oneAnimal) {
//     console.log(oneAnimal)
// })

const newAnim = animals.map((oneAnimal) => {
    return oneAnimal + " is awesome"
})
console.log(newAnim)

var arr2 = [4, 5, 6]

const salaries = arr2.map(val => val * 2)
console.log(salaries)

//?-------.filter()

const filtredAnimals = animals.filter((eachAnimal) => {
    if (eachAnimal.length <= 5) {
        return true
    } else {
        return false
    }
})
// const newfilter = animals.filter((elm) => {
//     return eachAnimal.length <= 5
// })

// console.log(filtredAnimals)


const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//?-------an array of pokémon objects that have more than one type

const newPokemons = pokémon.filter((poke) => {
    return poke.types.length > 1
})


const newPokemons2 = pokémon.filter((poke) => {
    return poke.id >= 99
})
// console.log(newPokemons2)

//?-------an array with just the names of the pokémon

const pokeName = pokémon.map((poke) => {
    return poke.name
})
const pokeNameandID = pokémon.map((poke) => {
    return [poke.name, poke.id]

})

const pokeNameandIDInObjects = pokémon.map((poke) => {
    return { "name": poke.name, "id": poke.id }

})

console.log(pokeNameandIDInObjects)

//?-------an array with just names of pokemon with an id greater than 99
const sum = pokémon.filter((poke) => poke.id > 99).map((poke) => poke.name)

