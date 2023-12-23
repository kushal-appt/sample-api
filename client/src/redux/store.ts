import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "../redux/saga/index";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "../redux/slices/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  logger,
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    ...rootReducers,
  },
  middleware,
  devTools:true
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
