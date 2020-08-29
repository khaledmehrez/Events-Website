import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
//import api
import {deleteEventsApi} from "../api/apiEvents"


var jwtDecode = require('jwt-decode');
const SmallCard = (props) => {

const dispatch=useDispatch()

function deleteEvents(e){
dispatch(deleteEventsApi(e.target.value))

}








    const DataSmallCard=props.DataSmallCard
  return (
    
   
    
   
        <MDBCard style={{ width: "15rem" }}
        border="blue"
       
        >
          <Link to ={{
      pathname:`/MoreInformation/${DataSmallCard._id}`,
      state:{DataSmallCard}
  }}>
          <MDBCardImage
            className="img-fluid"
            src="https://image.freepik.com/free-vector/technology-conference-poster-template_1361-1211.jpg"
            waves
          >
            
          </MDBCardImage>
          </Link>
          <MDBCardBody  className='text-center'>
            <MDBCardText>
              Date
             
            </MDBCardText>
            <hr />
           
           
           


           {DataSmallCard.iduser===props.idUser? <div>
            <hr />
            
            <MDBBtn value={DataSmallCard._id}   onClick={deleteEvents} ><MDBIcon far icon="trash-alt" /></MDBBtn>
            <MDBBtn rounded ><MDBIcon far icon="edit" /></MDBBtn>
            </div>:null}
          </MDBCardBody>
        </MDBCard>
        
        
      
    
  )
}

export default SmallCard;