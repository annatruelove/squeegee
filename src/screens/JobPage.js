import React from 'react';
import Navigation from './Navigation';
import ux_logo from '../ux_logo.png';
import swe_logo from '../swe_logo.png';
import financial_logo from '../financial_logo.png';
import data_analyst from '../data_analyst.png';

const SearchItem = (props) => {
    return (
        <div id="search-item">
            <img id={"search-img"} src={props.src} alt="job img" />
            <div id="search-text">
                <a id="job-link" href='/'><h1>{props.title}</h1></a>
                <h5>{props.salary}</h5>
            </div>
        </div>
    )
}

const JobPage = () => {
    return (
        <>
        <Navigation/>
        <p id="profile-text"> Explore Jobs</p>
        <div id="search-results">
        <SearchItem src={ux_logo} title="UX Engineering" company="Target" salary="$65,000" gender="female" location="Minneapolis, Minnesota" age="21"></SearchItem>
        <SearchItem src={swe_logo} title="Software Engineering" company="SAS" salary="$70,000" gender="male" location="Raleigh, Durham" age="22"></SearchItem>
        <SearchItem src={financial_logo} title="Financial Analyst" company="MassMutual" salary="$30/hr" gender="female" location="Boston, Massachussetts" age="19"></SearchItem>
        <SearchItem src={data_analyst} title="Data Scientest" company="GitHub" salary="$85,000" gender="male" location="San Francisco, California" age="23"></SearchItem>
        </div>
        </>

    )
}

export default JobPage;