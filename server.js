/*jslint devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/

console.log("Loading HTTP server (express)...");
const express = require('express');

console.log("HTTP server initialization...");
var app = express();



/**
 * This will generate an empty page with a script tag, which contains an alert with the provided message
 * @param msg {string} message to show in the alert
 */
app.get('/exploits/alert/:msg', function(req,res){
	'use strict';

	let alertMsg;
	// This is just additional protection, who knows what could happen with an empty string
	if(req.params.msg == "" || !req.params.msg){
		alertMsg = "Default message";
	}
	else{
		alertMsg = req.params.msg;
	}
	
	let page = "<script type='text/javascript'>alert('"+alertMsg+"')</script>";
	
	res.send(page);
});



/**
 * This will generate a page with a single img tag, which source is provided
 * @param url {string} URL of the image, please use URL Encoded strings
 */
app.get('/exploits/image/:url', function(req,res){
	'use strict';
    
	let imageUrl;
	// This is just additional protection, who knows what could happen with an empty string
	if(req.params.url == "" || !req.params.url){
		imageUrl = "https%3A%2F%2Fi.ytimg.com%2Fvi%2Fej6gpF4TDnA%2Fmaxresdefault.jpg";
	}
	else{
		imageUrl = req.params.url;
	}
	
    let page = "<img src='"+imageUrl+"'>";
	
	res.send(page);
});



/**
 * This will serve a single css file, which is specified in the query. Will default to blackout.css
 * @param file {string} name of the file
 */
app.get('/exploits/css/:file', function(req,res){
	'use strict';

	if(req.params.file == "blackout"){
		res.sendFile("./css/blackout.css", {root: "./client"});
	}
	else{
		res.sendFile("./css/blackout.css", {root: "./client"});
	}
});



// Serving a single example page if no specific URL present
app.use(express.static('./client'));

//Had to use process.env.port for Heroku to run it in whatever port it needs, will default to 21134 if none provided
app.listen(process.env.PORT || 21134, function () {
    "use strict";
	
	console.log("Simple HTTP Server running on port" + process.env.PORT || 21134);
});