import React, { useState } from "react";
import { Link } from "react-router-dom";

function Child() {
  const [data, setData] = useState("Data from Child Component");
  return (
    <div style={{ background: "cyan" }}>
      Child Component
      <br />
      <Link to="/some" state={{ data }}>
        Go to SomeComponent
      </Link>
    </div>
  );
}

export default Child;
