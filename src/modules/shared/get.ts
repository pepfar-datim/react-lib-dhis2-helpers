import fetch from "node-fetch";
import {makeUrl} from "./post";
import {exception, success} from "./print";

export function get(url:string){
    return fetch(makeUrl(url), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
        },
        method: 'GET',
    }).then(async res=>{
        let response = await res.json();
        if (!res.ok) exception(`Cannot GET ${url} > ${response.message}`, response);
        else success(`GET ${url}`);
        return response;
    }).catch(e => {
        throw e;
    });
}