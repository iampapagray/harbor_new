import '../styles/Loyalty.css';

import Logo from '../assets/loyalty/Logo/loyalty_logo.png';
import backgroundImg from '../assets/loyalty/SplashScreen/WTM-header.png';
import TurfWars from '../assets/loyalty/Gameplay/TurfWars_gameplay_01.gif';
import LoyaltyMap from '../assets/loyalty/Gameplay/Loyalty_map_actual_01.png';

import controlHeader from '../assets/loyalty/SplashScreen/Loyalty_splashscreen_v01.png';
import controlOne from '../assets/loyalty/Visuals/mafia_01.jpg';
import controlTwo from '../assets/loyalty/Gameplay/Loyalty_battle_03_actual.jpg';
import controlThree from '../assets/loyalty/Visuals/shoot.gif';

import underlingSwat from '../assets/loyalty/Characters/swat.png';
import underlingFather from '../assets/loyalty/Characters/father.png';
import underlingJunior from '../assets/loyalty/Characters/junior.png';
import underlingSwatBoss from '../assets/loyalty/Characters/swat_boss.png';

import mobBoss from '../assets/loyalty/Gameplay/Copy of 0 1 IMG_0533.jpg';
import trainGang from '../assets/loyalty/UI/Upgrade.jpg';
import versus from '../assets/loyalty/Visuals/Loyalty_store_screen_05.png';
import ladies from '../assets/loyalty/Gameplay/Loyalty_battle_01_actual.png';
import takeOut from '../assets/loyalty/Visuals/Loyalty_store_screen_02.png';

import ReactPlayer from 'react-player'
import { Button } from 'react-bootstrap';

const Loyalty = () => {
    return (
        <div className="loyalty-container">
            <div className="loyalty-bg" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="logo-row-loyalty">
                    <img src={Logo} />
                </div>
            </div>
            <div className="loyalty-box loyalty-box-1">
                <div className="inner-loyalty-box">
                    <p className="loyalty-title">Do you have what it takes?</p>
                    <p className="loyalty-desc">Kick up your own gang and run your family's crime activities. Choose which mobsters and gangsters should be devoted to your Cosa Nostra and lead them against the fierce competition of the Mafia Town.</p>
                    <Button className="play-button" variant="secondary">Play Game</Button>{' '}
                    <p className="loyalty-desc">Coming Soon</p>
                </div>
            </div>
            <div className="loyalty-box loyalty-box-2">
                <div className="inner-loyalty-box">
                    <p className="loyalty-title">Lead your gang of mobsters!</p>
                    <p className="loyalty-desc">Help her to transform the sleepy countryside village into flourishing modern family town!</p>
                </div>
                <img className="loyalty-video" src={TurfWars} />
            </div>
            <div className="loyalty-box loyalty-box-3">
                <div className="inner-loyalty-box">
                    <p className="loyalty-title">Claim control over Mafia Town</p>
                    <p className="loyalty-desc">Get ready to fight in hundreds of missions in Mafia Town districts against hideous criminals, bosses and forces of law. Take over the control and become the capo di tutti capi.</p>
                </div>
                <img src={LoyaltyMap} />
            </div>
            <div className="loyalty-box loyalty-box-4">
                <div className="inner-loyalty-box">
                    <p className="loyalty-title">Claim control over Mafia Town</p>
                </div>
                <img src={controlHeader} />
                <div className="loyalty-box-4-sub-images">
                    <img src={controlOne} className="loyalty-box-4-sub-image" />
                    <img src={controlTwo} className="loyalty-box-4-sub-image" />
                    <img src={controlThree} className="loyalty-box-4-sub-image" />
                </div>
            </div>
            <div className="loyalty-box loyalty-box-5">
                <div className="inner-loyalty-box">
                    <p className="loyalty-title">Collect Underlings</p>
                    <p className="loyalty-desc">Over 100 of the wackiest Mobsters you’ve ever seen, ready to fight for their Capo. </p>
                </div>
                <div className="loyalty-box-5-sub-images">
                    <img src={underlingSwat} className="loyalty-box-5-sub-image loyalty-box-5-sub-image-1" />
                    <img src={underlingFather} className="loyalty-box-5-sub-image loyalty-box-5-sub-image-2" />
                    <img src={underlingJunior} className="loyalty-box-5-sub-image loyalty-box-5-sub-image-3" />
                    <img src={underlingSwatBoss} className="loyalty-box-5-sub-image loyalty-box-5-sub-image-4" />
                </div>
            </div>
            <div className="loyalty-box loyalty-box-6">
                <div className="loyalty-line-item">
                    <img className="loyalty-line-item-img" src={mobBoss} />
                    <div className="loyalty-line-item-content">
                        <p className="loyalty-line-item-text-title">Fight mob bosses in campaign</p>
                        <p className="loyalty-line-item-text-desc">Tackle on this on-going and dangerous campaign filled with other Mafia Bosses which want your head!</p>
                    </div>
                </div>
                <div className="loyalty-line-item">
                    <div className="loyalty-line-item-content">
                        <p className="loyalty-line-item-text-title">Train your gang for battle</p>
                        <p className="loyalty-line-item-text-desc">Competition is fierce! Make sure you constantly upgrade your devoted mobsters!</p>
                    </div>
                    <img className="loyalty-line-item-img" src={trainGang} />
                </div>
                <div className="loyalty-line-item">
                    <img className="loyalty-line-item-img" src={versus} />
                    <div className="loyalty-line-item-content">
                        <p className="loyalty-line-item-text-title">Battle others in turf wars</p>
                        <p className="loyalty-line-item-text-desc">Committing crime takes bullets! Be prepared to fight 1on1 with other player bosses in PvP turf battles!</p>
                    </div>
                </div>
                <div className="loyalty-line-item">
                    <div className="loyalty-line-item-content">
                        <p className="loyalty-line-item-text-title">Create or join families</p>
                        <p className="loyalty-line-item-text-desc">Here and there, everyone has to accept help. Fight alongside your Mafia Family allies and prosper together!</p>
                    </div>
                    <img className="loyalty-line-item-img" src={ladies} />
                </div>
                <div className="loyalty-line-item">
                    <img className="loyalty-line-item-img" src={takeOut} />
                    <div className="loyalty-line-item-content">
                        <p className="loyalty-line-item-text-title">Undertake raid quests</p>
                        <p className="loyalty-line-item-text-desc">Raid prisons and liberate your future colleagues in crime! Family has cash problems? No worries! A well performed bank robbery will cover everything!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Loyalty;