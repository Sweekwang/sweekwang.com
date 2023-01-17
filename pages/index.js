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
              <p className={Style.heroCaption}>Hello I&apos;m</p>
              <h1>SWEE KWANG</h1>
              <p className={Style.heroDescription}>Junior iOS developer with UIKit and SwiftUI experiences who write clean and elegant code. I love building mobile and web application.</p>
            </div>
          </div>

          <div className={Style.heroRight}>
            <Image 
              alt="Chua Swee Kwang"
              src="/home/sweekwang.png" 
              className={Style.myImage}
              width={420} 
              height={550}/>

              <div className={Style.logoDiv}>
                <div className={Style.logoGroup1}>
                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swiftui.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swift.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/reactjs.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/nextjs.png" 
                    width={100} 
                    height={100}/>
                </div>

                <div className={Style.logoGroup2}>
                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swiftui.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swift.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/reactjs.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/nextjs.png" 
                    width={100} 
                    height={100}/> 
                </div>

                <div className={Style.logoGroup3}>
                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swiftui.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swift.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/reactjs.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/nextjs.png" 
                    width={100} 
                    height={100}/> 
                </div>
                <div className={Style.logoGroup4}>
                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swiftui.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/swift.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/reactjs.png" 
                    width={100} 
                    height={100}/>

                  <Image 
                    alt="SwiftUI Developer"
                    src="/logo/nextjs.png" 
                    width={100} 
                    height={100}/> 
                </div>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}
