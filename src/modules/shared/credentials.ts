import {error} from "./print";

export type Credentials = {
    authorization:string;
    baseUrl:string;
}

const btoa = require('btoa');

let baseUrl = process.env.DHIS_BASEURL as string;
let username = process.env.DHIS_USERNAME;
let password = process.env.DHIS_PASSWORD;

if (!baseUrl||!username||!password) {
    error(`Please specify environment variables: DHIS_BASEURL, DHIS_USERNAME, DHIS_PASSWORD`);
    process.exit(1);
}

let authorization = 'Basic ' + btoa(username + ":" + password);
console.log(`Using ${baseUrl} / ${username}`);

export const getCredentials:()=>Credentials = ()=>({baseUrl, authorization})