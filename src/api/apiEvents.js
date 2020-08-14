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
    return () =>
      axios
        .post("http://localhost:5000/Events/postEvents",data)
        .then((res) => console.log("dgdg"));
  }

