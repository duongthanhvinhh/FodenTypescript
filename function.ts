function getMyInfo(name: string, age: number): any{
    return {
        name: name,
        age: age,
        isYoung: age < 30
    }
}
let foden: any = getMyInfo('Foden Duong', 27);
console.log(foden);


//anonymous function: without name function -- store in a variable
//call it using the variable name only
let helloTs = function(){
    console.log('Hello Typescript!');
}
helloTs();

let sum = function(x: number, y: number): number{
    return x + y;
}
console.log('Total is: ' + sum(2, 7));
