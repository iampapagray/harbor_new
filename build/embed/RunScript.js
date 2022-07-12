var myGameInstance = null;
var config = null;
var showAllCallbacksFromUnityAsAlerts = false;

var progressBarFill = document.querySelector("#unity-progress-bar-fill");
var \ = document.querySelector("#unity-loading-bar");
var enterButton = document.querySelector("#enter_button");
var exploreButton = document.querySelector("#explore_button");
var unityCanvas = document.querySelector("#unity-canvas");


// turn off touches on canvas
unityCanvas.style.pointerEvents = "none";

// var navbar = document.getElementById("navbar-id");
// navbar.style.display = "none";


function animateProgressBar(fromValue, delay, duration) {
	setTimeout(() => {

		const startTime = Date.now();
		const timer = setInterval(() => {
			var progress01 =   fromValue + Math.abs((Date.now() - startTime) / duration) * (100 - fromValue);
			progressBarFill.style.width = progress01+"%";
		}, 10);
		setTimeout(() => { clearInterval(timer); }, duration)
	}, delay);
}

createUnityInstance(unityCanvas, {
    dataUrl: "embed/Build/Harbor.data",
    frameworkUrl: "embed/Build/Harbor.framework.js",
    codeUrl: "embed/Build/Harbor.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Charged Monkey",
    productName: "Harbor WebGL",
    productVersion: "0.2.2",
// matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
// devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.


// use 50% of the progress bar for loading (that's why progress/2)
},  (progress) => { progressBarFill.style.width = (100 * progress/2) + "%";}).then((unityInstance) => {
    myGameInstance = unityInstance;
    configureUnity();
	
	// start showing "fake" progress bar
	loadingBar.style.display = "block"; 
	
	// start from 50% of the loading and fill the rest during duration time
	animateProgressBar(50, 2000, 3000);
});