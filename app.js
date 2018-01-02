var express = require("express");

var app = express();

var animals = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
};

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignmet!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var say = animals[animal];
    res.send("The " + animal + " says " + say );
});


app.get("/repeat/:word/:num", function(req, res){
    var num = Number(req.params.num);
    var word = req.params.word;
    var output = "";
    for (var i = 0; i < num; i++) {
        output += word + " ";
    }
    res.send(output);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("server started");
});