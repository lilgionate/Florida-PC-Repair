import "./footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="http://localhost:5173/" className="home">
              <img src={logo} alt="home"/>
            </a>
          </div>
          <div className="socials flex">
            <a href="/">
              <i class="fa-solid fa-envelope icon"></i>
            </a>
            <a href="/">
              <i className="fa-solid fa-phone icon"></i>
            </a>
            <a href="/">
              <i className="fa-solid fa-comment-sms icon"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-whatsapp icon"></i>
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <div className="linksGroup">
            <span className="linkTitle">Home</span>
            <ul>
              <li><a href="http://localhost:5173/">Florida PC Support</a></li>
              <li><a href="http://localhost:5173/about">About Us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="http://localhost:5173/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Services</span>
            <ul>
              <li><a href="">Walk-In Services</a></li>
              <li><a href="">Mail-In & Messenger Services</a></li>
              <li><a href="">IT Support</a></li>
              <li><a href="">Warranty Sign-Up</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Shop</span>
            <ul>
              <li><a href="">Reviews</a></li>
              <li><a href="">Check Your Order</a></li>
              <li><a href="">Florida PC Garage</a></li>
              <li><a href="">Referrals</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Connect With Us</span>
            <ul>
              <li><a href=""><i className="fa-brands fa-facebook icon"></i> Facebook</a></li>
              <li><a href=""><i className="fa-brands fa-twitter icon"></i> Twitter</a></li>
              <li><a href=""><i className="fa-brands fa-instagram icon"></i> Instagram</a></li>
              <li><a href=""><i className="fa-brands fa-youtube icon"></i> Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright © 2024 Florida PC. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;