import { all } from "redux-saga/effects";
import { watchAction } from "./CounterSaga";

export default function* rootSaga() {
    yield all([watchAction(),])
}
