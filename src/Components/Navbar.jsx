import "../style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="">
        <h1>Venor</h1>
      </div>

      <div className="right-nav">
        <input className="input-btn" type="text" placeholder="Search" />
        <ul className="list-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/card">Portfolio</Link>
          </li>
          <li>
            <Link to="/fact">Pricing</Link>
          </li>
          <li>
            <Link to="/news">Blog</Link>
          </li>
          <li>
            <Link to="/footer">Contact</Link>
          </li>
        </ul>
        <button className="list-btn">Start a project</button>
      </div>
    </div>
  );
};

export default Navbar;
