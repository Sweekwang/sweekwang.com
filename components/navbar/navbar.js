import styles from './navbar.module.css';
import Link from 'next/link'

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <div>
                    <p className={styles.logo}>sweekwang<span className={styles.logoDots}>.</span></p>
                </div>
                
                <div>
                    <ul className={styles.ul}>
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
                    </ul>
                </div>

                <div>
                    <p><Link href="/">Let's Talk</Link></p>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;