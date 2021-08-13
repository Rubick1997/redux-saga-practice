import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index.js";

import rootReducer from "./reducers/index.js";

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
