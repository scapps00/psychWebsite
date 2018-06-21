var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index/html"));
    });

    app.get("/team", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/team.html"));
    });

    app.get("/relationships", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/relationships.html"));
    });

    app.get("/forms", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/forms.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact.html"));
    });

};