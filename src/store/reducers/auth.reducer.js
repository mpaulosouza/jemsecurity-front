import { actionTypes } from '../actions/auth.action';

const initialState = {
  credentials: {},
  success: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...payload,
        },
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        success: {
          ...state,
          success: payload,
        },
      };

    default:
      return state;
  }
};
