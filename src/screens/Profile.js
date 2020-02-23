import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import profile_icon from '../profile.svg';
import { app } from '../firebase.config';

const Profile = () => {

    return (
        <div class="">

            <Navigation />
            <div id="row">
                <img src={profile_icon} alt="logo" id="profile-logo"></img>
                <p id="profile-text">Hello, anna@live.unc.edu </p>
            </div>

            <p id="profile-text">User Profile Information:</p>

        </div>
    );
}

export default Profile;