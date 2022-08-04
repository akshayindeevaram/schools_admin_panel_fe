import {
	FETCH_VIEW_USER_ADMISSION_FAILURE,
	FETCH_VIEW_USER_ADMISSION_REQUEST,
	FETCH_VIEW_USER_ADMISSION_SUCCESS,
} from '../viewUserAdmissionTypes';

const initialState = {
	loading: false,
	viewUserAdmission: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIEW_USER_ADMISSION_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_VIEW_USER_ADMISSION_SUCCESS:
			// console.log(action.payload);

			return {
				...state,
				loading: false,
				viewUserAdmission: action.payload,
				error: '',
			};
		case FETCH_VIEW_USER_ADMISSION_FAILURE:
			return {
				loading: false,
				viewUserAdmission: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
