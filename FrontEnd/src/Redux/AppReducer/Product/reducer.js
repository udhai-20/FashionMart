import * as types from "./actionType";

const initialize = {
  kids: [],
  beauty:[],
  men:[],
  women:[],
  sale:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialize, action) => {
  const { payload, type } = action;

  switch (type) {
    //get data
    case types.GET_FAILURE_DATA_KIDS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
       
      };
    }
    case types.GET_REQUEST_DATA_KIDS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
       
      };
    }
    case types.GET_SUCCESS_DATA_KIDS: {
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        kids: payload,
      };
    }
  //beauty 
  case types.GET_FAILURE_DATA_BEAUTY: {
    return {
      ...state,
      isLoading: false,
      isError: true,
      beauty: [],
    };
  }
  case types.GET_REQUEST_DATA_BEAUTY: {
    return {
      ...state,
      isLoading: true,
      isError: false,
      beauty: [],
    };
  }
  case types.GET_SUCCESS_DATA_BEAUTY: {
    // console.log(payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      beauty: payload,
    };
  }
  //MEN
  case types.GET_FAILURE_DATA_MEN: {
    return {
      ...state,
      isLoading: false,
      isError: true,
      men: [],
    };
  }
  case types.GET_REQUEST_DATA_MEN: {
    return {
      ...state,
      isLoading: true,
      isError: false,
      men: [],
    };
  }
  case types.GET_SUCCESS_DATA_MEN: {
    // console.log(payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      men: payload,
    }
  }

  //WOMEN
  case types.GET_FAILURE_DATA_WOMEN: {
    return {
      ...state,
      isLoading: false,
      isError: true,
      women: [],
    };
  }
  case types.GET_REQUEST_DATA_WOMEN: {
    return {
      ...state,
      isLoading: true,
      isError: false,
      women: [],
    };
  }
  case types.GET_SUCCESS_DATA_WOMEN: {
    // console.log(payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      women: payload,
    };
  }

  //SALE

  case types.GET_FAILURE_DATA_SALE: {
    return {
      ...state,
      isLoading: false,
      isError: true,
        sale :[],
    };
  }
  case types.GET_REQUEST_DATA_SALE: {
    return {
      ...state,
      isLoading: true,
      isError: false,
      sale: [],
    };
  }
  case types.GET_SUCCESS_DATA_SALE: {
    // console.log(payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      sale: payload,
    };
  }
    default: {
        return state
    }
  }
};
