import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news_letter">
      <div className="container news_letter_container">
        <div>
          <p className="title">Newsletter</p>
        </div>
        <div>
          <p className="details">
            Stay connected! Subscribe to our newsletter to stay informed of all
            the latest products and services.
          </p>
        </div>
        <div>
          <button className="btn sign_up_btn">
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
