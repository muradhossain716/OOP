'use strict';
const Person= function(firstName,lastName){
 this.firstName=firstName;
 this.lastName=lastName;
}
const murad= new Person('Murad',1996);
console.log(murad)
//when a constructor function is called with new keywords 4 things happend
/*
1. a new empty object {} is created in constructor function
2. this keyword of constructor function is assigned to {} empty object means this={}

3.{} linked with prototype
4. function automatically return the object{}
 */