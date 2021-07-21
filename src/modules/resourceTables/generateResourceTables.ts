import {postJson} from "../shared/post";
import {success} from "../shared/print";

export async function generateResourceTables(){
    await postJson('/resourceTables',{});
    success(`Resource table generating triggered. The task will take 10 minutes to complete.`)
}