import { REMOVE_STORE } from "../types";
// import AsyncStorage from '@react-native-community/async-storage';
// import store from '../store';

export const removeStore = () => (dispatch) => {
  // AsyncStorage.removeItem('userData');
  dispatch({ type: REMOVE_STORE });
};
