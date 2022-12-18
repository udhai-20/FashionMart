import * as types from "./actionTypes";

const initialize = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
  SignupData: null,
  Product: [],
  kidsprod: [],
  mensprod: [],
  womensprod: [],
  beautyprod: [],
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
    //kids length get req
    case types.GET_FAILURE_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_REQUEST_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        kidsprod: payload,
        data: payload,
      };
    }
    //womens length get req
    case types.GET_FAILURE_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_REQUEST_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        womensprod: payload,
        data: payload,
      };
    }
    //mens prod len
    case types.GET_FAILURE_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_REQUEST_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        mensprod: payload,
        data: payload,
      };
    }

    //beauty length get req
    case types.GET_REQUEST_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        beautyprod: payload,
        data: payload,
      };
    }
    case types.GET_FAILURE_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
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

    //post Product

    case types.POST_REQUEST_DATA_PRODUCT: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.POST_SUCCESS_DATA_PRODUCT: {
      return {
        ...state,
        isLoading: false,
        Product: payload,
      };
    }
    case types.POST_FAILURE_DATA_PRODUCT: {
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
