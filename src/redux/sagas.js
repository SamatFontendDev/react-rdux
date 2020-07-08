import {takeEvery, put, call} from 'redux-saga/effects';
import {REQUEST_POSTS, FETCH_POSTS} from './types';
import { showLoader,  hideLoader } from './actions';


export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker () {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type: FETCH_POSTS, payload})
    yield put(hideLoader())
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    return await response.json()
}