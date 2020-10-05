import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h5>NavBar</h5>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
