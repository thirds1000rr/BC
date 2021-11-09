import style from '../styles/Home.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import CardProfile from '../components/CardName/card'
import React, { useState, useEffect } from 'react'
import CardItem from '../components/CardItem/card'
import { motion, AnimatePresence } from "framer-motion"

export default function Profile_page() {
   const [select, setSelect] = useState("1")

   const [owned, setOwned] = useState([
      { id: 23, address: "asdad", area: "20", price: "2,200" }
   ])
   const [listed, setListed] = useState([
      { id: 30, address: "asdad", area: "30", price: "2,200" }
   ])
   const [selling, setSelling] = useState([
      { id: 43, address: "asdad", area: "40", price: "2,200" }
   ])
   const [saved, setSaved] = useState([
      { id: 53, address: "asdad", area: "50", price: "2,200" }
   ])

   return <section className={style.profile_page}>
      <CardProfile />

      <section className={style.menuBar}>
         <div>
            <div
               className={(select == "1") ? `${style.select}` : ``}
               onClick={() => { setSelect("1") }}>
               <label>Owned</label>
            </div>
            <div
               className={(select == "2") ? `${style.select}` : ``}
               onClick={() => { setSelect("2") }}>
               <label>Listed</label>
            </div>
            <div
               className={(select == "3") ? `${style.select}` : ``}
               onClick={() => { setSelect("3") }}>
               <label>Selling</label>
            </div>
            <div
               className={(select == "4") ? `${style.select}` : ``}
               onClick={() => { setSelect("4") }}>
               <label>Saved</label>
            </div>
         </div>
      </section>
      <AnimatePresence>
         <section className={style.main_manu}>
            {select == "1" && (owned.map(value => {
               return <CardItem key={value.id} id={value.id} address={value.address}
                  price={value.price} area={value.area} />
            }))}

            {select == "2" && (listed.map(value => {
               return <CardItem key={value.id} id={value.id} address={value.address}
                  price={value.price} area={value.area} />
            }))}

            {select == "3" && (selling.map(value => {
               return <CardItem key={value.id} id={value.id} address={value.address}
                  price={value.price} area={value.area} />
            }))}

            {select == "4" && (saved.map((value) => {
               return <CardItem key={value.id} id={value.id} address={value.address}
                  price={value.price} area={value.area} />
            }))}
         </section>
      </AnimatePresence>
   </section>
}