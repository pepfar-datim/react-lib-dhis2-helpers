import {makeUrl} from "./post";
import {exception, success} from "./print";
import fetch from "node-fetch";

export function deleteRequest(url:string){
    return fetch(makeUrl(url), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
        },
        method: 'DELETE',
    }).then(async res=>{
        if (!res.ok) exception(`Cannot DELETE ${url} > ${res.message}`, res);
        else success(`DELETE ${url}`);
        return res;
    }).catch(e => {
        throw e;
    });
}