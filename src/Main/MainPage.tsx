import React from "react";

import "./main.css"
import Sidebar from "./Sidebar/Sidebar";
import News from "./News/News";
import RightColumn from "./RightColumn/RightColumn";
function MainPage() {
  return (
    <div className="main-section">
      <Sidebar />
      <News />
      <RightColumn/>
    </div>
  );
}
export default MainPage;
