var express = require("express");
var app = express();
var request = require("request");

//Root route
app.get("/results", function(req, res){
    console.log("Results accessed");
    request("http://www.omdbapi.com/?s=indiana&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.send(results["Search"][0]);
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});