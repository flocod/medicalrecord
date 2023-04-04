import React, { useState } from "react";

const Time = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  const element = (
    <div>
      <h1>Bonjour, {props.local} !!!!</h1>
      <h2>Il est {time}.</h2>
    </div>
  );

  return element;
};

export default Time;
