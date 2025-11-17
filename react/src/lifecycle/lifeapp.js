import React, { useState } from "react";
import LifecycleDemo from "./lifecycledemo";

function Lifeapp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Simple Lifecycle Demo</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
}

export default Lifeapp;
