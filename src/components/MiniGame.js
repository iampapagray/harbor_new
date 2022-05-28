import React, { useEffect, useState } from "react";
import '../styles/MiniGame.css';

var loadScript = function(srcInput) {
    const script = document.createElement("script");
    console.log(srcInput);
    script.src = srcInput;
    script.async = false;
    document.body.appendChild(script);
    return script;
}

const MiniGame = () => {

    useEffect(() => {
        console.log("run scripts");
        loadScript("embed/Build/Harbor.loader.js");
        loadScript("embed/HarborHandler.js");
        loadScript("embed/HarborSender.js");
        loadScript("embed/HarborConfig.js");
        loadScript("embed/RunScript.js");
    }, []);

    return (
        // <Unity className="game-embed" unityContext={unityContext} />
        // <iframe className="game-embed" src="https://cmgeneral.blob.core.windows.net/$web/index.html"></iframe>
        <div className="unity-canvas-container">
            <canvas id="unity-canvas" style={{width: "100%", height: "100%", background: "#231F20"}}></canvas>
        </div>
    );
}
    
export default MiniGame;