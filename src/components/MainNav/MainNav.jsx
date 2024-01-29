import { Link } from "react-router-dom";
import "./MainNav.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../../assets/images/logo.png";
import locationIcon from "../../assets/icons/location_icon.png";
import telePhoneIcon from "../../assets/icons/call_icon.png";
import emailIcon from "../../assets/icons/email_icon.png";
import facebookIcon from "../../assets/icons/facebook_icon.png";
import instagramIcon from "../../assets/icons/insta_icon.png";
import linkedInIcon from "../../assets/icons/linkedIn_icon.png";
import navActive from "../../assets/icons/nav_active_icon.png";

const MainNav = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const [click, setClick] = useState(false);
  const closeMobileNav = () => {
    setClick(false);
  };

  return (
    <nav className={`navbar ${stickyClass}`}>
      <div className="container nav_container">
        <div>
          <Link to="/" className="">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav_list">
          <ul className={click ? "nav nav_menu active" : "nav nav_menu"}>
            <li className="active" onClick={closeMobileNav}>
              <img className="active_img" src={navActive} alt="active_icon" />
              <Link to="">HOME</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">ABOUT</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">PRODUCTS</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">RENTALS</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">SERVICES</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">RESOURCES</Link>
            </li>
            <li onClick={closeMobileNav}>
              <Link to="">CONTACT</Link>
            </li>
            <li className="hide">
              <div className="location">
                <img src={locationIcon} alt="location" />
                <p>1161 40th Ave NE • Calgary, Alberta</p>
              </div>
              <div className="telephone_email">
                <div className="telephone">
                  <img src={telePhoneIcon} alt="telephone" />
                  <p>(403) 769 - 1799</p>
                </div>
                <div className="email">
                  <img src={emailIcon} alt="email" />
                  <p>Email Us</p>
                </div>
              </div>
              <div>
                <ul className="social_icon">
                  <li>
                    <a href="">
                      <img src={facebookIcon} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={instagramIcon} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={linkedInIcon} alt="linkedIn" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="toggle_btn">
          <button className="btn btn-primary" onClick={() => setClick(!click)}>
            {click ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
