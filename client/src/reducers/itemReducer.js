//Import the constant types from our actions folder
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  SEARCH_ITEMS,
  EDIT_ITEM
} from "../actions/types";

const initialState = {
  items: [],
  itemQuery: null,
  loading: false
};

/**
 * This function handles the state of our application, based on the actions
 * taken from saleActions.js in the actions folder.
 * @param state in charge of handling the array of sold items from mongoDB
 * @param action specifies which action is to be carried out
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_ITEMS:
      return {
        ...state,
        itemQuery: action.payload
      };
    case EDIT_ITEM:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
