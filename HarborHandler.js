////////////////////////////////
// All callbacks from Unity could be handled here
///////////////////////////////


// called as general message from Unity
function receiveMessageFromUnity(message) {
	//alert(message);
}

// called when ENTER button (inside canvas) clicked
function onEnterClicked() {
	//alert("onEnterClicked");
}

// called when LEAVE button (inside harbor scene) clicked
function onExitClicked() {
	//alert("onExitClicked");
}

// called when harbor scene is loaded
function onHarborSceneLoaded() {
	//alert("onHarborSceneLoaded");
}

// called when icon above building was clicked
function onIconClicked(id) {
	//alert("onIconClicked:" + id);
}

// called when button inside popu was clicked
function onButtonClicked(id) {
	window.open(config.buildings[id].URL);
}

// called after camera zoom in animation is finished after clicking on icon
function onIconClickedAnimationFinished(id) {
	//alert("onIconClickedAnimationFinished:" + id);
}

// called when camera started going back from zoomed state
function onZoomOutStarted() {
	//alert("onZoomOutStarted");
}
// called when camera returned back from zoomed state
function onZoomOutFinished() {
	//alert("onZoomOutFinished");
}