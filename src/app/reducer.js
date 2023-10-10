import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { courseSlice } from "../features/courseSlice";
export const rootReducer = combineReducers({
    user:userSlice.reducer,
    allCourses:courseSlice.reducer,
})