const { json } = require("body-parser");
const { response, application } = require("express");
const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request")
let data = require("./data/data2.json");
const PORT =  5001;

const server = http.createServer((req,res)=>{
    req.data = data;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case"POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            response.statusCode=404;
            res.setHeader("Content-Type",application/json);
            res.write(JSON.stringify({title : "NOT FOUND", message :"Route Not Found"}));
            res.end();
    }

});

server.listen(PORT,()=>{
    console.log("Server is running on port ${port}");
});