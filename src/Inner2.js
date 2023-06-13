import React from "react";
import { useOutletContext } from "react-router-dom";

function Inner2() {
  const { data } = useOutletContext();
  return <div>Inner2 : {data}</div>;
}

export default Inner2;
