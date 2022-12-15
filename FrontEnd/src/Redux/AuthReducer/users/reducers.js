import * as types from "./actionTypes";

const initialize = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
};

export const AuthReducer = (state = initialize, action) => {
  const { payload, type } = action;

  switch (type) {
    //get data
    case types.GET_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    case types.GET_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };
    }
    default:
      return state;
  }
};
