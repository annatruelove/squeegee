import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDown from './DropDown';
import '../App.css';
import { NavLink } from 'react-router-dom';
import majors from '../data/majors'
import Navigation from './Navigation';


const Details = () => {

    return (
        <div class="details">

            <Navigation />

            <h1>Complete your Profile</h1>
            <form>
                <label>
                    University Details
                </label>
                
                <p>Type:</p>
                <DropDown items={["Public", "Private"]}/>

                <p>Size:</p>
                <DropDown items={["Small (< 5,000)", "Medium (5,000-15,000)", "Large (&gt; 15,000)"]}/>

                <p>Region:</p>
                <DropDown items={["West", "Midwest", "South", "Northeast"]}/>

                <p>Major:</p>
                <DropDown items={majors}/>

                <label>
                    Personal Information
                </label>
                
                <p>Gender</p>
                <DropDown items={["Female", "Male", "Nonbinary", "Prefer not to say"]}/>

                <label>
                    Graduation Year
                </label>
                <br></br>
                <input type="number" placeholder="YYYY" min="2017" max="2100" />

            </form>
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
            <br></br>
            <NavLink to="/home">
                    Skip for now
            </NavLink>
        </div>
    );
}

export default Details;