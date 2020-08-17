
import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const Map = (props) => {
    
     
     
  return (
    <GoogleMap
    google={props.google}
    defaultZoom={10}
   defaultCenter={{lat:36.806389, lng:10.181667}}
  />
  );
}

 const MapWrapped= withScriptjs(withGoogleMap(Map))

 export default MapWrapped