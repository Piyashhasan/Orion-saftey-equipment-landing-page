import protectionImg from "../../assets/images/protection.png";

const Protection = () => {
  return (
    <div className="container">
      <div className="safety_shop_container">
        {/* --- left side start --- */}
        <div className="right_side">
          <p className="title">Protection Is What We Do Best</p>
          <div className="description">
            <p>
              Occupational hazards can be controlled and minimized in even the
              most dangerous situations: we know what’s needed to outfit your
              space for hazard detection, safety and response, and are
              experienced in a range of environments, including gasplants,
              schools, warehouses, factories, retail outlets, mines,
              laboratories, and everyday work spaces.
            </p>
            <br />
            <p>
              {/* Whether it’s personal protective equipment, SCBA, fire prevention,
              gas detection, fall protection or emergency rescue gear, safety in
              your environment is our goal. Give us a call anytime. We
              appreciate your business and look forward to hearing from you! */}
              We work with an elite group of safety equipment suppliers to
              ensure we can provide you with a range of quality products. Over
              eighty percent of what we sell is made and sourced locally or
              domestically. We also recertify what we sell. Without compromise:
              the personal safety of yourself and those around you deserve
              nothing less.
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

        {/* --- left side end --- */}

        {/* --- right side start --- */}
        <div className="left_side">
          <img src={protectionImg} alt="protectionImg equipment" />
        </div>
        {/* --- right side end --- */}
      </div>
    </div>
  );
};

export default Protection;
