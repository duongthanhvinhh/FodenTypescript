
let condition: boolean = true;
if(condition){
    console.log('True');
} else console.log('False');

condition ? 'True' : 'False';

let browserName: string = 'edge';
if(browserName === 'chrome'){
    console.log('chrome');
} else if(browserName === 'firefox'){
    console.log('firefox');
} else console.log('edge');


(browserName === 'chrome') ? console.log('chrome') : (browserName === 'firefox') ? console.log('firefox') : console.log('edge');


