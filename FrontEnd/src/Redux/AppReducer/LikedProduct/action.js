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
const post_failure = () => ({
  type: types.POST_FAILURE_DATA,
});

// const post_success =()=>({
//     type:types.POST_SUCCESS_DATA,
// })

const post_request = () => ({
  type: types.POST_REQUEST_DATA,
});

//DELETE ACTION

const delete_request = () => ({
  type: types.DELETE_REQUEST_DATA,
});
const delete_success = () => ({
  type: types.DELETE_SUCCESS_DATA,
});
const delete_failure = () => ({
  type: types.DELETE_FAILURE_DATA,
});
const usertoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzlkODU4NGQ2ZGM2NTkxMzMzNTU0ZDAiLCJpYXQiOjE2NzEyNjc5MjUsImV4cCI6MTY3MTM1NDMyNX0.VpGo1n-po3-9wsQhAIiRnh_sZA2RxsSDcXZj2IODMlY";
export const addlikedata = (payload) => (dispatch) => {
  // console.log(payload)
  dispatch(post_request);
  axios({
    method: "post",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/like/add_to_like",
    data: payload,
    headers: { authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

/////like get request
const getlikedata = (usertoken) => (dispatch) => {
  // console.log(payload)
  dispatch(get_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/like",
    headers: { authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_success(response.data));
    })
    .catch((err) => {
      dispatch(get_failure(err));
    });
};

//like deleteData
const getlikeDeletedata = (id, usertoken) => (dispatch) => {
  dispatch(delete_request());
  axios({
    method: "delete",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/like/delete/${id}`,
    headers: { authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(delete_success());
      dispatch(getlikedata(usertoken));
    })
    .catch((err) => {
      dispatch(delete_failure(err));
    });
};

export {
  get_failure,
  get_request,
  get_success,
  getlikedata,
  getlikeDeletedata,
  delete_request,
  delete_failure,
  delete_success,
};
