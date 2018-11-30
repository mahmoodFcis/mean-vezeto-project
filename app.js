const log = require("./logger")
const fs = require("fs");

var logMessage = log.warning("error");
 

if (fs.existsSync("output.txt")) {
    console.log("file Exists");
    
    fs.appendFileSync("./output.txt",logMessage, function (err) {
      
      });
      
    
} else {
    fs.writeFileSync("output.txt")
    console.log("file output.txt created");
    fs.appendFileSync("./output.txt",logMessage, function (err) {
        
      });
}