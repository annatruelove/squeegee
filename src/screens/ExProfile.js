import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import profile_icon from '../profile.svg';
import { app } from '../firebase.config';

const Profile = () => {

    var age = 0;
    var email = "";
    let gender = ""
    let graduationYear = 0;
    let major = "";
    let region = "";
    let size = "";
    let type = "";

    return (
        <div class="">
            <Navigation />
            <div id="row">
                <img src={profile_icon} alt="logo" id="profile-logo"></img>
                <p id="profile-text">Anonymous Donut </p>
                <div id="flex-end">
                    <Button id="prof-btn">Send Message</Button>
                </div>
            </div>

            <p id="profile-text">User Profile Information:</p>

            <div id="profile-body">

                <div id="row2">
                    <div id="col">
                        <p>Age: 22</p>
                        <p>Gender: Male</p>
                        <p>Graduation Year: 2018</p>
                        <p>Major: Computer Science</p>
                    </div>
                    <div id="col">
                        <p id="bold">University Details</p>
                        <p>Region: South</p>
                        <p>Size: Large (> 15,000)</p>
                        <p>Type: Public</p>
                        <p>Location: Chicago, IL</p>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Profile;