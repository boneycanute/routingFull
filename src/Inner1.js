import React from "react";
import { useOutletContext } from "react-router-dom";

function Inner1() {
  const { data } = useOutletContext();
  return <div>Inner1 : {data} </div>;
}

export default Inner1;
