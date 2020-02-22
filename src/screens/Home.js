import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../custom.scss';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import company_icon from '../company.svg';
import job_icon from '../job.svg';
import budget_icon from '../budget.svg';

const Home = () => {
    return (
        <div>
            <Navigation />

            <div class="home">
                <div id="row">
                    <img src={company_icon} alt="logo" id="home-logo"></img>
                    <p>Companies</p>
                </div>
                <div id="row">
                    <img src={job_icon} alt="logo" id="home-logo"></img>
                    <p>Jobs</p>
                </div>
                <div id="row">
                    <img src={budget_icon} alt="logo" id="home-logo"></img>
                    <p>Budget</p>
                </div>
            </div>
        </div>

    );
}

export default Home;
