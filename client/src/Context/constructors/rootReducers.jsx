import { combineReducers } from "./combineReducers.jsx";
import { formReducer } from "../reducers/index.jsx";

export const rootReducers = combineReducers({ formReducer });
