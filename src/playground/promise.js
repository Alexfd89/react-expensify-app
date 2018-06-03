import { resolve } from "path";
import { rejects } from "assert";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Resloved data');
        reject('Something went wrong');
    },3000);
    
});

console.log('Before');
//console.log when the promise task will done, non-blocking..
promise.then((data) => {
    console.log(data);
}).catch((err) => console.log(err));

console.log('After');