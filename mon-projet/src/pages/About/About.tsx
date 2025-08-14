import React from "react";
import styles from "../About/About.module.css";
import { useNavigate } from "react-router-dom";

/*Component Import*/
import Button from "../../components/Button/Button";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

/*Image Import*/
import portraitDylan from "../../assets/images/PortraitDylan.png";
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
      image: portraitDylan,
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
      image: portraitDylan,
      date: "2020 - Aujourd'hui",
    },
  ];
 const degree = [
    {
      title: "Master Management et stratégie d'entreprise",
      description :"Keyce Academy",
      image: portraitDylan,
      date: "2025",
    },
       {
      title: "Licence Professionnelle Commerce et Distribution",
      description: "Institut Universitaire d'Avignon",
      image: portraitDylan,
      date: "2023",
    },
    {
      title: "Baccalauréat +2 Technique de Commercialisation",
      description: "Institut Universitaire d'Avignon",
      image: portraitDylan,
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

  return (
    <>
      {/* Header */}
      <section className={styles.H1Container}>
        <div className={styles.H1Title}>
          <h1>Qui suis-je vraiment?</h1>
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
        <div className={styles.portrait}>
          <img src={portraitDylan} alt="Dylan" />
          <span className={styles.changePhoto}>changer de photo</span>
        </div>

        <div className={styles.keyExperience}>
          <div className={styles.h2Container}>
            <h2>Mon parcours et mes expériences personnelles</h2>
            <div className={styles.h2Content}>
              <p>
                Un parcours qui allie passion et professionnalisme, avec une forte expérience dans le domaine du
                développement <strong>commercial et marketing.</strong>
              </p>
            </div>
          </div>

          {/* Timeline verticale */}
          <div className={styles.timeline}>
            {experiences.map((experience, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.timelineDate}>{experience.date}</span>
                <div className={styles.timelineContent}>
                  <img src={experience.image} alt={experience.title} className={styles.timelineImage} />
                  <div>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
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
        </div>
      </section>

      {/* Compétences */}
      <section className={styles.h2Container}>
        <div className={styles.h2ContentTitle}>
        <h2>Mes compétences</h2>
        </div>
        <div className={styles.containerList}>
          <h3 className={styles.h3Title}>Soft-Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Travail en équipe</li>
            <li>Créativité</li>
            <li>Adaptabilité</li>
            <li>Sens du détail</li>
          </ul>

          <h3 className={styles.h3Title}>Hard-Skills</h3>
          <ul>
            <li>Analyse des besoins clients</li>
            <li>Négociation commerciale</li>
            <li>Montage vidéo</li>
            <li>Marketing</li>
            <li>Management</li>
            <li>Prospection et développement commercial</li>
          </ul>
          <h3 className={styles.h3Title}>Langues</h3>
          <ul>
            <li>Anglais courant (B1)</li>
            <li>Espagnol courant (B1)</li>
          </ul>
        </div>
      </section>
      {/* Portrait + expériences (frise verticale) */}
      <section className={styles.formation}>
        <h2>Formation</h2>
        <p className={styles.formationText}>
          Un parcours académique solide: à retravailler sous la forme d'une frise chronologique
        </p>
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
          <div className={styles.buttonContainer}>
            <Button variant="primary" onClick={() => navigate("/experiences")}>
              Voir les détails
            </Button>
          </div>
      </section>
      {/* Valeurs et motivations */}
      <section className={styles.h2Container}>
            <div className={styles.h2ContentTitle}>
                <h2>Mes valeurs et motivations</h2>
            </div>
            <div className={styles.h2Content}>
                <p><em>" Ce qui m'anime, c'est l'envie de créer, d'oser et de donner vie à des idées qui comptent." </em></p>
            </div>
            <div className={styles.motivationList}>
                <ul>
                    {motivation.map((item, index) => (
                        <li key={index}>
                            <strong>{item.title} <img src={item.image} alt={item.title} /></strong>: {item.description}
                        </li>
                    ))}
                </ul>
            </div>
      </section>

      <section className={styles.h2Container}>
        <div className={styles.passionContainer}>
          <h2>En dehors du travail</h2>
          <h3 className={styles.h3Title}>Mes autres centres d'intérêt</h3>
          <div className={styles.passionList}>
            <ul>
              <li> ▪️ Création de contenu vidéo sur réseaux sociaux (Youtube, Instagram)</li>
              <li> ▪️ Pratique du foot depuis 10 ans</li>
              <li> ▪️ Gestionnaire d'une communauté en ligne (Discord, YouTube)</li>
            </ul>
             {/* <ProjectCard/> */}
          </div>
          <div className={styles.pContainer}>
            <p>Prêt à relever de nouveaux défis ? <a href="/contact">Contactez-moi !</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
