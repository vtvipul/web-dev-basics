// good practice is to initialize any variable with const until we are
// sure that we are going to change the values later on

// primitive data types - string, numbers, boolean, null, undefined

const name = "John Doe";
const isHuman = true;
const height = 1.71;
const home = null;
const identity = undefined;

let family;

console.log(typeof name, typeof isHuman, typeof height, typeof home, 
    typeof identity, typeof family);

// string replcement and concatenation

const personName = "John";
const age = 26;

console.log("My name is " + personName + " and my age is "+ age);

// string manipulation

const str = "String numbers boolean null undefined defined";

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.length)
console.log(str.substring(0,6).toUpperCase()) // chaining of methods
console.log(str.split(" "))
console.log(str.indexOf("t"))

// multiline comments

/* this 
is a 
multiline
comment */

// arrays

// declaration method 1
const number = new Array;

// declaration method 2
const num = [1,2,3,4,5];

console.log(num);

// adding elements to the array
num[0]=2;

num.push(4); // to add element in the end

num.unshift(-2); // to add elements in the start

num.pop();
num.pop();
num.pop();

console.log(num);

console.log(Array.isArray(num)); // check if a variable is an array

console.log(num.indexOf(2))

number.push(12,13,14,15)

console.log(number)
console.log(number+num)
const n = number + num // automatically converted to string
console.log(n)
console.log(typeof n)

const a = num.concat(number) // concat method doesnt concat to an array in place but returns two added arrays

console.log("num = ", num)
console.log("number = ", number)
console.log("a = ", a)

// object literals

const person = {
    firstName: "first_name",
    lastName: "last_name",
    age: 26,
    hobbies: ["smoking", "drinking", "video games,"],
    address: {
        street: "sadh nagar",
        locality: "palam colony",
        city: "new delhi",
        state: "delhi",
        country: "india"
    }
};

console.log(person)

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.address)
console.log(person.hobbies)

console.log(person.hobbies[0])
console.log(person.address.city)

// destructuring an object literal

const { firstName, lastName, address: {city}, hobbies } = person;
console.log(firstName, lastName, city, hobbies)

// adding properties to the object literal
person.email = "some@thing.com"
console.log(person)

// converto object literal to json
console.log(JSON.stringify(person))

// array of object literals
const todos = [
    {
        id: 1,
        text: "meeting with sourav",
        isComplete: false
    },
    {
        id: 2,
        text: "learn basic html",
        isComplete: true
    },
    {
        id: 1,
        text: "learn basic javascript",
        isComplete: false
    },
]

console.log(todos)

// loops 
for (let i=0; i < 10; i++){
    console.log(`loop no. ${i}`)
}

let i = 0;
while (i<10){
    console.log(`loop no. ${i}`)
    i++
}

// looping through arrays

// method 1
for (let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}

// method 2
for(let todo of todos){
    console.log(todo.text)
}

console.log("--------------")

// higher order methods
// forEach
todos.forEach(function(todo){
    console.log(todo.text)
})

// map -> returns an array of elements
let td = todos.map(function(todo){
    return todo.text
})

console.log(td)

// chaining forEach and map
i = 1
todos.map(function(todo){
    return todo.text
}).forEach(function(text){
    console.log(`todo ${i}: ${text}`)
    i++
})

console.log("--------------")
// filter
todos.filter(function(todo){
    if (todo.isComplete === false){
        return todo
    }
}).map(function(todo){
    return todo.text
}).forEach(function(text){
    console.log(text)
})

console.log("--------------")

// difference between map and filter and how they can behave the same way

function checkIsComplete(wantedIsComplete){
    return function(todo){
        return todo.isComplete === wantedIsComplete
    }
}

td = todos.filter(checkIsComplete(false))

console.log(td)

// ternary operator

const x = 15
const color = x > 10 ? "red":"blue"

console.log(color)

// switch statement

switch(color){
    case "red":
        console.log("color is red")
        break;
    case "blue":
        console.log("color is blue")
        break
    default:
        console.log("color is unknown")
        break
}

// arrow functions
const addFive = num => num + 5

console.log(addFive(24))

const addNums = (n1, n2) => n1+n2

console.log(addNums(2,5))
console.log("----------------")

// arrwo functions with 
// forEach, map, filter
todos.forEach(todo=>console.log(todo))
console.log("----------------")

// filter todos based on isCompleted = false -> 
// find the texts in them ->
// log those texts

todos.filter(todo=>todo.isComplete === false).forEach(todo=>console.log(todo.text))

// object oriented programming 

// // constructor function

// const Person = function(fname, lname, dob){
//     this.fname = fname
//     this.lname = lname
//     this.dob = new Date(dob)
// }

// // prototype methods

// Person.prototype.getFullName = function(){
//     return `${this.fname} ${this.lname}`
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }


// // instantiate new methods

// const p1 = new Person("John", "Doe", '3/4/1995')
// const p2 = new Person("Jane", "Doe", '3/4/1996')

// console.log(p1.getFullName())
// console.log(p1.getBirthYear())
// console.log(p2.getFullName())
// console.log(p2.getBirthYear())

// Doing the same thing as above but with classes this time
// classes were added to javascript in es6
// classes does the same thing as constructor functions and prototypes under the hood
class Person{
    
    constructor(fname, lname, dob){
        this.fname = fname
        this.lname = lname
        this.dob = new Date(dob)
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

}

p1 = new Person("josh", "teen", "8/7/1988")
p2 = new Person("jyesh", "char", "7/6//1974")

console.log(p1.getFullName())
console.log(p1.getBirthYear())
console.log(p2.getFullName())
console.log(p2.getBirthYear())

// DOM - document object model

// single element selector
const form = document.getElementById("my-form")
console.log(form)

const form1 = document.querySelector(".my-form-class")
console.log(form1)

// checking if object returned from above methods is same and equal
console.log(form === form1)


// multiple element selector
console.log(document.querySelectorAll(".items")[0])

// applying forEach on NodeList
const items = document.querySelectorAll(".item")
items.forEach(item=>console.log(item))

// manipulating dom objects

// removing an element from ui
// const ul = document.querySelector(".items")
// ul.remove()

// chaining methods on dom objects
// ul.lastElementChild.remove()

// assigning values to elements
// ul.firstElementChild.textContent = "item one"
// ul.children[0].innerText = "Item 1"
// ul.children[0].innerHTML = "<h1>Item 1</h1>"

// working with event listeners
// event listeners listens to events happening with
// certain elements
const submit = document.querySelector(".btn")
// submit.addEventListener("click", e=>alert(e))

// submit.addEventListener("mouseover", e => {
//     e.preventDefault()
//     const form = document.querySelector("#my-form")
//     form.style.background = "#ccc"
//     const body = document.querySelector("body")
//     // body.classList.add("bg-dark")
//     document.querySelector(".items").children[1].innerHTML = "<h1>Item 2</h1>"
// })

const users = document.querySelector("#users")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")

submit.addEventListener("click", onSubmit)

function onSubmit(e){
    e.preventDefault()
    if (nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error")
        msg.innerHTML = "<small>Please fill all details</small>"
        setTimeout(()=>msg.remove(), 2000)
    }else{
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
            )
        )
        users.appendChild(li)
        nameInput.value = ""
        emailInput.value = ""
    }
}


































 



