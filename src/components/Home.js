import React, { useEffect, useState } from "react";

import MiniGame from './MiniGame.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import { Button } from 'react-bootstrap';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';

// import GameInHands from '../assets/home/hands.png';
// import HarborMobileSample from '../assets/home/mobile-prev.png';
import Characters from '../assets/home/characters.png';
import HarborTimelineIcon from '../assets/home/harbortimelineicon.svg';
import ManAndBoat from '../assets/home/boat-and-man.png';
import leena from '../assets/home/leena.png';
import loyalty from '../assets/home/loyalty.png';
import ArrowLeft from '../assets/home/arrow-left.svg';
import ArrowRight from '../assets/home/arrow-right.svg';
import Team from '../assets/home/team.png';
import Experience from '../assets/home/experience.png';
import Roadmap from '../assets/home/roadmap.png';

// import PastExperiences from '../assets/home/past-experiences.png';
import Emporea from '../assets/home/experience/experience-emporea.png';
import Neemo from '../assets/home/experience/experience-neemo.png';
import TrainStation from '../assets/home/experience/experience-train-station.png';
import StarWars from '../assets/home/experience/experience-star-wars.png';
import ToyStory from '../assets/home/experience/experience-toy-story.png';


import LogoWhite from "../assets/general/HarborLogoWhite.svg";
import LogoText from "../assets/general/HarborLogoTextWhite.svg";

var experienceStartIndex = 0;

