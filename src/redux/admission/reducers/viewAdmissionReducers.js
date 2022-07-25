import {
    FETCH_VIEW_ADMISSION_FAILURE,
    FETCH_VIEW_ADMISSION_REQUEST,
    FETCH_VIEW_ADMISSION_SUCCESS,
  } from "../viewAdmissionTypes";
  
  const initialState = {
    loading: false,
    viewAdmission: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_VIEW_ADMISSION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_VIEW_ADMISSION_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          viewAdmission: action.payload,
          error: "",
        };
      case FETCH_VIEW_ADMISSION_FAILURE:
        return {
          loading: false,
          viewAdmission: [],
          error: action.payload,
        };
    
    
      default:
        return state;
    }
  };
  
  export default reducer;
  