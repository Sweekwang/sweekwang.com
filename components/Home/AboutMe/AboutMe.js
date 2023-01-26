import style from './AboutMe.module.css';
import Link from 'next/link';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const AboutMe = () => {
    return(
        <div className={style.aboutme} id ="aboutme">
            <h3>About Me</h3>

            <div className={style.aboutContent}>
                <div className={style.left}>
                    <p>My name is Chua Swee Kwang. I am passionate about Application Development particularly interested in Apple ecosystem. I&apos;m currently working as an iOS developer in Monstarlab and studying Master of Computer Science at University of Illinois Urbana-Champaign.</p>
                    
                    <div className={style.education}>
                        <p><b>Education Background</b></p>
                        <ul>
                            <li><b>Master of Computer Science</b>, University of Illinois Urbana-Champaign. &#40;2022 - Present&#41;</li>
                            <li><b>Bachelor of Biological Sciences with Honours &#40;Distinction&#41;</b>, Nanyang Technological University, &#40;2018 - 2022&#41;</li>
                        </ul>
                    </div>

                    <div className={style.education}>
                        <p><b>Social Media</b></p>
                        <ul>
                            <li><Link target="_blank" href="https://www.linkedin.com/in/sweekwang/">Linkedin</Link></li>
                            <li><Link target="_blank" href="https://twitter.com/wescsk">Twitter</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={style.right}>
                    <TwitterTimelineEmbed
                        sourceType="wescsk"
                        screenName="wescsk"
                        options={{height: 400}}
                    />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;