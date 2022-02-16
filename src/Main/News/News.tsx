import React from 'react';
import Navbar from './Navbar';
import PromoPanel from './PromoPanel';
import Rewards from './Rewards';

function News(){

    return(
        <div className='news'>
            <Navbar />
            <PromoPanel/>
            <Rewards amount={0.26231428} avax={40} bnb={10} btc={210}/>
        </div>
    );


}
export default News;