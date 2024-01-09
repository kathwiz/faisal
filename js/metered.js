var personalAR = ["personal-motor.html", "personal-motor", "personal-health.html", "personal-health", "personal-life.html", "personal-life", "personal-home.html", "personal-home", "personal-accident.html", "personal-accident", "personal-travel.html", "personal-travel", "personal-yacht.html", "personal-yacht"];

var corporateAR = ["corporate-group-medical.html", "corporate-group-medical", "corporate-motor.html", "corporate-motor", "corporate-property.html", "corporate-property", "corporate-liability.html", "corporate-liability", "corporate-engineering.html", "corporate-engineering", "corporate-miscellaneous.html", "corporate-miscellaneous"];

copywritefootISH()
function copywritefootISH(){
let d = new Date();     
document.getElementById("ccopynote").innerHTML = d.getFullYear();
}

wotambant()
function wotambant(){
	var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
	// console.log("g", getcoolloc)
    // console.log("c", currento)
	let findpersonal = personalAR.some(sguq => sguq == currento);
	let findcorporate= corporateAR.some(scre => scre == currento);





	if(currento == "index.html" || currento.includes("index")) {
		 document.getElementById("homeInk").classList.add("active");
	}else if(currento == "about-us.html" || currento.includes("about-us")) {
		 document.getElementById("aboutInk").classList.add("active");
	}else if(currento == "contact.html" || currento.includes("contact")) {
		 document.getElementById("contactInk").classList.add("active");
	}else if(findpersonal) {
		document.getElementById("personalInk").classList.add("active");
	}else if(findcorporate){
		document.getElementById("corporateInk").classList.add("active");
	}else{
		document.getElementById("homeInk").classList.add("active");
	}
}