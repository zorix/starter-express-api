const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require('body-parser');

app.get("/", function (req, res) {
    setInterval(() => {
        console.log("/ ping");
    }, 1000);
    console.log("/ Hello World!");
    res.send("/ Hello World!");
});

app.get("/test", function(req, res) {
    setInterval(() => {
        console.log("/test ping");
    }, 1000);
    setTimeout(() => {
        console.log("/test Hello World!");
        res.send("/test Hello World!");
    }, 3100);
});

app.listen(port, function () {
    console.log(`server listening on port ${port}!`);
});

process.on('SIGTERM', () => console.log('Received SIGTERM signal, shutting down gracefully'));
process.on('SIGINT', () => console.log('Received SIGINT signal, shutting down gracefully'));
