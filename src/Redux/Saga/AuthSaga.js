import {ApiCall, VerApiCall} from '../../Services/Apis';
import {put, takeLatest} from 'redux-saga/effects';
import {setLoginData} from '../Actions';
import {ACTION_TYPES} from '../ActionTypes';

function* loginRequest(params) {
  // console.log(params.data.params, params.data.setMyLoginError);
  try {
    const res = yield ApiCall({
      params: params.data.params,
      route: 'login',
      verb: 'POST',
    });

    if (res.header.httpStatusCode == 200) {
      console.log('res !== 200 ... ', res.body);
      params.data.setMyLoginError(true);
      //   yield put({ type: ACTIONS.LOGIN_ERRORS, loginErrors: res });
      yield put(setLoginData(res.body));
    } else if (res.responseCode !== 200) {
      console.log('res.responseCode == 200....', res.body);
      // yield put(setLoginData(res.body));
    }
  } catch (e) {
    console.log('saga login error -- ', e.toString());
  }
}
export function* loginSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginRequest);
}
function* signupRequest(params) {
  // console.log(params.data.params, params.data.setMyLoginError);
  try {
    const res = yield ApiCall({
      params: params.data.params,
      route: 'register',
      verb: 'POST',
    });

    if (res.header.httpStatusCode == 200) {
      console.log('res !== 200 ... ', res.header);
      params.data.setMyLoginError(true);
      //   yield put({ type: ACTIONS.LOGIN_ERRORS, loginErrors: res });
      yield put(setLoginData(res.body));
    } else if (res.responseCode !== 200) {
      console.log('res.responseCode == 200....', res.header);
      // yield put(setLoginData(res.body));
    }
  } catch (e) {
    console.log('saga login error -- ', e.toString());
  }
}
export function* signupSaga() {
  yield takeLatest(ACTION_TYPES.SIGNUP_REQUEST, signupRequest);
}
