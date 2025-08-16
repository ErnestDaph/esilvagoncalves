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
                        <div className={styles.h1content}>
                            <p>
                                Derrière chaque mission, il y a bien plus qu’un poste occupé : il y a des défis relevés, des idées concrétisées et des rencontres marquantes. 
                                Cette page retrace les <strong>étapes clés</strong>  de mon parcours, là où mes compétences se sont forgées et où ma vision s’est affirmée. 
                                Plus qu’une simple chronologie, c’est le <strong>récit vivant des expériences qui m’ont façonné</strong>.
                            </p>
                        </div>
                </div>
                </section>
                <section className={styles.h2Container}>
                    <div className={styles.h2Content}>
                        <h2>Des expériences marquantes</h2>
                        <div className={styles.h2Description}>
                            <p>
                                Ces expériences m’ont permis <strong>d’affiner mes compétences</strong>, de nourrir ma curiosité et de renforcer ma capacité à m’adapter, toujours avec l’envie de créer un impact positif.
                            </p>
                        </div>
                    </div>
                        <div className={styles.projectCardContainer}>
                            <ProjectCard />
                        </div>
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
                        <p> Convaincus par mon parcours ? Parlons projets ! <a href="/contact">Contactez-moi !</a></p>
                    </div>
                </section>
                <section className={styles.h2Container}>
                    <div className={styles.h2Content}>
                        <h2>Les compétences que j'apporte</h2>
                        <div className={styles.h2Description}>
                        <p>Au fil de mes expériences, j'ai développé un savoir-faire complet qui me permet de répondre efficacement aux besoins des clients et de contribuer au succès des projets.</p>
                        </div>
                    </div>
                    <div className={styles.h2ListContainer}>
                        <div className={styles.skillsContainer}>
                            <h3 className={styles.h3Skills}>Excellence relationnelle et commerciale</h3>

                            <div className={styles.skillsDescriptionContainer}>
                                <ul className={styles.skillsList}>
                                    {commercialSkills.map((point, index) => (
                                        <li key={index} className={styles.description}>▪️ {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.skillsContainer}>
                            <h3 className={styles.h3Skills}>Organisation efficace et gestion de projets</h3>
                            <div className={styles.skillsDescriptionContainer}>
                                <ul>
                                    {gestionSkills.map((point, index) => (
                                        <li key={index} className={styles.description}>▪️ {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.skillsContainer}>
                            <h3 className={styles.h3Skills}>Maîtrise digitale et communication impactante</h3>
                            <div className={styles.skillsDescriptionContainer}>
                                <ul className={styles.skillsList}>
                                    {digitalSkills.map((point, index) => (
                                        <li key={index} className={styles.description}>▪️ {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.h2Container}>
                        <h2>Ce que mes partenaires pensent de mon travail</h2>
                        <div className={styles.h2Description}>
                            <p>Découvrez les témoignages de ceux qui ont collaboré avec moi, mettant en lumière mon engagement, ma créativité et mon professionnalisme.</p>
                        </div>
                        <div className={styles.test}>
                            <p className={styles.testText}>
                                <em>"Dylan a su comprendre nos besoins et y répondre avec précision." 
                                     - <strong className={styles.clientTest}>Client satisfait</strong></em>
                                </p>
                        </div>
            </section>
        </>
    )

}

export default Experiences;