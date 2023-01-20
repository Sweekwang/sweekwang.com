import styles from './navbar.module.css';
import Link from 'next/link'
import Image from 'next/image'
import Backdrop from '../backdrop/backdrop';
import { Fragment, useState } from 'react';

const Navbar = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);

    const liItems = (
        <Fragment>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>Experiences</Link>
            </li>
            <li>
                <Link href='/'>Projects</Link>
            </li>
            <li>
                <Link href='/'>About me</Link>
            </li>
        </Fragment>
    );

    const menuClick = () => {
        setIsMenuShow(!isMenuShow);
    };


    return(
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <div className={styles.logoContainer}>
                    <Image 
                        alt="Chua Swee Kwang"
                        src="/Icons/menu.svg" 
                        className={styles.menu}
                        width={50} 
                        height={50}
                        onClick={menuClick}/>
                    <div>
                        <p className={styles.logo}>sweekwang<span className={styles.logoDots}>.</span></p>
                    </div>
                </div>
                
                <div>
                    <ul className={styles.ul}>
                        {liItems}
                    </ul>
                </div>

                <div>
                    <p><Link href="/">Let&apos;s Talk</Link></p>
                </div>
            </div>

            <div className={isMenuShow ? null : styles.isMenuHidden}>
                <div className={styles.sidebar}>
                    <ul>
                        {liItems}
                    </ul>
                </div>
                <Backdrop onClick={menuClick}/>
            </div>
        </nav>
    )
};

export default Navbar;