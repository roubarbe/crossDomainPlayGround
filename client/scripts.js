/*jslint browser: true, devel: true, white: true, eqeq: true, plusplus: true, sloppy: true, vars: true*/



/**
	Will show an alert with the name of the element passed to the function
	@param test {string} Passed to the function, usually is an element's name or value
*/
function clickTest(test){
	alert(test+" was clicked!");
}


/**
	Returns an H1 element with a specified text.
	@param elementText {string} text to show inside the H1
	@return element {object}
*/
function splurtH1(elementText){
	var element = document.createElement("h1");
	
	if(elementText){
		element.innerHTML = elementText;
	}
	else{
		element.innerHTML = "Default";
	}
	
	return element;
}