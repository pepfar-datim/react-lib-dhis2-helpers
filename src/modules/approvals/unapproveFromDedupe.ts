import {DedupeValueSet} from "../dedupe/dedupe.model";
import {catOptionToCatOptionCombo, getLevel3Ou} from "./getApprovalsData";
import {recallMechToPartner} from "./approvals";

export function unapproveFromDedupe(dedupe:DedupeValueSet) {
    dedupe.dataValues.forEach(async dv => {
        let ou = await getLevel3Ou(dedupe.orgUnitId);
        let aoc = await catOptionToCatOptionCombo(dv.categoryOption_cp || dedupe.categoryOption_cp);
        const query = {approvals: [{aoc: aoc, ou: ou}], pe: [dedupe.period], wf: ['RwNpkAM7Hw7']};
        recallMechToPartner(query);
    });
}