export class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
 export   function printName(user) {
        console.log(`user name is ${user.name}`)
    }
export function printAge(user){
    console.log(`user is ${user.age} years old`)
}
console.log(11)