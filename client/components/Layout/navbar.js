import style from '../../styles/layout.module.scss'
import Link from 'next/link'
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { useState } from 'react'

export default function Navbar() {
   const [user, setUser] = useState(false)

   function logIn() {
      setUser(true)
   }
   function logOut() {
      setUser(false)
   }

   return <nav className={style.navbar}>
      <div className={style.navbar_life}>
         <p>KasiLand</p>
      </div>
      <div className={style.navbar_right}>
         <Link href="/"><a>Home</a></Link>
         <Link href="/buy"><a>Buy</a></Link>
         <Link href="/"><a>Sell</a></Link>
         {user && (
            <Link href="/profile"><a className="bi bi-person" /></Link>
         )}
         {!user && (
            <button onClick={logIn}>connect wallet</button>
         )}
      </div>
   </nav>
}