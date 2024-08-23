import { call, put, takeLatest }    from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './CounterSlice';


function* fetchDataAsync() {
    try {
        const data = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
        yield put(fetchDataSuccess(data.data));
    } catch(error) {
        yield put(fetchDataFailure(error.message));
    }
}

export function* watchAction()
 {
    yield takeLatest(fetchDataRequest.type, fetchDataAsync);
 }