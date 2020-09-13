import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';

const TablePage = (props) => {
  const data={
     columns: props.columns,

  rows : props.dataForTable
}

  return(
    <MDBDataTable 
     data={data}  striped
    bordered btn/>
      
    
  );
};

export default TablePage;
