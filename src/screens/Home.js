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
                    <p>Browse through companies to view personal reviews and ratings.</p>
                </div>

                <div id="row">
                    <img src={job_icon} alt="logo" id="home-logo"></img>
                    <p>Jobs</p>
                    <p>Search for jobs you're interested in to learn about their interview process, compensation, and other important aspects. </p>
                </div>

                <div id="row">
                    <img src={budget_icon} alt="logo" id="home-logo"></img>
                    <p>Budget</p>
                    <p>Use our budgeting tool to compare cost of living with your potential salary and desired location.</p>
                </div>

            </div>
        </div>

    );
}

export default Home;
