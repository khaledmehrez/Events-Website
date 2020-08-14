import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';
import { Link } from 'react-router-dom';

const SmallCard = (props) => {

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
            <MDBBtn gradient="purple">Purple</MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        
      
    
  )
}

export default SmallCard;