var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

//Results route
app.get("/results", function(req, res){
    console.log("Results accessed");
    request("http://www.omdbapi.com/?s=indiana&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});