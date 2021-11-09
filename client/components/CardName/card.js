import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function CardProfile() {
   return <section className={style.cardname}>
      <header>Profile&nbsp;&nbsp;&nbsp;<span className="bi bi-pencil-square" /></header>
      <div className={style.cardname_g}>
         <div>
            <label>Name</label>
            <p>Kasiland  Watson</p>
         </div>
         <div>
            <label>Meramask Address</label>
            <p>0xbE6....be26</p>
         </div>

      </div>
      <div>
         <label>Email</label>
         <p>Kasiland@kasimail.com</p>
      </div>
      <div>
         <label>Password</label>
         <p>**********</p>
      </div>
   </section>
}