import React from 'react'
import CustomLink from './components/CustomLink'

type Rewardprops = {
    amount : Number;
    avax: Number;
    bnb: Number;
    btc: Number;
}

export default function Rewards({amount, avax, bnb, btc}:Rewardprops) {
  return (
    <div className='rewards'>
        <div className="rewards-content">
            <p>Your rewards</p>
            <p className="amount">${amount} </p>
            <div className='coin-values'>
                <p>${avax} AVAX</p>
                <p>${bnb} BNB</p>
                <p>${btc} BTC</p>
            </div>
        </div>
        <CustomLink url='#' linkName='Custom link' />
    </div>
  )
}
