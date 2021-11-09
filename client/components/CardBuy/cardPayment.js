import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function CardPayment() {
   return <div className={style.cardPayment}>
      <header>3737 Baseline Ave, Santa Ynez, CA </header>
      <p><span className="bi bi-layers" />&nbsp;115.17 ac</p>
      <div className={style.detail}>
         <div>
            <p>Land</p>
            <p>Ownership Transfer fee :</p>
            <p>Fee :</p>
            <p style={{ fontWeight: "700" }}>Total :</p>
         </div>
         <div>
            <p>﹩127,500</p>
            <p>﹩300</p>
            <p>﹩100</p>
            <p>﹩128,000</p>
         </div>
      </div>
      <button>Accept Payment</button>
   </div>
}