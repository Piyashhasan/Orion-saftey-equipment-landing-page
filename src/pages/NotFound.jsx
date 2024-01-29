import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 not found ...!</h1>
      <p>Please type right url</p>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
