import axios from "axios";
import {
  FETCH_VIEW_ADMISSION_FAILURE,
  FETCH_VIEW_ADMISSION_REQUEST,
  FETCH_VIEW_ADMISSION_SUCCESS,
  FETCH_VIEW_ADMISSION_DATA,
} from "../viewAdmissionTypes";

export const fetchViewAdmissionRequest = () => {
  return {
    type: FETCH_VIEW_ADMISSION_REQUEST,
  };
};

export const fetchViewAdmissionSuccess = (viewAdmission) => {
  return {
    type: FETCH_VIEW_ADMISSION_SUCCESS,
    payload:viewAdmission
  };
};
export const fetchViewAdmissionFailure = (error) => {
  return {
    type: FETCH_VIEW_ADMISSION_FAILURE,
    payload:error
  };
};

export const fetchViewAdmission = () => {

  return (dispatch) => {
    axios({
      method: 'get',
      url: "http://localhost:5000/api/v1/viewadmission",
    })
      .then((response) => {
      
        console.log(response,"qqqqqqqqqqqqqqqqqqq");
        
        const viewAdmission = response.data;
        dispatch(setViewAdmission);
        console.log("vvvvvvvvvvvvvv", viewAdmission);
        
        dispatch(fetchViewAdmissionSuccess(viewAdmission));
      })
      .catch((error) => {
        console.log(error,"vvvvvvvvvvddddddddddddddddddddddd");
        
        const errorMsg = error.message;
        dispatch(fetchViewAdmissionFailure(errorMsg));
      });
  };
}


export const setViewAdmission = (data)=>{
  return {
        type: FETCH_VIEW_ADMISSION_DATA,
        payload: data
}
}
// console.log(setAbout,"aaa");
