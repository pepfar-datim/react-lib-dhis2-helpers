import {get} from "../shared/get";

export async function getLevel3Ou(siteId:string):Promise<string>{
    let response = await get(`/organisationUnits/${siteId}`);
    return response.path.split('/')[3];
}

export async function catOptionToCatOptionCombo(catOptionId:string):Promise<string>{
    let response:any = await get(`/categoryOptionCombos.json?filter=categoryCombo.id:eq:wUpfppgjEza&filter=categoryOptions.id:eq:${catOptionId}`);
    return response.categoryOptionCombos[0].id;
}