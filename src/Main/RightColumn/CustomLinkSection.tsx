import React from 'react'
import CustomLink from '../News/components/CustomLink'
import leftarrow from "../../resources/arrow-left.svg"
import icon from "../../resources/icon.svg"
export default function CustomLinkSection() {
  return (
    <div className='cl'>
        <div className="cl-top">
            <img src={leftarrow} alt="go back" />
            Custom Link
                    </div>
        <a href="#"> https://testnet.xyz.xyz/trade?ref=</a>
        <div>

        <input className='cl-form' type="text" placeholder='ENTER'/>
        </div>
        <div className='cl-submit'>
            <CustomLink url="#" linkName='Custom link'/>
                <button className='cancel'>
                    <img src={icon} alt="" /> Cancel
                    </button>
        </div>
    </div>
  )
}
