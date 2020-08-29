import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useState } from 'react';

const ModalPage =(props)=> {
    const [state, setState] = useState({
        modal:false
    }
    );

const toggle = () => {
    setState((prevState) => ({ ...prevState, modal: !state.modal }));
  
}

const {DataModal}=props;
console.log(DataModal)
  return (
    <MDBContainer>
      <MDBBtn onClick={()=>{toggle();props.modalMethod()}}>Modal</MDBBtn>
      <MDBModal isOpen={state.modal} toggle={toggle} fullHeight position={props.fullHeightPosition}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          {DataModal.map(el=>el.map(el=><h1>{el.mail}</h1>))}
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