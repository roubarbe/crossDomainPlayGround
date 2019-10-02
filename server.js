/*jslint devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/

console.log("Loading HTTP server (express)...");
const express = require('express');

console.log("HTTP server initialization...");
var app = express();

//Just to ease any HTML-in-a-string buildings
let htmlBuildingBlocks = {
	scriptOpen: "<script type='text/javascript'>",
	scriptClose: "</script>",
	alertBox: function(msg){
		return "alert('"+msg+"');";
	},
	domainChange: function(domain){
		return "document.domain='"+domain+"';";
	},
	consoleLog: function(what){
		return "console.log("+what+");";
	},
	imgTag: function(imgUrl){
		return "<img src='"+imgUrl+"'>";
	},
	newWindow: function(){
		return "window.open();"
	},
	redirectWindow: function(newUrl){
		return "document.location.href ="+newUrl+";"
	}
};

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
	
	let page = 	htmlBuildingBlocks.scriptOpen+
				htmlBuildingBlocks.alertBox(alertMsg)+
				htmlBuildingBlocks.scriptClose;
	
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
	
    let page = htmlBuildingBlocks.imgTag(imgUrl);
	
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


/**
 * This will execute a data gathering script. Must specify a domain to run this on, or else you'll get CORS errors up the wazoo
 * @param domain {string} domain to run script on
 */
app.get('/exploits/dataGather/:domain', function(req,res){
	'use strict';

	let page = "";

	page = 	htmlBuildingBlocks.scriptOpen+
			htmlBuildingBlocks.domainChange(req.params.domain)+
			htmlBuildingBlocks.scriptClose;

	res.send(page);
});



/**
 * This will splurt a page that opens a new window.
 */
app.get('/exploits/newWindow', function(req,res){
	'use strict';

	let page = "";

	page = 	htmlBuildingBlocks.scriptOpen+
			htmlBuildingBlocks.newWindow()+
			htmlBuildingBlocks.scriptClose;

	res.send(page);
});



/**
 * This will redirect the page to the original document's referrer URL (You're the man, now, dog).
 */
app.get('/exploits/redirect', function(req,res){
	'use strict';

	let page = "";

	page = 	htmlBuildingBlocks.scriptOpen+
			htmlBuildingBlocks.redirectWindow()+
			htmlBuildingBlocks.scriptClose;

	res.send(page);
});



// Serving a single example page if no specific URL present
app.use(express.static('./client'));

//Had to use process.env.port for Heroku to run it in whatever port it needs, will default to 21134 if none provided
app.listen(process.env.PORT || 21134, function () {
    "use strict";

	console.log("Simple HTTP Server running on port " + process.env.PORT || 21134);
});