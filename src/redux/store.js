import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import Reactotron from "../services/reactotronConfig"; // hash this in release

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

let persistor = persistStore(store);
export { store, persistor };
