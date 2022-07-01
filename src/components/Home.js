import React, { useEffect, useState } from "react";

import MiniGame from './MiniGame.js';
import Footer from './Footer.js';
import { Button } from 'react-bootstrap';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';

import ArrowLeft from '../assets/home/arrow-left.svg';
import ArrowRight from '../assets/home/arrow-right.svg';
import Team from '../assets/home/team.png';
import Experience from '../assets/home/experience.png';

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

var experienceStartIndex = 0;

const Home = () => {

    const logoPulse = () => {
        const elem = document.getElementById("home-overlay-icon-container");
    
        var id = null;
        var opacity = 0.0;
        elem.style.opacity = opacity;
        var increase = true;

        // clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (opacity > 1) {
                opacity = 1;
                increase = false;
            } else if (opacity < 0) {
                opacity = 0;
                increase = true;
            } else {
                if (increase) {
                    opacity = opacity + 0.01;
                } else {
                    opacity = opacity - 0.01;
                }
            }
            elem.style.opacity = opacity;
        }
    }

    useEffect(() => {
        logoPulse();
       // // window.addEventListener('load', (event) => {
       // //     console.log("PAGE LOADED");
            setTimeout(() => {
                const elem = document.getElementById("home-overlay-id");
                var id = null;
                elem.style.opacity = 1;
                console.log("initial opacity ", elem.style.opacity);
                var opacity = parseFloat(elem.style.opacity);

                // clearInterval(id);
                id = setInterval(frame, 10);
                function frame() {
                    if (opacity <= 0) {
                        opacity = 0;
                        elem.style.display = "none";
                        clearInterval(id);
                    } else {
                        opacity = opacity - 0.01;
                    }
                    elem.style.opacity = opacity;
                }
            }, 3000);
        // });
    }, []);

    var allExperienceDivs = [
        {
            id: "neemo",
            url: Neemo,
            title: "Neemo's Reef",
            link: "https://nemos-reef.en.uptodown.com/android"
        },
        {
            id: "toystory",
            url: ToyStory,
            title: "Toy Story: Smash It!",
            link: "https://toy-story-smash-it-free.en.uptodown.com/android",
        },
        {
            id: "starwars",
            url: StarWars,
            title: "Star Wars: Assault Team",
            link: "https://star-wars-assault-team.en.uptodown.com/android",
        },
        {
            id: "emporea",
            url: Emporea,
            title: "Emporea",
            link: "https://play.google.com/store/apps/details?id=air.com.PixelFederation.EmporeaGame&hl=en_US&gl=US",
        },
        {
            id: "trainstation",
            url: TrainStation,
            title: "Trainstation 2",
            link: "https://play.google.com/store/apps/details?id=air.com.pixelfederation.TrainStationGame&hl=en_US&gl=US",
        },

    ]

    const pastExperienceProperties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        prevArrow: <img className="nav-left" src={ArrowLeft} alt="" />,
        nextArrow: <img src={ArrowRight} alt="" />,
    };
      
    return (
      <div className="home-container " id="home-container-id">
        <div className="home-overlay" id="home-overlay-id">
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
        </div>
        <MiniGame />
        <Blockchain />
        <Vision />
        <CoreTeam />
        <div className="roadmap-container" id="roadmap-container-id">
          <div className="roadmap-box roadmap-box-team">
            <img className="roadmap-box-team-banner" src={Experience} alt="" />
          </div>
          <div className="roadmap-box roadmap-box-past-experiences">
            <div className="roadmap-box-past-experiences-top">
              <p className="roadmap-title">Past Experiences</p>
            </div>
            <div
              className="roadmap-box-past-experiences-bottom"
              id="roadmap-box-past-experiences-bottom"
            >
              <Slide {...pastExperienceProperties}>
                {allExperienceDivs.map(function (item, i) {
                  return (
                    <div
                      key={i}
                      className="roadmap-box-past-experiences-item-container"
                    >
                      <div className="roadmap-box-past-experiences-item">
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <div className="roadmap-box-past-experiences-image">
                            <img
                              src={item.url}
                              onClick={console.log("click")}
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="roadmap-box-past-experiences-text">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slide>
            </div>
          </div>
        </div>
        <UpcomingGames />
        <Roadmap />
        <FooterNew />
      </div>
    );
}
    
export default Home;