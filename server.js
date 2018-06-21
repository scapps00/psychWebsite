//requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initialize app
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));

require ("./routes/routes.js")(app);

//listen
app.listen(port, function() {
    console.log("App lstening on PORT " + port);
});