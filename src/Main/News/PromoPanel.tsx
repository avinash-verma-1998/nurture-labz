import { Badge } from '@mui/material';
import React from 'react'
import promoImg from '../../resources/11.png';

export default function PromoPanel() {
  return (


    <div className="promo-panel">
        <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="promo-button">Tutorial</button>
        <img src={promoImg} alt="bit coin" className="promo-img" />
    </div>
    )
}
