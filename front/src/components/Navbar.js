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
  
 // document.cookie=document.cookie+";max-age=0";  
 sessionStorage.removeItem('token')
 window.location.assign('http://localhost:3000/Home')
}


const { isOpen } = state;
  return (
      
    
      <MDBNavbar color="blue darken-4" dark expand="md" scrolling >
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
            <Link to="/SignUp"><MDBBtn color="cyan lighten-5">Sign-Up</MDBBtn></Link>
          </MDBNavItem>
          </MDBNavbarNav>
          
          }
          
        </MDBCollapse>
      </MDBNavbar>
      
   
    );
  }


export default Navbar;