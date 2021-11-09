import style from '../../styles/card.module.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Search(props) {
   const { search, setSearch } = props
   return <div className={style.search}>
      <div>
         <span className="bi bi-search" />
         <input
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            placeholder="Enter a City, County, or Province" />
      </div>
      &nbsp;&nbsp;&nbsp;
      <span className="bi bi-funnel" />
   </div>
}