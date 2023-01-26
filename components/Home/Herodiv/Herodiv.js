import Style from './Herodiv.module.css';
import Image from 'next/image';

const HeroDiv = () => {
    return (
<div className={Style.heroSection} id="home">
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
    )
};

export default HeroDiv;