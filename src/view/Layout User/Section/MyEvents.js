import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn } from "mdbreact";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";





//import css

//impoert APi



const MyEvents =()=> {
  
  

    return (
      <div >
     <Navbar/>
     <Link to="/CreateEvents"><MDBBtn gradient="peach">Create New Event</MDBBtn></Link>
    
    
    
     
     
     
     </div>

    );
  }


export default MyEvents;