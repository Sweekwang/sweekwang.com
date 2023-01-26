import Head from 'next/head'
import HeroDiv from '../components/Home/Herodiv/Herodiv'
import Experience from '../components/Home/Experiences/Experience'
import Navbar from '../components/navbar/navbar'
import Style from './home.module.css'
import Projects from '../components/Home/Projects/Projects'
import Footer from '../components/footer/footer'
import AboutMe from '../components/Home/AboutMe/AboutMe'

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
        <HeroDiv/>
        <Experience/>
        <Projects/>
        <AboutMe/>
      </main>

      <Footer/>
    </>
  )
}
