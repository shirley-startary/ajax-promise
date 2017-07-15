var express = require("express");
var path = require('path')
var app = express();

app.use("/data", express.static(path.join(__dirname +'/data')));
app.use("/js", express.static(path.join(__dirname+'/js')));
app.use("/assets", express.static(path.join(__dirname+'/assets')));
app.use("/node_modules", express.static(path.join(__dirname+'/node_modules')));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html")
});
app.listen(8000);
