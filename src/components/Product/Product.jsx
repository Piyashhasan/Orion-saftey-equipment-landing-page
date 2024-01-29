import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImg from "../../assets/images/product.png";
import Slider from "react-slick";
import productItemData from "../../utils/productItem";

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
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
            {productItemData.map((item, index) => {
              return (
                <div key={index} className="product_item">
                  <img src={item.img} alt={item.title} />
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                </div>
              );
            })}
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
