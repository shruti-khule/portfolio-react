import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedinIn, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import styles from '../styles/NavBar.module.css'


export const NavBar= ({scrollToProjectRef,scrollToSkillsRef,scrollToContactFormRef,scrollToHomeRef}) =>{
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
  const scrollToContactForm = () => {
    if (scrollToContactFormRef.current) {
      scrollToContactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    if (scrollToHomeRef.current) {
      scrollToHomeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const[activeLink,setActiveLink]=useState('false');

    const updateActiveLink=(value)=>{
        setActiveLink(value);
        console.log(activeLink); 

    }
   
    return(

    <Navbar expand="md" className={styles.navbar} >
      <Container className={styles.container}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? styles.active : styles.Link} onClick={()=> {updateActiveLink('home'); scrollToHome()}} >Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ? styles.active: styles.Link} onClick={()=>{updateActiveLink('projects'); scrollToProject()}}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? styles.active: styles.Link} onClick={()=> {updateActiveLink('skills'); scrollToSkills()}}>Skills</Nav.Link>
          </Nav>
          <div>
            <a href="https://www.linkedin.com/in/shruti-khule-3b715520a/" className={styles.socialicons}><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href="https://github.com/shruti-khule" className={styles.socialicons}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/_shrutiiiii__/" className={styles.socialicons}><FontAwesomeIcon icon={faInstagram}/></a>
          </div>
          <div>
            <button onClick={()=>scrollToContactForm()} className={styles.button}>Let's connect !</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;