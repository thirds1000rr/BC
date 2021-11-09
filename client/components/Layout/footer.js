import style from '../../styles/layout.module.scss'
import Link from 'next/link'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Footer() {
   return <footer className={style.footer}>
      <div className={style.main}>
         <div className={style.head}><a>KasiLand</a></div>
         <div>
            <p>Buy at KasiLand</p>
            <p>New land</p>
            <p>Land offers</p>
            <p>Land and house</p>
            <p>Land and farm</p>
            <p>Varcant land</p>
         </div>
         <div>
            <p>KasiLand</p>
            <p>Sign Up</p>
            <p>Help Center</p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Developers</p>
         </div>
         <div>
            <p>Contect us</p>
            <div>
               <a className="bi bi-envelope" target="_blank" />
               <a className="bi bi-twitter" href="https://twitter.com/" target="_blank" />
               <a className="bi bi-facebook" href="https://facebook.com/" target="_blank" />
            </div>

         </div>
      </div>
      <div className={style.sub}>
         <a>Privacy notice</a>
         <a>Cookie policy</a>
         <a>Terms of use</a>
         <a>Terms of purchase</a>
      </div>
   </footer>
}