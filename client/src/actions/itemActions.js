/**
 * This file is in charge of handling events related to inventory items, 
 * triggered by the user.
 * It also specifies actions for our reducer so the application is aware
 * of its state.
 */
import axios from "axios";
//Import constant action types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, SEARCH_ITEMS } from "./types";

/**
 * This Function would let the view know that the items are being grabbed from mongodb.
 * While we didnt implement any UI for the items being loaded, we still set iEcho's state
 * to that of loading.
 */
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

/**
 * This function sends a query of an item to mongoDB
 * The response, res.data, is the search result
 */
export const sendQuery = (newQuery) => (dispatch) => {
  axios
    .get("/api/items/search/", { params: newQuery })
    .then(res => {
      dispatch({
        type: SEARCH_ITEMS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

/**
 * This function retrieves all inventory items from mongoDB with a get request.
 */
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

/**
 * This function sends a delete request to our backend with an id as a parameter
 * @param id the id of the item to be deleted 
 */
export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

/**
 * This fucntion sends a post request to our backend to add an item
 * @param item an object with fields to be added to the database 
 */
export const addItem = (item) => (dispatch) => {
  //send post request to add item
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

/**
 * This fucntion sends a post request to our backend to update an item.
 * While the functionality is identical to what is above, the name is 
 * different to help us keep track of when an item is to be added or 
 * updated.
 * @param item an object with fields to be updated in the database 
 */
export const editItem = (item) => (dispatch) => {
  // send post request to edit an items data
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};
