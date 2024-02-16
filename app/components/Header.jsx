import Link from 'next/link'
import React from 'react'
import './header.scss';

function Header() {
  return (
    <div className='header flex px-2'>
        <div className="logo">
             <h1>LoGO</h1>
        </div>
        <div className="navBar flex ">
             <ul className='flex '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/"}>Home</Link></li>
             </ul>
             <button className="btn"><h3>Create Listing</h3></button>
        </div>
       
    </div>
  )
}

export default Header