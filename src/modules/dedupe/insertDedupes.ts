import {pause} from "@dhis2-app/test-tools";
import {DedupeValue, DedupeValueSet} from "./dedupe.model";
import {insertDataValue} from "../dataValue/insertDataValue";


export function insertDedupes(dedupes:DedupeValueSet[]) {
    dedupes.forEach((valueSet: DedupeValueSet) => {
        valueSet.dataValues.forEach(async (value: DedupeValue) => {
            let query = `de=${valueSet.dataElement_de || value.dataElement_de}&co=${valueSet.categoryOptionCombo_co || value.categoryOptionCombo_co}&ds=${valueSet.dataSet}&ou=${valueSet.orgUnitId}&pe=${valueSet.period}&value=${value.value}&cc=wUpfppgjEza&cp=${valueSet.categoryOption_cp || value.categoryOption_cp}`;
            if (value.isResolution) await pause(5);
            insertDataValue(query);
        })
    })
}