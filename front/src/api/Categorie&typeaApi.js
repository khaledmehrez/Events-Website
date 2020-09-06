import axios from "axios";

//import Actions
import {getCategoriesAction,getTypesAction} from "../action/categorie&typeAction"
//get all events from api
export function getCategorieAPi() {
    return (dispatch) =>
      axios
        .get("http://localhost:5000/Categorie/getCategorie")
        .then((res) => dispatch(getCategoriesAction(res.data[0].Categorie)));
  }

  //get all events from api
export function getTypeAPi() {
    return (dispatch) =>
      axios
        .get("http://localhost:5000/type/gettype")
        .then((res) => dispatch(getTypesAction(res.data[0].type)));
  }