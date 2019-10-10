import { takeLatest, put } from "redux-saga/effects";

function* incDecAsync(action) {
  console.log("watcher async", action);
  yield put({ type: "async_increment", payload: action.payload });
}

export function* incDecWatcher() {
  console.log("watcher");
  yield takeLatest("INCREMENT", incDecAsync);
}
