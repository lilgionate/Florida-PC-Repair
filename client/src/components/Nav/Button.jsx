import { Link } from "react-router-dom";
import "./Button.scss";

function Button() {
  return (
    <Link to="signup">
      <button className="nav-btn">Shop Now</button>
    </Link>
  );
}

export default Button;