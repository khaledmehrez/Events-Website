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
       
        <MDBModal isOpen={open}  centered >
          <MDBModalHeader>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            {props.body}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={handleClose}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }


export default PopupModal;