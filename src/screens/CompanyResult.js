import React, { useState } from 'react';
import Navigation from './Navigation';
import target_logo from '../target.png';
import Button from 'react-bootstrap/Button';
import next from '../next.svg'

const Review1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }

    const moreInfo = (
        <div id='more'>
            <p>Age: 19</p>
            <p>Gender: Male</p>
            <p>School: Large public institution</p>
            <p>Major: Computer Science</p>
            <p>Location: Chicago, IL</p>
        </div>
    )

    return (
        <div id="review">
            <div>
            <div id="review-link" onClick={handleOnClick}>
            <h6>Anonymous Donut | Male • 2018 grad • Large public school</h6>
            <div id='review2'>click for more<img src={next} id="arrow" alt="arrow"/></div>
            </div>
            {isOpen && moreInfo}
            </div>
            <h6>Great experience, even better team</h6>
            <div>
            </div>
            <p>I thoroughly enjoyed my experience as an entry-level UX engineer. I never felt like I was just a newbie, I was always part of the entire team! I would highly recommend for anyone interested in user experience or user design.  </p>
            <h6>Offer</h6>
            <p>$74,000 + housing</p>
            <h6>Interview process</h6>
            <p>I interviewed on campus in October 2018, attended an onsite final round interview in November, and then received an offer one month later.</p>
        </div>
    )
}

const Review2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }

    const moreInfo = (
        <div id="more">
            <p>Age: 19</p>
            <p>Gender: Female</p>
            <p>School: Large public institution</p>
            <p>Major: Computer Science</p>
            <p>Location: Raleigh, NC</p>
        </div>
    )

    return (
        <div id="review">
            <div>
            <div id="review-link" onClick={handleOnClick}>
            <h6>Anonymous Donut | Female • 2018 grad • Large public school</h6>
            <div id='review2'>click for more<img src={next} id="arrow" alt="arrow"/></div>
            </div>
            {isOpen && moreInfo}
            </div>
            <h6>Manager wouldn't meet with me</h6>
            <div>
            </div>
            <p>My manager would only meet with the other intern on my team, and repeatedly denied my requests for more regular one-on-one meetings. I often was confused about what was expected of me and spent a lot of time working in circles. I wouldn't recommend joining Target on my team.</p>
            <h6>Offer</h6>
            <p>$64,000 + housing</p>
            <h6>Interview process</h6>
            <p>I interviewed at Grace Hopper in October 2018 and then received an offer two weeks later.</p>
        </div>
    );
}

const CompanyResult = () => {
    return (
        <>
        <Navigation />
        <div id="company-page">
            <div>
            <img src={target_logo} alt='target logo'/>
            </div>
            <div>
            <h2>UX Engineer</h2>
            <h4>Target</h4>
            <h6>Minneapolis, Minnesota area</h6>
            <h6>Entry level position</h6>
            <p>We’re seeking a passionate, creative, self-starting, get-it-done UX Engineer. You will work side-by-side with world class Designers and Software Engineers to help preserve design integrity throughout the product development lifecycle.

  <br/><br/>

We’re looking for a results-oriented collaborator who is a nimble engineer with keen design sensibilities. You have experience interpreting designs into fully functional interactive experiences, and do the job quickly and efficiently. You work in and with new technologies, and can quickly and smoothly learn to use new tools. You must “get” designers and have a clear understanding of the design process—interaction design, usability, visual design, and motion graphics—and demonstrate an ability to merge this with established development processes. You will also help establish new processes and tools within the studio that will evolve the way we design and build products.  

</p>
<div id="reviews">
    <br></br>
                <h3>Reviews</h3>
                <h5>Hear from people like you.</h5>
                <Review1 />
                <Review2 />
            </div>
            </div>
            
        </div>

        </>
    );
}

export default CompanyResult;