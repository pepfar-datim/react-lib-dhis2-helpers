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
    }).then((response)=>{
        if (response.ok) success(`User '${username}' successfully saved`);
        else {
            error(`Cannot insert user: ${green(username)}`, response);
            throw Error(`Stack trace:\n\n`)
        }
    }).catch((error)=>{
        console.error(error);
        throw Error(`Cannot insert user ${username}`)
    })
}