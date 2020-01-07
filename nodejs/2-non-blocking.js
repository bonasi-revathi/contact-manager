var fs = require("fs");
fs.readFile('dummy.txt',(err,data) => {
    if(!err){
        console.log(data.toString());
    }else {
        console.log(err);
    }
});
console.log("=======program end========");