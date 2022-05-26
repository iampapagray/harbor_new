var myGameInstance = null;
var config = null;
var showAllCallbacksFromUnityAsAlerts = false;
console.log("RUN SCRIPT");
createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "embed/Build/Harbor_NoCompression_0.2.1.data",
    frameworkUrl: "embed/Build/Harbor_NoCompression_0.2.1.framework.js",
    codeUrl: "embed/Build/Harbor_NoCompression_0.2.1.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Charged Monkey",
    productName: "Harbor WebGL",
    productVersion: "0.2.1",
// matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
// devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
}).then((unityInstance) => {
    myGameInstance = unityInstance;
    configureUnity();
});