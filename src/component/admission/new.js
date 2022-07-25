import React, { useEffect } from 'react'
import { fetchViewAdmission } from '../../redux/admission/actions/viewAdmissionActions';
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';  
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core/TableRow';  
import axios from 'axios';
// import { useState, useEffect } from 'react' 

const useStyles = makeStyles({  
  root: {  
    width: '100%',  
  },  
  container: {  
    maxHeight: 440,  
  },  
});

function ViewAdmission({viewAdmissionData, fetchViewAdmission}) {
const data = viewAdmissionData?.message;
console.log(data&&data[0],viewAdmissionData);

  useEffect(() => {
    fetchViewAdmission()
  }, [])

console.log(viewAdmissionData.viewAdmissionSection,"nnnnnnnnnnnnnnnnnnn");
// console.log(viewAdmissionSection,"llllllllllllllll");
  console.log(viewAdmissionData);

  return (
    <div className='view'>
      <Paper className={classes.root}>  
      <TableContainer className={classes.container}>  
        <Table stickyHeader aria-label="sticky table">  
        <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              <TableCell align="right">Name</TableCell>  
              <TableCell align="right">Phone number</TableCell>   
            </TableRow>  
          </TableHead>  
          <TableBody>  
          {/* {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {   */}
              return (  
           <TableRow >  
                <TableCell component="th" scope="row">  
                  {row.Id}  
                </TableCell>  
                <TableCell align="right">{row.name}</TableCell>  
                <TableCell align="right">{row.phone_number}</TableCell>   
              </TableRow>  
                 
              );  
            {/* })}   */}
          </TableBody>  
        </Table>  
      </TableContainer>  
      {/* <TablePagination  
        rowsPerPageOptions={[5, 10, 15]}  
        component="div"  
        count={data.length}  
        rowsPerPage={rowsPerPage}  
        page={page}  
        onChangePage={handleChangePage}  
        onChangeRowsPerPage={handleChangeRowsPerPage}  
      />   */}
    </Paper>  

        {/* <table> */}
            {/* <tr>
                <th>Student name</th>
                <th>Phone number</th>
                <th>Action</th>
            </tr> */}
            
        {/* </table> */}
      {/* <h1 className="main_heading">{data&&data[0].main_heading}</h1>
      <div className='main_details'>{data&&data[0].description}</div> */}

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.viewAdmission.viewAdmission.message,"mmmmmmmmmmmmmmmmmmmmm");
  console.log(state,"4444444444444");
  
  return {
    viewAdmissionData:state.viewAdmission.viewAdmission.message
    
   
  }
}

const mapDispatchToProps  = (dispatch)=> {
 
  return{
    fetchViewAdmission:()=>dispatch(fetchViewAdmission())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAdmission)