import React from "react";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import data from "./data";
const App = () => {
  const dealData = data.map((d) => {
    return <Contents key={d.id} {...d}></Contents>;
  });
  return (
    <div>
      <Navbar></Navbar>
      {dealData}
    </div>
  );
};

export default App;
