import * as types from "./actionType";
import axios from "axios";
import {getData} from "../../../Component/Utils/customLocalstorage";

//GET DATA
const get_request = () => ({
  type: types.GET_REQUEST_DATA,
});

const get_success = (data) => ({
  type: types.GET_SUCCESS_DATA,
  payload: data,
});

const get_failure = () => ({
  type: types.GET_FAILURE_DATA,
});

//POST ACTION
const post_failure = () => ({
  type: types.POST_FAILURE_DATA,
});

// const post_success =()=>({
//     type:types.POST_SUCCESS_DATA,
// })

const post_request = () => ({
  type: types.POST_REQUEST_DATA,
});



export const addRecentdata = (payload) => (dispatch) => {
  // console.log(payload)
  dispatch(post_request);
  axios({
    method: "post",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/recentview/add_to_recent_view",
    data: payload,
    headers: {"Authorization":`Bearer ${getData("token")}`,
    'Content-Type':"application/json"
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

/////like get request
export const getRecentdata =(dispatch) => {
  // console.log(payload)
  dispatch(get_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/recentview",
    headers: {"Authorization":`Bearer ${getData("token")}`,
    'Content-Type':"application/json"
    }
  })
    .then((response) => {
      dispatch(get_success(response.data));
    })
    .catch((err) => {
      dispatch(get_failure(err));
    });
};




