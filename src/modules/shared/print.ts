import {red,green} from 'colors/safe';
import {blue} from "colors";

export const line = ()=>{
    let l = '_';
    for (let i=2;i<=process.stdout.columns;i++) l=l+'_';
    console.log(l)
}

export const linedInfo = (msg:string)=>{
    line();
    info(msg);
    line();
}

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

export const info = (message:string)=>console.log(blue(message));