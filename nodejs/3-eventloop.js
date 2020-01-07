let events = require('events');
var eventEmitter = new events.EventEmitter();
//  eventEmitter.on("onReportGenerdated",(data)=>{
//      console.log("inside report generated");
//      console.log(data);

//  });
//  console.log("before last line");
//  eventEmitter.emit("onReportGenerdated","data");
//  console.log("program ended")

eventEmitter.on("onLoadingDashboard",()=>{
    console.log("pls wait while loading");
});
eventEmitter.on("onSuccessfulLogin",()=>{
         console.log("logged in successfull");
        

         eventEmitter.emit("onLoadingDashboard");
});
 eventEmitter.emit("onSuccessfulLogin");
    
   
   
    


