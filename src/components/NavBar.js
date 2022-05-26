import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import Logo from "../assets/general/HarborLogo.png";

function NavBar(props) {
    return (
        <Navbar bg={props.style} variant={props.style} expand="lg">
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
                        <Nav.Link href="/nft-marketplace">NFT Marketplace</Nav.Link>
                        <Nav.Link href="/governance">Governance</Nav.Link>
                        <Nav.Link href="/docs">Docs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="nav-container-right">
                <Button variant="outline-dark">Buy Harbor</Button>
                <Button variant="outline-dark">Login</Button>
                <Button variant="success">Register</Button>{' '}
                <NavDropdown title="Download" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}
    
export default NavBar;