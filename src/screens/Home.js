import React from 'react';
import '../App.css';
import '../custom.scss';
import Navigation from './Navigation';
import company_icon from '../company.svg';
import job_icon from '../job.svg';
import budget_icon from '../budget.svg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navigation />

            <div class="home">
            
                <NavLink to='/companies'>
                    <div id="row">
                        <img src={company_icon} alt="logo" id="home-logo"></img>
                        <div>
                        <h3>Companies</h3>
                        <p>Browse through companies to view personal reviews and ratings.</p>
                        </div>
                    </div>
                </NavLink>


                <NavLink to='/jobs'>
                <div id="row">
                    <img src={job_icon} alt="logo" id="home-logo"></img>
                    <div>
                    <h3>Jobs</h3>
                
                    <p>Search for jobs you're interested in to learn about their interview process, compensation, and other important aspects. </p>
                    </div>
                </div>
                </NavLink>

                <NavLink to='/budget'>
                <div id="row">
                    <img src={budget_icon} alt="logo" id="home-logo"></img>
                    <div>
                    <h3>Budget</h3>
                    <br/>
                    <p>Use our budgeting tool to compare cost of living with your potential salary and desired location.</p>
                </div>
                </div>
                </NavLink>


            </div>
        </div>

    );
}

export default Home;
