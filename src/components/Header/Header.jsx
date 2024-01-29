import "./Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerData from "../../utils/bannerData";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header_container">
      <Slider {...settings}>
        {bannerData.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="slider">
              <img className="banner_img" src={data.img} alt="banner" />
              <div className="container centered_text">
                <h1>{data.title}</h1>
                <p>{data.subTitle}</p>
                <button className="btn learn_more_btn">{data.btnText}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Header;
