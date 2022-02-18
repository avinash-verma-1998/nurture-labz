import React from "react";
import home from "../../resources/home.svg";
import section from "../../resources/section.svg";
import section1 from "../../resources/section-1.svg";
import section2 from "../../resources/section-2.svg";
import section3 from "../../resources/section-3.svg";
import section4 from "../../resources/section-4.svg";
import section6 from "../../resources/section-6.svg";
import section7 from "../../resources/section-7.svg";
import section8 from "../../resources/section-8.svg";
import documentation from "../../resources/documentation.svg";
import SidebarList from "./SidebarList";
import SidebarBalance from "./SidebarBalance";

const sidebarList = [
  { text: "Home", svgpath: home },
  { text: "Section 1", svgpath: section1 },
  { text: "Section 2", svgpath: section2 },
  { text: "Section 3", svgpath: section3 },
  { text: "Section 4", svgpath: section4 },
  { text: "Section", svgpath: section },
  { text: "Section 6", svgpath: section6 },
  { text: "Section 7", svgpath: section7 },
  { text: "Section 8", svgpath: section8, selected: true },
  { text: "Documentation", svgpath: documentation },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarList list={sidebarList} />
      <SidebarBalance name="XYZ" avatarName="N" amount={0.90} />
    </div>
  );
}
export default Sidebar;
