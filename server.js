/*jslint devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/

console.log("Loading HTTP server (express)...");
const express = require('express');

console.log("HTTP server initialization...");
var app = express();


app.get('/exploits/alert/:msg', function(req,res){
	'use strict';
    let alertMsg;
	
	if(req.params.msg == "" || !req.params.msg){
		alertMsg = "Default message";
	}
	else{
		alertMsg = req.params.msg;
	}
	
	let page = "<script type='text/javascript'>alert('"+alertMsg+"')</script>";
	
	res.send(page);
});

app.get('/exploits/image/:url', function(req,res){
	'use strict';
    
	let imageUrl;
	
	if(req.params.url == "" || !req.params.url){
		imageUrl = "https%3A%2F%2Fi.ytimg.com%2Fvi%2Fej6gpF4TDnA%2Fmaxresdefault.jpg";
	}
	else{
		imageUrl = req.params.url;
	}
	
    let page = "<img src='"+imageUrl+"'>";
	
	res.send(page);
});



app.use(express.static('./client'));

app.listen(process.env.PORT || 21134, function () {
    "use strict";
    
	console.log("Simple HTTP Server running");
});