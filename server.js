var express = require("express");
var app = express();

app.use(express.static("public"));

var router = require("./router/router.js")(app);
app.set("views", "./views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("connected " + port + " port");
});