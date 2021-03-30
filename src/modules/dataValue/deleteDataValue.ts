import {deleteRequest} from "../shared/delete";

export function deleteDataValue(query:string):Promise<any>{
    return deleteRequest(`/dataValues?${query}`);
}