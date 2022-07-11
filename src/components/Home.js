import React, { useEffect } from "react";

import MiniGame from './MiniGame.js';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';

import ArrowLeft from '../assets/home/arrow-left.svg';
import ArrowRight from '../assets/home/arrow-right.svg';

import Emporea from '../assets/home/experience/experience-emporea.png';
import Neemo from '../assets/home/experience/experience-neemo.png';
import TrainStation from '../assets/home/experience/experience-train-station.png';
import StarWars from '../assets/home/experience/experience-star-wars.png';
import ToyStory from '../assets/home/experience/experience-toy-story.png';


import LogoWhite from "../assets/general/HarborLogoWhite.svg";
import LogoText from "../assets/general/HarborLogoTextWhite.svg";

import FooterNew from "./FooterNew.js";
import UpcomingGames from "./UpcomingGames.js";
import Roadmap from "./Roadmap.js";
import Blockchain from "./Blockchain.js";
import Vision from "./Vision.js";
import CoreTeam from "./CoreTeam.js";
import Brands from "./Brands.js";
import Experience from "./Experience.js";

// var experienceStartIndex = 0;

const Home = () => {

    // const logoPulse = () => {
    //     const elem = document.getElementById("home-overlay-icon-container");
    
    //     var id = null;
    //     var opacity = 0.0;
    //     elem.style.opacity = opacity;
    //     var increase = true;

    //     // clearInterval(id);
    //     id = setInterval(frame, 10);
    //     function frame() {
    //         if (opacity > 1) {
    //             opacity = 1;
    //             increase = false;
    //         } else if (opacity < 0) {
    //             opacity = 0;
    //             increase = true;
    //         } else {
    //             if (increase) {
    //                 opacity = opacity + 0.01;
    //             } else {
    //                 opacity = opacity - 0.01;
    //             }
    //         }
    //         elem.style.opacity = opacity;
    //     }
    // }

    // useEffect(() => {
        // logoPulse();
       // // window.addEventListener('load', (event) => {
       // //     console.log("PAGE LOADED");
            // setTimeout(() => {
            //     const elem = document.getElementById("home-overlay-id");
            //     var id = null;
            //     elem.style.opacity = 1;
            //     console.log("initial opacity ", elem.style.opacity);
            //     var opacity = parseFloat(elem.style.opacity);

            //     // clearInterval(id);
            //     id = setInterval(frame, 10);
            //     function frame() {
            //         if (opacity <= 0) {
            //             opacity = 0;
            //             elem.style.display = "none";
            //             clearInterval(id);
            //         } else {
            //             opacity = opacity - 0.01;
            //         }
            //         elem.style.opacity = opacity;
            //     }
            // }, 3000);
        // });
    // }, []);
      
    return (
      <div className="home-container " id="home-container-id">
        {/* <div className="home-overlay" id="home-overlay-id">
          <div
            className="home-overlay-icon-container"
            id="home-overlay-icon-container"
          >
            <img
              alt=""
              src={LogoWhite}
              className="d-inline-block align-top harbor-logo-img-home"
            />{" "}
            <img
              alt=""
              src={LogoText}
              className="d-inline-block align-top harbor-logo-text-home"
            />{" "}
          </div>
        </div> */}
        <MiniGame />
        <Blockchain />
        <Vision />
        <CoreTeam />
        <Brands />
        <Experience />
        <UpcomingGames />
        <Roadmap />
        <FooterNew />
      </div>
    );
}
    
export default Home;