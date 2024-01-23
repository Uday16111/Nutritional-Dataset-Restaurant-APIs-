    const writeToFile = require("../util/write-to-file");
    module.exports = (req, res) => {
    let Burl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let ID = req.url.split("/")[3];
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (!v4.test(ID)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
        JSON.stringify({
            title: "ValIDation Failed",
            message: "UUID is not valID",
        })
        );
    } else if (Burl === "/api/data/" && v4.test(ID)) {
        const index = req.data.findIndex((data) => {
        return data.ID === ID;
        });
        if (index === -1) {
        res.statusCode = 404;
        res.write(
            JSON.stringify({ title: "Not Found", message: "data not found" })
        );
        res.end();  
        } else {
        req.data.splice(index, 1);
        writeToFile(req.data);
        res.writeHead(204, { "Content-Type": "application/json" });
        res.end(JSON.stringify(req.data));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
    };