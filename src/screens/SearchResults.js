import React from 'react';
import Navigation from './Navigation';
import target_logo from '../target.png';
import sas_logo from '../sas_logo.svg';
import mass_logo from '../massmutual.jpg';
import git_logo from '../githublogo.jpg';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const SearchItem = (props) => {
    return (
        <div id="search-item">
            <img id={"search-img"} src={props.src} alt="company img" />
            <div id="search-text">
                <a id="job-link" href='/companyresult'><h4>{props.title}</h4></a>
                <h6>{props.company}</h6>
                <p>Rating: 4.6/5.0</p>
                <NavLink to='/review'>
                <Button variant="primary" id="submit-button" type="submit">
                    Leave a review
                </Button>
                </NavLink>
            </div>
        </div>
    )
}

const SearchResults = () => {
    return (
        <>
        <Navigation/>
        <div id="search-results">
        <h5>Your search results</h5>

        <SearchItem src={target_logo} title="UX Engineer" company="Target"></SearchItem>
        <SearchItem src={sas_logo} title="User Experience Engineer" company="SAS"></SearchItem>
        <SearchItem src={mass_logo} title="User Experience Engineer" company="MassMutual"></SearchItem>
        <SearchItem src={git_logo} title="UX Designer" company="GitHub"></SearchItem>
        </div>
        </>

    )
}

export default SearchResults;