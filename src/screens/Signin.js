import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navigation from './Navigation';
import { app } from '../firebase.config';
import AuthContext from '../App.css'
import { Redirect } from 'react-router-dom';


import '../App.css';

const Signin = (props) => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Auth = useContext(AuthContext);

    const handleForm = e => {
      e.preventDefault();
      app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        props.history.push("home");
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch(e => {
      });
    };

    return (   
          <>
            <Navigation />
            <Form id="signin-form" onSubmit={e => handleForm(e)}>
            <h4>
              Sign in to view your previous reviews and browse job listings.
              </h4>
              <br></br>
            <div id="signup">
            
  
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" id="submit-button" type="submit">
              Submit
            </Button>
            </div>
          </Form> 
          </>
      
    );
    
  }

export default Signin;


