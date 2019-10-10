import { combineReducers } from "redux";
import incDecReducer from "./incDecReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
  incDec: incDecReducer,
  loggedIn: loginReducer
});

export default allReducers;
