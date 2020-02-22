import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../custom.scss';
import { NavLink } from 'react-router-dom';
import squeegee from '../squeegee.png';
import profile_icon from '../profile.svg';
import search_icon from '../search.svg';

const Welcome = () => {    
        return ( 
          <NavLink to="/details">
              <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
                    <p class="navbar-brand" id="p">Squeegee</p>
                    <form class="form-inline my-2 my-lg-0" >
                        <input class="form-control mr-sm-2" id="welcome-search" type="search" placeholder="Search Jobs or Companies" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

                <p>Welcome to Squeegee!</p>
                <img src={squeegee} alt="Squeegee icon"/>
            <Button className='btn-flat'>
              Hello
            </Button>
          </NavLink>
        );
      }

export default Welcome;
