// JavaScript Document

var Hamburger = document.querySelector("nav button:nth-of-type(2)");
var MenuOmlaag = document.querySelector("body header nav:nth-of-type(2)");



var Zoeken = document.querySelector("nav button:first-of-type");
var Textfield = document.querySelector("nav input");



var MeerNieuws = document.querySelector("body > button");
var Uitschuiven = document.querySelector("body > section:nth-of-type(2)");

// Einde variabelen


//HamburgerMenu (Beide pagina's)
Hamburger.addEventListener("click", menuTonen);

function menuTonen() {
	Hamburger.classList.toggle("draai");
	MenuOmlaag.classList.toggle("omlaag");
}


// Zoekfunctie (Beide pagina's)
Zoeken.addEventListener("click", tonen);
function tonen(){
	Zoeken.classList.toggle("tonen");
	Textfield.classList.toggle("tonen");
}

// Meer Nieuws Tonen (NIEUWS pagina)
MeerNieuws.addEventListener("click", Uitklappen);
function Uitklappen(){
	MeerNieuws.classList.toggle("uitklappen");
	Uitschuiven.classList.toggle("uitklappen");
}


