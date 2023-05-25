import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
     <Head>
          <title>JoocBox - FashionFusion</title>
      </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}
