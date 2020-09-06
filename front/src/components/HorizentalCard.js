import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HorizntalCard = (props) => {
  const {DataHorizentalCard}=props
  return (
  
     
      <MDBContainer fluid>
      
      <MDBContainer Style={{float:"right"}}>
          
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            
              <img
                className="img-fluid"
                src={`http://localhost:5000/${DataHorizentalCard.image}`}
                alt=""
              />
             
              
              <a >
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
  <strong>{DataHorizentalCard.title}</strong>
            </h3>
            <p className="dark-grey-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident et accusamus iusto odio dignissimos et dolorum
              fuga.
            </p>
            <p>
              by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
            </p>
            <Link to ={{
      pathname:`/MoreInformation/${DataHorizentalCard._id}`,
      state:{DataHorizentalCard}
  }}>
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        
      </MDBCardBody>
    </MDBCard>
    
    </MDBContainer>
    
    </MDBContainer>
  
    
  );
}

export default HorizntalCard;