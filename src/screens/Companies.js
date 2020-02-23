import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import Navigation from './Navigation';
import target_logo from '../target.png';
import sas_logo from '../sas_logo.svg';
import mass_logo from '../massmutual.jpg';
import git_logo from '../githublogo.jpg';



import '../App.css';

const Companies = () => {    
        return (   
        <>
       <Navigation />
<CardDeck>
  <Card id="card">
    <Card.Img src={target_logo} />
    <Card.Body>
      <Card.Title>Target</Card.Title>
      <Card.Text>
      Target Corporation is the 8th-largest retailer in the United States, and is a component of the S&P 500 Index.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='footer'>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card id="card">
    <Card.Img style={{height: '250px'}} src={sas_logo}/>
    <Card.Body>
      <Card.Title>SAS</Card.Title>
      <Card.Text>
      SAS develops and markets a suite of analytics software, which helps access, manage, analyze and report on data to aid in decision-making.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='footer'>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardDeck>
  <CardDeck>
  <Card id="card">
    <Card.Img src={mass_logo} />
    <Card.Body>
      <Card.Title>MassMutual</Card.Title>
      <Card.Text>
      The Massachusetts Mutual Life Insurance Company, founded in 1851, is an American mutual life insurance company serving five million clients.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='footer'>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card id="card">
    <Card.Img src={git_logo} />
    <Card.Body>
      <Card.Title>Github</Card.Title>
      <Card.Text>
      GitHub is a US-based global company that provides hosting for software development version control using Git.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='footer'>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardDeck>
        </>
        );
        
    
  }

export default Companies;