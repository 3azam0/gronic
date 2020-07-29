import * as types from "../types";

const initialState = {
  storeitems: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_STORE: {
      return {
        storeitems: action.payload,
      };
    }
    case types.REMOVE_STORE: {
      return {
        storeitems: null,
      };
    }
    default:
      return state;
  }
};

export default storeReducer;
