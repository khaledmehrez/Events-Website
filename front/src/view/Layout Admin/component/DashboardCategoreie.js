import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer, MDBBtn} from
'mdbreact';

import TablePage from "../../../components/Tables";


//api

import { Link } from "react-router-dom";
import {getCategorieAPi,getTypeAPi} from "../../../api/Categorie&typeaApi"


const DashboardCategorie =()=> {
  // get categorie and type
  const dispatch=useDispatch()
  const CategorieState = useSelector((state) => state.CategorieState);
  const TypeState = useSelector((state) => state.TypeState);

  useEffect(() => {
    dispatch(getCategorieAPi());
    dispatch(getTypeAPi());
  }, [dispatch]);
  
//row Categorie
  const ArrayCategore=[]
  CategorieState.map((el) =>
    ArrayCategore.push({
        text: el.text,
       value: el.value,
       
        btn: (
          
            <MDBBtn>X</MDBBtn>
          
        ),
      })
    )
// row type
const ArrayType=[]
  TypeState.map((el) =>
    ArrayType.push({
        text: el.text,
       value: el.value,
       
        btn: (
          
            <MDBBtn>X</MDBBtn>
          
        ),
      })
    )
    //colomns
    const columns= [
      {
        label: 'Name',
        field: 'text',
        sort: 'asc'
      },
     
      {
        label: 'Value',
        field: 'value',
        sort: 'asc'
      },
      
      {
        label: 'View users',
        field: 'btn',
        sort: 'asc'
      }
    ]
    
    return (
     <MDBContainer>
       <strong>Show Categorie</strong>
      <TablePage dataForTable={ArrayCategore} columns={columns} />
      <hr/>
      <TablePage dataForTable={ArrayType} columns={columns} />
      </MDBContainer>
    );
  }


export default DashboardCategorie
