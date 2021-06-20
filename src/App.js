import React from 'react';
import './App.css';
import Login from './Componant/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import NotFoundPage from './Componant/Error';
import SignUp from './Componant/Signup';
import ForgetPassword from './Componant/ForgetPassword';
import ResetPassword from './Componant/ResetPassword';
import Registration from './Componant/Registration';
import HomePage from './Componant/Home';
import ProfileCo from './Componant/ProfileCo';
import ProfileEm from './Componant/ProfileEm';



function App() {
  return (
    <div>
    <Router>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/profile1">Company Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/profile2">Employee Profile</a>
    </li>
  </ul>
</nav>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/profile1" component={ProfileCo} />
      <Route exact path="/profile2" component={ProfileEm} />

      <Redirect to="/404" />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
