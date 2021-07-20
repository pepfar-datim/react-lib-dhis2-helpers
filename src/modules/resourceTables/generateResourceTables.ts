import {postJson} from "../shared/post";

export async function generateResourceTables(){
    await postJson('/resourceTables',{});
}