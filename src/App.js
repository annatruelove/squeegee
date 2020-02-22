import React from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Companies from './screens/Companies';


const App = () => {
    return (   
      <>   
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Welcome } exact/>
          <Route path='/details' component={ Details } />
          <Route path='/home' component={ Home } />
          <Route path='/signup' component={ Signup } />
          <Route path='/signin' component={ Signin } />
          <Route path='/companies' component={ Companies } />
        </Switch>
      </BrowserRouter> 
      </>
    );
}

export default App;
