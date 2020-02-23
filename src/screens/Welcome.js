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
<<<<<<< HEAD
          
=======
>>>>>>> d55b3a345f4b1462e9f2981c374303d8ae3292c8
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
