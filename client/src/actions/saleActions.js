/**
 * This file is in charge of handling events related to sold items, 
 * triggered by the user.
 * It also specifies actions for our reducer so the application is aware
 * of its state.
 */
import axios from "axios";
import { GET_SOLD_ITEMS, DELETE_ALL_SOLD_ITEMS, ADD_SOLD_ITEM, DELETE_SOLD_ITEM } from "./types";

/**
 * This function retrieves all sold items from mongoDB with a get request.
 */
export const getSoldItems = () => (dispatch) => {
  axios.get("/api/sales").then((res) =>
    dispatch({
      type: GET_SOLD_ITEMS,
      payload: res.data
    })
  );
};

/**
 * This function sends a delete request to our backend with an id as a parameter
 * @param id the id of the item to be deleted 
 */
export const deleteSoldItem = (id) => (dispatch) => {
  axios.delete(`/api/sales/${id}`).then((res) =>
    dispatch({
      type: DELETE_SOLD_ITEM,
      payload: id
    })
  );
};


/**
 * This function sends a delete request to our backend to clear the entire list
 * of sold items
 */
export const deleteAllItems = () => (dispatch) => {
  axios.delete(`/api/sales/`).then((res) =>
    dispatch({
      type: DELETE_ALL_SOLD_ITEMS
    })
  );
};

/**
 * This fucntion sends a post request to our backend to add an item
 * @param item an object with fields to be added to the database 
 */
export const addSoldItem = (item) => (dispatch) => {
  //send post request to add item
  axios.post("/api/sales", item).then((res) =>
    dispatch({
      type: ADD_SOLD_ITEM,
      payload: res.data
    })
  );
};
