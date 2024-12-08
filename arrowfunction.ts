//arrow function -> fat arrow or lambda function like python
let output = () => {
    console.log('Output');
}

let addTwoNumbers = (a: number, b: number): number => {
    return a + b;
}

class Person{
    fristName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number){
        this.fristName = firstName;
        this.lastName = lastName;
        this.age = age;
    } 

    display = () => console.log(`${this.fristName} ${this.lastName} is ${this.age} years old.`);
}
let fperson = new Person('foden', 'duong', 27);
fperson.display();