import React from "react";
import logo from "../images/logo.svg";

import BtnNext from "../components/BtnNext";
import preview from "../images/preview.png";


const Start = () => {
  return (
    <div className="start">
      <img className="logo" alt="logo" src={logo} />
      <h5>
        View patients’ data their medical history, personal information,
        previous visits, test results and health conditions.
      </h5>

      <div className="preview">
        <img alt="" src={preview}/>
      </div>


      <BtnNext/>



    </div>
  );
};

export default Start;
