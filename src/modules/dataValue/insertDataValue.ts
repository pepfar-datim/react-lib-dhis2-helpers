import {postDv} from "../shared/post";
import {error, success} from "../shared/print";

export function insertDataValue(query:string):Promise<any>{
    return postDv(query).then((res)=>{
        if (res.ok) success(`Data Value inserted successfully > ${query}`);
    });
}