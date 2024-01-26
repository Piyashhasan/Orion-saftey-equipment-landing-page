import { Link } from "react-router-dom";
import "./MainNav.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../../assets/images/logo.png";

const MainNav = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

   const stickNavbar = () => {
     if (window !== undefined) {
       let windowHeight = window.scrollY;
       // window height changed for the demo
       windowHeight > 100 ? setStickyClass("sticky-nav") : setStickyClass("");
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
            <li onClick={closeMobileNav}>
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
