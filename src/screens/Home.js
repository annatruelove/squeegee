import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../custom.scss';
import { NavLink } from 'react-router-dom';
import squeegee from '../squeegee.png';
import profile_icon from '../profile.svg';
import search_icon from '../search.svg';

const Home = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
                <img src={squeegee} alt="logo" id="nav-logo"></img>
                <img src={search_icon} alt="logo" id="nav-logo"></img>
                <form class="form-inline my-2 my-lg-0" >
                    <input class="form-control mr-sm-2" id="welcome-search" type="search" placeholder="Search Jobs or Companies" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <img src={profile_icon} alt="logo" id="nav-logo"></img>

            </nav>

        </div>
    );
}

export default Home;
