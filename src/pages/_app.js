import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import CustomLoadingIcon from '../components/Loading/Loading';
import { useEffect,useState } from 'react';

export default function App({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a 2-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return(
    <>
      <Head>
          <title>JoocBox - FashionFusion</title>
      </Head>
      {isLoading ? (<CustomLoadingIcon/>) : (
         <div>
           <Navbar/>
           <Component {...pageProps} />
           <Footer/>
         </div>
      )
    }
    </>
  ) 
}
