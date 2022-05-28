var myGameInstance = null;
var config = null;
var showAllCallbacksFromUnityAsAlerts = false;

var progressBarFull = document.querySelector("#unity-progress-bar-full");
var loadingBar = document.querySelector("#unity-loading-bar");
loadingBar.style.display = "block";

console.log("RUN SCRIPT");
createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "embed/Build/Harbor.data",
    frameworkUrl: "embed/Build/Harbor.framework.js",
    codeUrl: "embed/Build/Harbor.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Charged Monkey",
    productName: "Harbor WebGL",
    productVersion: "0.2.2",
// matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
// devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
},  (p) => { progressBarFull.style.width = 100 * p + "%";}).then((unityInstance) => {
    myGameInstance = unityInstance;
	loadingBar.style.display = "none";
    configureUnity();
});