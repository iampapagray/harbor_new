import React, { useEffect, useState } from "react";
import '../styles/MiniGame.css';
import SplashScreen from '../assets/general/Splash.png';
import EnterButton from '../assets/general/WebButtonEnter.png';
import ExploreButton from '../assets/general/WebButtonExplore.png';
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

        // Remove the navbar on initial screen, restored in HarborHandler.js
        var navbar = document.getElementById("navbar-id");
	    navbar.style.display = "none";

        loadScript("embed/Build/Harbor.loader.js");
        loadScript("embed/HarborHandler.js");
        loadScript("embed/HarborSender.js");
        loadScript("embed/HarborConfig.js");
        loadScript("embed/RunScript.js");
    }, []);
	
	const enter_harbor = () => {
		// calls HarborSender.send_enter - to unity(
		window.send_enter();
		
		// scroll to top
		window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
		
		// hide
		document.getElementById("enter_button").style.display = "none";
	};
	
	const explore = () => {
			// scroll to top
		window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
		
		// calls HarborSender.send_explore - to unity(
		window.send_explore();
		
		// enable touches in unity
		document.querySelector("#unity-canvas").style.pointerEvents = "auto";
		document.querySelector("#explore_button").style.display = "none";

        // Hide NavBar
        var navbar = document.getElementById("navbar-id");
        var id = null;
        clearInterval(id);
        id = setInterval(frame, 10);
        var opacity = 1;
        function frame() {
            if (opacity == 0) {
                clearInterval(id);
            } else {
                console.log(opacity);
                opacity = opacity - 0.01;
            }
            navbar.style.opacity = String(opacity);
        }
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
			
			<div className="button_container">
			<img id="enter_button" onClick={enter_harbor} src={EnterButton}/>
			<img id="explore_button" onClick={explore} src={ExploreButton}/>
			</div>
			
            <div className="unity-canvas-container">
                <canvas id="unity-canvas" style={{width: "100%", height: "100%", backgroundImage: `url(${SplashScreen})` }}></canvas>
            </div>
		</div>
    );
}
    
export default MiniGame;