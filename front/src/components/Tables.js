import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';

const TablePage = (props) => {
  const data={
     columns: [
    {
      label: 'Title',
      field: 'title',
      sort: 'asc'
    },
    {
      label: 'Date',
      field: 'date',
      sort: 'asc'
    },
    {
      label: 'View Event',
      field: 'btn',
      sort: 'asc'
    }
  ],

  rows : props.dataForTable
}

  return(
    <MDBDataTable 
     data={data}  striped
    bordered btn/>
      
    
  );
};

export default TablePage;
