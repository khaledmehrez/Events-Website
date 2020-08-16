import React, { Component } from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";

const SelectWithSearch =(props)=> {
 
  
    return (
        <div>
        <select className="browser-default custom-select">
        <option>Choose your option</option>
            {props.options.map(el=><option value={el.value}>{el.text}</option>)}
          
          
        </select>
      </div>
    );
  }


export default SelectWithSearch;