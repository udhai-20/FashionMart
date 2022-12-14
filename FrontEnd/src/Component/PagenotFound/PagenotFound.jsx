import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function PagenotFound(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(id);
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "10px",
        }}
      >
        <img src="https://cdn.modesens.com/static/img/404.png" />
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "10px",
          fontSize: "2rem",
        }}
      >
        Oops Page Not Found
      </h1>
    </div>
  );
}

export default PagenotFound;
