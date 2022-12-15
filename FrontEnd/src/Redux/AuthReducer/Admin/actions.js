import * as types from "./actionTypes";
import axios from "axios";

//GET DATA
const get_failure = () => ({
  type: types.GET_FAILURE_DATA,
});

const get_success = (payload) => ({
  type: types.GET_SUCCESS_DATA,
  payload,
});

const get_request = () => ({
  type: types.GET_REQUEST_DATA,
});

//POST ACTION
const post_failure = () => ({
  type: types.POST_FAILURE_DATA,
});

// const post_success =()=>({
//     type:types.POST_SUCCESS_DATA,
// })

const post_success = (payload) => ({
  type: types.POST_SUCCESS_DATA,
  payload,
});
const post_request = () => ({
  type: types.POST_REQUEST_DATA,
});

//UPDATE ACTION

const update_failure = () => ({
  type: types.UPDATE_FAILURE_DATA,
});

const update_success = (payload) => ({
  type: types.UPDATE_SUCCESS_DATA,
  payload,
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

const admin_Signup_req = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request());
  axios({
    method: "post",
    baseURL: "https://fine-ant-jumper.cyclic.app",
    url: "/admin/signup",
    // headers: { Authorization: `${"token"}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success(response.data));
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

//login post req
const admin_Login_req = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request());
  axios({
    method: "post",
    baseURL: "https://fine-ant-jumper.cyclic.app",
    url: "/admin/login",
    // headers: { Authorization: `${"token"}` },
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
  admin_Login_req,
  admin_Signup_req,
  get_success,
  get_failure,
  get_request,
  post_request,
  post_failure,
  post_success,
  update_request,
  update_failure,
  update_success,
  delete_request,
  delete_failure,
  delete_success,
};
