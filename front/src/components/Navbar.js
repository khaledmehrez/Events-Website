import React, { Component,useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import {  Link, BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import SignIn from "../view/components/Sign-In";
import SignUp from "../view/components/SignUp";

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
  const cookie1=  document.cookie;  
  document.cookie=cookie1+";max-age=0";  
  
}


const { isOpen } = state;
  return (
      
    
      <MDBNavbar color="default-color" dark expand="md" scrolling >
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
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
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                 <Link to="/MyEvents"> <MDBDropdownItem href="/MyEvents">My Events</MDBDropdownItem></Link>
                  <Link to= "/Home"><MDBDropdownItem onClick={deconection}>Deconection</MDBDropdownItem></Link>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>:
             <MDBNavbarNav right>
           
            <MDBNavItem>
            <SignIn/>
          </MDBNavItem>
           <MDBNavItem>
            <Link to="/SignUp"><MDBBtn color="primary">Sign-Up</MDBBtn></Link>
          </MDBNavItem>
          </MDBNavbarNav>
          
          }
          
        </MDBCollapse>
      </MDBNavbar>
      
   
    );
  }


export default Navbar;