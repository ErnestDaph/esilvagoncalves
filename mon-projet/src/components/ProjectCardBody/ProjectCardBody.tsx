import React from "react";
import styles from "./ProjetCardBody.module.css";

function ProjectCardBody (){
    const content = [
        {
            title: "Développement de nouvelles fonctionnalités",
            description: "Mise en place de nouvelles fonctionnalités pour améliorer l'expérience utilisateur.",
        },
    ]
    return(
        <div>
            {content.map((item, index) => (
                <div key={index} className={styles.contentItem}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectCardBody;