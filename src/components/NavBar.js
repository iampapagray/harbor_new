import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { Navbar, OverlayTrigger, Tooltip, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import Logo from "../assets/general/HarborLogo.png";

const renderComingSoonTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon!
    </Tooltip>
  );

function NavBar(props) {
    return (
        <Navbar id="navbar-id" bg={props.style} variant={props.style} expand="lg">
            <Container className="nav-container-left">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Harbor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/leena">Leena</NavDropdown.Item>
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
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 250 }}
                    overlay={renderComingSoonTooltip}
                >
                    <Button variant="outline-dark">Buy Harbor</Button>
                </OverlayTrigger>
                {/* <Button variant="outline-dark">Login</Button> */}
                {/* <Button variant="success">Register</Button>{' '} */}
                <NavDropdown title="Download" id="basic-nav-dropdown">
                    <NavDropdown.Item>Coming Soon</NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                </NavDropdown> */}
            </Container>
        </Navbar>
    );
}
    
export default NavBar;