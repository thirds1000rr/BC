import '../styles/globals.scss'
import Layout from '../components/Layout/layout'
function MyApp({ Component, pageProps }) {
   function onTop() {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   }

   return <Layout>
      <div className="back2top" onClick={onTop}>
         <div>
            <a className="bi bi-chevron-up" />
         </div>
      </div>
      <Component {...pageProps} />
   </Layout>
}

export default MyApp
