const fs= require("fs");
const path = require("path");

module.exports=(data)=>{
    console.log("the data to wrtie in file :", data);
    try{
        fs.writeFileSync(
        path.join(__dirname, "..", "data", "data2.json"),
        JSON.stringify(data),
        "utf-8"
        );
    }catch(err){
        console.log(err);
    }
};

