// JavaScript Document

var Hamburger = document.querySelector("nav button");
var MenuOmlaag = document.querySelector("body header nav:nth-of-type(2)");



Hamburger.addEventListener("click", menuTonen);

function menuTonen() {
	Hamburger.classList.toggle("draai");
	MenuOmlaag.classList.toggle("omlaag");
}


