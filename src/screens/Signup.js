import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { app } from '../firebase.config';
import AuthContext from '../App.css'


const Signup = () => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        console.log(email);
        console.log(password);
        e.preventDefault();
        console.log(app);
        app.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            if (res.user) Auth.setLoggedIn(true);
          })
          .catch(e => {
            setErrors(e.message);
          });
      };

      return (    
        <>  
        <Navigation />
        <Form id="signup" onSubmit={e => handleForm(e)}>
            <Form.Label>
                We need some basic information from you to set up your profile. Your identity while using Squeegee is anonymous. 
            </Form.Label>
            <br></br>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            <Form.Text>We'll never share your email with anyone else. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <Form.Text>You'll use this to log back in. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date"/> 
                <Form.Text>We need this to verify your submissions.</Form.Text>
            </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        </>
    );
    
    
}

export default Signup;