import NavBar from './NavBar';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            {/* <NavBar style="dark"/> */}
            <p className="footer-cc">©2015 Charged Monkey All Rights Reserved</p>
            <p className="footer-trademarks">All trademarks referenced herein are the properties of their respective owners</p>
            <div className="footer-extended-options-container">
                <p>Privacy</p>
                <p>Open Gaming License</p>
                <p>Cookie Policy</p>
            </div>
            <div className="footer-icon-container">
                <div>Youtube</div>
                <div>Discord</div>
                <div>Telegram</div>
                <div>Twitter</div>
            </div>
        </div>
    );
}
    
export default Footer;