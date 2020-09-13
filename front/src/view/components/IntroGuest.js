import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
//import css
import "../../assests/css/IntroGuest.css";
import SignIn from "./Sign-In";
import { Parallax, Background } from "react-parallax";
//import picture 
import logo from "../../assests/picture/logo.png"
const IntroGuest = () => {
  const [state, setState] = useState({
    collapsed: false,
  });

  const handleTogglerClick = () => {
    setState((prevState) => ({ ...prevState, collapsed: !collapsed }));
  };

  // componentDidMount() {
  //   document.querySelector('nav').style.height = '65px';
  // }

  // componentWillUnmount() {
  //   document.querySelector('nav').style.height = 'auto';
  // }

  const { collapsed } = state;

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={handleTogglerClick}
    />
  );
  return (
    <div id="apppage">
      <div>
       
        {collapsed && overlay}
      </div>
      <Parallax
        blur={1}
        bgImage={require("../../assests/picture/coverHome1.jpg")}
        bgImageAlt="the cat"
        strength={100}
      >
        <MDBView>
         
          <MDBContainer
            style={{ height: "100vh", width: "100%" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <div className="introGuestContainer">
                  <h1 className="h5-responsive font-weight-bold mt-sm-5 IntroGuestTitle">
                    Find Your Best Events
                  </h1>
                  
                 <div className="buttonIntro">
                 <Link to="/SignUp"> <MDBBtn color="white">join us</MDBBtn> </Link>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                  </div>
                  </div>
                </MDBAnimation>
              
          </MDBContainer>
        </MDBView>
      </Parallax>
      
    
    </div>
  );
};

export default IntroGuest;
