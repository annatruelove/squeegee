import React from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';

const App = () => {
    return (   
      <>   
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Welcome } exact/>
          <Route path='/details' component={ Details } />
        </Switch>
      </BrowserRouter> 
      </>
    );
}

export default App;
