import "./TopNav.css";
import locationIcon from "../../assets/icons/location_icon.png";
import telePhoneIcon from "../../assets/icons/call_icon.png";
import emailIcon from "../../assets/icons/email_icon.png";
import facebookIcon from "../../assets/icons/facebook_icon.png";
import instagramIcon from "../../assets/icons/insta_icon.png";
import linkedInIcon from "../../assets/icons/linkedIn_icon.png";

const TopNav = () => {
  return (
    <div className="top_nav">
      {/* --- set background start --- */}
      <div className="set_background">
        <div className="left_side"></div>
        <div className="right_side"></div>
      </div>
      {/* --- set background end --- */}

      <div className="container top_nav_wrapper">
        {/* --- left side start --- */}
        <div className="left_side">
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
        </div>
        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="right_side">
          <ul>
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
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default TopNav;
