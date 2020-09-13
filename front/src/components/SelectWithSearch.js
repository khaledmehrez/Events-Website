import React, { Component } from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";

const SelectWithSearch =(props)=> {
 console.log(props.options)
  
    return (
        <div>
        <select className="browser-default custom-select" onChange={props.handlechange} name={props.name}>
        <option>{props.TitleSelect}</option>
        <hr className="my-5"/>
            {props.options.map(el=><option value={el.text}>{el.text}</option>)}
          
          
        </select>
      </div>
    );
  }


export default SelectWithSearch;