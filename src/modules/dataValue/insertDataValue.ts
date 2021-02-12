import fetch from "node-fetch";

function url(endpoint: string) {
    return `${process.env.DHIS_BASEURL}/api${endpoint}`;
}

export function insertDataValue(query):Promise<any>{
    return fetch(url('/dataValues?' + query), {
        credentials: 'include',
        headers: {
            'Authorization': 'Basic dGVzdC1kZS1zdXBlckFkbWluOkN5cHJlc3MxIQ==',
        },
        method: 'POST',
    }).then(res => {
        console.log(`${res.statusText} > Inserting DV > ${query}`);
    }).catch(e => {
        throw e;
    })
}