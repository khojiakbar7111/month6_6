import React from 'react'

export default function Navabr({login, setLogin}) {
  return (
    <div>
        <ul className='nav'>
   <li>hero</li>
   <li>hero</li>
   <li>Products</li>
   <li>
    <button className='nav_btn' onClick={() => setLogin(!login)}>login</button>
   </li>
        </ul>
    </div>
  )
}
