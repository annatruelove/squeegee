import React from 'react';
import Button from 'react-bootstrap/Button';
import DropDown from './DropDown';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Navigation from './Navigation';
import cities from '../data/cities'


const Budget = () => {

    return (
        <>
        <Navigation />

        <div id='text' class="details">
            <h1>Plan your budget</h1>
            <form>
                <label>
                    Income
                </label>
                <input type="text"></input>

                <p>Location:</p>
                <DropDown items={cities}/>
                
            </form>
            <Button variant="primary" type="submit">
                Calculate
            </Button>
            <br></br>
        </div>
        </>
    );
}

export default Budget;