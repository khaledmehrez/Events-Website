import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBFormInline } from 'mdbreact';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ModalPage =(props)=> {
    const [state, setState] = useState({
        modal:false
    }
    );

const toggle = () => {
    setState((prevState) => ({ ...prevState, modal: !state.modal }));
  
}

const {DataModal}=props;
console.log(DataModal._id)
  return (
    <MDBContainer>
      <MDBBtn onClick={()=>{toggle();props.modalMethod()}}>{props.modalBtnTitle}</MDBBtn>
      <MDBModal isOpen={state.modal} toggle={toggle} fullHeight position={props.fullHeightPosition}>
        <MDBModalHeader toggle={toggle}>{props.modalBtnTitle}</MDBModalHeader>
        <MDBModalBody>

          {DataModal.map(el=>el.map(el=> 
          <MDBFormInline>
          <Link to ={{
      pathname:`/Profile/${el._id}`,
      
  }}> <p>{el.mail}</p></Link>
  <MDBBtn onClick={()=>{props.modalMethod2(el._id)}} >x</MDBBtn>
  </MDBFormInline>
  ))}
        </MDBModalBody>
        
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }


export default ModalPage;