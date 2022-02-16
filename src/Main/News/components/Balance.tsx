import { Chip } from '@mui/material'
import React from 'react'
import wallet from '../../../resources/Wallet.svg'

type BalanceProps = {
    tier:Number;
    name:string;
    amount:Number;
}

export default function Balance({tier, name, amount}:BalanceProps) {
  return (
    <div className='balance'>
        <img src={wallet} alt="wallet" />
        <p className='amount'>{amount}$ {name} </p>
        <p className='chip'>Tier {tier}</p>
    </div>
  )
}
