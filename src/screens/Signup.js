import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import '../App.css';
import { app } from '../firebase.config';
import AuthContext from '../App.css'


const Signup = (props) => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [error, setErrors] = useState("");

    function writeUserData(email, birthday) {
        app.database().ref('users/' + app.auth().currentUser.uid).set({
          email: email,
          birthday : birthday,
          type: "public",
          size: "large",
          region: "south",
          major: "Computer Science", 
          gender: "female",
          graduationYear: 2020
        });
      }
    function readUserData () {
        app.database().ref('users/' + app.auth().currentUser.uid).once('value')
        .then(function(snapshot){
            console.log(snapshot.val())}
        );
    }

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        console.log(app);
        app.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            writeUserData(email, birthday)   
            readUserData();         
            props.history.push("details");
            if (res.user) Auth.setLoggedIn(true);
          })
          .catch(e => {
            setErrors(e.message);
          });
      };

      return (    
        <>  
        <Navigation />
        <Form id="form" onSubmit={e => handleForm(e)}>
            <Form.Label>
                We need some basic information from you to set up your profile. Your identity while using Squeegee is anonymous. 
            </Form.Label>
            <div id="signup">
            <br></br>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">We'll never share your email with anyone else. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <Form.Text className="text-muted">You'll use this to log back in. </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" onChange={e => setBirthday(e.target.value)}/> 
                <Form.Text className="text-muted">We need this to verify your submissions.</Form.Text>
            </Form.Group>
            
                <Button variant="primary" id="submit-button" type="submit">
                    Submit
                </Button>

                </div>
        </Form>
        </>
    );


}

export default Signup;