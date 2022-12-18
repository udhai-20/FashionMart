import * as types from "./actionTypes";

const initialize = {
  isLoading: false,
  isError: false,
  isAuth: false,
  response: null,
};

export const reducer = (state = initialize, action) => {
  const { payload, type } = action;
  // console.log(payload)
  switch (type) {
    //get data
    case types.POST_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    }
    case types.POST_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      };
    }
    case types.POST_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }
    //login
    case types.POST_FAILURE_DATA_LOGIN: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    }
    case types.POST_REQUEST_DATA_LOGIN: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      };
    }
    case types.POST_SUCCESS_DATA_LOGIN: {
      // console.log(payload)
      return {
        ...state,
        response: payload,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};
