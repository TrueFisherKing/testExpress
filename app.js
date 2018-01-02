var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/repeat/:word/:id", function(req, res){
  var word = req.params.word;
  var num = Number( req.params.id );
  var result = "";
  for (var i = 1; i <= num; i++){
    result += word + " " + i + ": ";
  }
  res.send(result);
});

app.get("*", function(req, res){
  res.send("Sorry, the page you are looking for does not exist.");
});

app.listen(3000, function(){
  console.log("Server Started");
});
