import React from 'react'

export type SidebarListItemProps = {
    svgpath:string;
    text:string;
}

export default function SidebarListItem({svgpath, text} : SidebarListItemProps) {
  return (
    <li className='sidebar-list-item'>
        <img src={svgpath} alt="text" />
        <p>{text}</p>
    </li>
  )
}
