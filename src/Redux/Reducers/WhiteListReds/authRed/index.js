import {ACTION_TYPES} from '../../../ActionTypes';

const initialState = {
  userToken: null,
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOGIN_DATA:
      return {
        ...state,
        userToken: action.data.accessToken,
        userData: action.data.user,
      };

    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        userToken: null,
        userData: null,
      };

    default:
      return state;
  }
};

export default authReducer;
