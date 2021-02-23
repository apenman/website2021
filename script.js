test = "hi";
test2 = "woaH";

function clickz() {
	console.log(test);
	test = "yo";
	document.getElementById("showtest").style.color = "black"
}

function clicky() {
	console.log(test2);
	test2 = "yo";
	document.getElementById("showtest2").style.color = "black"
}

function story(obj) {
    console.log(obj.id);
    pair = document.getElementById(obj.id + "-pair");
    if(pair){
        pair.style.visibility = "visible";
    }
    activatePeriod = document.getElementById(obj.id + "-pair-post");
    if(activatePeriod){
        activatePeriod.style.visibility = "visible";
    }
    // obj.id.style.visibility = "visible";
    console.log("here");
}