const Person={
    calcAge(){
        console.log(2020-this.birthYear)
    },
    personalInfo(name,birthYear){
        this.name=name;
        this.birthYear=birthYear;
    }
///ekhane ja lekha hobe automatically prototype e cole jabe 

}
const steve=Object.create(Person);
console.log(steve)
steve.personalInfo('Steve', 1992)
console.log(steve)
steve.calcAge()