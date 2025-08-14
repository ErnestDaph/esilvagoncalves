import styles from "./ProjectCard.module.css";
import ProjectCardHeader from "../ProjetCardHeader/ProjetCardHeader";
import ProjectCardBody from "../ProjectCardBody/ProjectCardBody"



function ProjectCard (){
    return (
        <div className={styles.projectCard}>
            <ProjectCardHeader/>
            <ProjectCardBody/>
        </div>
    );
}
export default ProjectCard;