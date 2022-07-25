import {combineReducers} from "redux"
import viewAdmissionReducers from "./redux/admission/reducers/viewAdmissionReducers"

const rootReducer = combineReducers({
    viewAdmission:viewAdmissionReducers
})

export default rootReducer