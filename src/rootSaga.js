import cartSaga from "./cartSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga(getState) {
  console.log("rootSaga");
  yield all([cartSaga()]);
}
