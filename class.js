//class experssion
const Person1= class{
    
}
//class declareation
class Person{
    constructor(name,birthYear){
        this.name=name;
        this.birthYear=birthYear;
    }
    //method write in this area will automatically add to the prototype
    age(){
        console.log(2022-this.birthYear)
    }
    
    static hi(){
        console.log('hi')
    }//this method is like Array.from()
    //this method will not be added into prototype
}
const rahim=new Person('Rahim',1996);
rahim.age();
Person.hi();