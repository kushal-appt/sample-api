import * as Api from "../../services";
import Messages from "../../messages";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FriendlyError } from "../../model";
import { PayloadAction } from "@reduxjs/toolkit";
import { TaskPayloadType, userDetailsType } from "../../types";
import {
  userLoginError,
  userLoginStart,
  userLoginSucceded,
  userRegisterError,
  userRegisterStart,
  userRegisterSucceded,
} from "../slices/user-slice";
import {
  trackingError,
  trackingStart,
  trackingSuccess,
} from "../slices/common-slice";

function* registerUser({
  payload: { id: taskId, data },
}: PayloadAction<TaskPayloadType<userDetailsType>>) {
  try {
    if (taskId) yield put(trackingStart(taskId));
    const successMessage: string = yield Api.registerUser(data);
    yield put(userRegisterSucceded(successMessage));
    if (taskId) yield put(trackingSuccess({ taskId }));
  } catch (error) {
    const displayMessage = (error as Error).message;
    yield put(
      userRegisterError(new FriendlyError(error, Messages.CREATE_USER_API_ERR))
    );
    if (taskId) yield put(trackingError({ id: taskId, data: displayMessage }));
  }
}

function* watchregisterUserStart() {
  yield takeLatest(userRegisterStart.type, registerUser);
}

function* loginUser({
  payload: { id: taskId, data },
}: PayloadAction<TaskPayloadType<userDetailsType>>) {
  try {
    if (taskId) yield put(trackingStart(taskId));
    const successMessage: string = yield Api.loginUser(data);
    yield put(userLoginSucceded(successMessage));
    if (taskId) yield put(trackingSuccess({ taskId }));
  } catch (error) {
    const displayMessage = (error as Error).message;
    yield put(
      userLoginError(new FriendlyError(error, Messages.CREATE_USER_API_ERR))
    );
    if (taskId) yield put(trackingError({ id: taskId, data: displayMessage }));
  }
}

function* watchloginUserStart() {
  yield takeLatest(userLoginStart.type, loginUser);
}

//call(watchregisterUserStart),
export function* authSagas() {
  yield all([call(watchregisterUserStart)]);
  yield all([call(watchloginUserStart)]);
}
