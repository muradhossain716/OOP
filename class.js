//class experssion
//class declareation
class Person{
    constructor(name,birthYear){
        this.name=name;
        this.birthYear=birthYear;
    }
    age(){
        console.log(2022-this.birthYear)
    }
}
const rahim=new Person('Rahim',1996);
rahim.age();