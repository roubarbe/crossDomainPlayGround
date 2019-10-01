/*jslint devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/

console.log("Loading HTTP server (express)...");
const express = require('express');

console.log("HTTP server initialization...");
var app = express();


/*app.get('/exploits/:type', function(req,res){
	'use strict';
    
    if(req.params.type == "image"){
		
	}
});*/



app.use(express.static('./client'));

app.listen(process.env.PORT || 21134, function () {
    "use strict";
    
	console.log("Simple HTTP Server running");
});