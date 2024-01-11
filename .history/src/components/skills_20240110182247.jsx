import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProgressBar from "./ProgressBar";
import styles from '../styles/skills.module.css'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { forwardRef } from "react";


export const Skills=forwardRef(({},ref)=>{
    return(
        <>
        <h2 className={styles.header}>SKILLS</h2>
         <div className={styles.container}>






        </div>
        </>
        /*
        <>
       <h2 className={styles.header} ref={ref}>Skills</h2>
        <div className={styles.carouselcontainer}>
        <Carousel showThumbs={false} className={styles.carousel} 
        
        autoPlay="true" 
        autoFocus="true" 
        infiniteLoop="true" 
        showStatus="false">
            
                <div className={styles.firstslide}>
                    <Container className={styles.container}>
                    <Row className={styles.Row}>
                        <Col  className={styles.col}>
                           
                            <ProgressBar percentage={"90%"}/>
                            <p className={styles.skillname}>JavaScript</p>
                            
                         </Col>
                        
                        <Col  className={styles.col}>
                            <ProgressBar percentage={"90%"}/>
                            <p className={styles.skillname}>React</p>
                        </Col>
                        <Col  className={styles.col}>
                            <ProgressBar percentage={"80%"}/>
                            <p className={styles.skillname}>TypeScript</p>
                        </Col>
                    </Row>
                     </Container>
                
                </div>

                <div className={styles.firstslide}>
                    <Container className={styles.container}>
                    <Row className={styles.Row}>
                        <Col className={styles.col}>
                            <ProgressBar percentage={"80%"}/>
                            <p className={styles.skillname}>Node.js</p>
                         </Col>
                        <Col className={styles.col}>
                            <ProgressBar percentage={"80%"}/>
                            <p className={styles.skillname}>Python</p>
                        </Col>
                        <Col className={styles.col}>
                            <ProgressBar percentage={"70%"}/>
                            <p className={styles.skillname}>MySQL</p>
                        </Col>
                    </Row>
                     </Container>
                
                </div>
                <div className={styles.firstslide}>
                    <Container className={styles.container}>
                    <Row className={styles.Row}>
                        <Col className={styles.col}>
                            <ProgressBar percentage={"90%"}/>
                            <p className={styles.skillname}>Problem-Solving</p>
                         </Col>
                        <Col className={styles.col}>
                            <ProgressBar percentage={"80%"}/>
                            <p className={styles.skillname}>Web Development</p>
                        </Col>
                
                    </Row>
                     </Container>
                
                </div>
            
        </Carousel>
        </div>
      </>
      */
    );
});
export default Skills;