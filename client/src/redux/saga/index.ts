import { all, call } from "redux-saga/effects";
import { authSagas } from "./user-sagas";

export default function* rootSaga() {
  yield all([call(authSagas)]);
}
