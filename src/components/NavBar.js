import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import React, { useEffect, useState } from "react";
import { Navbar, OverlayTrigger, Tooltip, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import Logo from "../assets/general/HarborLogo.png";
import LogoBlue from "../assets/general/HarborLogoBlue.svg";
import LogoText from "../assets/general/HarborLogoTextWhite.svg";

const renderComingSoonTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon!
    </Tooltip>
  );

function NavBar(props) {

    var lastScrollTop = 0;

    useEffect(() => {
        var navbar = document.getElementById("navbar-id");
        navbar.style.display = "flex";
        navbar.style.opacity = "1";//"0";
        navbar.style.pointerEvents = "auto";// "none";
        var opacity = 0.0;

        var midScroll = false;

        // window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
        //     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        //     var id = null;
        //     if (st > lastScrollTop){
        //        // downscroll code
        //        console.log("downscroll");
        //         clearInterval(id);
        //         if (!midScroll) {
        //             id = setInterval(frame, 10);
        //         }
        //         function frame() {
        //         	if (opacity >= 1) {
        //                 midScroll = false;
        //         		clearInterval(id);
        //                 opacity = 1;
		// 				// enable clicks if shown
		// 				navbar.style.pointerEvents = "auto";
		// 			} else {
        //                 midScroll = true;
        //         		opacity = opacity + 0.02;
        //         	}
        //         	navbar.style.opacity = opacity;
	    //         }
        //     } else {
        //        // upscroll code
        //        console.log("upscroll");
        //        clearInterval(id);
        //         if (!midScroll) {
        //             id = setInterval(frame, 10);
        //         }
        //         function frame() {
        //         	if (opacity <= 0) {
        //         		clearInterval(id);
        //                 opacity = 0;
        //                 midScroll = false;
        //         		// disable clicks if hidden
		// 				navbar.style.pointerEvents = "none";
		// 			} else {
        //                 midScroll = true;
        //         		opacity -= 0.02;
        //         	}
        //         	navbar.style.opacity = opacity;
		//         }
        //     }
        //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        //  }, false);
    
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <Navbar id="navbar-id" bg={props.style} variant={props.style} expand="lg">
            <Container className="nav-container-left">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={LogoBlue}
                        width="30"
                        height="30"
                        className="d-inline-block align-top harbor-logo-img"
                    />{' '}
                    <img
                        alt=""
                        src={LogoText}
                        width="30"
                        height="30"
                        className="d-inline-block align-top harbor-logo-text"
                    />{' '}
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/leena">Leena's Place</NavDropdown.Item>
                            <NavDropdown.Item href="/loyalty">Loyalty</NavDropdown.Item>
                        </NavDropdown>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderComingSoonTooltip}
                        >
                            <Nav.Link>NFT Marketplace</Nav.Link>
                        </OverlayTrigger>
                        {/* <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderComingSoonTooltip}
                        >
                            <Nav.Link>Governance</Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderComingSoonTooltip}
                        >
                            <Nav.Link>Docs</Nav.Link>
                        </OverlayTrigger> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="nav-container-right">
                {/* <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 250 }}
                    overlay={renderComingSoonTooltip}
                >
                    <Button variant="outline-dark">Buy Harbor</Button>
                </OverlayTrigger> */}
                {/* <Button variant="outline-dark">Login</Button> */}
                {/* <Button variant="success">Register</Button>{' '} */}
                {/* <NavDropdown title="Download" id="basic-nav-dropdown">
                    <NavDropdown.Item>Coming Soon</NavDropdown.Item>
                </NavDropdown> */}
                {/* <NavDropdown title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                </NavDropdown> */}
            </Container>
        </Navbar>
    );
}
    
export default NavBar;