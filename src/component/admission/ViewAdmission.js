import React, { useEffect } from 'react'
import { fetchViewAdmission } from '../../redux/admission/actions/viewAdmissionActions';
import { connect } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



function ViewAdmission({viewAdmissionData, fetchViewAdmission}) {
const data = viewAdmissionData;
console.log(data&&data,"gggggggggggggggggggggggggggggggggggggggg");


  useEffect(() => {
    fetchViewAdmission()
  }, [])

// console.log(viewAdmissionData.viewAdmissionSection,"nnnnnnnnnnnnnnnnnnn");
// console.log(viewAdmissionSection,"llllllllllllllll");
  console.log(viewAdmissionData,"ccccccccccccccccccccccccc");
  return (
    <div className='view'>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>



        {viewAdmissionData?.map((row,id) => (
            <TableRow
              key={id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone_number}</TableCell>
              <TableCell>
                <Link to={`useradmission/${row.id}`}>{"View"}</Link>
              </TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state?.viewAdmission?.viewAdmission?.message,"55555555555555555555555555555555555555555555555555555");
  console.log(state,"4444444444444");
  
  return {
    viewAdmissionData:state?.viewAdmission?.viewAdmission?.message
    
   
  }
}

const mapDispatchToProps  = (dispatch)=> {
 
  return{
    fetchViewAdmission:()=>dispatch(fetchViewAdmission())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAdmission)