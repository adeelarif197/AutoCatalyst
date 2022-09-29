import {ACTION_TYPES} from '../ActionTypes';

export const loginRequest = data => ({
  type: ACTION_TYPES.LOGIN_REQUEST,
  data,
});

export const setLoginData = data => ({
  type: ACTION_TYPES.SET_LOGIN_DATA,
  data,
});


