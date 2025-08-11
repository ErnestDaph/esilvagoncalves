import styles from "./Contact.module.css";
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
        <div className={styles.keyExperience}>
            <h2>Mon parcours</h2>
            <p>Un parcours qui allie passion et professionnalisme, avec une forte expérience dans le domaine du développement web.</p>
            <h3>Expériences clés</h3>
            <p>trouver ces expériences et les mettre en avant</p>
            <h3>Etudes</h3>
            <p>Un parcours académique solide: à retravailler</p>
        </div>
      </section>
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
      <section className={styles.h2Container}>
        <div className={styles.projets}>
            <h2>Mes projets</h2>
            <p>Découvrez mes réalisations et comment j'ai mis en pratique mes compétences pour créer des expériences engageantes.</p>
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
            <p>Je suis passionné par tout ce qui touche à la création de contenu et à l'interaction avec les communautés en ligne. Que ce soit à travers le streaming, la vidéo ou les réseaux sociaux, j'aime partager mes idées et collaborer avec les autres.</p>
        </div>
      </section>

      </>
    );
}

export default About;