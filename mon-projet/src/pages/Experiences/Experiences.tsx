import styles from './Experiences.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import runningConseilLogo from '../../assets/images/runningConseilLogo.png';


function Experiences(){
    const projects =[
        {
        },
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
        <section className={styles.body}>
            <h2>Mes expériences professionnelles</h2>
            <p>Montrer ton parcours professionnel ou académique, ce que tu as fait, où et dans quel cadre.</p>
            <div className={styles.projectContainer}>
                {projects.map((project,index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}/>
                ))}
            </div>
        </section>
        </>
    )
}

export default Experiences;