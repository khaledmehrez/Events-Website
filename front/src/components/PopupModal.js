import React, { Component, useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const PopupModal =(props)=> {
  const [open, setOpen] = React.useState(props.isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (props) => {
    setOpen(false);
  };


  return (
      <MDBContainer>
       <MDBBtn color="light-blue lighten-1" onClick={handleClickOpen}>{props.PopUpTitle}</MDBBtn>
        <MDBModal isOpen={open}  centered >
          <MDBModalHeader  ></MDBModalHeader>
          <MDBModalBody>
            {props.PopUpBody}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={handleClose}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={()=>{props.MethodePopup1(props.IdToCancel);handleClose()}}>ok</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }


export default PopupModal;