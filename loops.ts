for(let i = 0; i <= 10; i++){
    console.log(i);
}

let numbers: number[] = [3, 2, 6, 65];
for(let number of numbers){
    console.log(number); //will print out the value if it was a for of
}

for(let index in numbers){
    console.log(index); //will print out the index if it was a for in   
}

let myFullName: string = "Duong Thanh Vinh";
for(let c of myFullName){
    console.log(c);
}

let p: number = 1;
while(p < 10){
    console.log(`Current number is ${p}`);
    p++;
}

//use cases for while: when number of iterations are not fixed
//Infinite scrolling: loading icon, ...
//wait for page loading
//wait for element on the page
//calendar handling
//Go to next/previous page to find an table record in pagination handling

//use cases for loop: when number of iterations are fixed
//dropdown e.g Jan to Dec (1 to 12)

let c: number = 2;
do{
    console.log(c);
    c--;
}
while(c < 2 && c >= 0)