var express = require("express");
var app = express();
var port = express.env.PORT || 8080;

app.set('view engine', 'ejs');

app.all('/', function(req,res,next){
    console.log("Accessing secret location...");
    next();
});

app.get("/about", function(req,res){
    var title = "About Page";
    res.render("pages/about", {title: title});
});

app.get("/", function(req,res){
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    res.render("pages/index", {drinks:drinks});
});
app.get("/users", function(req,res){
    res.send("Get request for all users");
});
app.post("/", function(req,res){
    res.send("Posted!");
});

app.listen(port);