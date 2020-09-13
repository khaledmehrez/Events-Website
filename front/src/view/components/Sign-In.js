import React, { Component,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';
// import css
import "../../assests/css/SignIn.css"
// import api
import {LoginApi} from "../../api/apiUsers"
const SignIn =()=> {

    //toggle the modal 
    const [state,setState]=useState({
        modal14: false
    })
    //dispatch
  const dispatch = useDispatch();

const toggle = nr => () => {
  
  setState(prevState => ({ ...prevState, modal14:!state.modal14 }))
 
}
//post userdata
const [stateLogin,setStateLogin]=useState({
    mail:"",
    password:""
})

function handlechange(e) {
      
    const { name, value } = e.target;
    setStateLogin((prevState) => ({ ...prevState, [name]: value }));
    console.log(e.target)
  }
function submit(){
    dispatch(LoginApi(stateLogin))
    
}  


  return (
      <MDBContainer>
        <MDBBtn color="light-blue lighten-1" onClick={toggle(14)}>Sign-In</MDBBtn>
        <MDBModal isOpen={state.modal14} toggle={toggle(14)} centered>
          <MDBModalHeader toggle={toggle(14)}>Sign-In</MDBModalHeader>
          <MDBModalBody>
         
      
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="mail"
                onChange={handlechange}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                name="password"
                onChange={handlechange}
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={submit}
                >
                  Sign in
                </MDBBtn>
              </div>
              {/* <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div> */}
            </MDBCardBody>
            {/* <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter> */}
          </MDBCard>
        
   
          </MDBModalBody>
         
        </MDBModal>
      </MDBContainer>
    );
  }


export default SignIn;