import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBInput,
} from "mdbreact";


//import css
import "../../assests/css/BrowseAllEvents.css"
//impoert APi
import { getEventsAPi } from "../../api/apiEvents";

import { getCategorieAPi, getTypeAPi } from "../../api/Categorie&typeaApi";
import {getUsersApi} from "../../api/apiUsers"
//components
import Filter from "./filter";
import HorizntalCard from "../../components/HorizentalCard";

const BrowseAllEvents = () => {
  const [state, setState] = useState({
    prevPage: 0,
    nextPage: 5,
    itemPerPage: 5,
  });
  //get event
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);
  //pagnation
  const handleclick = (e) => {
    const { value } = e.target;
    console.log(value);

    setState((prevState) => ({
      ...prevState,
      prevPage: parseInt(value) - state.itemPerPage < 0 ? 0 : parseInt(value),
    }));
    setState((prevState) => ({
      ...prevState,
      nextPage: parseInt(value) === 0 ? 5 : parseInt(value) + state.itemPerPage,
    }));
  };
  //get categorie and type to create filter
  const CategorieState = useSelector((state) => state.CategorieState);
  const TypeState = useSelector((state) => state.TypeState);

  useEffect(() => {
    dispatch(getCategorieAPi());
    dispatch(getTypeAPi());
    window.scrollTo(0, 0)
  }, [dispatch]);
  //filter
  const [stateFilter, setStateFilter] = useState({
    titleFilter: "",
    typeFilter: "",
    categorieFilter: "",
    dateFilter: "",
    timeFilter: "",
    locationFilter: "",
    payementFilter: "",
  });
  const handlechangeFilter = (e) => {
    const { value, name } = e.target;
    setStateFilter((prevState) => ({ ...prevState, [name]: value }));
  };
  //filtered data
  const FiltredData = eventState
    .filter(
      stateFilter.titleFilter !== ""
        ? (el) => el.title.includes(stateFilter.titleFilter)
        : (el) => el
    )
    .filter(
      stateFilter.typeFilter !== "" &&
        stateFilter.typeFilter !== "search by Type"
        ? (el) => el.type === stateFilter.typeFilter
        : (el) => el
    )
    .filter(
      stateFilter.categorieFilter !== "" &&
        stateFilter.categorieFilter !== "search by Categorie"
        ? (el) => el.categorie === stateFilter.categorieFilter
        : (el) => el
    ).filter(
      stateFilter.dateFilter !== "" 
        ? (el) => el.date === stateFilter.dateFilter
        : (el) => el
    ).filter(
      stateFilter.timeFilter !== "" 
        ? (el) => el.time === stateFilter.timeFilter
        : (el) => el
    )
    .filter(
      stateFilter.payementFilter !== "" && stateFilter.payementFilter !== "all"
        ? (el) => el.payement === stateFilter.payementFilter
        : (el) => el
    );

    //get users

    const getusersState = useSelector((state) => state.getusersState);
  
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  return (
    <div>
     
      <MDBRow>
        <MDBCol md="3" className="filterBrowseAllEvnets"  style={{ backgroundColor: "#f5f5f5" }}>
          <div className="block-example border-right border-light h-100 w-100 p-3  ">
            <Filter handlechangeFilter={handlechangeFilter} />
          </div>
        </MDBCol>
        <MDBCol md="8"  style={{marginTop:"5%"}}>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Find Your Event
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <hr className="my-5" />

          {FiltredData.slice(state.prevPage, state.nextPage).map((el, i) => (
            <HorizntalCard
              DataHorizentalCard={el}
              DataHorizentalCard2={getusersState}
              index={i}
              number={state.number}
            />
          ))}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol style={{marginLeft:"55%",marginTop:"2%"}}>
          <MDBPagination className="mb-5  " color="blue">
           

            {eventState
              .slice(0, Math.ceil(FiltredData.length / state.itemPerPage))
              .map((el, i) => (
                <MDBPageItem active>
                  <MDBPageNav
                    value={i * state.itemPerPage}
                    onClick={handleclick}
                    tag="button"
                  >
                    {i}
                  </MDBPageNav>
                </MDBPageItem>
              ))}

            
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default BrowseAllEvents;
