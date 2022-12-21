import * as types from "./actionType";
import axios from "axios";

//GET KIDS DATA
const get_failure_kids = () =>({
    type: types.GET_FAILURE_DATA_KIDS
})


const get_success_kids =(data)=>({
    type:types.GET_SUCCESS_DATA_KIDS,
    payload: data
})

const get_request_kids = ()=>({
    type : types.GET_REQUEST_DATA_KIDS
})

export const getData = (payload, query)=>(dispatch)=> {
    dispatch(get_request_kids)
    axios({
      method: "get",
      baseURL: "https://colorful-erin-pike.cyclic.app",
      url: `/kids?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
    })
      .then((res) => {
        console.log("kids", res);
        dispatch(get_success_kids(res.data));
      })
      .catch((err) => {
        dispatch(get_failure_kids);
        console.log(err);
      });
  };

//GET BEAUTY DATA

const get_failure_beauty = () =>({
  type: types.GET_FAILURE_DATA_BEAUTY
})


const get_success_beauty =(data)=>({
  type:types.GET_SUCCESS_DATA_BEAUTY,
  payload: data
})

const get_request_beauty = ()=>({
  type : types.GET_REQUEST_DATA_BEAUTY
})

export const getDataBeauty = (payload, query)=>(dispatch) => {
  dispatch(get_request_beauty)
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/beauty?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
  })
    .then((res) => {
      console.log(res);
      dispatch(get_success_beauty(res.data));
    })
    .catch((err) => {
      dispatch(get_failure_beauty);
      console.log(err);
    });
};

//get men data
const get_failure_men= () =>({
  type: types.GET_FAILURE_DATA_MEN
})


const get_success_men =(data)=>({
  type:types.GET_SUCCESS_DATA_MEN,
  payload: data
})

const get_request_men = ()=>({
  type : types.GET_REQUEST_DATA_MEN
})

export const getDataMen = (payload, query)=>(dispatch) => {
  dispatch(get_request_men)
  return axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/men?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
  })
    .then((res) => {
      console.log(res);
      dispatch(get_success_men(res.data));
    })
    .catch((err) => {
      dispatch(get_failure_men);
      console.log(err);
    });
};


//get women data

const get_failure_women= () =>({
  type: types.GET_FAILURE_DATA_WOMEN
})

const get_success_women =(data)=>({
  type:types.GET_SUCCESS_DATA_WOMEN,
  payload: data
})

const get_request_women = ()=>({
  type : types.GET_REQUEST_DATA_WOMEN
})

export const getDataWomen = (payload, query)=>(dispatch) => {
  dispatch(get_request_women)
  return axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/women?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
  })
    .then((res) => {
      console.log(res);
      dispatch(get_success_women(res.data));
    })
    .catch((err) => {
      dispatch(get_failure_women);
      console.log(err);
    });
};

//GET SALE DATA

const get_failure_sale= () =>({
  type: types.GET_FAILURE_DATA_SALE
})


const get_success_sale =(data)=>({
  type:types.GET_SUCCESS_DATA_SALE,
  payload: data
})

const get_request_sale = ()=>({
  type : types.GET_REQUEST_DATA_SALE
})

export const getDataSale = (payload, query)=>(dispatch) => {
  dispatch(get_request_sale)
  return axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/sale?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
  })
    .then((res) => {
      console.log(res);
      dispatch(get_success_sale(res.data));
    })
    .catch((err) => {
      dispatch(get_failure_sale);
      console.log(err);
    });
};
