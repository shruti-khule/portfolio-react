import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProgressBar from "./ProgressBar";
import styles from '../styles/skills.module.css'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { forwardRef } from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javas.png'
import ts from '../assets/ts.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mysql from '../assets/mysql.png'
import webdev from '../assets/webdev.png'
import sass from '../assets/sass.png'
import github from '../assets/github.png'
















export const Skills=forwardRef(({},ref)=>{
    return(
        <>
        <h2 className={styles.header}>SKILLS</h2>
         <Container className={styles.container}>
            <Row className={styles.skillrow}>
                
                <Col className={styles.skill}>
                    <img src={html} alt="" className="logo"/>
                    <span className={styles.skillname}>HTML</span>
                </Col>

                <Col className={styles.skill}>
                    <img src={css} alt="" />
                    <span className={styles.skillname}>CSS</span>
                </Col>

                <Col className={styles.skill}>
                    <img src={js} alt="" />
                    <span className={styles.skillname}>JavaScript</span>
                </Col>

            </Row>

            <Row className={styles.skillrow}>

                <Col className={styles.skill}>
                <img src={react} alt="" className={styles.skilllogo} />
                <span className={styles.skillname}>React</span>
                </Col>

                <Col className={styles.skill}>
                <img src={ts} alt="" />
                <span className={styles.skillname}>TypeScript</span>
                </Col>
                <Col className={styles.skill}>
                <img src={node} alt="" />
                <span className={styles.skillname}>Node js</span>
                </Col>

                

            </Row>

               
            <Row className={styles.skillrow}>
                <Col className={styles.skill}>
                <img src={python} alt="" />
                <span className={styles.skillname}>Python</span>
                </Col>
                

                <Col className={styles.skill}>
                <img src={mysql} alt="" />
                <span className={styles.skillname}>MySql</span>
                </Col>
                <Col className={styles.skill}>
                <img src={sass} alt="" />
                <span className={styles.skillname}>Sass</span>

                </Col>
            </Row>


        </Container>
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