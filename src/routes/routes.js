import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from '../views/login/Login'
import Home from '../views/Home/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/home" component={ Home } />
  </Switch>
)

export default Routes;