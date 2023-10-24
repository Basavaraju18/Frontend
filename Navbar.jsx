import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className="navBar">
        <h4> Spring-boot React Full Stack Application</h4>
      </div>

      <div className="section-2">
        <img
          data-hw="2.212"
          alt="Pes University"
          class="btMainLogo ls-is-cached lazyloaded"
          src="https://www.admissionindia.net/uploads/colleges/12/logo.png"
        ></img>

        <ul>
          <li>
            <Link className="btn btn-outline-light" to="/Addpeople">
              Add People
            </Link>
          </li>
          <li>
            {" "}
            <Link className="btn btn-outline-light" to="/GetallPeople">
              Get All People
            </Link>
          </li>
          <li>
            {" "}
            <button className="btn btn-outline-light"> Statistics</button>
          </li>
          <li>
            {" "}
            <button className="btn btn-outline-light">Settings</button>
          </li>
          <li>
            {" "}
            <button className="btn btn-outline-light">Profile</button>
          </li>
          <li>
            {" "}
            <button className="btn btn-outline-light">Log Out</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
