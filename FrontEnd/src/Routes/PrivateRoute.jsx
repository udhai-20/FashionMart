import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Component/Utils/customLocalstorage";

function PrivateRoute({children}) {
  const navigate = useNavigate();
  const token = getData("token");
  const { response } = useSelector((state) => {
    return {
      response: state.AuthReducer.response,
    };
  });

  console.log(response);

  if(!token){
      return navigate("/signup");
  }

  return children;
}



export default PrivateRoute;

