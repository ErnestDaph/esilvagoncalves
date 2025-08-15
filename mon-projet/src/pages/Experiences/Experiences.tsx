import styles from './Experiences.module.css';
/*Components import*/
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from '../../components/Button/Button';



function Experiences(){
    const commercialSkills = [
        "Accueil chaleureux et expérience client optimisée.",
        "Fidélisation et suivi attentif de la clientèle.",
        "Accompagnement personnalisé et négociation adaptée aux besoins des clients."

    ]
    const gestionSkills = [

        "Gestion des stocks, logistique et approvisionnements.",
        "Coordination d’événements et campagnes marketing.",
        "Suivi des objectifs commerciaux avec rigueur."
    ]
    const digitalSkills = [
        "Animation et modération des réseaux sociaux.",
        "Creation de contenus et campagnes d'emailing.",
        "Veille concurrentielle, analyse des performances et optimisation du merchandising.",

    ]
    return(
        <>
        <section className={styles.header}>
            <div className={styles.h1container}>
                <h1>Plus qu'une histoire, une histoire</h1>
                <p>Derrière chaque mission, il y a bien plus qu’un poste occupé : il y a des défis relevés, des idées concrétisées et des rencontres marquantes. 
                    Cette page retrace les étapes clés de mon parcours, là où mes compétences se sont forgées et où ma vision s’est affirmée. 
                    Plus qu’une simple chronologie, c’est le récit vivant des expériences qui m’ont façonné.
                </p>
            </div>
        </section>
        <section className={styles.h2Container}>
            <h2>Mes expériences professionnelles</h2>
            <p>Montrer ton parcours professionnel ou académique, ce que tu as fait, où et dans quel cadre.</p>
            <ProjectCard />
        </section>
        <section className={styles.h2Container}>
            <div className={styles.buttonContainer}>
                <Button variant="primary" onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'CV_Dylan.pdf';
                    link.download = 'CV_Dylan.pdf';
                    link.click();

                }}>
                    Télécharger mon CV
                </Button>
            </div>
            <div className={styles.pContainer}>
                <p>Partons ensemble vers de nouveaux projets passionnants ! <a href="/contact">Contactez-moi !</a></p>
            </div>
        </section>
        <section className={styles.h2Container}>
            <h2>Les compétences que j'apporte</h2>
            <p>Au fil de mes expériences, j'ai développé un savoir-faire complet qui me permet de répondre efficacement aux besoins des clients et de contribuer au succès des projets.</p>
            <h3>Excellence relationnelle et commerciale</h3>
            <ul>
                {commercialSkills.map((point, index) => (
                    <li key={index} className={styles.description}>▪️ {point}</li>
                ))}
            </ul>
            <h3>Organisation efficace et gestion de projets</h3>
            <ul>
                {gestionSkills.map((point, index) => (
                    <li key={index} className={styles.description}>▪️ {point}</li>
                ))}
            </ul>
            <h3>Maîtrise digitale et communication impactante</h3>
            <ul>
                {digitalSkills.map((point, index) => (
                    <li key={index} className={styles.description}>▪️ {point}</li>
                ))}
            </ul>
        </section>
        <section className={styles.h2Container}>
                <h2>Ce que mes partenaires pensent de mon travail</h2>
                <p>Découvrez les témoignages de ceux qui ont collaboré avec moi, mettant en lumière mon engagement, ma créativité et mon professionnalisme.</p>
                <blockquote>
                    <p>"Dylan a su transformer nos idées en réalité avec brio. Son écoute et sa réactivité font toute la différence."</p>
                    <footer>- Client satisfait</footer>
                </blockquote>
        </section>
    </>
)

}

export default Experiences;