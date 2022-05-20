// const Person=function(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
// }
// Person.prototype.calcAge=function(){
//     console.log(2022-this.birthYear)
// }

// const Student=function(firstName,birthYear,lastName){
//     Person.call(this,firstName,birthYear)
//     // this.firstName=firstName;
//     // this.birthYear=birthYear;
//     this.lastName=lastName;
// }
// Student.prototype=Object.create(Person.prototype)
// Student.prototype.name=function(){
//     console.log(this.firstName+this.lastName)
// }
// const mike=new Student('Mike',2000,'Leopard')
// console.log(mike)



// // console.dir(mike)
// mike.name()
// mike.calcAge()



const Person=function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
}
Person.prototype.calcAge=function(){
    console.log(2022-this.birthYear)
}

const Student=function(firstName,birthYear,lastName){
    Person.call(this,firstName,birthYear)
    this.lastName=lastName;
}
Student.prototype=Object.create(Person.prototype)
//this should be before any prototype and any instance(mike) because otherwise it'll overwrite the property
const mike=new Student('Mike',2000,'Leopard')
Student.prototype.fullName=function(){
    console.log(this.firstName+this.lastName)
}
mike.fullName()