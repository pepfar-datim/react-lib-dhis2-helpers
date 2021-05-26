import {postJson} from "../shared/post";

const urls = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004",
    "http://localhost:3005",
    "http://localhost"
]

export function enableCors():Promise<any>{
    return postJson('/configuration/corsWhitelist',urls);
}