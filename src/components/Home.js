import MiniGame from './MiniGame.js';
import Footer from './Footer.js';
import { Button } from 'react-bootstrap';
import '../styles/Home.css';

import GameInHands from '../assets/home/hands.png';
import HarborMobileSample from '../assets/home/mobile-prev.png';
import HarborTimelineIcon from '../assets/home/harbortimelineicon.png';
import ManAndBoat from '../assets/home/boat-and-man.png';
import leena from '../assets/home/leena.png';
import loyalty from '../assets/home/loyalty.png';
import ArrowLeft from '../assets/home/arrow-left.svg';
import ArrowRight from '../assets/home/arrow-right.svg';
import Team from '../assets/home/team.png';

const Home = () => {

    return (
        <div className="home-container" id="home-container-id">
            <MiniGame />
            <div className="roadmap-container" id="roadmap-container-id">
                <div className="roadmap-box roadmap-box-1">
                    <div className="roadmap-box-1-top">
                        <p className="roadmap-title">Overview</p>
                    </div>
                    <div className="roadmap-box-1-bottom">
                        <div className="roadmap-box-1-bottom-left">
                            <img src={GameInHands} />
                            <p className="desc roadmap-box-1-bottom-left-text">Onboarding the next 100m blockchain gamers</p>
                        </div>
                        <div className="roadmap-box-1-bottom-right">
                            <p className="desc roadmap-box-1-bottom-right-text">Crafting top mobile gaming experiences we all cherish</p>
                            <img src={HarborMobileSample} />
                        </div>
                    </div>
                </div>
                <div className="roadmap-box roadmap-box-2">
                    <div className="roadmap-box-2-left">
                        <p className="roadmap-title roadmap-title-box-2">Vision</p>
                        <div className="roadmap-box-2-timeline">
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                                <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Merging F2P and P2E</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">Harbor merges the best from story driven mobile free-to-play and blockchain-based play-and-earn economics.</p>
                                </div>
                            </div>
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                                <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Making blockchain gaming fun</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">Harbor merges the best from story driven mobile free-to-play and blockchain-based play-and-earn economics.</p>
                                </div>
                            </div>
                            <div className="roadmap-box-2-timeline-line-item">
                                <div className="roadmap-box-2-timeline-line-item-left">
                                    <img src={HarborTimelineIcon} />
                                </div>
                                <div className="roadmap-box-2-timeline-line-item-right">
                                    <p className="roadmap-box-2-timeline-line-item-right-top">Driving mass adoption</p>
                                    <p className="roadmap-box-2-timeline-line-item-right-bottom">Harbor merges the best from story driven mobile free-to-play and blockchain-based play-and-earn economics. </p>
                                </div>
                            </div>
                        </div>
                        <Button href="/" className="box-2-play-button" variant="success">Explore Harbor</Button>{' '}
                    </div>
                    <div className="roadmap-box-2-right">
                        <img src={ManAndBoat} />
                    </div>
                </div>
                <div className="roadmap-box-3">
                </div>
                <div className="roadmap-box roadmap-box-upcoming-games">
                    <div className="roadmap-box-upcoming-games-top">
                        <p className="roadmap-title">Upcoming Games</p>
                        {/* <div className="roadmap-icon-menu">
                            <img src={ArrowLeft} />
                            <img src={ArrowRight} />
                        </div> */}
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
                <div className="roadmap-box roadmap-box-team">
                    <img src={Team} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
    
export default Home;