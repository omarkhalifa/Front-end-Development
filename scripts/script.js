// JavaScript Document

var Hamburger = document.querySelector("nav button:nth-of-type(2)");
var MenuOmlaag = document.querySelector("body header nav:nth-of-type(2)");

var Zoeken = document.querySelector("nav button:first-of-type");
var Textfield = document.querySelector("nav input");


Hamburger.addEventListener("click", menuTonen);

function menuTonen() {
	Hamburger.classList.toggle("draai");
	MenuOmlaag.classList.toggle("omlaag");
}



Zoeken.addEventListener("click", tonen);
function tonen(){
	Zoeken.classList.toggle("tonen");
	Textfield.classList.toggle("tonen");
	
}