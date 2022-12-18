import * as types from "./actionType";

const initialize = {
  data: [],
  womendata: [],
  mendata: [],
  kiddata: [],
  beautydata: [],
  navbarcartlength: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialize, action) => {
  const { payload, type } = action;

  switch (type) {
    //get data kids
    case types.GET_REQUEST_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_SUCCESS_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        kiddata: payload,
      };
    }
    case types.GET_FAILURE_KIDS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //womens
    case types.GET_REQUEST_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_SUCCESS_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        womendata: payload,
      };
    }
    case types.GET_FAILURE_WOMENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //mens data
    case types.GET_REQUEST_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_SUCCESS_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        mendata: payload,
      };
    }
    case types.GET_FAILURE_MENS_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //beautydata
    case types.GET_REQUEST_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_SUCCESS_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        beautydata: payload,
      };
    }
    case types.GET_FAILURE_BEAUTY_PRODLENGTH: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    ///get navbar length
    case types.GET_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        navbarcartlength: payload,
      };
    }
    case types.GET_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    //post data
    case types.POST_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
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
        isError: false,
      };
    }
    //UPDATE
    case types.UPDATE_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.UPDATE_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.UPDATE_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    //DELETE DATA
    case types.DELETE_FAILURE_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.DELETE_REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.DELETE_SUCCESS_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
