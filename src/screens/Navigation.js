import React from 'react';
import squeegee from '../squeegee.png';
import profile_icon from '../profile.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg" id="nav-bar">
            <NavLink to="/">
              <img src={squeegee} alt="logo" id="squeegee-logo"></img>
            </NavLink>
              <div id='search-bar'>
                <form class="form-inline my-2 my-lg-0" >
                    <input class="form-control mr-sm-2" id="welcome-search" type="search" placeholder="🔍 Search Jobs or Companies" aria-label="Search"></input>
                    <NavLink to='/results'>
                      <button class="btn btn-primary my-2 my-sm-0" id="button" type="submit">Search</button>
                      </NavLink>
                </form>
              </div>
              <NavLink to="./companies" id="nav-text"><p>Companies</p></NavLink>
              <NavLink to="./jobs" id="nav-text"><p>Jobs</p></NavLink>
              <NavLink to="./budget"id= "nav-text"><p>Budget</p></NavLink>
              <NavLink to="/profile">
                <img src={profile_icon} alt="logo" id="user-logo"></img>
              </NavLink>
             


          </nav>
    )
}

export default Navigation;