
import { Inter } from 'next/font/google'
import Hero from '@/components/Homepage/Hero'
import Intro from '@/components/Homepage/Intro'
import Cards from '@/components/Homepage/Cards'
import About from '@/components/Homepage/About'
import Design from '@/components/Homepage/Design'
import Security from '@/components/Homepage/Security'
import Community from '@/components/Homepage/Community'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <> 
      <Hero/>
      <Intro/>
      <Cards/>
      <About/>
      <Design/>
      <Security/>
      <Community/>
      
   </>
    
  )
}
