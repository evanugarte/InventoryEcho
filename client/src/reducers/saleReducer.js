//Import the constant types from our actions folder
import {
  GET_SOLD_ITEMS,
  ADD_SOLD_ITEM,
  DELETE_SOLD_ITEM,
  DELETE_ALL_SOLD_ITEMS
} from "../actions/types";

const initialState = {
  items: []
};

/**
 * This function handles the state of our application, based on the actions
 * taken from saleActions.js in the actions folder.
 * @param state in charge of handling the array of sold items from mongoDB
 * @param action specifies which action is to be carried out
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SOLD_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_SOLD_ITEM:
      return {
        ...state,
        items: state.items.filter((soldItem) => soldItem._id !== action.payload)
      };
    case ADD_SOLD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ALL_SOLD_ITEMS:
      return {
        ...state,
        items: []
      };
    default:
      return {
        ...state
      };
  }
}
