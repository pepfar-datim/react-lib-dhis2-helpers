import {pause} from "@dhis2-app/test-tools";
import {DedupeValue, DedupeValueSet} from "./dedupe.model";
import {insertDataValue} from "../dataValue/insertDataValue";

export function insertDedupe(dedupe:DedupeValueSet){
    dedupe.dataValues.forEach(async (value: DedupeValue) => {
        let query = `de=${dedupe.dataElement_de || value.dataElement_de}&co=${dedupe.categoryOptionCombo_co || value.categoryOptionCombo_co}&ds=${dedupe.dataSet}&ou=${dedupe.orgUnitId}&pe=${dedupe.period}&value=${value.value}&cc=wUpfppgjEza&cp=${dedupe.categoryOption_cp || value.categoryOption_cp}`;
        if (value.isResolution) await pause(5);
        insertDataValue(query);
    })
}

export function insertDedupes(dedupes:DedupeValueSet[]) {
    dedupes.forEach(insertDedupe)
}