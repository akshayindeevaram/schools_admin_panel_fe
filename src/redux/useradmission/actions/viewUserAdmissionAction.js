import axios from 'axios';
import {
	FETCH_VIEW_USER_ADMISSION_FAILURE,
	FETCH_VIEW_USER_ADMISSION_REQUEST,
	FETCH_VIEW_USER_ADMISSION_SUCCESS,
} from '../viewUserAdmissionTypes';

export const fetchViewUserAdmissionUserRequest = () => {
	return {
		type: FETCH_VIEW_USER_ADMISSION_REQUEST,
	};
};

export const fetchViewUserAdmissionSuccess = (viewUserAdmission) => {
	return {
		type: FETCH_VIEW_USER_ADMISSION_SUCCESS,
		payload: viewUserAdmission,
	};
};
export const fetchViewUserAdmissionFailure = (error) => {
	return {
		type: FETCH_VIEW_USER_ADMISSION_FAILURE,
		payload: error,
	};
};

export const fetchViewUserAdmission = (id) => {
	// console.log(id,"----------------id-----------------------");

	return (dispatch) => {
		axios({
			method: 'get',
			// url: "http://localhost:5000/api/v1/viewadmission",
			url: `http://localhost:5000/api/v1/viewuseradmission?id=${id}`,
		})
			.then((response) => {
				// console.log(response,"qqqqqqqqqqqqqqqqqqq");

				const viewUserAdmission = response.data;

				// console.log( viewUserAdmission, "vvvvvvvvvvvvvv");

				dispatch(fetchViewUserAdmissionSuccess(viewUserAdmission));
			})
			.catch((error) => {
				// console.log(error,"vvvvvvvvvvddddddddddddddddddddddd");

				const errorMsg = error.message;
				dispatch(fetchViewUserAdmissionFailure(errorMsg));
			});
	};
};
