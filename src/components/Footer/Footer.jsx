import "./Footer.css";
import footerLogo from "../../assets/images/footer_logo.png";
import facebookIcon from "../../assets/icons/footer_facebook_icon.png";
import instagramIcon from "../../assets/icons/footer_insta_icon.png";
import linkedIcon from "../../assets/icons/footer_linkedIn_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="left_side">
          <div>
            <div className="office">
              <ul>
                <li>Office</li>
                <li>
                  1161 40th Avenue NE <br /> Calgary, Alberta T2E 6M9
                </li>
              </ul>
            </div>
            <div className="phone_email">
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
              <ul>
                <li>(403) 769 - 1799</li>
                <li className="email">info@orionsafety.ca</li>
              </ul>
            </div>
          </div>
          <div className="working_days">
            <ul>
              <li>Weekdays</li>
              <li>Weekends</li>
              <li className="social">Social Media</li>
            </ul>
            <ul>
              <li>8:00am - 4:30pm</li>
              <li>Call for hours</li>
              <li className="social">
                <ul>
                  <li>
                    <a href="">
                      <img src={facebookIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={instagramIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={linkedIcon} alt="" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <img src={footerLogo} alt="brand logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
