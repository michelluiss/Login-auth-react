import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  render() {
    return (
      <div className="home-page">
        <h1>Home page</h1>
      </div>
    )
  }

}