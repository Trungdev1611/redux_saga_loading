import { put, takeEvery, all, call } from "redux-saga/effects";
import { callApi } from "./callApi";

function* workerSaga(action /*action from dispatch lên đây*/) {
  console.log("action", action);
  try {
    yield put({ type: "loading", payload: true });
    const response = yield call(
      callApi,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "DataAPI", payload: response });
  } catch (error) {
    yield put({ type: "callApifail", payload: error });
  } finally {
    yield put({ type: "loading", payload: false });
  }
}

function* watchSaga() {
  console.log("1111");
  yield takeEvery("qua saga", workerSaga);
}

export default function* rootSaga() {
  yield all([
    watchSaga(),
    //các saga khác nếu có
  ]);
}
