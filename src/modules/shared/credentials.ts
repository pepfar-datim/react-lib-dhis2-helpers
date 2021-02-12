export type Credentials = {
    authorization:string;
    baseUrl:string;
}

const btoa = require('btoa');

let baseUrl = process.env.DHIS_BASEURL as string;
let username = process.env.DHIS_USERNAME;
let password = process.env.DHIS_PASSWORD;

if (!baseUrl||!username||!password) throw Error(`Please specify env variabled: DHIS_BASEURL, *_USERNAME, *_PASSWORD`);

let authorization = 'Basic ' + btoa(username + ":" + password);
console.log(`Using ${baseUrl} / ${username}\n`);

export const getCredentials:()=>Credentials = ()=>({baseUrl, authorization})