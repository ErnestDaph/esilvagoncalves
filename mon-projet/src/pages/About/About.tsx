import React from "react";
import styles from "../About/About.module.css";
import { useNavigate } from "react-router-dom";

/*Component Import*/
import Button from "../../components/Button/Button";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

/*Image Import*/
import portraitDylan from "../../assets/images/PortraitDylan.png";
import runningConseilLogo from "../../assets/images/runningConseilLogo.png"
import iutLogo from "../../assets/images/iutLogo.png";
import keyceLogo from "../../assets/images/keyceLogo.png";
import contentCreation from "../../assets/images/contentCreation.jpg";
import instaPassion from "../../assets/images/instaPassion.png";
import challengeIcon from "../../assets/icons/challengeIcon.png";
import innovationIcon from "../../assets/icons/innovationIcon.png";
import learningIcon from "../../assets/icons/learningIcon.png";
import managementIcon from "../../assets/icons/managementIcon.png";
import detailsIcon from "../../assets/icons/detailsIcon.png";


const About = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: "Chargé de développement",
      description: "CDD",
      image: runningConseilLogo,
      date: "2022 - Aujourd'hui",
    },
    {
      title: "Community manager",
      description: "CDD",
      image: instaPassion,
      date: "2022 - Aujourd'hui",
    },
    {
      title: "Créateur de contenu",
      description: "Auto-entrepreneur",
      image: contentCreation,
      date: "2020 - Aujourd'hui",
    },
  ];
 const degree = [
    {
      title: "Master Management et stratégie d'entreprise",
      description :"Keyce Academy",
      image: keyceLogo,
      date: "2025",
    },
       {
      title: "Licence Professionnelle Commerce et Distribution",
      description: "Institut Universitaire d'Avignon",
      image: iutLogo,
      date: "2023",
    },
    {
      title: "Baccalauréat +2 Technique de Commercialisation",
      description: "Institut Universitaire d'Avignon",
      image: iutLogo,
      date: "2022",
    },
 ]
 const motivation = [
   {
     title: "Apprentissage en continu",
     description :"J'ai envie d'apprendre de nouvelles compétences et de me former en permanence.",
     image: learningIcon,
   },
   {
     title: "Relever des défis",
     description :"J'aime sortir de ma zone de confort et relever de nouveaux défis.",
     image: challengeIcon,
   },
   {
     title: "Créer et innover",
     description :"J'aime concevoir des projets originaux et trouver des solutions créatives.",
     image: innovationIcon,
   },
   {
     title: "Contribuer à des projets",
     description :"J'aime m'investir dans des projets qui ont du sens et qui contribuent à un objectif commun.",
     image: managementIcon,
   },
   {
     title: "Sens du détail",
     description :"J'accorde une attention particulière aux détails pour garantir la qualité du travail.",
     image: detailsIcon,
   },
   ];
     const otherInterests = [
     {
       title: " 📷 Création de contenu vidéo",
       description: "Je crée du contenu vidéo pour mes plateformes YouTube, Instagram et TikTok.",
      },
      {
        title: "💻 Gestion de communauté",
        description: "Je manage une communauté en ligne sur Discord et YouTube.",
      },
     {
       title: "⚽ Pratique du foot",
       description: " Depuis 10 ans, je joue au foot plusieurs fois par semaine.",
     },
    ]
  return (
    <>
      {/* Header */}
      <section className={styles.H1Container}>
        <div className={styles.H1Title}>
          <h1>Plus qu'un profil, une personnalité</h1>
        </div>
        <div className={styles.H1Subtitle}>
          <p>
            De nature curieux et créatif, j'aime explorer toutes les possibilités digitales, que ce soit sur
            YouTube, en lives Twitch ou dans la création sur les réseaux sociaux. C'est finalement derrière l'écran
            que je possède mon plein potentiel et que je me sens le plus à l'aise.
          </p>
        </div>
      </section>

      {/* Portrait + expériences (frise verticale) */}
      <section className={styles.h2Container}>
        <section className={styles.h2Header}>
        <div className={styles.portrait}>
          <img src={portraitDylan} alt="Dylan" />
        </div>
        <div className={styles.keyExperience}>
          <div className={styles.h2Container}>
            <h2>Mon parcours et mes expériences personnelles</h2>
            <div className={styles.h2Content}>
              <p>
                Un parcours qui allie passion et professionnalisme, avec une forte expérience dans le domaine du
                développement <strong>commercial et marketing digital.</strong>
              </p>
            </div>
          </div>
        </div>
        </section>
          {/* Timeline verticale */}
          <div className={styles.timeline}>
            {experiences.map((experience, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.timelineDate}>{experience.date}</span>
                <div className={styles.timelineContent}>
                  <img src={experience.image} alt={experience.title} className={styles.timelineImage} />
                  <div>
                    <h3>{experience.title}</h3>
                    <p className={styles.timelineDescription}>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
          <div className={styles.buttonContainer}>
            <Button variant="primary" onClick={() => navigate("/experiences")}>
              Voir les détails
            </Button>
          </div>
      </section>

      {/* Compétences */}
      <section className={styles.h2Container}>
        <div className={styles.h2ContainerItem}>
        <div className={styles.h2ContentTitle}>
        <h2>Mes compétences</h2>
        </div>
        <div className={styles.containerList}>
          <div className={styles.containerListItem}>
          <h3 className={styles.h3Title}>Soft-Skills ⚙️⛓️</h3>
          <ul>
            <li>Communication</li>
            <li>Travail en équipe</li>
            <li>Créativité</li>
            <li>Adaptabilité</li>
            <li>Sens du détail</li>
          </ul>
          </div>
          <div className={styles.containerListItem}>
          <h3 className={styles.h3Title}> Hard-Skills ⛓️‍💥</h3>
          <ul>
            <li>Analyse des besoins clients</li>
            <li>Négociation commerciale</li>
            <li>Montage vidéo</li>
            <li>Marketing</li>
            <li>Management</li>
            <li>Prospection et développement commercial</li>
          </ul>
          </div>
          <div className={styles.containerListItem}>
          <h3 className={styles.h3Title}>Langues 🗣️</h3>
          <ul>
            <li>Anglais courant (B1)</li>
            <li>Espagnol courant (B1)</li>
          </ul>
        </div>

        </div>

          </div>
      </section>
      {/* Portrait + expériences (frise verticale) */}
      <section className={styles.formation}>
        <div className={styles.h2Container}>
        <h2>Mes formations</h2>
        <p className={styles.formationText}>
          De la théorie à la pratique, mes études m’ont appris à allier stratégie, communication et gestion opérationnelle. 
          Cette combinaison me prépare à relever les défis d’un futur chef de projet avec confiance et rigueur.
        </p>
        </div>
          <div className={styles.timeline}>
            {degree.map((degree, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.timelineDate}>{degree.date}</span>
                <div className={styles.timelineContent}>
                  <img src={degree.image} alt={degree.title} className={styles.timelineImage} />
                  <div>
                    <h3>{degree.title}</h3>
                    <p>{degree.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>
      {/* Valeurs et motivations */}
      <section className={styles.h2Container}>
        <div className={styles.h2ContainerItem}>
            <div className={styles.h2ContentTitle}>
                <h2>Mes valeurs et motivations</h2>
            </div>
            <div className={styles.motivationList}>
                <ul>
                    {motivation.map((item, index) => (
                        <li key={index}>
                             <img src={item.image} alt={item.title} /> <strong>{item.title}</strong>: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
            <section className={styles.h2Container}>
        <div className={styles.h2ContainerItem}>
            <div className={styles.h2ContentTitle}>
                <h2>Mes autres centres d'intérêt</h2>
            </div>
            <div className={styles.interestList}>
                <ul>
                    {otherInterests.map((item, index) => (
                        <li key={index}>
                             <strong>{item.title}</strong>: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={styles.pContainer}>
            <p>Prêt à relever de nouveaux défis ? <a href="/contact">Contactez-moi !</a></p>
        </div>
      </section>
    </>
  );
};

export default About;
