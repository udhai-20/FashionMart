import * as types from "./actionType";

const initialize = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialize, action) => {
  const { type,payload } = action;

  switch (type) {
    //get data
    case types.GET_FAILURE_DATA: 
      return {
        ...state,
        isLoading: false,
        isError: true,
        
      }
    
    case types.GET_REQUEST_DATA: 
      return {
        ...state,
        isLoading: true,
        isError: false,
       
      }
    
    case types.GET_SUCCESS_DATA: 
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
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
        return state
    }
  }
};
