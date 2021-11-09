import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import GoogleMapReact from 'google-map-react';
export default function CardGgMap() {
   const AnyReactComponent = ({ text }) => <div>{text}</div>
   const defaultProps = {
      center: {
         lat: 10.99835602,
         lng: 77.01502627
      },
      zoom: 11
   };
   return <div className={style.cardGgMap}>
      <header>Overview</header>
      <div className={style.mainMap} >
         <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.KEY_MAP }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
         >
            <AnyReactComponent
               lat={59.955413}
               lng={30.337844}
               text="My Marker"
            />
         </GoogleMapReact>
      </div>
      <div className={style.subMap}>
         <label>Time on KasiLand <b>28 day</b></label>
         <label>Saves <b>345</b></label>
      </div>
      <div className={style.detail}>
         <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris n
            isi ut aliquip ex ea commodo consequat. Duis aute irure d
            olor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum. consectetur adipiscing elit, sed do eiusmod t
            empor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
         </p>
      </div>
   </div>
}