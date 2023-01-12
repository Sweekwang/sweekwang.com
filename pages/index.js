import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar/navbar'
import Style from './home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Swee Kwang</title>
        <meta 
          name="description" 
          content="Swee Kwang, iOS developer at Monstarlab and also, computer science student at University of Illinois 
          Urbana-Champaign, MCS. Previously, he graduated from Nanyang Technological University, Biological Sciences, 
          honours (distinction). He decided to change field to software engineer because of his passion in building 
          stuff and mobile" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" />
        <link 
          rel="icon" 
          href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      
      <main>
        <div className={Style.heroSection}>
          <div className={Style.heroLeft}>
            <div className={Style.heroLeftContent}>
              <p>Hello I'm</p>
              <h1>SWEE KWANG</h1>
              <p>Junior iOS developer with UIKit and SwiftUI experiences. I love building mobile and web application which can make life simplier and easier.</p>
            </div>
          </div>

          <div className={Style.heroRight}>
          <Image src="/home/sweekwang.png" width={420} height={550}/>
          </div>
        </div>
      </main>
    </>
  )
}
