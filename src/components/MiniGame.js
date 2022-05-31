import React, { useEffect, useState } from "react";
import '../styles/MiniGame.css';
import SplashScreen from '../assets/general/Splash.png';
import Sound from '../assets/general/harbor-soundtrack.mp3';
import ArrowRight from '../assets/home/arrow-right.svg';
import ReactAudioPlayer from 'react-audio-player';


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

    // const inputEl = useRef(null);
    const executeScroll = () => {
        console.log("scroll");
        // const inputEl = useRef(null);
        // inputEl.current.scrollIntoView()
        const roadmap = document.getElementById("roadmap-container-id"); 
        window.scrollTo({
            top: roadmap.offsetTop,
            behavior: "smooth"
        });
    };

    return (
	
		// <Unity className="game-embed" unityContext={unityContext} />
        // <iframe className="game-embed" src="https://cmgeneral.blob.core.windows.net/$web/index.html"></iframe>	
		<div className="minigame-container">
            <div id="unity-loading-bar">
                <div id="unity-progress-bar-empty">
                    <div id="unity-progress-bar-full"></div>
                </div>
            </div>
            <ReactAudioPlayer
                src={Sound}
                muted={false}
                id="minigame-audio-player"
                volume={0.25}
            />
            <div className="unity-canvas-container">
                <canvas id="unity-canvas" style={{width: "100%", height: "100%", backgroundImage: `url(${SplashScreen})` }}></canvas>
            </div>
            <div className="scroll-arrow-container">
                <img className="scroll-arrow" src={ArrowRight} onClick={executeScroll} />
            </div>
		</div>
    );
}
    
export default MiniGame;