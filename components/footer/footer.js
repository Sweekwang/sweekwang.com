import style from './footer.module.css';

import Link from "next/link";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <p>@{year} Chua Swee Kwang</p>
            </div>
        </footer>
    )
};

export default Footer;