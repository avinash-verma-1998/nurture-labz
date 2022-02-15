import React from "react";

import "./main.css"
import Sidebar from "./Sidebar/Sidebar";
import News from "./News";
function MainPage() {
  return (
    <div className="main-section">
      <Sidebar />
      <News />
    </div>
  );
}
export default MainPage;
