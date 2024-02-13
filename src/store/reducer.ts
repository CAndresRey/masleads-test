import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../modules/Home/slices/counterSlice';
import shoppingReducer from '../modules/Home/slices/shoppingSlice';

const reducers = combineReducers({
  counter: counterReducer,
  shopping: shoppingReducer,
});

export default reducers;