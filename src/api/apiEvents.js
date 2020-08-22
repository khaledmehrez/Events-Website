import axios from "axios";

//import Actions
import {getEventsAction} from "../action/eventAction"
//get all events from api
export function getEventsAPi() {
    return (dispatch) =>
      axios
        .get("http://localhost:5000/Events/getEvents")
        .then((res) => dispatch(getEventsAction(res.data)));
  }

  export function PostEventsAPi(data) {
    console.log(data)
    return () =>
    
      axios
        .post("http://localhost:5000/Events/postEvents",data)
        
  }

//delete Events
export function deleteEventsApi(i) {

  return () => {
    axios.delete(`http://localhost:5000/Events/deleteEvents/${i}`)
    window.location.reload()
  }

}


export function patchEventsToApi(id, name, reference, color, quantity, phase, dimension, marque, type, collection, locallisation, carton, image, commentaire) {


  return () => {

    axios.patch(`http://localhost:5000/Events/patchEvents/${id}`, {


      name: name,
      reference: reference,
      color: color,
      quantity: quantity,
      phase: phase,
      dimension: dimension,
      marque: marque,
      type: type,
      collection: collection,
      locallisation: locallisation,
      carton: carton,
      image: image,
      commentaire: commentaire,


    }).then((res) =>
      console.log(res.data),

 
    );

  }

}