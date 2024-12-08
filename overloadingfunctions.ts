//Typescript provides the concept of function overloading
//You can have multiple function
//1. with the same name
//2. but different parameter types and return type
//3. however the number of parameters should be the same


//The block of code are commented out below will not compiled because of duplicating method
// function add(a: string, b: string): string{
//     return `${a}${b}`;
// }

// function add(a: number, b: number): number{
//     return a + b;
// }

//To do overloading function in Typescript
//1. Provide the declaration of methods
function add(a: string, b: string): string;
function add(a: number, b: number): number;
//2. Implement this only once
function add(a: any, b: any): any{
    return a + b;
}