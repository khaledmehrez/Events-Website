import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBFormInline, MDBIcon, MDBInput, MDBContainer } from "mdbreact";

//import components

//import css
import "../../assests/css/filter.css"
//impoert APi
import {getCategorieAPi,getTypeAPi} from "../../api/Categorie&typeaApi"
import SelectWithSearch from "../../components/SelectWithSearch";
const Filter = (props) => {
    const dispatch=useDispatch()
  //STATE
  const [state,setState] =useState( {
    radio: 1
  }
  )
 const  onClick = nr => () => {
  setState((prevState) => ({ ...prevState,radio: nr }));
    
  }

  //get type and categorie
  const CategorieState = useSelector((state) => state.CategorieState);
  const TypeState = useSelector((state) => state.TypeState);

  useEffect(() => {
    dispatch(getCategorieAPi());
    dispatch(getTypeAPi());
  }, [dispatch]);

  return (
    <div className="containerFilter sticky-top">
       <div className="searchFilter">
      <MDBFormInline className="md-form  ">
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="titleFilter"
          onChange={props.handlechangeFilter}
        />
      </MDBFormInline>
      </div>
      <div className="filterType" >
      <SelectWithSearch options={TypeState} TitleSelect="search by Type" handlechange={props.handlechangeFilter}  name="typeFilter" className="  " />
      </div>
      <div className="filterCategorie">
      <SelectWithSearch options={CategorieState} TitleSelect="search by Categorie" handlechange={props.handlechangeFilter} name="categorieFilter" className="" />
      </div>
      <div className="filterDate">
      <input
                type="date"
                id="birthday"
                name="dateFilter"
                onChange={props.handlechangeFilter}
                className="form-control  "
              />
              </div>
              <div className="filterTime">
      <input
                type="time"
                id="birthday"
                name="timeFilter"
                onChange={props.handlechangeFilter}
                className="form-control  "
              />
              </div>
      <div className="payementFilter">


     
      <MDBInput onClick={onClick(1)} onChange={props.handlechangeFilter}  name="payementFilter" value="free" checked={state.radio===1 ? true : false} label="Free" type="radio"
        id="radio1" /><br/>
      <MDBInput onClick={onClick(2)} onChange={props.handlechangeFilter} checked={state.radio===2 ? true : false}  name="payementFilter" value="paying" label="Paying" type="radio"
        id="radio2" /><br/>
        <MDBInput onClick={onClick(3)} onChange={props.handlechangeFilter} checked={state.radio===3 ? true : false}  name="payementFilter" value="all" label="all" type="radio"
        id="radio3" />
     
  


    
     
      </div>
    </div>
  );
};

export default Filter;
