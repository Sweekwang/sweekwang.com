import Image from 'next/image';
import style from './Projects.module.css';

const Projects = () => {
    const goTo = (path) => {

    };

    return(
        <>
            <div className={style.projects} id ="projects">
                <h2 className={style.title}>Featured Project</h2>
                <div className={style.featureStyle}>
                    <div className={style.rightFeature}>
                        <div className={style.containerTitle}>
                            <h3>BTT Basic Theory Test</h3>
                        </div>
                        <div className={style.captionBar}>
                            <p>May 2019</p>
                            <p>Maintaining</p>
                        </div>
                        <div className={style.titleContent}>
                            <p>I created BTT Basic Theory Test to change to way of preparing for driving theory test. Instead of using book, student can just open up their phone and prepare and learn stuff regrading driving in Singapore.</p>
                            <p className={style.disclaimer}><b>Disclaimer</b>: The android version of it is created by <a href="https://www.linkedin.com/in/sweeliang/" target="_blank" rel="noreferrer">Swee Liang</a></p>

                            <div className={style.downloadDiv}>
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.sweeliang.bttbasictheorytest&hl=en_SG&gl=US"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Image 
                                        alt="BTT download on appstore"
                                        src="/home/appstore.svg"
                                        width={120} 
                                        height={50}/>
                                </a>
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.sweeliang.bttbasictheorytest&hl=en_SG&gl=US"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Image 
                                        alt="BTT download on appstore"
                                        src="/home/googleplay.png"
                                        width={130} 
                                        height={40}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={style.leftFeature}>
                        <div className={style.ImageContainer}>
                            <Image 
                                alt="Swee Kwang Experiences"
                                src="/home/btt_poster.png"
                                className={style.featuredImage}
                                width={600} 
                                height={338}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.projects}>
                <h2 className={style.title}>Other Projects</h2>
                <div className={style.cardContent}>
                    <div className={style.cardBody} onClick={() => goTo("")}>
                            <Image 
                                alt="Swee Kwang Experiences"
                                src="/home/ftt_poster.png"
                                className={style.featuredImage}
                                width={600} 
                                height={338}/>
                            <p>FTT Final Theory Test</p>
                    </div>
{/* 
                    <div className={style.cardBody} onClick={() => goTo("")}>
                            <Image 
                                alt="Swee Kwang Experiences"
                                src="/home/btt_poster.png"
                                className={style.featuredImage}
                                width={600} 
                                height={338}/>
                        <p>Mental Math - Math Trainer</p>
                    </div> */}
                </div>
            </div>
        </>
    )
};

export default Projects;