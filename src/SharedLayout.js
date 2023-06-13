import React from "react";
import { Link, Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div style={{ border: "2px solid red" }}>
      SharedLayout
      <ul>
        <li>
          <Link to="/shared/inner1">Show Inner 1</Link>
        </li>
        <li>
          <Link to="/shared/inner2">Show Inner 2</Link>
        </li>
        <li>
          <Link to="/shared/inner3">Show Inner 3</Link>
        </li>
      </ul>
      <Outlet context={{ data: "Data passed via outlet Context" }} />
    </div>
  );
}

export default SharedLayout;
