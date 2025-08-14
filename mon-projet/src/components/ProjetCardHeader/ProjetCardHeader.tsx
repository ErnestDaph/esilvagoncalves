import React from "react";
import styles from "./ProjetCardHeader.module.css";

/*Image Impot*/
import contentCreation from "../../assets/images/contentCreation.jpg"


function ProjectCardHeader() {
    const image = [
        {
            image : <img src={contentCreation} alt="Honda" />
        }
        
    ];

    return(
        <div className={styles.projectCardHeader}>
            <p>Test Test</p>
        </div>
    )
    
}
export default ProjectCardHeader;