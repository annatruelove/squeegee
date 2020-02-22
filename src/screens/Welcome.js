import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../custom.scss';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const Welcome = () => {
  return (
      <div>
          <Navigation />

          <p>Welcome to Squeegee!</p>


              <div class="welcome">
              <NavLink to="/signup">
                  <Button className='btn-flat' id="welc-btn">
                      Sign Up
                  </Button>
              </NavLink>

              <NavLink to="/details">
                  <Button className='btn-flat' id="welc-btn">
                      Sign In
                  </Button>
              </NavLink>

              </div>

      </div>
  );
}
export default Welcome;
