import * as types from "./actionType";
import axios from "axios";

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
const post_request = () => ({
  type: types.POST_REQUEST_DATA,
});
const post_success = (payload) => ({
  type: types.POST_SUCCESS_DATA,
  payload,
});
const post_failure = () => ({
  type: types.POST_FAILURE_DATA,
});
//UPDATE ACTION

const update_failure = () => ({
  type: types.UPDATE_FAILURE_DATA,
});

const update_success = () => ({
  type: types.UPDATE_SUCCESS_DATA,
});

const update_request = () => ({
  type: types.UPDATE_REQUEST_DATA,
});

//DELETE ACTION
const delete_failure = () => ({
  type: types.DELETE_FAILURE_DATA,
});

const delete_success = () => ({
  type: types.DELETE_SUCCESS_DATA,
});

const delete_request = () => ({
  type: types.DELETE_REQUEST_DATA,
});

const getsingleData = (id, usertoken) => (dispatch) => {
  dispatch(get_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/kids/${id}`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_success(response.data));
    })
    .catch((err) => {
      dispatch(get_failure(err));
    });
};

///add to bag post req
const addtobasg = (payload, usertoken) => (dispatch) => {
  console.log("usertoken:", payload);
  dispatch(post_request());
  axios({
    method: "post",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/cart/add_to_cart`,
    headers: { Authorization: `Bearer ${usertoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success(response.data));
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

export {
  getsingleData,
  get_failure,
  get_success,
  get_request,
  addtobasg,
  post_request,
  post_success,
  post_failure,
};
