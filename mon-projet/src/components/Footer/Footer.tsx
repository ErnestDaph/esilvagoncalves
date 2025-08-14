import React from "react";;
import styles from "./Footer.module.css";
import LinkedinLogo from '../../assets/icons/linkedinLogo.png';
import TiktokLogo from '../../assets/icons/tiktokLogo.png';
import YoutubeLogo from '../../assets/icons/youtubeLogo.png';



function Footer() {


    return (
        <footer className={styles.footer}>
            <section className={styles.footerContainer}>
                <div className={styles.footerInformation}>
                    <h3>Informations</h3>
                    <ul>
                    <li><a href="CV_DylanE.pdf" download>Télécharger mon CV 📩</a></li>
                    <li><a href="mailto:esilvagoncalvesdylan@gmail.com">Ecrivez-moi 📧</a></li>
                    <li><a href="tel:+33780359606"> Appelez-moi 📞: 07 80 35 96 06</a></li>
                    </ul>
                </div>

                <div className={styles.footerSocialMedia}>
                    <h3>Mes Réseaux Sociaux</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/dylan-e-silva-goncalves-7936b5225/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt="LinkedIn" /></a></li>
                        <li><a href="https://www.tiktok.com/@honda.purple" target="_blank" rel="noopener noreferrer"><img src={TiktokLogo} alt="TikTok" /></a></li>
                        <li><a href="https://youtube.com/shorts/E_0sEITO13s?si=nrJCs_nr8IL2B3eH" target="_blank" rel="noopener noreferrer"><img src={YoutubeLogo} alt="YouTube" /></a></li>
                    </ul>
                </div>
            </section>  
            <section className={styles.footerCopyrightContainer}> 
                <div className={styles.footerCopyright}>
                    <p>© Dylan E Silva Goncalves –  {new Date().getFullYear()}</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;