import fetch from "node-fetch";
import {error, success} from "../shared/print";
import {getCredentials} from "../shared/credentials";
import {patch} from "../shared/post";

// let {baseUrl, authorization} = getCredentials();
let futureDate = (new Date()).toISOString().replace(/202./,'2025');

export function extendMechanismCo(id:string):Promise<void>{
    // return fetch(`${baseUrl}/api/categoryOptions/${id}.json`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': authorization
    //     },
    //     body: JSON.stringify({endDate: futureDate})
    // }).then(async (response)=>{
    //     if (response.ok) success(`Mechanism '${id}' extended to ${futureDate}`);
    //     else {
    //         let responseText = await response.text();
    //         error(`Cannot extend mechanism ${id}`,responseText);
    //     }
    // }).catch((err)=>{
    //     error(`Cannot extend mechanism ${id}`);
    // })
    return patch(`/categoryOptions/${id}.json`,{endDate: futureDate})
}