import * as types from "./actionType";
import axios from "axios";

//GET DATA
const get_failure = () =>({
    type: types.GET_FAILURE_DATA
})


const get_success =(data)=>({
    type:types.GET_SUCCESS_DATA,
    payload: data
})

const get_request = ()=>({
    type : types.GET_REQUEST_DATA
})


//POST ACTION
const post_failure = () =>({
    type: types.POST_FAILURE_DATA
})

// const post_success =()=>({
//     type:types.POST_SUCCESS_DATA,
// })

const post_request = ()=>({
    type : types.POST_REQUEST_DATA
})

export const like_data = (data)=>({
  type : types.like_data,
  payload:data
})

export const getData = (payload, query)=>(dispatch) => {
    dispatch(get_request)
    return axios({
      method: "get",
      baseURL: "https://colorful-erin-pike.cyclic.app",
      url: `/kids?_page=${payload}&_limit=20&_sort=price&_order=${query}`,
    })
      .then((res) => {
        console.log(res);
        dispatch(get_success(res.data));
      })
      .catch((err) => {
        dispatch(get_failure);
        console.log(err);
      });
  };

