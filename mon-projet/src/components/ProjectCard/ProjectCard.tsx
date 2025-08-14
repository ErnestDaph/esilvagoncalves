import styles from "./ProjectCard.module.css";
import ProjectCardHeader from "../ProjetCardHeader/ProjetCardHeader";
import ProjectCardBody from "../ProjectCardBody/ProjectCardBody";


function ProjectCard (){
    const content = [
        {
            description: <ProjectCardBody/>,
        },
    ]
    return (
        <div className={styles.projectCard}>
            <ProjectCardHeader image={content[0].image} />
            <ProjectCardBody description={content[0].description} />
        </div>
    );
}
export default ProjectCard;