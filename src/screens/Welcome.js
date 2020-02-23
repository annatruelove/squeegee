import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../custom.scss';
import { NavLink } from 'react-router-dom';
import squeegee from '../squeegee.png';

const Welcome = () => {
  return (
      <div id="welcome-page">
          <NavLink to="/">
              <img src={squeegee} alt="logo" id="welcome-logo"></img>
            </NavLink>
            <br></br>
            <div>
            <h1>Welcome to Squeegee.</h1>
            <h3>Your one stop shop for everything internship and entry-level. </h3>
            <p>Find company reviews, program experiences, interview tips, pay ranges, budgeting tips, and more from fellow young adults. No paywall, <br/>no executive reviews, no BS. </p>
            </div>
              <div>
                <br></br>
              <NavLink to="/signup">
                  <Button className='btn-flat' id="signup-button">
                      Sign Up
                  </Button>
              </NavLink>

              <NavLink to="/details">
                  <Button className='btn-flat' id="signin-button">
                      Sign In
                  </Button>
              </NavLink>

              </div>
              <br></br>
              <NavLink to="/details">Or, continue as guest</NavLink>
      </div>
  );
}
export default Welcome;
