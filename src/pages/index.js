
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Homepage/Hero'
import Intro from '@/components/Homepage/Intro'
import Cards from '@/components/Homepage/Cards'
import About from '@/components/Homepage/About'
import Design from '@/components/Homepage/Design'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Cards/>
      <About/>
      <Design/>
      <Footer/>
   </>
    
  )
}
