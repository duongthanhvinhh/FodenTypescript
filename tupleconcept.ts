//tuple -> fixed size, order matters
//tuple vs array
//array -> dynamic: more value can be added during runtime
let person: [string, number] = ["Foden", 26];
let personDetails: [string, number, boolean] = ["Foden", 26, true];
console.log(personDetails[2]);

let data : [string, number][] = [["Foden", 26], ["Ronaldo", 40]];
console.log(data[0][0]);