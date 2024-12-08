let names: string[] = ["Foden", "Duong", "Vinh"];
console.log(names[0]);

//Using generics
let myNames: Array<string> = ["Foden", "Duong", "Vinh"];
let myInfo: Array<any> = ["Foden", 2, true, null, undefined];

//Multi type array
let myNameAndAge: Array<string | number> = ["Foden", 26];
let myInfoDetails: (string | number)[] = ["Foden", 26, "QN City"];
for(let i = 0; i < myInfoDetails.length; i++){
        console.log(myInfoDetails[i]);
}

myInfoDetails.forEach(element => {
    console.log(element);
});

for(let info in myInfoDetails){
    console.log(info); //This will print out the index instead of value
    //To print out value
    console.log(myInfoDetails[info]);
}

for (let element of myInfoDetails) {
    console.log(element);
}