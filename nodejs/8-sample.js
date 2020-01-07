let fs = require('fs');
let events = require('events');
var eventEmitter = new events.EventEmitter();

let content = 'nodejs is awesome';

eventEmitter.on("onFileWritingSuccess",()=>{
    fs.readFile("example.txt",(err,doc) =>
    {
        if(!err){
            console.log(doc.toString());
        }
    });
});
fs.writeFile('example.txt', content,(err) =>
{
    if(!err){
        console.log("file writing is over");
        eventEmitter.emit("onFileWritingSuccess");
    }
});

