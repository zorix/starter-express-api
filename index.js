const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    setInterval(() => {
        console.log("GET ping");
    }, 1000);
    setTimeout(() => {
        res.send("GET Hello World!");
    }, 3100);
});

app.post("/test", function(req, res) {
    setInterval(() => {
        console.log("POST ping: " + req.body.test);
    }, 1000);
    setTimeout(() => {
        res.send("POST Hello World!");
    }, 3100);
});

app.listen(port, function () {
    console.log(`server listening on port ${port}!`);
});
