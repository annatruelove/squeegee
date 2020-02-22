import React from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';
import Signup from './screens/Signup';

const App = () => {
    return (   
      <>   
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Welcome } exact/>
          <Route path='/details' component={ Details } />
          <Route path='/signup' component={ Signup } />
        </Switch>
      </BrowserRouter> 
      </>
    );
}

export default App;
