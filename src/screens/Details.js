import React from 'react';
import Button from 'react-bootstrap/Button';
import DropDown from './DropDown';
import '../App.css';
import { NavLink } from 'react-router-dom';
import majors from '../data/majors'
import Navigation from './Navigation';


const Details = (props) => {
    const handleForm = e => {
        e.preventDefault();
        props.history.push("home");
      };

    return (
<>
            <Navigation />
            <div id='text' class="details">

            <h1>Complete your Profile</h1>
            <br></br>
            <form onSubmit={e => handleForm(e)}>
                <h3>
                    University Details
                </h3>
                
                Type:
                <DropDown items={["Public", "Private"]}/>
<br></br>
                Size:
                <DropDown items={["Small (< 5,000)", "Medium (5,000-15,000)", "Large (> 15,000)"]}/>
<br></br>
                Region:
                <DropDown items={["West", "Midwest", "South", "Northeast"]}/>
<br></br>
                Major:
                <DropDown items={majors}/>
<br></br>
                <h3>
                    Personal Information
                </h3>
                
                Gender:
                <DropDown items={["Female", "Male", "Nonbinary", "Prefer not to say"]}/>
<br></br>
                Graduation Year:
                <br></br>
                <input type="number" placeholder="YYYY" min="2017" max="2100" />
                <br></br>
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
            </form>
            
            <br></br>
            <NavLink id='guest' to="/home">
                    Skip for now
            </NavLink>
        </div>
        </>
    );
}

export default Details;