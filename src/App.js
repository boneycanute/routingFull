import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
import SomeComponent from "./SomeComponent";
import SplatComponent from "./SplatComponent";
import DynamicRoutedComponent from "./DynamicRoutedComponent";
import "./myStyles.css";
import SharedLayout from "./SharedLayout";
import Inner1 from "./Inner1";
import Inner2 from "./Inner2";
import Inner3 from "./Inner3";

function App() {
  const navigateFunction = useNavigate();
  const [data, setData] = useState("Data From App");
  return (
    <>
      <NavLink
        to="/child"
        style={({ isActive }) => {
          console.log("NavLink : ", isActive);
          return isActive ? { color: "green" } : { color: "red" };
        }}
      >
        {({ isActive }) => {
          return isActive ? (
            <h5>Active Link to Child</h5>
          ) : (
            <h5>InActive Link to Child</h5>
          );
        }}
      </NavLink>
      <br />
      <Link to="/abcde" className="link">
        Go to /abcde via Dynamic Segment{" "}
      </Link>
      <br />
      <Link to="/shared">Go to shared layout</Link>
      <br />
      <button
        onClick={() => {
          navigateFunction(-1);
        }}
      >
        Go back
      </button>
      <button
        onClick={() => {
          navigateFunction(+1);
        }}
      >
        Go forward
      </button>

      <Routes>
        <Route path="/child/*" element={<SplatComponent />} />
        <Route path="/:ea22" element={<DynamicRoutedComponent />} />
        <Route path="/" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/shared" element={<SharedLayout />}>
          <Route path="inner1" element={<Inner1 />} />
          <Route path="inner2" element={<Inner2 />} />
          <Route path="inner3" element={<Inner3 />} />
        </Route>
        <Route path="/some" element={<SomeComponent data={data} />} />
      </Routes>
    </>
  );
}

export default App;
