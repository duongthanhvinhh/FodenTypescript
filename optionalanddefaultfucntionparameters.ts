//optional parameters
function getInfo(name: string, age?: number): void{  //age? will make age as optional parameter, and if we use this variable inside the body of function incase you 
                                                    //are not passing it to the function when you call the function, it's value will be undefined
    console.log(`My name is ${name}, I'm ${age} years old.`);
}

getInfo('Foden');

//default parameters
function setDetails(name: string, slogan: string = 'Life is short, don\'t be lazy'): string{
    return `Hello, I'm ${name} with slogan: ${slogan}`
}

console.log(setDetails('Foden', 'No pain no gain'));
console.log(setDetails('Foden'));
//if you are passing undefined value as argument, the default value will be used
console.log(setDetails('Foden', undefined)); //Output is still: Hello, I'm Foden with slogan: Life is short, don't be lazy
