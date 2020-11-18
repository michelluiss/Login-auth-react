import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../views/login/Login'
import Home from '../views/Home/Home'
import Search from '../views/search/Search'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="/search" component={ Search } />
    </Switch>
  </BrowserRouter>
)

export default Routes;