import React from 'react';
import Referals from './Referals';
import Navbar from './Navbar';
import PromoPanel from './PromoPanel';
import Rewards from './Rewards';
import SwitchTabs from '../Tabs/SwitchTabs';

function News(){

    return(
        <div className='news'>
            <Navbar />
            <PromoPanel/>
            <Rewards amount={0.26231428} avax={40} bnb={10} btc={210}/>
            <Referals/>
            <SwitchTabs/>
        </div>
    );


}
export default News;