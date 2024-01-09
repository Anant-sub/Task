const fs =  require("fs");
fs.readFile("input.txt", (err,data) => {
    if(err){
        console.err(err);
    }
    var answer = 0;
    const data_str = data.toString();
    const arr = data_str.split('\n');
    for(var i = 0; i < arr.length; i++){
    const cur = arr[i];
    var num = "";
    for(var j = 0; j < cur.length; j++){
        if(cur[j] >= '0' && cur[j] <= '9'){
            num += cur[j];
            break;
        }
    }
    for(var j = cur.length-1; j >= 0; j--){
        if(cur[j] >= '0' && cur[j] <= '9'){
            num += cur[j];
            break;
        }
    }
    answer += Number(num);
    }
    console.log(answer);
});
