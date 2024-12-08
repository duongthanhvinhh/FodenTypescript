//Typescript is a statically typed language
//Type inference
//Type annotations

let firstName: string = "Foden"; //type annotation - string
let lastName = "Duong"; //This is called Type inference, just assign the value TS will automatically defines the type of variable based on that value
console.log(firstName);
let userInfo = {
    firstName: "Foden",
    lastName: "Duong"
};

let city: null = null;
let cardId: undefined = undefined;
let numer: any = 77;
numer = "Double Seven";

function greeting(message: string): void{
    console.log(message);
}

function doubleNumber(number: number): number{
        return number * number;
}

function returnAny(condition: boolean, number: number, message: string): any{
    condition ? number : message;
}