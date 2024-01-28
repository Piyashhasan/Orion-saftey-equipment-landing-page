import "./SafetyShop.css";
import safetyShopImg from "../../assets/images/saftey_section.png";

const SafetyShop = () => {
  return (
    <div className="container">
      <div className="safety_shop_container">
        {/* --- left side start --- */}
        <div className="left_side">
          <img src={safetyShopImg} alt="safety equipment" />
        </div>
        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="right_side">
          <p className="title">Your One Stop Safety Shop</p>
          <div className="description">
            <p>
              Accidents or injuries are easily avoided with the right knowledge,
              advice, and equipment in the workplace. Orion Safety Ltd. located
              in Calgary, Alberta is an established Western Canadian leader in
              safety products and services since 2007. With over 30 years of
              safety experience, our experts work closely with you to ensure you
              have the tools, knowledge, and procedures needed to ensure the
              well-being of your staff.
            </p>
            <br />
            <p>
              Whether it’s personal protective equipment, SCBA, fire prevention,
              gas detection, fall protection or emergency rescue gear, safety in
              your environment is our goal. Give us a call anytime. We
              appreciate your business and look forward to hearing from you!
            </p>
          </div>
          <div className="button_group">
            <button className="btn">
              <span>Learn More</span>
            </button>
            <button className="btn get_touch_btn">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default SafetyShop;
