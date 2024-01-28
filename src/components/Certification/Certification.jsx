import "./Certificate.css";
import certificateImg from "../../assets/images/certificate.png";
import calibrationImg from "../../assets/images/calibration.png";

const Certification = () => {
  return (
    <div className="container">
      <div className="certificate_container">
        <div className="card">
          <div className="inner">
            <img src={certificateImg} alt="Avatar" style={{}} />
          </div>
          <div className="card_body">
            <p className="title">Certification</p>
            <p className="description">
              We’re not just your average safety store! Our experts know what
              you’re looking for and we can show you how to use it—properly. We
              also recertify what we sell. Check out our list of what we can
              recertify in our shop.
            </p>
            <button className="btn">
              <span>Learn More</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="inner">
            <img src={calibrationImg} alt="Avatar" style={{}} />
          </div>
          <div className="card_body">
            <p className="title">Calibration</p>
            <p className="description">
              You expect to receive accurate performance from your detectors and
              monitors so you can trust your readings. We can service, repair
              and calibrate all varieties of gas monitors such as MSA, BW, and
              Dräger.
            </p>
            <button className="btn">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
