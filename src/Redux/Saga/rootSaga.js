import {all} from 'redux-saga/effects';
import {loginSaga} from './AuthSaga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    
  ]);
}
