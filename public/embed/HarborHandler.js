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
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onEnterClicked");
	}
}

// called when LEAVE button (inside harbor scene) clicked
function onExitClicked() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onExitClicked");
	}
}

// called when harbor scene is loaded
function onHarborSceneLoaded() {
	if (showAllCallbacksFromUnityAsAlerts) {
		alert("onHarborSceneLoaded");
	}
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
