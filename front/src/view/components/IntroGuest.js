import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
  MDBAnimation
} from 'mdbreact';
//import css
import "../../assests/css/IntroGuest.css"
import SignIn from "./Sign-In";
import { Parallax, Background } from 'react-parallax';



const IntroGuest =()=> {
  const [state,setState]=useState({
    collapsed: false
})


 
  const handleTogglerClick = () => {
    setState(prevState => ({ ...prevState, collapsed: !collapsed }))
    
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
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={handleTogglerClick}
      />
    );
    return (
      <div id='apppage'>
        
          <div>
            <MDBNavbar
             
             color='primary-color'
             dark
             expand='md'
             fixed='top'
             scrolling
             transparent
             
              
              
             
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'>Logo</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='/Home'>Home</MDBNavLink>
                    </MDBNavItem>
                    
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      
                        
                         <SignIn/>
                       
                     
                    </MDBNavItem>
                    <MDBNavItem>
                      
                        
                   <Link to="/SignUp">  <MDBBtn color="primary" >Sign-up</MDBBtn></Link>
                       
                     
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
          <Parallax
     blur={1}
     bgImage={require("../../assests/picture/background4.jpg")}
     bgImageAlt="the cat"
     strength={1000}
 >
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                   Find Your Best Events
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <MDBBtn color='white'>join us</MDBBtn>
                  <MDBBtn outline color='white'>
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
</Parallax>
        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr/>
      </div>
      
    );
  }


export default IntroGuest;