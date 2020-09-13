import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBFormInline, MDBAnimation } from
'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
//import api
import {deleteEventsApi} from "../api/apiEvents"

//import css
import "../assests/css/SmallCard.css"


var jwtDecode = require('jwt-decode');
const SmallCard = (props) => {

const dispatch=useDispatch()








    const DataSmallCard=props.DataSmallCard
  return (
    
   
    
    <MDBAnimation reveal type="zoomIn">
        <MDBCard className="shadow-box-example z-depth-0 SmallCard" style={{ width: "20rem",height:"56vh" }}
        border="blue"
       
        >
          <Link to ={{
      pathname:`/MoreInformation/${DataSmallCard._id}`,
      state:{DataSmallCard}
  }}>
          <MDBCardImage
           className="img-fluid "
            className="img-fluid SmallCardImg"
            src={`http://localhost:5000/${DataSmallCard.image}`}
            waves
          >
            
          </MDBCardImage>
          </Link>
          <MDBCardBody  className='text-center'>
          <p className="red-text CardTitle">{DataSmallCard.title}</p>
         <MDBRow>
           <MDBCol size="2">
           <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0,float:"left" }} alt="" />
             
            
           </MDBCol>
           <MDBCol size="10">

           <hr /><br/>
           </MDBCol>
         </MDBRow>
       



          <MDBRow>
            <MDBCol>
         <p className="deep-orange-text">
                      <MDBIcon icon="tag" className="pr-2" />
                      {DataSmallCard.categorie}
                    </p>
                    </MDBCol>
                    <MDBCol>
                    <p className=" deep-orange-text">
                      <MDBIcon icon="tag" className="pr-2" />
                      {DataSmallCard.type}
                    </p>
                    </MDBCol>
                    </MDBRow>
                    <strong className="brown-text">{`Date:${DataSmallCard.date} ${DataSmallCard.time}`}</strong>


           
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
        
        
        
      
    
  )
}

export default SmallCard;