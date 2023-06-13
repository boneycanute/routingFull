import React from "react";
import { useParams } from "react-router-dom";

function DynamicRoutedComponent() {
  const params = useParams();
  console.log(params);
  return <div>DynamicRoutedComponent : {params.ea22}</div>;
}

export default DynamicRoutedComponent;
