import React from 'react'
import Balance from './components/Balance'

export default function Navbar() {
  return (
    <div className='news-navbar'>
      <p className="nav-section">Section</p>
      <Balance tier={1} name="XYZ" amount={0.2}/>
    </div>
  )
}
