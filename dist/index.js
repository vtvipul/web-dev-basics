"use strict";
let id;
id = 5;
console.log("ID: ", id);
// basic types
let company = "neudesic";
let isRunning = true;
let x = "anything";
let num = 23;
let ids;
ids = [1, 2, 3, 4, 5];
ids.push(6, 7, 8);
console.log(ids);
let arr = [1, 2, 3, "something", false];
let tup = ["gamer", 26, true]; //tuple
console.log(tup[2]);
let people = [["gamer", 26, true], ["programmer", 21, false], ["businessman", 46, false]]; // array of tuples
console.log(people[1]);
console.log(people[1][0]);
// a variable to hold more than on value
let working = true;
working = 1;
// enums
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log(directions);
console.log(directions.east, directions.west);
console.log(directions[1]);
var movement;
(function (movement) {
    movement["up"] = "up";
    movement["down"] = "down";
    movement["left"] = "left";
    movement["right"] = "right";
})(movement || (movement = {}));
console.log(movement);
console.log(movement.down);
console.log(movement["down"]);
// objects 
const user1 = {
    id: 1,
    name: "user_1"
};
console.log(user1);
console.log(user1.id);
console.log(user1.name);
const user = {
    id: 1,
    name: "user"
};
console.log(user);
console.log(user.id);
console.log(user.name);
// type asssertion - tells compiler that we want to treat an entity
// as a certain type
let cid = "1";
let customerId = cid;
customerId = 2;
console.log(cid, customerId, typeof cid, typeof customerId);
// functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(3, 5));
function log(message) {
    console.log(message);
}
log("my message");
const user2 = {
    id: 1,
    name: "user_2",
    age: 26
};
const user3 = {
    id: 2,
    name: "user_3"
};
console.log(user2);
console.log(user2.id);
console.log(user2.name);
console.log(user2.age);
console.log(typeof user2);
console.log("----------------------------");
console.log(user3);
console.log(user3.id);
console.log(user3.name);
console.log(user3.age == null);
// classes 
class PersonClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
    getId() {
        return this.id;
    }
}
const p1 = new PersonClass(1, "person_1");
console.log(p1.register());
// extending a class
class EmployeeClass extends PersonClass {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getEmployeeDetails() {
        return {
            id: super.getId(),
            name: this.name,
            position: this.position
        };
    }
}
const emp = new EmployeeClass(2, "employee_name", "developer");
console.log(emp.register());
console.log(emp.getEmployeeDetails());
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const p3 = new Person(3, "person_3");
console.log(p3.register());
// new Array() and concat in array
const a = new Array();
console.log(a);
console.log(typeof a);
a.push(1);
console.log(a);
console.log(typeof a);
const b = [];
console.log(b);
console.log(typeof b);
const c = b.concat([1, 2, 3, 4]);
console.log(c, "-c");
// generics
function makeArray(arr) {
    return new Array().concat(arr);
}
// making array of numbers
const n = makeArray([1, 2, 3, 4]);
console.log(n);
// n.push("2") -> an error
const s = makeArray(["1", "2", "3", "4"]);
console.log(s);
// s.push(1) -> an error
