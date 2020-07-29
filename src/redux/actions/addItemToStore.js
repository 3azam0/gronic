import { ADD_TO_STORE } from "../types";

export const addItemToStore = (item) => {
  return { type: ADD_TO_STORE, payload: item };
};

