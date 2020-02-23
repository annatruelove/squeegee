import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import profile_icon from '../profile.svg';
import { app } from '../firebase.config';

const Profile = () => {

    var age = 0;
    var email =  "";
    let gender = ""
    let graduationYear = 0;
    let major = "";
    let region = "";
    let size = "";
    let type = "";

    // const readUserData = () => {        
    //     app.database().ref('users/' + app.auth().currentUser.uid).once('value')
    //     .then(function(snapshot){
    //         console.log(snapshot.child('birthday').val());
    //         console.log(snapshot.val().birthday);
    //         age = snapshot.child('birthday').val();
    //         email =  snapshot.child('email').val();
    //         console.log(email);
    //         gender = "";
    //         graduationYear = 0;
    //         major = "";
    //         region = "";
    //         size = "";
    //         type = "";
    //     });
    // }

    // readUserData();


    return (
        <div class="">
            <Navigation />
            <div id="row">
                <img src={profile_icon} alt="logo" id="profile-logo"></img>
                <p id="profile-text">Hello, anna@live.unc.edu </p>
            </div>

            <p id="profile-text">User Profile Information:</p>

            <div id="profile-body">

            <p>Age: 22</p>
            <p>Gender: Female</p>
            <p>Graduation Year: 2020</p>
            <p>Major: Computer Science</p>
            <p>University Details</p>
            <p>Region: South</p>
            <p>Size: Large (> 15,000)</p>
            <p>Type: Public</p>

            </div>






        </div>
    );
}

export default Profile;