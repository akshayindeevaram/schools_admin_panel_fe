import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux'
import { fetchViewAdmission } from '../../redux/admission/actions/viewAdmissionActions';
import { useParams } from 'react-router-dom';



function ViewUserAdmission({viewAdmissionData, fetchViewAdmission}) {
  const {id} =  useParams()
const [userdetails, setuserdetails] = useState([])
const data = viewAdmissionData;
// console.log(data&&data,"gggggggggggggggggggggggggggggggggggggggg");

console.log("hai");
function fetchuser(){
   
   const [datauser] =  data?.filter(item =>{
    return item.id == id

  }
   )
  //  console.log(datauser,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    setuserdetails(datauser);
}

useEffect(() => {
    fetchViewAdmission()
    fetchuser()
  }, [])

  // console.log(viewAdmissionData,"ccccccccccccccccccccccccc");

  return (
    <div className='viewuser'>
       <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Qualification</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            
          {/* {viewAdmissionData?.map((row,id) => ( */}
            <TableRow
              // key={"row.id"}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {userdetails.id}
              </TableCell> */}
              <TableCell>{userdetails?.id}</TableCell>
              <TableCell>{userdetails?.name}</TableCell>
              <TableCell>{userdetails?.phone_number}</TableCell>
              <TableCell>{userdetails?.qualification}</TableCell>
              <TableCell>{userdetails?.result}</TableCell>
            </TableRow>
          {/* ))} */}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewUserAdmission)
