import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout(props) {
   return <>
      <Head>
         <link rel="icon" href="/favicon.ico" />
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
         <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Inter:wght@100;200;300;400&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700&family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&family=Work+Sans:wght@500&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
   </>
}