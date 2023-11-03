import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import cartReducer from "./cartReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(cartReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
