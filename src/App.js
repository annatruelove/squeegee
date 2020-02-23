import React, { useState } from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';
import Signup from './screens/Signup';
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

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (   
      <>   
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Welcome } exact/>
            <Route path='/details' component={ Details } />
            <Route path='/signup' component={ Signup } />
          </Switch>
        </BrowserRouter> 
      </AuthContext.Provider>
      </>
    );
}

export default App;
