import styles from "./ProjectCard.module.css";
import {useState} from "react";

/* media import*/
import runningConseilLogo2 from "../../assets/images/runningConseilLogo2.png";
import goSportLogo from "../../assets/images/goSportLogo.png"


function ProjectCard (){
    const content = [
        {
            image: runningConseilLogo2,
            title: "Chargé de développement commercial - CDD (2 ans)",
            description : "J'ai occupé ce poste afin de participer au développement de la clientèle et à la promotion des produits de l'entreprise.",
            point1: "Commercialisation de produits et services dédiés au running, avec un accompagnement client sur mesure.",
            point2: "Accueil convivial, conseils spécialisés et négociation adaptée aux besoins et objectifs des clients.",
            point3: "Élaboration et déploiement de stratégies de fidélisation pour renforcer les relations durables avec la clientèle.",
            point4: "Mise en valeur des produits par un merchandising stratégique et une implantation optimisée pour booster la performance commerciale.",
            point5: "Coordination et animation d’événements sportifs (stands, marathons, trails…) incluant la préparation opérationnelle et logistique.",
            point6: "Exploitation d’outils digitaux pour optimiser l’efficacité opérationnelle et assurer un suivi précis des indicateurs de performance.",
            point7: "Supervision complète de la gestion des stocks, de la réception des marchandises au suivi logistique et au traitement des services après-vente.",
        },
         {
            image: runningConseilLogo2,
            title: "Community manager - CDD (2 ans)",
            description :"J'ai occupé ce poste afin de renforcer la présence digitale de l'entreprise, d'engager la communauté et de valoriser les produits et services auprès d'un public ciblé.", 
            point1: "Élaboration et pilotage de la stratégie de contenu : conception d’un plan éditorial aligné sur les objectifs de l’entreprise, garantissant la pertinence et l’impact des publications.",
            point2: "Animation des réseaux sociaux : gestion et alimentation quotidienne des comptes (Facebook, Instagram), avec un contenu engageant et adapté à chaque audience.",
            point3: "Interaction et modération : suivi attentif des messages et commentaires pour maintenir un échange positif et constructif, en respect des valeurs de l’entreprise.",
            point4 :"Conception d’enquêtes, de supports promotionnels et réalisation de campagnes d’emailing pour mieux comprendre notre clientèle et valoriser nos offres. "
         },
        {
            image: goSportLogo,
            title: "Conseiller commercial - Stage (3 mois)",
            description :"J’ai occupé ce poste afin de contribuer à la satisfaction et à la fidélisation de la clientèle, tout en participant activement à la promotion et à la mise en valeur des produits liés au sport.", 
            point1: "Accompagnement et conseil personnalisé des clients, en répondant à leurs besoins et en facilitant la négociation.",
            point2: "Vente de produits et services spécialisés dans l’univers sportif, avec un suivi attentif de la satisfaction client.",
            point3: "Interaction et modération : suivi attentif des messages et commentaires pour maintenir un échange positif et constructif, en respect des valeurs de l’entreprise.",
            point4: "Gestion opérationnelle du magasin : étiquetage, mise en rayon, préparation des soldes, suivi des stocks et réception des livraisons.",
        },
                {
            image: goSportLogo,
            title: "Conseiller commercial - Stage (3 mois)",
            description :"J’ai occupé ce poste afin de contribuer à la satisfaction et à la fidélisation de la clientèle, tout en participant activement à la promotion et à la mise en valeur des produits liés au sport.", 
            point1: "Accompagnement et conseil personnalisé des clients, en répondant à leurs besoins et en facilitant la négociation.",
            point2: "Vente de produits et services spécialisés dans l’univers sportif, avec un suivi attentif de la satisfaction client.",
            point3: "Interaction et modération : suivi attentif des messages et commentaires pour maintenir un échange positif et constructif, en respect des valeurs de l’entreprise.",
            point4: "Gestion opérationnelle du magasin : étiquetage, mise en rayon, préparation des soldes, suivi des stocks et réception des livraisons.",
        }
    ]
    const [showAllStates, setShowAllStates] = useState(content.map(() => false));
        const toggleShowAll = (index) => {
    const newStates = [...showAllStates];
    newStates[index] = !newStates[index];
    setShowAllStates(newStates);
};

return (
    <div className={styles.projectCardContainer}>
        <div className={styles.cards}>
            {content.map((item, index) => {
                const points = Object.keys(item)
                    .filter((key) => key.startsWith("point") && item[key])
                    .map((key) => item[key]);

                const visiblePoints = showAllStates[index] ? points : points.slice(0, 2);

                return (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className ={styles.cardLogo}>
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={styles.cardImage}
                                        />
                                    )}
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardContext}>
                                    <p className={styles.cardText}>📍 Contexte :</p>
                                    <p className={styles.cardText}>{item.description}</p>
                                </div>
                                <div className={styles.cardMissions}>
                                    <p className={styles.cardText}><em>~ Mes missions ~</em></p>
                                    {visiblePoints.map((point, i) => (
                                        <p key={i} className={styles.cardText}>▫️ {point}</p>
                                    ))}
                                </div>
                            </div>
                        {points.length > 2 && (
                            <button
                                className={styles.showMoreButton}
                                onClick={() => toggleShowAll(index)}
                            >
                                {showAllStates[index] ? "Voir moins" : "Voir plus"}
                            </button>
                        )}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
}
export default ProjectCard;