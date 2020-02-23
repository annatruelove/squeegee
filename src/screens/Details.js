import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';
import majors from '../data/majors'

const Details = () => {    

    const items = [];
    for (const i of majors){
        items.push(<Dropdown.Item href="#/action-1">{i}</Dropdown.Item>)
    }


        return (      
            <form>
                <label>
                    University Details
                </label>   
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Public</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Private</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Small (&lt; 5,000)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Medium (5,000-15,000)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Large (&gt; 15,000)</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Region
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">West</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Midwest</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">South</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Northeast</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Major
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {items}
                    </Dropdown.Menu>
                </Dropdown>
                <label>
                    Personal Information
                </label> 
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Gender
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Female</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Non-binary</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Prefer not to answer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <label>
                    Graduation Year
                </label>
                <input type="number" placeholder="YYYY" min="2017" max="2100" />

            </form>
        );
  }

export default Details;