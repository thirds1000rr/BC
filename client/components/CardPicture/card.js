import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function CardPicture(props) {
   const { dataDetail } = props

   const pic = [
      { name: 61 },
      { name: 71 },
      { name: 81 },
      { name: 91 },
      { name: 11 },
      { name: 13 },
   ]
   return <div className={style.cardPicture}>
      <div className={style.mainPic}>
         <img src={`https://picsum.photos/id/100/910/500.jpg`} width="850" height="400" loading="lazy" />
      </div>
      <div className={style.subPic}>
         {pic.map(value => {
            return <img
               src={`https://picsum.photos/id/${value.name}/500/500.jpg`} width="420" height="420" loading="lazy"
            />
         })}
      </div>
   </div>
}