import * as types from "./actionTypes";

const initialize = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
  SignupData: null,
  data: [],
};

export const adminreducer = (state = initialize, action) => {
  const { payload, type } = action;
  console.log("payload:", payload, type);
  switch (type) {
    //get data
    case types.GET_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    //post

    case types.POST_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.POST_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        SignupData: payload,
      };
    }
    case types.POST_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
