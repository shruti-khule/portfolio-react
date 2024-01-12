import { Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import styles from '../styles/Projects.module.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.webp'
import project_1 from '../assets/project_1.png'
import Typewriter from 'typewriter-effect';


import { useState,forwardRef } from "react";

const projects=[
   
    {
        title:"Amazon clone",
        description:"Built and hosted using ReactJS and Firebase, providing a comprehensive e-commerce experience",
        img:project_1,
        link:"https://clone-a7565.web.app/"
    },
    {
        title:"Movie App",
        description:"Movie searching app with js and react",
        img:project1
    },
    {
        title:"College Website",
        description:"Frontend designed with HTML, CSS and JavaScript",
        img:project2
    },
    {
        title:"Business Website",
        description:"Business website created with HTML, CSS and Bootstrap",
        img:project3
    },
    {
        title:"Color Game",
        description:"A simple colour guessing game developed using JavaScript and CSS.",
        img:project4
    },
    {
        title:"Object detection using Yolo",
        description:"Object detection with YOLO and opencv",
        img:project5
    },
   
];


export const Projects=forwardRef(({},ref)=>{
    const[isActive,setIsActive]=useState("false");
    const handleClick=(value)=>{
       setIsActive(value);
    }
    return(
        
            <Container ref={ref} className={styles.container}>

                
                <h1 className={styles.maintitle}>
                    <Typewriter options={{
                    autoStart:true,
                    loop:true,
                    delay:250,
                    pauseFor:3000,
                    strings:"projects",

            }}
            
            />
                </h1>
            

                    <Tab.Container id="project-display" defaultActiveKey="first">
                        <Nav variant="pills" className={styles.tabs}>
                        <Nav.Item>
                            <Nav.Link  onClick={()=>handleClick('first')} eventKey="first"  className={isActive==='first'? styles.active : styles.link}>Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  onClick={()=>handleClick('second')} eventKey="second" className={isActive==='second'? styles.active : styles.link}>Tab 2</Nav.Link>
                        </Nav.Item>
                         </Nav>
                         <Tab.Content >
                         <Tab.Pane eventKey="first">
                            <Container className={styles.cardscontainer}>
                            <Row className={styles.row}>
                            {projects.slice(0,3).map((project,index)=>{

                                return(
                                    
                                   <Col key={index} className={styles.projcards}>
                                    <p className={styles.title}>{project.title}</p>
                                    <a href={project.link}><img src={project.img} alt={project.title} className={styles.projectimage} ></img></a>
                                    <p className={styles.aboutproject}>{project.description}</p>

                                    </Col>
                                
                                )
                            })
                            
                            }
                            </Row>
                            </Container>

                         </Tab.Pane>
                         </Tab.Content>
                         <Tab.Content >
                         <Tab.Pane eventKey="second">
                            <Container className={styles.cardscontainer}>
                            <Row className={styles.row}>
                            {projects.slice(3,6).map((project,index)=>{

                                return(
                                    
                                   <Col key={index} className={styles.projcards}>
                                        <p className={styles.title}>{project.title}</p>
                                        <img src={project.img} alt={project.title} className={styles.projectimage}></img>
                                        <p className={styles.aboutproject}>{project.description}</p>

                                    </Col>
                                
                                )
                            })
                            
                            }
                            </Row>
                            </Container>

                         </Tab.Pane>
                         </Tab.Content>
                  </Tab.Container>

           </Container>

    );
});

export default Projects;