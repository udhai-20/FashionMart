import * as types from "./actionType";
import axios from "axios";

//GET DATA
//product length get req
// mens prod length
const get_mens_request = () => ({
  type: types.GET_REQUEST_MENS_PRODLENGTH,
});
const get_mens_success = (payload) => ({
  type: types.GET_SUCCESS_MENS_PRODLENGTH,
  payload,
});
const get_mens_failure = () => ({
  type: types.GET_FAILURE_MENS_PRODLENGTH,
});

// Womens prod length
const get_womens_request = () => ({
  type: types.GET_REQUEST_WOMENS_PRODLENGTH,
});
const get_womens_success = (payload) => ({
  type: types.GET_SUCCESS_WOMENS_PRODLENGTH,
  payload,
});
const get_womens_failure = () => ({
  type: types.GET_FAILURE_WOMENS_PRODLENGTH,
});

// beauty prod length
const get_beauty_request = () => ({
  type: types.GET_REQUEST_BEAUTY_PRODLENGTH,
});
const get_beauty_success = (payload) => ({
  type: types.GET_SUCCESS_BEAUTY_PRODLENGTH,
  payload,
});
const get_beauty_failure = () => ({
  type: types.GET_FAILURE_BEAUTY_PRODLENGTH,
});

// kids prod length
const get_kids_request = () => ({
  type: types.GET_REQUEST_KIDS_PRODLENGTH,
});
const get_kids_success = (payload) => ({
  type: types.GET_SUCCESS_KIDS_PRODLENGTH,
  payload,
});
const get_kids_failure = () => ({
  type: types.GET_FAILURE_KIDS_PRODLENGTH,
});

///normal get
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
//kids
const getsingleData_kids = (id, usertoken) => (dispatch) => {
  dispatch(get_kids_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/kids/${id}`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_kids_success(response.data));
      console.log("kids", response.data);
    })
    .catch((err) => {
      dispatch(get_kids_failure(err));
    });
};

//womens
const getsingleData_women = (id, usertoken) => (dispatch) => {
  dispatch(get_womens_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/women/${id}`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_womens_success(response.data));
      console.log("women", response.data);
    })
    .catch((err) => {
      dispatch(get_womens_failure(err));
    });
};
//mens
const getsingleData_mens = (id, usertoken) => (dispatch) => {
  dispatch(get_mens_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/men/${id}`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_mens_success(response.data));
      console.log("mens", response.data);
    })
    .catch((err) => {
      dispatch(get_mens_failure(err));
    });
};
//beauty
const getsingleData_beauty = (id, usertoken) => (dispatch) => {
  dispatch(get_beauty_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/beauty/${id}`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_beauty_success(response.data));
      console.log("beautywomens_", response.data);
    })
    .catch((err) => {
      dispatch(get_beauty_failure(err));
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
      dispatch(cart_length(usertoken));
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};
//navbar cartlength
const cart_length = (usertoken) => (dispatch) => {
  dispatch(get_request());
  axios({
    method: "get",
    baseURL: "https://colorful-erin-pike.cyclic.app",
    url: `/cart`,
    headers: { Authorization: `Bearer ${usertoken}` },
  })
    .then((response) => {
      dispatch(get_success(response.data));
      console.log("length", response.data);
    })
    .catch((err) => {
      dispatch(get_failure(err));
    });
};
export {
  getsingleData_kids,
  get_failure,
  get_success,
  get_request,
  addtobasg,
  post_request,
  post_success,
  post_failure,
  getsingleData_women,
  getsingleData_mens,
  getsingleData_beauty,
  get_mens_failure,
  get_mens_request,
  get_mens_success,
  get_womens_request,
  get_womens_failure,
  get_womens_success,
  get_beauty_request,
  get_beauty_success,
  get_beauty_failure,
  get_kids_request,
  get_kids_success,
  get_kids_failure,
  cart_length,
};
