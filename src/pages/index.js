import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero/>
   </>
    
  )
}
