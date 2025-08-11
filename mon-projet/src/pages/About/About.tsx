import styles from "../About/About.module.css";
import portraitDylan from "../../assets/images/PortraitDylan.png";
import Button from "../../components/Button/Button";

const About = () =>{
    return (
      <>
      <section className={styles.H1Container}>
        <div className={styles.H1Title}>
            <h1>Faisons plus ample connaissance </h1>
        </div>
        <div className={styles.H1Subtitle}>
            {/* Ajoutez une brève description de vous-même ici */}
            <p> De nature curieux et créatif, j'aime explorer toutes les possibilités digitales, que ce soit sur YouTube, en lives Twitch ou dans la création sur les réseaux sociaux.
                C'est finalement derrière l'écran que je possède mon plein potentiel et que je me sens le plus à l'aise.
            </p>
        </div>
      </section>
      <section className={styles.h2Container}>
        <div className={styles.portrait}>
            <img src={portraitDylan} alt="Dylan" />
            <legend>changer de photo</legend>
        </div>
        <div className={styles.keyExperience}>
            <div className={styles.h2Container}>
                    <h2>Mon parcours</h2>
                    <div className={styles.h2Content}>
                    <p>Un parcours qui allie passion et professionnalisme, avec une forte expérience dans le domaine du développement commercial et marketing.</p>
                </div>
            </div>
            <div className={styles.experienceDescription}>
            <h3>Expériences clés</h3>
            <p className={styles.experienceDescriptionText}>trouver ces expériences et les mettre en avant</p>
            <div className={styles.experienceList}>
                <ul>
                    <li><img src={portraitDylan} alt="Running Conseil" /><legend>Running Conseil</legend></li>
                    <li><img src={portraitDylan} alt="Createur de contenu" /><legend>Créateur de contenu</legend></li>
                    <li><img src={portraitDylan} alt="Sapeur Pompier Volontaire" /><legend>Sapeur Pompier Volontaire</legend></li>
                </ul>
        </div>
        <section className={styles.h2Container}>
        <div className={styles.competences}>
            <h2>Mes compétences</h2>
            <h3>Soft-Skills</h3>
            <ul>
                <li>Communication</li>
                <li>Travail en équipe</li>
                <li>Créativité</li>
                <li>Adaptabilité</li>
            </ul>
            <h3>Hard-Skills</h3>
            <ul>
                <li>Community management</li>
                <li>Design UI/UX</li>
                <li>Montage Vidéo</li>
            </ul>
        </div>
      </section>
            </div>
            <div className={styles.formation}>
            <h3>Formation</h3>
            <p className={styles.formationText}>Un parcours académique solide: à retravailler sous la forme d'une frise chronologique</p>
            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <span className={styles.timelineDate}>2020 - 2023</span>
                    <span className={styles.timelineTitle}>Diplôme en Développement Web</span>
                </div>
                <div className={styles.timelineItem}>
                    <span className={styles.timelineDate}>2018 - 2020</span>
                    <span className={styles.timelineTitle}>Baccalauréat en Sciences</span>
                </div>
            </div>
            </div>
        </div>
      </section>

      <section className={styles.h2Container}>
        <div className={styles.projets}>
            <h2>Mes projets</h2>
            <p className={styles.projetsText}>Découvrez mes réalisations et comment j'ai mis en pratique mes compétences pour créer des expériences engageantes.</p>
            <div className={styles.projectList}>
                {/* Ajoutez ici une liste de vos projets */}
                <ul>
                    <li>Projet 1</li>
                    <li>Projet 2</li>
                    <li>Projet 3</li>
                </ul>
                <Button variant="primary">Voir mes projets</Button>
            </div>
        </div>

      </section>
      <section className={styles.h2Container}>
        <div className={styles.passion}>
            <h2>Mes passions</h2>
            <p className={styles.passionText}>Je suis passionné par tout ce qui touche à la création de contenu et à l'interaction avec les communautés en ligne. Que ce soit à travers le streaming, la vidéo ou les réseaux sociaux, j'aime partager mes idées et collaborer avec les autres.</p>
        </div>
      </section>

      </>
    );
}

export default About;