import {get} from "../shared/get";
import {put} from "../shared/post";
import {error, success} from "../shared/print";

export interface DataStoreObject {
    [key:string]:{
        [key:string]:{
            [key:string]:any
        }
    }
}

export async function editDataStore(nameSpace:string, key:string, cb:(value:DataStoreObject)=>DataStoreObject):Promise<any>{
    let url:string = `/dataStore/${nameSpace}/${key}`;
    let dataStore:DataStoreObject = await get(url);
    dataStore = cb(dataStore);
    let response = await put(url, dataStore);
    if (!response.ok) error(`DataStore edit ${url} FAILED`, response);
    else success(`DataStore edit ${url} successful`);
}