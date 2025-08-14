import styles from "./ProjetCardHeader.module.css";

/*Image Impot*/
import contentCreation from "../../assets/images/contentCreation.jpg"
import hondaTest from "../../assets/images/hondaTest.jpg"

function ProjectCardHeader() {
    const image = [
        {
            image : <img src={contentCreation} alt="Honda" />
        },
    ];

    return(
        <div className={styles.projectCardHeader}>
            {image.map((img, index) => (
                <div key={index} className={styles.imageContainer}>
                    {img.image}
                </div>
            ))}
        </div>
    )
    
}
export default ProjectCardHeader;