import {red,green} from 'colors/safe';

export const exception = (message:string, ...details:any)=>{
    details.forEach(console.log)
    throw new Error(red(message)+'\n\n');
}

export const error = (message:string, ...details:any)=>{
    details.forEach(console.log)
    console.log(red(message)+'\n\n');
}

export const success = (message:string)=>console.log(green(message));