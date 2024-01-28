import "./Services.css";
import salesIcon from "../../assets/icons/sales_icon.png";
import rentalsIcon from "../../assets/icons/rental_icon.png";
import servicesIcon from "../../assets/icons/service_icon.png";

const Services = () => {
  return (
    <div className="services_container">
      <div className="sales">
        <div className="common_effect">
          <img className="icon" src={salesIcon} alt="sales" />
          <h3>Sales</h3>
          <p>
            We believe in providing our customers with a high quality product at
            an affordable price. We use only quality name brand products.
          </p>
        </div>
        <div className="overlay overly_sales">
          <h3>Sales</h3>
          <p>
            We believe in providing our customers with a high quality product at
            an affordable price. We use only quality name brand products.
          </p>
          <button className="btn learn_more_btn">
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className="rentals">
        <div className="common_effect">
          <img className="icon" src={rentalsIcon} alt="rentals" />
          <h3>Rentals</h3>
          <p>
            Rentals We know it is not always economical to purchase new
            equipment, thats why we offer a variety of rental options with
            daily, weekly.
          </p>
        </div>
        <div className="overlay overly_rental">
          <h3>Rentals</h3>
          <p>
            Rentals We know it is not always economical to purchase new
            equipment, thats why we offer a variety of rental options with
            daily, weekly.
          </p>
          <button className="btn learn_more_btn">
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className="services">
        <div className="common_effect">
          <img className="icon" src={servicesIcon} alt="services" />
          <h3>Service</h3>
          <p>
            We are not just your average safety store! Our experts know what you
            are looking for and we can show you how to use it—properly.
          </p>
        </div>
        <div className="overlay overly_services">
          <h3>Service</h3>
          <p>
            Rentals We know it is not always economical to purchase new
            equipment, thats why we offer a variety of rental options with
            daily, weekly.
          </p>
          <button className="btn learn_more_btn">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
