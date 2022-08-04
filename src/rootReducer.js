import { combineReducers } from 'redux';
import viewAdmissionReducers from './redux/admission/reducers/viewAdmissionReducers';
import viewUserAdmissionReducers from './redux/useradmission/reducers/viewUserAdmissionReducer';

const rootReducer = combineReducers({
	viewAdmission: viewAdmissionReducers,
	viewUserAdmission: viewUserAdmissionReducers,
});

export default rootReducer;
