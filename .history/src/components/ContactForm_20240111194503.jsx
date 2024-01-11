import { useState, useRef, forwardRef } from "react";
import { Container, Row,Col } from "react-bootstrap";
import styles from '../styles/ContactForm.module.css'
import emailjs from '@emailjs/browser';
import image from '../assets/astronaut.jpeg'



export const ContactForm=forwardRef(({},ref)=>{
    const FormInputs={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    message:''

    }
    
    const [formDetails,setFormDetails]=useState(FormInputs);

   
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_189nlin', 'template_1d6br3a', form.current, 'GhQC70bMMu4UmwbOJ')
         .then((result) => {
            console.log(result.text);
                }, (error) => {
            console.log(error.text);
            });
        }
    

    const updateDetails=(field,value)=>{
        setFormDetails({
            ...formDetails,
            [field]:value
             });
    }
    
    return(
        
            <Container ref={ref} className={styles.formcontainer}>
                <Row className={styles.header}>
                    <h2>Contact me :)</h2>
                </Row>
                <Row >
                    
                    <Col lg>
                    <form className={styles.inputs} onSubmit={sendEmail} ref={form}>
                        <Row className={styles.row1}>
                            <Col  id={styles.firstname}><input type="text" placeholder="First Name" value={formDetails.firstname} onChange={(e)=>updateDetails('firstname',e.target.value)} required name="firstname"></input></Col>
                            <Col  id={styles.firstname}><input type="text" placeholder="Last Name" value={formDetails.lastname} onChange={(e)=>updateDetails('lastname',e.target.value)} required name="lastname"></input></Col>

                        </Row>
                        <Row>
                            <input type="tel" placeholder="Phone Number" value={formDetails.phone} onChange={(e)=>updateDetails('phone',e.target.value)} name="phone"></input>
                        </Row>
                        <Row>
                            <input type="email" placeholder="Email" value={formDetails.email} onChange={(e)=>updateDetails('email',e.target.value)} name="email" required></input>
                        </Row>
                        <Row><input type="text" id={styles.message} placeholder="Message..." value={formDetails.message} onChange={(e)=>updateDetails('message',e.target.value)} name="message"/></Row>
                        <Row><button className={styles.button}>Send Message!</button></Row>
                    </form>
                    </Col>
                    <Col lg={{order:'first'}}>
                    <img src={image} alt="" className={styles.image}/>
                    </Col>
                </Row>
            </Container>
        
    );
});
export default ContactForm;