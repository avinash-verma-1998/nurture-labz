import React from 'react'
import Referal from './components/Referal'

export default function Referals() {
  return (
   <div className='referals'>
     <Referal link='https://unityexchange.design' name="xyz"/>
     <Referal link="https://unityexchange.design" name='xyz'/>
   </div>
  )
}
