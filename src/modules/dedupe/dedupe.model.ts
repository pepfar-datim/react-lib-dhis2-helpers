
export type DedupeValue = {
    value: number;
    categoryOption_cp?: string;  // Mechanism
    dataElement_de?: string; // DataElemnt
    categoryOptionCombo_co?: string; // Age Group / Sex Group
    isResolution?: boolean;
}

export type DedupeValueSet = {
    dataSet: string;
    period: string;
    orgUnitId: string;
    dataValues: DedupeValue[];
    categoryOption_cp?: string;  // Mechanism
    dataElement_de?: string; // DataElemnt
    categoryOptionCombo_co?: string; // Age Group / Sex Group
}