import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Signup = () => {    
    return (    
        <>  
        <Navigation />
        <Form id="signup">
            <Form.Label>
                We need some basic information from you to set up your profile. Your identity while using Squeegee is anonymous. 
            </Form.Label>
            <br></br>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>We'll never share your email with anyone else. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text>You'll use this to log back in. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date"/> 
                <Form.Text>We need this to verify your submissions.</Form.Text>
            </Form.Group>
            <NavLink to="/details">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </NavLink>
        </Form>
        </>
    );
    
    
}

export default Signup;