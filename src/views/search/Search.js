import React, { Component } from 'react'
import logo from '../../assets/img/logo-nav.png';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  render() {
    return (
      <div className="home-page">
        <header className="header">
          <img src={logo} alt="Logo empresa" />
        </header>
        <div className="content-page-home">
          <p>Search</p>
        </div>
      </div>
    )
  }

}