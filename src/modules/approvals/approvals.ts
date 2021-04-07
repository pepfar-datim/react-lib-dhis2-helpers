import {postJson} from "../shared/post";
import {error, success} from "../shared/print";

export type ApprovalQuery = {
    approvals: {aoc:string,ou:string}[],
    pe:string[],
    wf:string[]
}

export function unapproveMechanism(query:ApprovalQuery):Promise<any>{
    return postJson('/dataApprovals/unapprovals',query).then((res)=>{
        let aoc = query.approvals[0].aoc;
        if (!res.ok) error(`Cannot unapprove mechanism ${aoc}`, query);
        else success(`Unapproved mechanism ${aoc}`)
        return res.ok;
    });
}

export async function recallMechToPartner(query:ApprovalQuery):Promise<any>{
    let unapproved:boolean;
    do {
        unapproved = await unapproveMechanism(query)
    } while (unapproved)
    success(`Mechanism ${query.approvals[0].aoc} is at Partner`);
}