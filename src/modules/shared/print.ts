import {red,green} from 'colors/safe';

export const exception = (message:string, ...details:any)=>{
    details.forEach(console.log)
    throw new Error(red(message)+'\n\n');
}

export const error = (message:string, ...details:any)=>{
    console.log(red(message));
    details.forEach((d)=>console.log(red(d)));
    console.log('')
}

export const success = (message:string)=>console.log(green(message));