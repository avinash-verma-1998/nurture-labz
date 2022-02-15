import React from "react";
import Logo from "./Logo";
import SidebarListItem from "./SidebarListItem";
import { SidebarListItemProps } from "./SidebarListItem";
import slideLeft from "../../resources/slide-left.svg";

type SidebarListProps = {
  list: SidebarListItemProps[];
};

export default function SidebarList({
  list,
 
}: SidebarListProps) {
  return (
    list && (
      <ul className="sidebar-list">
        <div className="sidebar-head">
          <Logo color="#3771FF" avatarName="N" text="Name" />

          <img src={slideLeft} alt="left" />
        </div>
        {list.map(({ svgpath, text,selected }, i) => {
          return <SidebarListItem svgpath={svgpath} text={text} key={i} selected={selected} />;
        })}
      </ul>
    )
  );
}
