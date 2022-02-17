import React from 'react'
import { Avatar } from '@mui/material'
import ReferalLink from './ReferalLink'
import oval2 from "../../../resources/oval2.svg"

type ReferalProps = {
  name: string;
  link:string;
}

export default function Referal({name, link}: ReferalProps) {
  return (
    <div className="referal">
      <div className="referal-details">
        <Avatar sx={{ bgcolor: "black"}}>
          <img src={oval2} alt="refer" />
        </Avatar>
        <p>
        12.5% of fee
        </p>
      </div>
      <p>
        Your Referral Link For {name}
      </p>
    <ReferalLink link={link}/>
    </div>
  )
}
