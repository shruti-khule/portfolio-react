import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/HomePage.module.css';
import image1 from '../assets/1.png';
import Typewriter from 'typewriter-effect';
import { forwardRef } from 'react';


export const Homepage=forwardRef(({scrollToContactFormRef},ref)=>{
    const scrollToContactForm = () => {
        if (scrollToContactFormRef.current) {
          scrollToContactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    
    return(
        
        <Container className={styles.banner} ref={ref} >
            <Row>
                <Col  lg={6} className={styles.col1}> 
                <Row className={styles.typewriter}>
                <span className={styles.span1}>Welcome to my portfolio :)</span>
                <h1 className={styles.intro}>
                <Typewriter
                     options={{
                        autoStart:true,
                        loop:true,
                        delay:70,
                        pauseFor:2500,
                        strings:"Hi ! I am Shruti :) Student, developer and friendly gal."

                     }} />
                </h1>
                
                <span className={styles.span2}> A self-motivated computer science graduate with experience working across the full-stack of software development. 
                <p>In short, I like making fun, interactive things with code!</p>
                 Currently, I am studying master's in Computer Science at the Paderborn University, Germany. I spend my day working on projects with TypeScript, React.js, and Node.js.  In the rare moments I'm free, I also enjoy painting, good music, and exploring Europe!</span>
                </Row>
                <Row>
                <button className={styles.button} onClick={()=>scrollToContactForm()} >Let's connect!</button>
                </Row>
                </Col>
                <Col lg={6} className={styles.col2}>
                <img src={image1} alt="cute ghost:)" className={styles.image1}/>
                </Col>
            </Row>
        </Container>
        

    );
});
export default Homepage;