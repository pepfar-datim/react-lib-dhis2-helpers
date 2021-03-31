import fetch from "node-fetch";
import {error} from "./print";

export function makeUrl(endpoint: string) {
    return `${process.env.DHIS_BASEURL}/api${endpoint}`;
}

export function postDv(query:string):Promise<any>{
    return fetch(makeUrl(`/dataValues?${query}`), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
        },
        method: 'POST',
    }).then(r=>{
        if (!r.ok) {
            error(`DV POST failed ${query}`);
            console.log(r);
        }
        return r;
    }).catch(e => {
        console.log('res')
        throw e;
    });
}


function sendData(method:string, url:string, body:any):Promise<any>{
    return fetch(makeUrl(url), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
            'Content-type': 'application/json'
        },
        method: method,
        body: JSON.stringify(body)
    }).catch(e => {
        console.log('res')
        throw e;
    });
}

export const postJson = (url: string, body:any)=>sendData('POST', url, body);
export const put = (url: string, body:any)=>sendData('PUT', url, body);
export const patch = (url: string, body:any)=>sendData('PATCH', url, body);