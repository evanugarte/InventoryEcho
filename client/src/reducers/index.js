/**
 * This file defines each reducer for redux, so we can connect item and sold item actions 
 * to mongoDB
 */
import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import saleReducer from "./saleReducer";

export default combineReducers({
  item: itemReducer,
  soldItem: saleReducer
  //auth: authReducer
});
