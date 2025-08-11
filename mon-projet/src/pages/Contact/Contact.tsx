import React from "react";
import styles from "./Contact.module.css";
import portraitDylan from "../../assets/portraitDylan.jpg";

const Contact = () =>{
    return (
      <>
      <section className={styles.H1Container}>
        <div className={styles.H1Title}>
            <h1>Contactez-moi, votre futur partenaire créatif, qui fait briller vos projets </h1>
        </div>
        <div className={styles.H1Subtitle}>
            <p>Voyez le monde à travers mon objectif. Envie de créer ensemble ? Contactez-moi!</p>
        </div>
      </section>
      <section className={styles.h2Container}>
        <div className={styles.portrait}>
            <img src={portraitDylan} alt="Dylan" />
        </div>
        <div className={styles.H2Subtitle}>
            <h2>Contactez-moi via </h2>
                    <ul>
                        <li><p>Un coup de téléphone : 07 80 35 96 06</p></li>
                        <li><p>en un mail : esilvagoncalvesdylan@gmail.com</p></li>
                        <li><p> Ayez sous les yeux mon CV : <a href="CV.pdf" download>Télécharger mon CV 📃</a></p></li>
                    </ul>
        </div>
      </section>
      </>
    );
}

export default Contact;
