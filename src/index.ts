let id:number
id = 5
console.log("ID: ", id)

// basic types
let company: string = "neudesic"
let isRunning: boolean = true
let x:any = "anything"
let num: number = 23

let ids: number[]
ids = [1,2,3,4,5]

ids.push(6,7,8)
console.log(ids)

let arr: any[] = [1,2,3, "something", false]

let tup: [string, number, boolean] = ["gamer", 26, true] //tuple
console.log(tup[2])

let people: [string, number, boolean][] = [["gamer", 26, true],["programmer", 21, false],["businessman", 46, false]] // array of tuples
console.log(people[1])
console.log(people[1][0])

// a variable to hold more than on value
let working: number|boolean = true
working = 1

// enums

enum directions {
    north,
    east,
    west,
    south
}

console.log(directions)
console.log(directions.east, directions.west)
console.log(directions[1])

enum movement {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

console.log(movement)
console.log(movement.down)
console.log(movement["down"])

// objects 

const user1: {
    id: number,
    name: string
} = {
    id: 1, 
    name: "user_1"
}
console.log(user1)
console.log(user1.id)
console.log(user1.name)

// better way of creating objects - first create its type and then object

type User = {
    id:number,
    name: string
}

const user: User = {
    id:1,
    name: "user"
}

console.log(user)
console.log(user.id)
console.log(user.name)

// type asssertion - tells compiler that we want to treat an entity
// as a certain type
let cid:any = "1"
let customerId = <number>cid
customerId = 2
console.log(cid, customerId, typeof cid, typeof customerId)

// functions

function addNum(a:number, b:number):number{
    return a+b
}

console.log(addNum(3,5))

function log(message:string | number):void{
    console.log(message)
}

log("my message")

// interfaces
// its like a custom type of specific structure to/of an object.

interface UserInterface {
    readonly id: number,
    name: string,
    age?:number
}

const user2: UserInterface = {
    id: 1,
    name: "user_2",
    age:26
}
const user3: UserInterface = {
    id: 2,
    name: "user_3"
}

console.log(user2)
console.log(user2.id)
console.log(user2.name)
console.log(user2.age)
console.log(typeof user2)

console.log("----------------------------")

console.log(user3)
console.log(user3.id)
console.log(user3.name)
console.log(user3.age == null)

// classes 

class PersonClass{
    private id: number
    name: string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    register():string{
        return `${this.name} is now registered`
    }

    getId():number{
        return this.id
    }

}

const p1 = new PersonClass(1, "person_1")
console.log(p1.register())

// extending a class

class EmployeeClass extends PersonClass{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }

    getEmployeeDetails():object{
        return {
            id: super.getId(),
            name: this.name,
            position: this.position
        }
    }
}

const emp = new EmployeeClass(2, "employee_name", "developer")

console.log(emp.register())
console.log(emp.getEmployeeDetails())

// classes implementing interfaces

interface PersonInterface{
    readonly id: number
    name: string

    register():string
}

class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

const p3 = new Person(3, "person_3")
console.log(p3.register())

// new Array() and concat in array
const a = new Array()
console.log(a)
console.log(typeof a)
a.push(1)
console.log(a)
console.log(typeof a)

const b:number[] = []
console.log(b)
console.log(typeof b)

const c = b.concat([1,2,3,4])
console.log(c,"-c")

// generics
function makeArray<T>(arr:T[]):T[]{
    return new Array().concat(arr)
}

// making array of numbers
const n:number[] = makeArray<number>([1,2,3,4])
console.log(n)
// n.push("2") -> an error

const s: string[] = makeArray<string>(["1", "2", "3","4"])
console.log(s)
// s.push(1) -> an error




















