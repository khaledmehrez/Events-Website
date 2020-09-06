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
        .post("http://localhost:5000/Events/postEvents",data).then((res) => console.log(res));
        
  }

//delete Events
export function deleteEventsApi(i) {

  return () => {
    axios.delete(`http://localhost:5000/Events/deleteEvents/${i}`)
    window.location.reload()
  }

}


export function patchEventsToApi(data,id) {
 
 return () => {

    axios.patch(`http://localhost:5000/Events/patchEvents/${id}`,data ).then((res) =>
      console.log(res.data),

 
    );

  }

}
export function addReservationApi(data,id) {
 console.log(data)
  return () => {
 
     axios.patch(`http://localhost:5000/Events/addReservation/${id}`,data ).then((res) =>
       console.log(res.data),
 
  
     );
 
   }
 
 }