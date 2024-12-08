let undefinedOnly: void = undefined; //Only undefined value is accepted for a variable type void
function greetingMessage(message: string): void{
    console.log(message); //function type void cannot return anything, only be able to print out something
}


//never
let neverVariableCannotHaveValue: never; //cannot declare a value for variable type never, it will be never having a value
function throwError(message: string): never{ //function never type cannot return or print anything, commonly used to throw an error/exception
    throw new Error('message');
}