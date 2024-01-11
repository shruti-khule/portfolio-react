import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import Skills from './components/skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/footer'
import { useRef } from 'react';


function App() {
  const scrollToProjectRef = useRef(null);
  const scrollToSkillsRef = useRef(null);
  const scrollToContactFormRef = useRef(null);
  const scrollToHomeRef = useRef(null);



  
  
  return (
    <div className="App">
      <div className="navbar-container"  >
     <NavBar scrollToProjectRef={scrollToProjectRef} scrollToSkillsRef={scrollToSkillsRef} scrollToContactFormRef={scrollToContactFormRef}/>
     </div>
     <div className="bg-image"></div>
      <div className="homepage-container">
        <Homepage scrollToContactFormRef={scrollToContactFormRef} ref={scrollToHomeRef}/>
     </div>
     <div className="skills-container">
      <Skills ref={scrollToSkillsRef}/>
     </div>
     <div className="projects-container">
      <Projects ref={scrollToProjectRef}/>
     </div>
     <div className="contactme-container">
      <ContactForm ref={scrollToContactFormRef}/>
     </div>
     <div className="footer-container">
     <Footer scrollToProjectRef={scrollToProjectRef} scrollToSkillsRef={scrollToSkillsRef} scrollToHomeRef={scrollToHomeRef}/>
     
     </div>
    </div>
  );
}

export default App;
