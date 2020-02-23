import React from 'react';
import Button from 'react-bootstrap/Button';
import DropDown from './DropDown';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Navigation from './Navigation';
import cities from '../data/cities'


const Review = () => {

    return (
        <>
        <Navigation />
        <div class='details'>
            

            <h1>Leave a review!</h1>
            <form>
                <h3>
                    What was your experience like?
                </h3>
                <h5>
                    Please make sure to mention how many interviews you had, what each round was like, how long it took you to hear back, etc.
                </h5>
                <textarea type="text" id="textarea"></textarea>

                <p>Location:</p>
                <DropDown items={cities}/>
                <br></br>
                <p>Did you recieve an offer?</p>
                <DropDown items={["Yes", "No", "I have not heard back yet"]}/>


                
            </form>
            <br></br>
            <NavLink to='/home'>
            <Button variant="primary" type="submit" id="submit-button">
                Submit
            </Button>
            </NavLink>
            <br></br>
            </div>
            </>
    );
}

export default Review;