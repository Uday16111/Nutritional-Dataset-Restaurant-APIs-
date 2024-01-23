const crypto = require("crypto"); // to generate UUID
const requestBodyparser =require("../util/bodyparser");
const writeToFile = require("../util/write-to-file");
module.exports = async(req,res) => {
    if(req.url === "/api/data"){
        try{
            let body =await requestBodyparser(req);
            //console.log("Request Body: ",body);
            body.ID=crypto.randomUUID();
            req.data.push(body);
            writeToFile(req.data);
            res.writeHead(201,{"Content-Type":"application/json"});
            res.end();
        }catch(err){
            console.log(err);
            res.writeHead(400,{"Content-Type":"application/json"});
            res.end(JSON.stringify({ title : "validation failed", message:"Request body not valid"}));
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
      }
};