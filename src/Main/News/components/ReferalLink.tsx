import React from 'react'
import copy from '../../../resources/ungroup.svg'

type ReferalLinkProps = {
    link:string
}

export default function ReferalLink({link}:ReferalLinkProps) {
  return (
    <div className="referal-link">
        <p >{link}</p>
        <img src={copy} alt="copy" />
    </div>
  )
}
