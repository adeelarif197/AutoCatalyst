import {ACTION_TYPES} from '../../../ActionTypes';

const initialState = {
  
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    

    case ACTION_TYPES.LOGOUT:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default homeReducer;
