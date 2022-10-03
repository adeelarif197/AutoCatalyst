import {all} from 'redux-saga/effects';
import {loginSaga, signupSaga} from './AuthSaga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga()
    
    
  ]);
}
