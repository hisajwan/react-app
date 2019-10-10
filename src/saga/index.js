import { incDecWatcher } from "./incDecSaga";
// import loginSagaWatcher from "./loginSaga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga() {
  console.log("rootsaga");
  yield all([fork(incDecWatcher)]);
  // code after all-effect
}
