import {spawn} from "child_process";
import {info, line, linedInfo} from "../shared/print";

enum FileType {
    node='node',
    python='python'
}

async function processFile(type: FileType, file:string){
    linedInfo(`${file} started`);
    let loadProcess;
    switch(type){
        case FileType.node:
            loadProcess = spawn('ts-node', ['--skip-project', 'testData/' + file]); break;
        case FileType.python:
            loadProcess = spawn('python3', ['testData/' + file]); break;
    }

    loadProcess.stdout.on('data', (data) => {
        console.log(`${file}: ${data}`.replace(/\n/,''));
    });
    loadProcess.stderr.on('data', (data) => {
        console.error(`${file}: ${data}`);
    });
    await new Promise((resolve)=>{
        loadProcess.on('close', (code) => {
            info(`${file} ended\n`);
            resolve();
        });
    })
}

export async function testDataLoader(files:string[]){
    // files.forEach(async file=>{
    //     if (file.includes('.ts')) return await processFile(FileType.node, file);
    //     if (file.includes('.py')) return await processFile(FileType.python, file);
    //     throw new Error(`Unknown file type ${file}`);
    // });
    for(var i=0;i<files.length;i++){
        let file = files[i];
        if (file.includes('.ts')) await processFile(FileType.node, file);
        else if (file.includes('.py')) await processFile(FileType.python, file);
        else throw new Error(`Unknown file type ${file}`);
    }
}