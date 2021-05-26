import fetch from "node-fetch";
import {error} from "./print";
import {getCredentials} from "./credentials";

export function makeUrl(endpoint: string) {
    return `${process.env.DHIS_BASEURL}/api${endpoint}`;
}

let {baseUrl, authorization} = getCredentials();

export function postDv(query:string):Promise<any>{
    return fetch(makeUrl(`/dataValues?${query}`), {
        credentials: 'include',
        headers: {
            'Authorization': authorization
        },
        method: 'POST',
    }).then(r=>{
        if (!r.ok) {
            error(`DV POST failed ${query}`);
            console.log(r);
        }
        return r;
    }).catch(e => {
        throw e;
    });
}


function sendData(method:string, url:string, body:any):Promise<any>{
    return fetch(makeUrl(url), {
        credentials: 'include',
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: method,
        body: JSON.stringify(body)
    }).then(r=>{
        if (!r.ok) {
            error(`POST Failed ${url}`, body, r);
        }
        return r;
    })
    .catch(e => {
        throw e;
    });
}

export const postJson = (url: string, body:any)=>sendData('POST', url, body);
export const put = (url: string, body:any)=>sendData('PUT', url, body);
export const patch = (url: string, body:any)=>sendData('PATCH', url, body);