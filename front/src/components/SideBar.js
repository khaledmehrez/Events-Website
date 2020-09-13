import React from "react";

import { push as Menu } from "react-burger-menu";
import "../assests/css/SideBar.css";
import { Link } from "react-router-dom";
import { MDBNavbarBrand, MDBNavbar, MDBBtn } from "mdbreact";
const SideBar = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };
  const deconection = () => {
    // document.cookie=document.cookie+";max-age=0";
    sessionStorage.removeItem("token");
    window.location.assign("http://localhost:3000/Home");
  };

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <div className="ContainerSideBar">
        <div>
          <Link to="/DashboardUser">
            {" "}
            <a id="home" className="menu-item" href="/">
              DashboardUser
            </a>
          </Link>
        </div>
        <div>
        <Link to="DashboardEvents">
          <a id="about" className="menu-item" href="/about">
            DashboardEvents
          </a>{" "}
        </Link>
        </div>
        <div>
        <Link to="/DashboardCategorie">
          {" "}
          <a id="contact" className="menu-item" href="/contact">
            DashboardCategorie
          </a>{" "}
        </Link>
        </div>
        <div>
        <MDBBtn onClick={deconection}>LOG-OUT</MDBBtn>
        </div>
      </div>
    </Menu>
  );
};
export default SideBar;
