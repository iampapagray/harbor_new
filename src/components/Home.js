import React, { useEffect, useState } from "react";

import MiniGame from './MiniGame.js';
import Footer from './Footer.js';
import { Button } from 'react-bootstrap';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';

import Characters from '../assets/home/characters.png';
import HarborTimelineIcon from '../assets/home/harbortimelineicon.svg';
import ManAndBoat from '../assets/home/boat-and-man.png';
import leena from '../assets/home/leena.png';
import loyalty from '../assets/home/loyalty.png';
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

import WorldIcon from "../assets/home/globe-icon.svg";
import CommunityIcon from "../assets/home/community-icon.svg";
import BetaIcon from "../assets/home/beta-icon.svg";

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
        // window.addEventListener('load', (event) => {
        //     console.log("PAGE LOADED");
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

    var allRoadmapDivs = [
        {
            year: "2022",
            quarter: "Q2",
            icon: CommunityIcon,
            title: "Community Launch",
            desc1: "Telegram & Discord launched",
            desc2: "Game MVP/Vertical slice",
            desc3: "Gameplay gifs, art style released",
            color: "blue",
        },
        {
            year: "2022",
            quarter: "Q3",
            icon: LogoWhite,
            title: "Token & NFT Launch",
            desc1: "Telegram & Discord launched",
            desc2: "Game MVP/Vertical slice",
            desc3: "Gameplay gifs, art style released",
            color: "gray"
        },
        {
            year: "2023",
            quarter: "Q4",
            icon: BetaIcon,
            title: "Internal beta launch",
            desc1: "Taylor's Town global launch",
            desc2: "Web platform testing",
            desc3: "Multiplayer, community, game",
            color: "gray"
        },
        {
            year: "2023",
            quarter: "Q1",
            icon: BetaIcon,
            title: "Beta Launch",
            desc2: "Public beta testing",
            desc1: "NFT marketplace launch",
            desc3: "FTUE and game data balance",
            color: "gray"
        },
        {
            year: "2023",
            quarter: "Q2",
            icon: WorldIcon,
            title: "Token & NFT Launch",
            desc1: "Telegram & Discord launched",
            desc2: "Game MVP/Vertical slice",
            desc3: "Gameplay gifs, art style released",
            color: "gray"
        },
    ];

    const roadmapProperties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        prevArrow: <img className="nav-left" src={ArrowLeft} alt="" />,
        nextArrow: <img src={ArrowRight} alt="" />,
    };
      

    return (
      <div className="home-container" id="home-container-id">
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
        <div className="roadmap-container" id="roadmap-container-id">
          <div className="roadmap-box roadmap-box-1">
            <div className="roadmap-box-1-top">
              <p className="roadmap-title">
                We are creating blockchain games for the masses
              </p>
            </div>
            <img src={Characters} alt="" />
          </div>
          <div className="roadmap-box roadmap-box-2">
            <div className="roadmap-box roadmap-box-2-inner">
              <div className="roadmap-box-2-left">
                <p className="roadmap-title roadmap-title-box-2">
                  Arrr' Vision
                </p>
                <div className="roadmap-box-2-timeline">
                  <div className="roadmap-box-2-timeline-line-item">
                    <div className="roadmap-box-2-timeline-line-item-left">
                      <img src={HarborTimelineIcon} alt="" />
                    </div>
                    <div className="roadmap-box-2-timeline-line-item-right">
                      <p className="roadmap-box-2-timeline-line-item-right-top">
                        Fun-first Approach
                      </p>
                      <p className="roadmap-box-2-timeline-line-item-right-bottom">
                        Our number one focus is creating exciting gameplay
                        experiences for all gamers on Harbor.
                      </p>
                    </div>
                  </div>
                  <div className="roadmap-box-2-timeline-line-item">
                    <div className="roadmap-box-2-timeline-line-item-left">
                      <img src={HarborTimelineIcon} alt="" />
                    </div>
                    <div className="roadmap-box-2-timeline-line-item-right">
                      <p className="roadmap-box-2-timeline-line-item-right-top">
                        Merging F2P and P2E
                      </p>
                      <p className="roadmap-box-2-timeline-line-item-right-bottom">
                        Harbor games merge the best elements from mobile
                        free-to-play with play-to-earn economics.
                      </p>
                    </div>
                  </div>
                  <div className="roadmap-box-2-timeline-line-item">
                    <div className="roadmap-box-2-timeline-line-item-left">
                      <img src={HarborTimelineIcon} alt="" />
                    </div>
                    <div className="roadmap-box-2-timeline-line-item-right">
                      <p className="roadmap-box-2-timeline-line-item-right-top">
                        Driving mass adoption
                      </p>
                      <p className="roadmap-box-2-timeline-line-item-right-bottom">
                        We tap into the pool of billions of mobile gamers to
                        drive adoption for blockchain gaming.
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  href="#home-container-id"
                  className="box-2-play-button"
                  variant="success"
                >
                  Explore Harbor
                </Button>{" "}
              </div>
              <div className="roadmap-box-2-right">
                <img src={ManAndBoat} alt="" />
              </div>
            </div>
          </div>
          <div className="roadmap-box roadmap-box-team">
            <p className="roadmap-title">Core Team</p>
            <p className="team-desc">
              Harbor consolidates experience from the best of Silicon Valley,
              venture capital, and mobile gaming, to create one of the best
              teams in all of blockchain gaming, with an unrivaled track record.
            </p>
            <img className="roadmap-box-team-img" src={Team} alt="" />
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
                    <div className="roadmap-box-past-experiences-item-container">
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
          <div className="roadmap-box roadmap-box-upcoming-games">
            <div className="roadmap-box roadmap-box-upcoming-games-inner">
              <div className="roadmap-box-upcoming-games-top">
                <p className="roadmap-title">Upcoming Games</p>
              </div>
              <div className="roadmap-box-upcoming-games-bottom">
                <div className="roadmap-box-upcoming-games-bottom-item">
                  <img src={leena} alt="" />
                  <p className="roadmap-box-upcoming-games-bottom-item-title">
                    Leena's Place
                  </p>
                  <p className="roadmap-box-upcoming-games-bottom-item-desc">
                    Leena returns home as mayor of her town with the vision of
                    building her boring town into a modern lively abode for her
                    friends and family
                  </p>
                  <Button
                    href="/leena"
                    target="_blank"
                    className="roadmap-box-upcoming-games-play-button"
                    variant="success"
                  >
                    Learn More
                  </Button>{" "}
                </div>
                <div className="roadmap-box-upcoming-games-bottom-item">
                  <img src={loyalty} alt="" />
                  <p className="roadmap-box-upcoming-games-bottom-item-title">
                    Loyalty
                  </p>
                  <p className="roadmap-box-upcoming-games-bottom-item-desc">
                    Kick up your own gang and run your family’s crime
                    activities. Choose which mobsters and gangsters should be
                    devoted to your Cosa Nostra
                  </p>
                  <Button
                    href="/loyalty"
                    target="_blank"
                    className="roadmap-box-upcoming-games-play-button"
                    variant="success"
                  >
                    Learn More
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap-box roadmap-box-roadmap">
            <div className="roadmap-box-roadmap-inner">
              <div className="roadmap-box-roadmap-top">
                <p className="roadmap-title">Roadmap</p>
              </div>
              <div
                className="roadmap-box-roadmap-bottom"
                id="roadmap-box-roadmap-bottom"
              >
                <Slide {...roadmapProperties}>
                  {allRoadmapDivs.map(function (item, i) {
                    return (
                      <div className="roadmap-box-roadmap-item-container">
                        <div
                          className={
                            item.color === "gray"
                              ? "roadmap-box-roadmap-item"
                              : "roadmap-box-roadmap-item roadmap-box-roadmap-item-blue"
                          }
                        >
                          <div className="roadmap-box-roadmap-item-top">
                            <p className="roadmap-box-roadmap-item-year">
                              {item.year}
                            </p>
                            <p className="roadmap-box-roadmap-item-quarter">
                              {item.quarter}
                            </p>
                          </div>
                          <div className="roadmap-box-roadmap-item-bottom">
                            <img
                              className="roadmap-box-roadmap-item-icon"
                              src={item.icon}
                              alt=""
                            />
                            <p className="roadmap-box-roadmap-item-title">
                              {item.title}
                            </p>
                            <p className="roadmap-box-roadmap-item-desc">
                              {item.desc1}
                            </p>
                            <p className="roadmap-box-roadmap-item-desc">
                              {item.desc2}
                            </p>
                            <p className="roadmap-box-roadmap-item-desc">
                              {item.desc3}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
    
export default Home;