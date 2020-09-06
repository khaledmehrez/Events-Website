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

//import components
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HorizntalCard from "../../components/HorizentalCard";
import SmallCard from "../../components/SmallCard";
//import css

//impoert APi
import { getEventsAPi } from "../../api/apiEvents";

import { getCategorieAPi, getTypeAPi } from "../../api/Categorie&typeaApi";
import Filter from "./filter";
const BrowseAllEvents = () => {
  const [state, setState] = useState({
    prevPage: 0,
    nextPage: 5,
    itemPerPage: 5,
  });
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);
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
    )
    .filter(
      stateFilter.payementFilter !== "" && stateFilter.payementFilter !== "all"
        ? (el) => el.payement === stateFilter.payementFilter
        : (el) => el
    );
  return (
    <div>
      <Navbar />
      <MDBRow>
        <MDBCol size="3.5" style={{ backgroundColor: "#2196f3" }}>
          <div className="block-example border-right border-light h-100 w-100 p-3  ">
            <Filter handlechangeFilter={handlechangeFilter} />
          </div>
        </MDBCol>
        <MDBCol>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
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
              index={i}
              number={state.number}
            />
          ))}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBPagination className="mb-5 float-right" color="blue">
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">Previous</span>
              </MDBPageNav>
            </MDBPageItem>

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

            <MDBPageItem>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">Next</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default BrowseAllEvents;
