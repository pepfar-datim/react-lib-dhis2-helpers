import fetch from 'node-fetch';
import {getCredentials} from "../shared/credentials";

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
        if (response.ok) console.log(`User '${username}' successfully saved`);
        else throw Error(`Cannot insert user ${username}, status: ${response.statusText}`)
    }).catch((error)=>{
        console.error(error);
        throw Error(`Cannot insert user ${username}`)
    })
}