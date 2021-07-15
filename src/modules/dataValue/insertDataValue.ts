import {postDv} from "../shared/post";
import {error} from "../shared/print";

export function insertDataValue(query:string):Promise<any>{
    return postDv(query).then((res)=>{
        if (res.ok) console.log(`Data Value inserted successfully > ${query}`);
        // else error(`Data Value insert failed > ${query}`)
    });
}