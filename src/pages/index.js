import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Homepage/Hero'
import Intro from '@/components/Homepage/Intro'
import Cards from '@/components/Homepage/Cards'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Cards/>
      <Footer/>
   </>
    
  )
}
