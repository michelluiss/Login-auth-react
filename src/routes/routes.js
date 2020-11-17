import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../views/login/Login'
import Home from '../views/Home/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/home" component={ Home } />
    </Switch>
  </BrowserRouter>
)

export default Routes;