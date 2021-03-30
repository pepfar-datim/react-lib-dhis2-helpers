import {DedupeValue, DedupeValueSet} from "./dedupe.model";
import {deleteDataValue} from "../dataValue/deleteDataValue";

export function deleteDedupe(dedupe:DedupeValueSet):Promise<any>{
    return Promise.all(dedupe.dataValues.map(async (value: DedupeValue) => {
        let query = `de=${dedupe.dataElement_de || value.dataElement_de}&co=${dedupe.categoryOptionCombo_co || value.categoryOptionCombo_co}&ds=${dedupe.dataSet}&ou=${dedupe.orgUnitId}&pe=${dedupe.period}&value=${value.value}&cc=wUpfppgjEza&cp=${dedupe.categoryOption_cp || value.categoryOption_cp}`;
        return deleteDataValue(query);
    }))
}