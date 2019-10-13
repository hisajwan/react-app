import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducers";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
const initialState = {};

// const middleware = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  allReducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
