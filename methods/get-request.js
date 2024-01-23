//GET REQUEST CODE FETCHING THE DATA USING NAME OF THE FOOD
const { json } = require("body-parser");

module.exports = (req, res) => {
    let Burl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let name = decodeURIComponent(req.url.split("/").slice(3).join("/"));

    if (req.url === "/api/data") {
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.write(JSON.stringify(req.data));
        res.end();
    } else if (Burl === "/api/data/") {
        res.setHeader("content-Type", "application/json");
        let filterdata = req.data.filter((data) => {
            return data.name.toLowerCase() === name.toLowerCase();
        });
        if (filterdata.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filterdata));
            res.end();
        } else {
            res.writeHead(404, { "content-Type": "application/json" });
            res.write(JSON.stringify({ title: "DATA FOUND", message: "FOOD TYPE NOT FOUND" }));
            res.end();
        }
    } else {
        res.writeHead(404, { "content-Type": "application/json" });
        res.write(JSON.stringify({ title: "NOT FOUND", message: "Route Not Found" }));
        res.end();
    }
};
/*//GET REQUEST CODE FETCHING THE DATA USING TYPE OF FOOD(VEGETABLE,FRUITS,SEAFOOD) OF THE ELEMENT 
const { json } = require("body-parser");

module.exports = (req,res)=>{
    let Burl = req.url.substring(0,req.url.lastIndexOf("/")+1);
    let name = req.url.split("/")[3];

    
    if(req.url === "/api/data"){
        res.statusCode = 200;
        res.setHeader("content-Type","application/json");
        res.write(JSON.stringify(req.data));
        res.end();
    }else if(Burl=== "/api/data/") {
        res.setHeader("content-Type","application/json");
        let filterdata = req.data.filter((data)=>{
            return data.name.toLowerCase() === name.toLowerCase();
        });
        if(filterdata.length >0){
            res.statusCode = 200;
            res.write(JSON.stringify(filterdata))
            res.end();
        }else{
            res.writeHeader(404,{"content-Type":"application/json"});
            res.write(JSON.stringify({title : "DATA FOUND", message :"FOOD TYPE NOT FOUND"}));
        }
    }
    else{
        res.writeHeader(404,{"content-Type":"application/json"});
        res.write(JSON.stringify({title : "NOT FOUND", message :"Route Not Found"}));
    }
}
*/


/* //GET REQUEST CODE FETCHING THE DATA USING ID OF THE ELEMENT 
const { json } = require("body-parser");

module.exports = (req,res)=>{
    let Burl = req.url.substring(0,req.url.lastIndexOf("/")+1);
    //console.log(Burl);
    let id = req.url.split("/")[3];
    //console.log(id);
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);



    if(req.url === "/api/data"){
        res.statusCode = 200;
        res.setHeader("content-Type","application/json");
        res.write(JSON.stringify(req.data));
        res.end();
    }else if( !v4.test(id)){
        res.writeHeader(400,{"content-Type":"application/json"});
        res.write(JSON.stringify({title : "validation failed", message :"UUID Not Found"}));
    }else if(Burl=== "/api/data/" && v4.test(id)) {
        res.setHeader("content-Type","application/json");
        let filterdata = req.data.filter((data)=>{
            return data.ID === id;
        });
        
        if(filterdata.length >0){
            res.statusCode = 200;
            res.write(JSON.stringify(filterdata))
            res.end();
        }else{
            res.writeHeader(404,{"content-Type":"application/json"});
            res.write(JSON.stringify({title : "not FOUND", message :"data Not Found"}));
        }
    }  
    else{
        res.writeHeader(404,{"content-Type":"application/json"});
        res.write(JSON.stringify({title : "NOT FOUND", message :"Route Not Found"}));
    }
}
*/

