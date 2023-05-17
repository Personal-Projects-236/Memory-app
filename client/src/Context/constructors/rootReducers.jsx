import { combineReducers } from "./combineReducers.jsx";
import { formReducers } from "../reducers/index.jsx";

export const rootReducers = combineReducers({ formReducers });
