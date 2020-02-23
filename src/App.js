import React, { useState } from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';
import Signup from './screens/Signup';
<<<<<<< HEAD
import * as firebase from 'firebase';
import firebaseConfig from './firebase.config'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


console.log(firebase);

export const AuthContext = React.createContext(null);
=======
import Signin from './screens/Signin';
import Companies from './screens/Companies';

>>>>>>> d55b3a345f4b1462e9f2981c374303d8ae3292c8

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (   
      <>   
<<<<<<< HEAD
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Welcome } exact/>
            <Route path='/details' component={ Details } />
            <Route path='/signup' component={ Signup } />
          </Switch>
        </BrowserRouter> 
      </AuthContext.Provider>
=======
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
>>>>>>> d55b3a345f4b1462e9f2981c374303d8ae3292c8
      </>
    );
}

export default App;
