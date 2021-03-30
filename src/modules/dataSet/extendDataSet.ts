import {patch} from "../shared/post";
import {error, success} from "../shared/print";

export async function extendDataSet(dataSetId:string):Promise<any>{
    let body = {openFuturePeriods: 1, expiryDays:240};
    let result = await patch(`/dataSets/${dataSetId}`, body);
    if (!result.ok) error(`DataSet ${dataSetId} extend FAILED`, result)
    else success(`DataSet ${dataSetId} extended`)
}