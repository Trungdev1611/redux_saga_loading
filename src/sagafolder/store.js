import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer.js";
import rootSaga from "./saga.js";

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

//dùng configure store thay vì createStore như trước cũng được
const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
