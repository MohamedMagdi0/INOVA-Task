import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";
import { addItem, deleteItem } from "./cartAction";

export async function cartSaga(key, bucket) {}

export default function* rootSaga() {
  yield all([
    takeEvery(ADD_ITEM, addItem),
    takeLatest(DELETE_ITEM, deleteItem),
  ]);
}
