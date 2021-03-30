import {postDv} from "../shared/post";

export function insertDataValue(query:string):Promise<any>{
    return postDv(query).then((res)=>{
        console.log(`${res.statusText} > Inserting DV > ${query}`);
    });
}