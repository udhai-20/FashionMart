import { base_Api } from "../../../Component/Utils/adminApi";
import { getData } from "../../../Component/Utils/customLocalstorage";
import * as types from "./actionTypes";
import axios from "axios";

//GET DATA
const get_request = () => ({
  type: types.GET_REQUEST_DATA,
});
const get_success = (payload) => ({
  type: types.GET_SUCCESS_DATA,
  payload,
});
const get_failure = () => ({
  type: types.GET_FAILURE_DATA,
});

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

///post_Products
const post_request_product = () => ({
  type: types.POST_REQUEST_DATA_PRODUCT,
});
const post_success_product = (payload) => ({
  type: types.POST_SUCCESS_DATA_PRODUCT,
  payload,
});
const post_failure_product = () => ({
  type: types.POST_FAILURE_DATA_PRODUCT,
});

//UPDATE ACTION
const update_request = () => ({
  type: types.UPDATE_REQUEST_DATA,
});
const update_success = (payload) => ({
  type: types.UPDATE_SUCCESS_DATA,
  payload,
});
const update_failure = () => ({
  type: types.UPDATE_FAILURE_DATA,
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
const admintoken = getData("ADMINTOKEN");
console.log("admintoken:", admintoken);
const admin_Signup_req = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request());
  axios({
    method: "post",
    baseURL: "https://fine-ant-jumper.cyclic.app",
    url: "/admin/signup",
    // headers: { Authorization: `${"ADMINTOKEN"}` },
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
    // headers: { Authorization: `${"ADMINTOKEN"}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success(response.data));
    })
    .catch((err) => {
      dispatch(post_failure(err));
    });
};

/// for adding products kids
const admin_ProductAdd_req = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request_product());
  axios({
    method: "post",
    baseURL: `${base_Api}`,
    url: "/kids/kids_singledata",
    headers: { Authorization: `Bearer ${getData("ADMINTOKEN")}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success_product(response.data));
      dispatch(kids_Prod_Length());
    })
    .catch((err) => {
      dispatch(post_failure_product(err));
    });
};
/// for adding products beauty
const admin_ProductAdd_req_beauty = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request_product());
  axios({
    method: "post",
    baseURL: `${base_Api}`,
    url: "/beauty/beauty_singledata",
    headers: { Authorization: `Bearer ${getData("ADMINTOKEN")}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success_product(response.data));
      dispatch(beauty_Prod_Length());
    })
    .catch((err) => {
      dispatch(post_failure_product(err));
    });
};

/// for adding products womens
const admin_ProductAdd_req_womens = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request_product());
  axios({
    method: "post",
    baseURL: `${base_Api}`,
    url: "/women/women_singledata",
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success_product(response.data));
      dispatch(womens_Prod_Length());
    })
    .catch((err) => {
      dispatch(post_failure_product(err));
    });
};

/// for adding products mens
const admin_ProductAdd_req_mens = (payload) => (dispatch) => {
  console.log("payload:", payload);
  dispatch(post_request_product());
  axios({
    method: "post",
    baseURL: `${base_Api}`,
    url: "/men/men_singledata",
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(post_success_product(response.data));
      dispatch(mens_Prod_Length());
    })
    .catch((err) => {
      dispatch(post_failure_product(err));
    });
};
//pRODUCT LENGTH
//KIDS PROD LENGTH
const kids_Prod_Length = () => (dispatch) => {
  dispatch(get_kids_request());
  axios({
    method: "get",
    baseURL: `${base_Api}`,
    url: `/kids`,
    headers: { Authorization: `Bearer ${getData("ADMINTOKEN")}` },
  })
    .then((response) => {
      dispatch(get_kids_success(response.data));
    })
    .catch((err) => {
      dispatch(get_kids_failure(err));
    });
};

///mens length
const mens_Prod_Length = () => (dispatch) => {
  dispatch(get_mens_request());
  axios({
    method: "get",
    baseURL: `${base_Api}`,
    url: "/men",
    headers: { Authorization: `Bearer ${getData("ADMINTOKEN")}` },
  })
    .then((response) => {
      dispatch(get_mens_success(response.data));
    })
    .catch((err) => {
      dispatch(get_mens_failure(err));
    });
};

