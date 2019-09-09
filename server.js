
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.use(function (req, res) {
    res.status(302).redirect("https://prateek.engineer");
});
app.listen(5000);
