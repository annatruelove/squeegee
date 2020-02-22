import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Welcome = () => {    
        return ( 
          <NavLink to="/details">
            <Button className='btn-flat'>
              Hello
            </Button>
          </NavLink>
        );
      }

export default Welcome;