//WOMENS PROD LENGTH
const womens_Prod_Length = () => (dispatch) => {
  dispatch(get_womens_request());
  axios({
    method: "get",
    baseURL: `${base_Api}`,
    url: "/women",
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      dispatch(get_womens_success(response.data));
      console.log(response.data);
    })
    .catch((err) => {
      dispatch(get_womens_failure(err));
    });
};
//
//BEAUTY PROD LENGTH
const beauty_Prod_Length = () => (dispatch) => {
  dispatch(get_beauty_request());
  axios({
    method: "get",
    baseURL: `${base_Api}`,
    url: "/beauty",
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      dispatch(get_beauty_success(response.data));
    })
    .catch((err) => {
      dispatch(get_beauty_failure(err));
    });
};
///patch for kids
const kids_update = (id, payload) => (dispatch) => {
  console.log(id, payload);
  dispatch(update_request());
  axios({
    method: "put",
    baseURL: `${base_Api}`,
    url: `kids/update/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(update_success(response.data));
      dispatch(kids_Prod_Length());
    })
    .catch((err) => {
      dispatch(update_failure(err));
    });
};
///patch for beauty
const beauty_update = (id, payload) => (dispatch) => {
  console.log(id, payload);
  dispatch(update_request());
  axios({
    method: "put",
    baseURL: `${base_Api}`,
    url: `beauty/update/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(update_success(response.data));
      dispatch(beauty_Prod_Length());
    })
    .catch((err) => {
      dispatch(update_failure(err));
    });
};
///patch for womens
const womens_update = (id, payload) => (dispatch) => {
  console.log(id, payload);
  dispatch(update_request());
  axios({
    method: "put",
    baseURL: `${base_Api}`,
    url: `women/update/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(update_success(response.data));
      dispatch(womens_Prod_Length());
    })
    .catch((err) => {
      dispatch(update_failure(err));
    });
};
///patch for mens
const mens_update = (id, payload) => (dispatch) => {
  console.log(id, payload);
  dispatch(update_request());
  axios({
    method: "put",
    baseURL: `${base_Api}`,
    url: `men/update/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
    data: payload,
  })
    .then((response) => {
      dispatch(update_success(response.data));
      dispatch(mens_Prod_Length());
    })
    .catch((err) => {
      dispatch(update_failure(err));
    });
};

//delte request for kids
const kids_delete = (id) => (dispatch) => {
  console.log(id);
  dispatch(delete_request());
  axios({
    method: "delete",
    baseURL: `${base_Api}`,
    url: `kids/delete/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      dispatch(delete_success());
      dispatch(kids_Prod_Length());
    })
    .catch((err) => {
      dispatch(delete_failure(err));
    });
};

//delete for beauty
const beauty_delete = (id) => (dispatch) => {
  console.log(id);
  dispatch(delete_request());
  axios({
    method: "delete",
    baseURL: `${base_Api}`,
    url: `beauty/delete/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      dispatch(delete_success());
      dispatch(beauty_Prod_Length());
    })
    .catch((err) => {
      dispatch(delete_failure(err));
    });
};

//delete for womens
const womens_delete = (id) => (dispatch) => {
  console.log(id);
  dispatch(delete_request());
  axios({
    method: "delete",
    baseURL: `${base_Api}`,
    url: `women/delete/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      console.log(response);
      dispatch(delete_success());
      dispatch(womens_Prod_Length());
    })
    .catch((err) => {
      dispatch(delete_failure(err));
    });
};

//delete for mens
const mens_delete = (id) => (dispatch) => {
  console.log(id);
  dispatch(delete_request());
  axios({
    method: "delete",
    baseURL: `${base_Api}`,
    url: `men/delete/${id}`,
    headers: { Authorization: `Bearer ${admintoken}` },
  })
    .then((response) => {
      dispatch(delete_success());
      dispatch(mens_Prod_Length());
    })
    .catch((err) => {
      dispatch(delete_failure(err));
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
  post_failure_product,
  post_success_product,
  post_request_product,
  admin_ProductAdd_req,
  kids_Prod_Length,
  kids_update,
  kids_delete,
  mens_Prod_Length,
  get_mens_failure,
  get_mens_request,
  get_mens_success,
  get_womens_request,
  get_womens_failure,
  get_womens_success,
  get_beauty_request,
  get_beauty_success,
  get_beauty_failure,
  womens_Prod_Length,
  beauty_Prod_Length,
  admin_ProductAdd_req_beauty,
  beauty_delete,
  beauty_update,
  admin_ProductAdd_req_womens,
  womens_delete,
  womens_update,
  mens_update,
  mens_delete,
  admin_ProductAdd_req_mens,
};
