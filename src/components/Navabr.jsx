import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabr({login, setLogin}) {
  return (
    <div>
        <ul className='nav'>
   <li>
    <Link to='/'>
    home</Link>
   </li>
   <li>
    <Link to='/hero'>Hero</Link>
   </li>
   <li>
    <Link to='/products'>
    Products</Link>
   </li>
   <li>
    <Link to='/login'>
<button className='nav_btn' onClick={() => setLogin(!login)}></button>
    </Link>
    login</button>
   </li>
        </ul>
    </div>
  )
}
