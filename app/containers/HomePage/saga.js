/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeEvery
} from 'redux-saga/effects';
import { GET_FIRM_INFO } from './constants';
import { firmLoaded} from './actions';

import request from 'utils/request';

export function* getFirm() {
  // Select username from store
  const requestURL = `http://www.json-generator.com/api/json/get/cebfBtmeMi?indent=2`;
  try {
    const firm_info = yield call(request, requestURL);
    yield put(firmLoaded(firm_info));
  } catch (err) {
    console.log(err)
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watcher() {
  yield takeEvery(GET_FIRM_INFO, getFirm);
}
