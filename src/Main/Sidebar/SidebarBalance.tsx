import { Avatar } from '@mui/material';
import React from 'react'

type SidebarBalanceProps = {
    name: string;
    amount: Number;
    avatarName: string;
}
export default function SidebarBalance({name, amount, avatarName}: SidebarBalanceProps) {
  return (
    <div className="sidebar-balance">   
    <Avatar sx={{ height:"15px", width:"15px", bgcolor: "#3771FF"}}>{avatarName}</Avatar>
    <p className='text-white'>${amount.toFixed(2)}</p>
    <p className="chip-bg">Buy ${name}</p>
    </div>
    );
}
