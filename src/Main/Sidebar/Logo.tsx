import React from "react";
import { Avatar } from "@mui/material";

type LogoProps = {
  color:string;
  text:string;
  avatarName:string;
}
export default function Logo({color, text, avatarName}: LogoProps) {
  return (
    <div className="logo">
      <Avatar sx={{ bgcolor: color}}>{avatarName}</Avatar>
      <p className="logo-text">
        {text}
      </p>
    </div>
  );
}
