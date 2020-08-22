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
    
   

    <MDBCol md="4"  >
        <MDBCard style={{ width: "20rem" }} >
          <MDBCardImage
            className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
            tag='div'
          >
            <h2>{DataSmallCard.title}</h2>
            <p>Deserves her own card</p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Date
             
            </MDBCardText>
            <hr />
            <Link to ={{
            pathname:`/MoreInformation/${DataSmallCard._id}`,
            state:{DataSmallCard}
        }}>
            <MDBBtn  gradient="purple">Purple</MDBBtn>
            </Link>


           {DataSmallCard.iduser===props.idUser? <div>
            <hr />
            
            <MDBBtn value={DataSmallCard._id}   onClick={deleteEvents} ><MDBIcon far icon="trash-alt" /></MDBBtn>
            <MDBBtn rounded ><MDBIcon far icon="edit" /></MDBBtn>
            </div>:null}
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        
      
    
  )
}

export default SmallCard;