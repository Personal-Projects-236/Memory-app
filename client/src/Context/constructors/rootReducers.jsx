import { combineReducers } from "./combineReducers.jsx";
import { formReducer, dataReducer } from "../reducers/index.jsx";

export const rootReducers = combineReducers({ formReducer, dataReducer });
