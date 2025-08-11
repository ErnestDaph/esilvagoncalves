import React from 'react';
import { useState } from 'react';
import styles from "./Footer.module.css";


function Footer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <footer className={styles.footer}>
            <section className={styles.footerContainer}>
                <div className={styles.footerInformation}>
                    <h3>Informations</h3>
                    <ul>
                    <li><a href="mailto:esilvagoncalvesdylan@gmail.com">esilvagoncalvesdylan@gmail.com</a></li>
                    <li><a href="tel:+33780359606">07 80 35 96 06</a></li>
                    </ul>
                </div>
                <div className={styles.footerSocialMedia}>
                    <h3>Réseaux Sociaux</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/dylan-esilva/" target="_blank" rel="noopener noreferrer"><img src="/linkedin-icon.png" alt="LinkedIn" /></a></li>
                        <li><a href="https://www.tiktok.com/@honda.purple" target="_blank" rel="noopener noreferrer"><img src="/tiktok-icon.png" alt="TikTok" /></a></li>
                    </ul>
                </div>
            </section>
            <section>
                
            </section>
        </footer>
    );
}

export default Footer;