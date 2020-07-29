import storeReducer from "./storeReducer";
import langState from "./lang";
import { combineReducers } from "redux";

export default combineReducers({
  user: storeReducer,
  langState,
});
