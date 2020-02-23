import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navigation from './Navigation';
import { app } from '../firebase.config';
import AuthContext from '../App.css'

import '../App.css';

const Signin = () => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Auth = useContext(AuthContext);

        const handleForm = e => {
          e.preventDefault();
          app
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            console.log("yay?")
            if (res.user) Auth.setLoggedIn(true);
          })
          .catch(e => {
          });
        };

        return (   
          <Form onSubmit={e => handleForm(e)}>
           <Navigation />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        );
    
  }

export default Signin;


