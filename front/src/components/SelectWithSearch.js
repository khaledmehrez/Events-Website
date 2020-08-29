import React, { Component } from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";

const SelectWithSearch =(props)=> {
 
  
    return (
        <div>
        <select className="browser-default custom-select" onChange={props.handlechange} name={props.name}>
        <option>Choose your option</option>
            {props.options.map(el=><option value={el.text}>{el.text}</option>)}
          
          
        </select>
      </div>
    );
  }


export default SelectWithSearch;