const Home = () => {

    const [shownExperienceDivs, setShownExperienceDivs] = useState([
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
            link: "google.com",
        },
    ]);

    const scrollRight = (id) => {
        const elem = document.getElementById(id);
        const maxVal = elem.scrollWidth - elem.clientWidth;

        var id = null;
        clearInterval(id);
        id = setInterval(frame, 10);
        var scrollLeft = elem.scrollLeft;
        function frame() {
            if (scrollLeft >= maxVal) {
                clearInterval(id);
                scrollLeft = maxVal;
            } else {
                scrollLeft += 30;
            }
            elem.scrollLeft = scrollLeft;
        }
    }

    const scrollLeft = (id) => {
        const elem = document.getElementById(id);
        const maxVal = elem.scrollWidth - elem.clientWidth;

        var id = null;
        clearInterval(id);
        id = setInterval(frame, 10);
        var scrollLeft = elem.scrollLeft;
        function frame() {
            if (scrollLeft <= 0) {
                clearInterval(id);
                scrollLeft = 0;
            } else {
                scrollLeft -= 30;
            }
            elem.scrollLeft = scrollLeft;
        }
    }

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

    const EXPERIENCE_ITEMS_SHOWN = 3;

    const changeExperience = (direction) => {
        if (direction == "left") {
            experienceStartIndex = experienceStartIndex - 1;
        } else {
            experienceStartIndex = experienceStartIndex + 1;
        }
        if (experienceStartIndex <= -1 * allExperienceDivs.length) {
            experienceStartIndex = 0;
        }
        if (experienceStartIndex >= allExperienceDivs.length - 1) {
            experienceStartIndex = 0;
        }
        // console.log("EXPERIENCE START INDEX ", experienceStartIndex);
        var increment = 0;
        var newShownExperienceDevs = [];
        while (increment < EXPERIENCE_ITEMS_SHOWN) {
            var index = experienceStartIndex + increment;
            if (index < 0) {
                index = allExperienceDivs.length + index;
            }
            if (index > allExperienceDivs.length - 1) {
                index = index - allExperienceDivs.length;
            }
            // console.log("index is ", index);
            newShownExperienceDevs[increment] = allExperienceDivs[index];
            increment += 1;
        }
        setShownExperienceDivs(newShownExperienceDevs);
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
            link: "google.com",
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
        prevArrow: <img className="nav-left" src={ArrowLeft} />,
        nextArrow: <img src={ArrowRight} />,
      };

    //   const style = {
    //     textAlign: 'center',
    //     background: 'teal',
    //     padding: '200px 0',
    //     fontSize: '30px'
    //   };
      

    return (
        <div className="home-container" id="home-container-id">
            {/* <NavBar style="light"/> */}
            <div className="home-overlay" id="home-overlay-id">
                <div className="home-overlay-icon-container" id="home-overlay-icon-container">
                    <img
                        alt=""
                        src={LogoWhite}
                        className="d-inline-block align-top harbor-logo-img-home"
                    />{' '}
                    <img
                        alt=""
                        src={LogoText}
                        className="d-inline-block align-top harbor-logo-text-home"
                    />{' '}
                </div>
            </div>
            <MiniGame />
            <div className="roadmap-container" id="roadmap-container-id">
                <div className="roadmap-box roadmap-box-1">
                    <div className="roadmap-box-1-top">
                        <p className="roadmap-title">We are creating blockchain games for the masses</p>
                    </div>
                    <img src={Characters} />
                </div>
                <div className="roadmap-box roadmap-box-2">
                    <div className="roadmap-box-2-left">
                        <p className="roadmap-title roadmap-title-box-2">Arrr' Vision</p>
                        <div className="roadmap-box-2-timeline">
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                                <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Fun-first Approach</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">Our number one focus is creating exciting gameplay experiences for all gamers on Harbor.</p>
                                </div>
                            </div>
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                                <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Merging F2P and P2E</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">Harbor games merge the best elements from mobile free-to-play with play-to-earn economics.</p>
                                </div>
                            </div>
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                            <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Driving mass adoption</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">We tap into the pool of billions of mobile gamers to drive adoption for blockchain gaming.</p>
                                </div>
                            </div>
                        </div>
                        <Button href="#home-container-id" className="box-2-play-button" variant="success">Explore Harbor</Button>{' '}
                    </div>
                    <div className="roadmap-box-2-right">
                        <img src={ManAndBoat} />
                    </div>
                </div>
                <div className="roadmap-box roadmap-box-team">
                    <p className="roadmap-title">Core Team</p>
                    <p className="team-desc">Harbor blends experience from the best of mobile gaming, Silicon Valley, and venture capital</p>
                    <img className="roadmap-box-team-img"src={Team} />
                    <img className="roadmap-box-team-banner" src={Experience} />
                </div>
                <div className="roadmap-box roadmap-box-past-experiences">
                    <div className="roadmap-box-past-experiences-top">
                        <p className="roadmap-title">Past Experiences</p>
                        {/* <div className="roadmap-icon-menu">
                            <img src={ArrowLeft} onClick={() => changeExperience("left")} />
                            <img src={ArrowRight} onClick={() => changeExperience("right")} />
                        </div> */}
                    </div>
                    <div className="roadmap-box-past-experiences-bottom" id="roadmap-box-past-experiences-bottom">
                        <Slide {...pastExperienceProperties}>
                            {
                                shownExperienceDivs.map(function(item, i) {
                                    return (
                                        <div className="roadmap-box-past-experiences-item">
                                            <a href={item.link} target="_blank">
                                                <div className="roadmap-box-past-experiences-image">
                                                    <img src={item.url} onClick={console.log("click")} />
                                                </div>
                                            </a>
                                            <div className="roadmap-box-past-experiences-text">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Slide>
                    </div>
                </div>
                <div className="roadmap-box roadmap-box-upcoming-games">
                    <div className="roadmap-box-upcoming-games-top">
                        <p className="roadmap-title">Upcoming Games</p>
                    </div>
                    <div className="roadmap-box-upcoming-games-bottom">
                        <div className="roadmap-box-upcoming-games-bottom-item">
                            <img src={leena} />
                            <p className="roadmap-box-upcoming-games-bottom-item-title">Leena's Place</p>
                            <p className="roadmap-box-upcoming-games-bottom-item-desc">Leena returns home and becomes mayor of her small town with the vision of building her boring town into a modern lively abode for her friends and family</p>
                            <Button className="roadmap-box-upcoming-games-play-button" variant="success">Learn More</Button>{' '}
                        </div>
                        <div className="roadmap-box-upcoming-games-bottom-item">
                            <img src={loyalty} />
                            <p className="roadmap-box-upcoming-games-bottom-item-title">Loyalty</p>
                            <p className="roadmap-box-upcoming-games-bottom-item-desc">Kick up your own gang and run your family’s crime activities. Choose which mobsters and gangsters should be devoted to your Cosa Nostra</p>
                            <Button className="roadmap-box-upcoming-games-play-button" variant="success">Learn More</Button>{' '}
                        </div>
                    </div>
                </div>
                <div className="roadmap-box roadmap-box-roadmap">
                    <div className="roadmap-box-roadmap-top">
                        <p className="roadmap-title">Roadmap</p>
                        <div className="roadmap-icon-menu">
                            <img src={ArrowLeft} onClick={() => scrollLeft("roadmap-box-roadmap-bottom")} />
                            <img src={ArrowRight} onClick={() => scrollRight("roadmap-box-roadmap-bottom")} />
                        </div>
                    </div>
                    <div className="roadmap-box-roadmap-bottom" id="roadmap-box-roadmap-bottom">
                        <img src={Roadmap} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
    
export default Home;