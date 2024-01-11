import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedinIn, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import styles from '../styles/footer.module.css'


export const Footer=({scrollToProjectRef,scrollToSkillsRef,scrollToHomeRef})=>{
    const scrollToProject = () => {
        if (scrollToProjectRef.current) {
          scrollToProjectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const scrollToSkills = () => {
        if (scrollToSkillsRef.current) {
          scrollToSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const scrollToHome = () => {
        if (scrollToHomeRef.current){
            scrollToHomeRef.current.scrollIntoView({ behavior: 'smooth' });
        }

      };
    return(
    
    <Container className={styles.footer}>
   
    
    <div className={styles.container}>
    <div className={styles.iconbox}>
            <a href="https://www.linkedin.com/in/shruti-khule-3b715520a/" className={styles.icons} ><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href="https://github.com/shruti-khule" className={styles.icons} ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/_shrutiiiii__/" className={styles.icons} ><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://twitter.com/shruti_khule" className={styles.icons}><FontAwesomeIcon icon={faTwitter}/></a>

    </div>
    <div className={styles.menu}>
        <a href="#home" className={styles.link} onClick={()=>scrollToHome()}>Home</a>
        <a href="#skills" className={styles.link} onClick={()=>scrollToSkills()}>Skills</a>
        <a href="#projects" className={styles.link} onClick={()=>scrollToProject()}>Projects</a>

    </div>
    </div>
</Container>
    );

}
export default Footer;