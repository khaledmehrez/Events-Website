import React, { Component,useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import {  Link, BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import SignIn from "../view/components/Sign-In";
import SignUp from "../view/components/SignUp";
//import picture
import logo from "../assests/picture/logo.png"
const Navbar=()=>  {
  
  //toggle
    const [state,setState]=useState({
        isOpen: false
    })
//get user data
    const userState = useSelector((state) => state.userState);

const toggleCollapse = () => {
    setState(prevState => ({ ...prevState, isOpen: !isOpen }))
  
}
const deconection=()=>{
  
 // document.cookie=document.cookie+";max-age=0";  
 sessionStorage.removeItem('token')
 window.location.assign('http://localhost:3000/Home')
}


const { isOpen } = state;
  return (
      
    
      <MDBNavbar color="grey lighten-4"   expand="md" scrolling style={{height:"10vh"}} >
        <MDBNavbarBrand>
        <span>
              <img src={logo}  alt="" width="80px" height="70px" />

              </span>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <Link to="/Home"> <MDBNavLink to="/Home">Home</MDBNavLink></Link>
            </MDBNavItem>
            
          </MDBNavbarNav>
          
            
           
            {userState.role!==undefined?
            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default"  right>
                <Link to ={{
      pathname:`/Profile/${userState._id}`,
      
  }}>
                  <MDBDropdownItem >Profile</MDBDropdownItem>
                  </Link>
                 <Link to="/MyEvents"> <MDBDropdownItem >My Events</MDBDropdownItem></Link>
                 <MDBDropdownItem onClick={deconection}>Deconection</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>:
             <MDBNavbarNav right>
           
            <MDBNavItem>
            <SignIn/>
          </MDBNavItem>
           <MDBNavItem>
            <Link to="/SignUp"><MDBBtn color="light-blue lighten-1">Sign-Up</MDBBtn></Link>
          </MDBNavItem>
          </MDBNavbarNav>
          
          }
          
        </MDBCollapse>
      </MDBNavbar>
      
   
    );
  }


export default Navbar;