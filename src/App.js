//React and Routing
import './App.css'; // temporary styling
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute.js';
//Components
import Landing from './components/Landing.js';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import EditProfile from './components/EditProfile.js';
import AddEditEquipment from './components/AddEditEquipment.js';
import Marketplace from './components/Marketplace.js';
import Checkout from './components/Checkout.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/marketplace' component={Marketplace} />
        <Route path='/checkout' component={Checkout} />
        <ProtectedRoute path='/profile' component={Profile} />
        <ProtectedRoute path='/editprofile' component={EditProfile} />
        <ProtectedRoute path='/equipment' component={AddEditEquipment} />
      </Switch>
    </div>
  );
}

export default App;
