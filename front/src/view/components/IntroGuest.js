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
        <MDBNavbar
          color="primary-color"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="white-text">Logo</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/Home">Home</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <SignIn />
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/SignUp">
                    {" "}
                    <MDBBtn color="cyan lighten-5">Sign-up</MDBBtn>
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed && overlay}
      </div>
      <Parallax
        blur={1}
        bgImage={require("../../assests/picture/thisday.jpg")}
        bgImageAlt="the cat"
        strength={1000}
      >
        <MDBView>
          <MDBMask className="white-text gradient" />
          <MDBContainer
            style={{ height: "100vh", width: "100%" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5 IntroGuestTitle">
                    Find Your Best Events
                  </h1>
                  
                 
                 <Link to="/SignUp"> <MDBBtn color="white">join us</MDBBtn> </Link>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              
          </MDBContainer>
        </MDBView>
      </Parallax>
      
    
    </div>
  );
};

export default IntroGuest;
