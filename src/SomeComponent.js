import React from "react";
import { useLocation } from "react-router-dom";

function SomeComponent({ data }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      SomeComponent <br />
      Data via Props : {data} <br />
      Data via Link : {location.state.data}
    </div>
  );
}

export default SomeComponent;
