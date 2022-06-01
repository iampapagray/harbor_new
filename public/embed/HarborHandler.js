////////////////////////////////
// All callbacks from Unity could be handled here
///////////////////////////////

// called as general message from Unity
function receiveMessageFromUnity(message) {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert(message);
	}
}


// called when ENTER button (inside canvas) clicked
function onEnterClicked() {
	var audio = document.getElementById("minigame-audio-player");
	audio.play();
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onEnterClicked");
	}

	// hide enter button in case of timeouted transition from intro
	document.getElementById("enter_button").style.display = "none";

	// Allow Home to scroll
	var home = document.getElementById("home-container-id");
    home.style.overflowY = "visible";

	// Restore NavBar
	var navbar = document.getElementById("navbar-id");
	navbar.style.opacity = "0";
	navbar.style.display = "flex";
	var id = null;
	clearInterval(id);
	id = setInterval(frame, 10);
	var opacity = 0;
	function frame() {
		if (opacity == 1) {
			clearInterval(id);
		} else {
			console.log(opacity);
			opacity += 0.01;
		}
		navbar.style.opacity = String(opacity);
	}

}

// called when LEAVE button (inside harbor scene) clicked
function onExitClicked() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onExitClicked");
	}
	// show explore
	exploreButton.style.display = "block";

	// disable touches = enable scrolling
	unityCanvas.style.pointerEvents = "none";
}

// called when harbor scene is loaded
function onHarborSceneLoaded() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onHarborSceneLoaded");
	}
	
	// show explore button
	exploreButton.style.display = "block";
}

// called when icon above building was clicked
function onIconClicked(id) {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onIconClicked:" + id);
	}
}

// called when button inside popu was clicked
function onButtonClicked(id) {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onButtonClicked:" + id);
	}
	window.open(config.buildings[id].URL, "_self");
}

// called when button inside popup was clicked
function onVideoButtonClicked(id) {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onVideoButtonClicked:" + id);
	}
	window.open(config.buildings[id].VideoURL, "_self");
}


// called after camera zoom in animation is finished after clicking on icon
function onIconClickedAnimationFinished(id) {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onIconClickedAnimationFinished:" + id);
	}
}

// called when camera started going back from zoomed state
function onZoomOutStarted() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onZoomOutStarted");
	}
}
// called when camera returned back from zoomed state
function onZoomOutFinished() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onZoomOutFinished");
	}
}
