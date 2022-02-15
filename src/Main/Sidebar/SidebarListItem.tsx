import React from 'react'

export type SidebarListItemProps = {
    svgpath:string;
    text:string;
  selected?: boolean;

}

export default function SidebarListItem({svgpath, text, selected= false} : SidebarListItemProps) {
  return (
    <li className={selected ? "sidebar-list-item selected" : "sidebar-list-item"}>
        <img src={svgpath} alt="text" />
        <a>{text}</a>
    </li>
  )
}
