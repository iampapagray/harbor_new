import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/Leena.css';

import backgroundImg from '../assets/leena/SplashScreen/TT_splash_v02_chibi_20220207.png';
import cloudLeft from '../assets/leena/MapObjects/Clouds/MapClouds02.png';
import cloudRight from '../assets/leena/MapObjects/Clouds/MapClouds03.png';
import Logo from '../assets/leena/Logo/Leenas_Place_logo.png';
import Teaser from '../assets/leena/Gameplay/TaylorsTown_teaser.mp4';
import TwistBottom from '../assets/leena/Visuals/TT_store_03.jpg';
import TwistLeft from '../assets/leena/Characters/Taylor_highpoly_v01.png';
import DreamTown from '../assets/leena/Visuals/Memory_S1E2_updated.PNG';

import ConstructionSite from '../assets/leena/MapObjects/Buildings/ConstructionSite.png';
import Library from '../assets/leena/MapObjects/Buildings/library.png';
import CoffeeShop from '../assets/leena/MapObjects/Buildings/coffee_house.png';
import Grill from '../assets/leena/MapObjects/Buildings/Grill.png';
import Jaccuzi from '../assets/leena/MapObjects/Diorama/TT_NFT_Zen_garden_small.png';
import Couple from '../assets/leena/Characters/Lars+Women_Chibi_Study_ForPhotoObject.png';
import CoastalVilla from '../assets/leena/MapObjects/Buildings/CoastalVilla.png';
import FurnitureFactory from '../assets/leena/MapObjects/Buildings/furniture_factory.png';

import Farmer from '../assets/leena/Characters/TT_3D_Taylor_chibi.png';
import Carrots from '../assets/leena/MapObjects/Fields/MDL_Crop_Carrot_C_4x4.png';

import Hammock from '../assets/leena/MapObjects/Decorations/hammock_a.png';
import JaccuziItem from '../assets/leena/MapObjects/Decorations/whirlpool_a.png';

import ReactPlayer from 'react-player'
import { Button } from 'react-bootstrap';

const Leena = () => {
    return (
        <div className="leena-container">
            <NavBar style="light"/>
            <div className="leena-bg" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="logo-row">
                    <img src={cloudLeft} />
                    <img src={Logo} />
                    <img src={cloudRight} />
                </div>
            </div>
            <div className="box box-1">
                <div className="inner-box">
                    <p className="title">Become the mayor and build your town</p>
                    <p className="desc">Kick up your own gang and run your family's crime activities. Choose which mobsters and gangsters should be devoted to your Cosa Nostra and lead them against the fierce competition of the Mafia Town.</p>
                    <Button className="play-button" variant="secondary">Play Game</Button>{' '}
                    <p className="desc">Coming Soon</p>
                </div>
            </div>
            <div className="box box-2">
                <div className="inner-box">
                    <p className="title">Leena returns home and becomes mayor</p>
                    <p className="desc">Help her to transform the sleepy countryside village into flourishing modern family town!</p>
                </div>
                <ReactPlayer className="leena-video" url={Teaser} autoPlay muted playing={true} loop={true}/>
            </div>
            <div className="box box-3">
                <div className="box-3-left">
                    <img src={TwistLeft} />
                </div>
                <div className="box-3-right">
                    <p className="title">Uncover the twists of her family story</p>
                    <p className="desc">Help them to rebuild and modernize their homes and businesses. Clean up the mess, grow and decorate the Town.</p>
                    <img src={TwistBottom} />
                </div>
            </div>
            <div className="box box-4">
                <div className="inner-box">
                    <p className="title">Make Leena's Place the dream town</p>
                </div>
                <img src={DreamTown} />
            </div>
            <div className="box box-5">
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={ConstructionSite} />
                    <p className="leena-line-item-text">Create a flourishing family town</p>
                    <img className="leena-line-item-img" src={Library}/>
                </div>
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={CoffeeShop} />
                    <p className="leena-line-item-text">Help your citizens build lovely businesses</p>
                    <img className="leena-line-item-img" src={Grill}/>
                </div>
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={Jaccuzi} />
                    <p className="leena-line-item-text">Live into the breath-taking story with many characters</p>
                    <img className="leena-line-item-img" src={Couple}/>
                </div>
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={CoastalVilla} />
                    <p className="leena-line-item-text">Build a modern family town to live in!</p>
                    <img className="leena-line-item-img" src={FurnitureFactory}/>
                </div>
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={Farmer} />
                    <p className="leena-line-item-text">Craft and trade useful goods with other characters</p>
                    <img className="leena-line-item-img" src={Carrots}/>
                </div>
                <div className="leena-line-item">
                    <img className="leena-line-item-img" src={Hammock} />
                    <p className="leena-line-item-text">Customize your town with beautiful decorations</p>
                    <img className="leena-line-item-img" src={JaccuziItem}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}
    
export default Leena;