import React from "react";
import { useOutletContext } from "react-router-dom";

function Inner3() {
  const { data } = useOutletContext();
  return <div>Inner3 : {data}</div>;
}

export default Inner3;
