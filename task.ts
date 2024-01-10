import { createReadStream } from "fs";

const fs = require('fs');

function helper(arr: string[]): number {
    let answer: number = 0;
    for(let i:number = 0; i < arr.length; i++){
        const cur: string = arr[i];
        let num: string = "";
        for(let j: number = 0; j < cur.length; j++){
            if(cur[j] >= '0' && cur[j] <= '9'){
                num += cur[j];
                break;
            }
        }
        for(let j: number = cur.length - 1; j >= 0; j--){
            if(cur[j] >= '0' && cur[j] <= '9'){
                num += cur[j];
                break;
            }
        }
        answer += Number(num);
    }

    return answer;
}


fs.readFile('input.txt', (err: object, data : object) => {
    if(err){
        console.error(err);
    }
    const data_str: string = data.toString();
    const arr: string[] = data_str.split('\n');
    console.log(helper(arr));
})