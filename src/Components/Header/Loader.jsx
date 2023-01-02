import React from "react";
// import loading from "./loading.gif";
import  loading from "./Bounce-Bar.gif"
import "./Loader.css";

function Loader() {
  return (
    <div className="load">
      <img src={loading} alt="" />
    </div>
  );
}

export default Loader;
