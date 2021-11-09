import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function CardBuy(props) {
   const { setSubmit } = props

   function changeState(e) {
      e.preventDefault()
      setSubmit(true)
   }

   return <div className={style.cardBuy}>
      <div className={style.cardBuy_g1}>
         <div>
            <label>$ 127,500&nbsp;</label>
            <span className="bi bi-layers" /><label>&nbsp;115.17 ac</label>
         </div>
         <div>
            <button onClick={changeState}>Buy now</button>
         </div>
      </div>
      <div className={style.cardBuy_g2}>
         <label>3737 Baseline Ave, Santa Ynez, CA </label>
         <span className="bi bi-heart" />
      </div>
   </div>
}