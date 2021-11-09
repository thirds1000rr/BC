import style from '../styles/Home.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import CardItem from '../components/CardItem/card'
import Search from '../components/CardItem/search'
import React, { useState, useMemo, useEffect } from 'react'
import CardPicture from '../components/CardPicture/card'
import CardGgMap from '../components/CardGoogleMap/card'
import CardBuy from '../components/CardBuy/cardbuy'
import CardPayment from '../components/CardBuy/cardpayment'
import { motion, AnimatePresence } from "framer-motion"

const defaultData = [
   { id: 1, price: "123,456", area: 123, address: "1737 Baseline Ave, Santa Ynez, CA" },
   { id: 20, price: "123,456", area: 123, address: "212 Baseline Ave, Santa Ynez, CA" },
   { id: 30, price: "123,456", area: 123, address: "434 Baseline Ave, Santa Ynez, CA" },
   { id: 40, price: "123,456", area: 123, address: "5537 Baseline Ave, Santa Ynez, CA" },
   { id: 50, price: "123,456", area: 123, address: "6737 Baseline Ave, Santa Ynez, CA" },
   { id: 60, price: "123,456", area: 123, address: "77237 Baseline Ave, Santa Ynez, CA" },
   { id: 70, price: "123,456", area: 123, address: "8737 Baseline Ave, Santa Ynez, CA" },
   { id: 80, price: "123,456", area: 123, address: "9124 Baseline Ave, Santa Ynez, CA" },
   { id: 90, price: "123,456", area: 123, address: "0737 Baseline Ave, Santa Ynez, CA" },
   { id: 190, price: "123,456", area: 123, address: "23737 Baseline Ave, Santa Ynez, CA" },
   { id: 210, price: "123,456", area: 123, address: "43737 Baseline Ave, Santa Ynez, CA" },
];

export default function Page_buy() {
   const [search, setSearch] = useState('')
   const [data, setData] = useState(defaultData)
   const [page, setPage] = useState(1)

   const [detail, setDetail] = useState(false)
   const [dataDetail, setDataDetail] = useState([])
   const [id, setId] = useState('')

   const [submit, setSubmit] = useState(false)

   useEffect(() => {
      if (detail) {
         setDataDetail(data.filter(value => value.id == id))
      }
   }, [detail])

   const FindData = data.filter((data) => {
      return data.address.toLowerCase().includes(search)
   })

   let displayData = useMemo(() => {
      let start = (page - 1) * 9
      return FindData.slice(start, Number(start) + Number(9))
   }, [FindData, page])

   function nextpage() {
      setPage(page + 1)
      if (page >= Math.ceil(data.length / 9)) {
         setPage(Math.ceil(data.length / 9))
      }
   }

   function prevpage() {
      setPage(page - 1)
      if (page <= 1) setPage(1)
   }
   function backPage() {
      if (submit) {
         setSubmit(false)
      } else {
         setDetail(false)
         setDataDetail([])
         setId('')
      }
   }

   return <section className={style.buy_page}>
      <AnimatePresence>
         {!detail && (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <section>
               <Search setSearch={setSearch} search={search} />
            </section>
            <section className={style.listItem}>
               {displayData.map(value => {
                  return <CardItem
                     setDetail={setDetail}
                     setId={setId}
                     key={value.id}
                     id={value.id}
                     price={value.price}
                     area={value.area}
                     address={value.address} />
               })}
            </section>
            <section className={style.selectPage}>
               <span className="bi bi-chevron-left" onClick={prevpage} />
               &nbsp;&nbsp;&nbsp;&nbsp;
               {page} of {Math.ceil(FindData.length / 9)}
               &nbsp;&nbsp;&nbsp;&nbsp;
               <span className="bi bi-chevron-right" onClick={nextpage} />
            </section>
         </motion.div>)}
         {detail && (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <section className={style.selectBuy}>
               <span className="bi bi-arrow-left"
                  onClick={backPage} />
            </section>
            <section className={style.selectMain}>
               <div>
                  <CardPicture dataDetail={dataDetail} />
               </div>
               <div className={style.selectMain_g}>
                  {submit && (<CardPayment />)}
                  {!submit && (<CardBuy dataDetail={dataDetail} setSubmit={setSubmit} />)}
                  <CardGgMap dataDetail={dataDetail} />
               </div>
            </section>
         </motion.div>)}
      </AnimatePresence>
   </section>
}