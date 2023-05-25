import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}
