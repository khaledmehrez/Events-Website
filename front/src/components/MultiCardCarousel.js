import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = (props) => {
    const data=props.DataMultiCardCarousel
    const id=props.id
  return (
    <MDBRow>
        <MDBCol >
            <MDBCarouselItem itemId={id}>
              
                <MDBCard wide={true} className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>{data.title}</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              
              
              
              
            </MDBCarouselItem>
            </MDBCol>
            </MDBRow>
            
           
       
  );
}

export default MultiCarouselPage;