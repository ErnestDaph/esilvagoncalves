
import styles from "../Contact/Contact.module.css";
import portraitDylan from "../../assets/images/PortraitDylan.png";

const Contact = () =>{
    return (
      <>
      <section className={styles.H1Container}>
        <div className={styles.H1Title}>
            <h1>Contactez, votre futur partenaire créatif, qui fait briller vos projets </h1>
        </div>
        <div className={styles.H1Subtitle}>
            <p>Vous avez un projet ou une envie de booster votre présence ? 
            Mon expertise s'étend du <strong>conseil client à la fidélisation</strong> sur-mesure en passant par l'animation des réseaux sociaux. Je serais ravi de vous accompagner pour créer une connexion avec votre communauté et <strong>faire grandir votre visibilité.</strong> Diplômé 
            d'un Master en Management et Stratégie d'Entreprise, je serais disponible dès octobre 2025 pour collaborer avec vous. 
            Me contacter c'est avoir l'assurance de construire ensemble vos prochains succès ! Qu'attendez-vous ?</p>
        </div>
      </section>
      <section className={styles.h2Container}>
        <div className={styles.portrait}>
            <img src={portraitDylan} alt="Dylan" />
        </div>
        <div className={styles.H2Subtitle}>
            <h2>▪️ Embarquez mon parcours avec vous</h2>
            <div className={styles.CVcontainer}>
            <a href="CV_DylanE.pdf" download> 📩 Télécharger mon CV 📩</a>
            </div>
            <h2>▪️ Construisons la suite ensemble  </h2>
            <p> par téléphone 📱 : 07 80 35 96 06</p>
            <p> par mail 📧 : esilvagoncalvesdylan@gmail.com</p>
              <div className={styles.lastSection}>
                <p><em> "Je suis impatient de vous lire et de discuter de vos projets !"</em></p>
              </div>
        </div>
      </section>
      </>
    );
}

export default Contact;
