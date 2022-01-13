import fetch from 'node-fetch';
import {getCredentials} from "../shared/credentials";
import {error, success} from "../shared/print";
import {green} from "colors/safe";

let {baseUrl, authorization} = getCredentials();

export function insertUser(userObject:any):Promise<any>{
    let username = userObject.userCredentials.username;
    userObject.userCredentials.password = 'Cypress1!';
    return fetch(baseUrl + '/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(userObject)
    }).then(async (response)=>{
        if (!response.ok) return error(`Cannot insert user ${username}`, response.statusText);
        let jsonResp:any = await response.json();
        if (!jsonResp || !jsonResp.status || !jsonResp.stats) return error(`Cannot insert user ${username}`);
        if (jsonResp.status==='ERROR' || jsonResp.stats.ignored!==0) {
            error(`Cannot insert user ${username}`);
            return error(jsonResp.typeReports[0].objectReports[0].errorReports[0].message)
        }
        success(`User '${username}' successfully saved`);
        return response;
    }).catch((error)=>{
        console.error(error);
        throw Error(`Cannot insert user ${username}`)
    })
}