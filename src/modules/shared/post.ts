import fetch from "node-fetch";
import {error} from "./print";
import {getCredentials} from "./credentials";

export function makeUrl(endpoint: string) {
    return `${process.env.DHIS_BASEURL}/api${endpoint}`;
}

let {authorization} = getCredentials();

const processResponse = (type:string)=>async r=>{
    if (!r.ok) {
        let responseBody = '(empty)';
        try {
            let response = JSON.parse(await r.text() as any);
            if (response.message) responseBody = response.message;
        } catch(e){
            responseBody = 'ERROR: Cannot retrieve server response'
        }
        error(
            `Server request failed`,
            `Type:\t  ${type}`,
            `URL:\t  ${r.url}`,
            `Status:\t  ${r.status} (${r.statusText})`,
            `Response: ${responseBody}`
        );
    }
    return r;
}

export function postDv(query:string):Promise<any>{
    return fetch(makeUrl(`/dataValues?${query}`), {
        credentials: 'include',
        headers: {
            'Authorization': authorization
        },
        method: 'POST',
    }).then(processResponse('POST')).catch(e => {
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
    }).then(processResponse(method)).catch(e => {
        throw e;
    });
}

export const postJson = (url: string, body:any)=>sendData('POST', url, body);
export const put = (url: string, body:any)=>sendData('PUT', url, body);
export const patch = (url: string, body:any)=>sendData('PATCH', url, body);