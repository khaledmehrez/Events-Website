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

function deleteEvents(e){
dispatch(deleteEventsApi(e.target.value))

}








    const DataSmallCard=props.DataSmallCard
  return (
    
   
    
    <MDBAnimation reveal type="tada">
        <MDBCard className="shadow-box-example z-depth-5 SmallCard" style={{ width: "20rem",height:"70vh" }}
        border="blue"
       
        >
          <Link to ={{
      pathname:`/MoreInformation/${DataSmallCard._id}`,
      state:{DataSmallCard}
  }}>
          <MDBCardImage
            className="img-fluid SmallCardImg"
            src={`http://localhost:5000/${DataSmallCard.image}`}
            waves
          >
            
          </MDBCardImage>
          </Link>
          <MDBCardBody  className='text-center'>
          <p className="red-text CardTitle">{DataSmallCard.title}</p>
          
            
            <MDBCardText>
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0,float:"left" }} alt="" />
             
             
            </MDBCardText>
            <hr /><br/>




           <p className="font-weight-bold deep-orange-text">
                      <MDBIcon icon="tag" className="pr-2" />
                      {DataSmallCard.categorie}
                    </p>
                  
                    <p className="font-weight-bold deep-orange-text">
                      <MDBIcon icon="tag" className="pr-2" />
                      {DataSmallCard.type}
                    </p>
                    
                    <p className="brown-text">{`Date:${DataSmallCard.date}`}</p>


           {DataSmallCard.iduser===props.idUser? <div>
            <hr />
            
            <MDBBtn value={DataSmallCard._id}   onClick={deleteEvents} ><MDBIcon far icon="trash-alt" /></MDBBtn>
            <MDBBtn rounded ><MDBIcon far icon="edit" /></MDBBtn>
            </div>:null}
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
        
        
        
      
    
  )
}

export default SmallCard;