import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
export default function CardItem(props) {
   const { id, price, area, address, setDetail, setId } = props

   const [like, setLike] = useState(false)
   const router = useRouter()
   function changeLike() {
      if (like) setLike(false)
      else setLike(true)
   }
   function swapPage() {
      setDetail(true)
      setId(id)
   }

   return <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.cardItem}
      onClick={swapPage}>
      <img src={`https://picsum.photos/id/${id}/369/225.jpg`} loading="lazy" />
      <div className={style.detail}>
         <label className={style.price}>﹩{price}</label>
         <label className={style.area}><span className="bi bi-layers" />&nbsp;{area} ac</label>
         <label className={style.address}>{address}</label>
         <span className={style.heart}>
            {like && (<a className="bi bi-heart-fill" onClick={changeLike} />)}
            {!like && (<a className="bi bi-heart" onClick={changeLike} />)}
         </span>
      </div>
   </motion.div>
}