import React from 'react'
import SidebarListItem from './SidebarListItem'
import {SidebarListItemProps} from "./SidebarListItem"; 


type SidebarListProps = {
   list: SidebarListItemProps[];
}


export default function SidebarList({list}:SidebarListProps) {
  return (
    list &&
    <ul className='sidebar-list'>
       
    {list.map(({svgpath, text}, i)=>{
            return <SidebarListItem svgpath={svgpath} text={text} key={i}/>
    })}
    </ul>
  )
}
