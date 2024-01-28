import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImg from "../../assets/images/product.png";
import productOne from "../../assets/images/product_item_one.png";
import productTwo from "../../assets/images/product_item_two.png";
import productThree from "../../assets/images/product_item_three.png";
import productFour from "../../assets/images/product_item_four.png";

import Slider from "react-slick";

const Product = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    // speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product">
      <div className="container product_container">
        <div className="left_side">
          <img src={productImg} alt="" />
        </div>
        <div className="slider_side">
          <Slider {...settings}>
            <div className="product_item">
              <img src={productOne} alt="Fire Suppression" />
              <p className="title">Fire Suppression</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="product_item">
              <img src={productTwo} alt="First Aid" />
              <p className="title">First Aid</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="product_item">
              <img src={productThree} alt="Safety Apparel" />
              <p className="title">Safety Apparel</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="product_item">
              <img src={productFour} alt="Visibility Aids" />
              <p className="title">Visibility Aids</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.t!
              </p>
            </div>
            <div className="product_item">
              <img src={productTwo} alt="First Aid" />
              <p className="title">First Aid</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="product_item">
              <img src={productFour} alt="Visibility Aids" />
              <p className="title">Visibility Aids</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.t!
              </p>
            </div>
            <div className="product_item">
              <img src={productOne} alt="Fire Suppression" />
              <p className="title">Fire Suppression</p>
              <p className="description">
                Duis aute irure dolor reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="view_more_btn">
        <button className="btn">
          <span>View More</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
