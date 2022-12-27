import * as types from "./actionTypes";
import axios from "axios";
import { saveData } from "../../../Component/Utils/customLocalstorage";

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

export const signupdata = (payload) => (dispatch) => {
  dispatch(post_request);
  axios({
    method: "post",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/signup",
    data: payload,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

const post_failure_login = () => ({
  type: types.POST_FAILURE_DATA_LOGIN,
});

const post_success_login = (payload) => ({
  type: types.POST_SUCCESS_DATA_LOGIN,
  payload,
});

const post_request_login = () => ({
  type: types.POST_REQUEST_DATA_LOGIN,
});
export const logindata = (payload) => (dispatch) => {
  dispatch(post_request_login);
  axios({
    method: "post",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: "/login",
    data: payload,
  })
    .then((response) => {
      // console.log(response.data.token);
      dispatch(post_success_login(response.data));
      saveData("token", response.data.token);
      return true;
    })
    .catch((err) => {
      dispatch(post_failure_login(err));
    });
};
