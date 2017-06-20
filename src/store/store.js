import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import reducer from "../reducers/index";

export const store = createStore(
  reducer,
  undefined,
);