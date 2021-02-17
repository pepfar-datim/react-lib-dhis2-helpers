import fetch from "node-fetch";
import {error} from "./print";

export function makeUrl(endpoint: string) {
    return `${process.env.DHIS_BASEURL}/api${endpoint}`;
}

export function postDv(query:string){
    return fetch(makeUrl(`/dataValues?${query}`), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
        },
        method: 'POST',
    }).then(r=>{
        if (!r.ok) error(`DV POST failed ${query}`);
        return r;
    }).catch(e => {
        console.log('res')
        throw e;
    });
}

export function postJson(url:string, body:any){
    return fetch(makeUrl(url), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
    }).catch(e => {
        console.log('res')
        throw e;
    });
}