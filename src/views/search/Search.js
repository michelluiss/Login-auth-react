import React, { Component } from 'react'
import Header from '../../componets/shared/Header'

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
        <Header search={true}></Header>
        <div className="content-page-home">
          <p>Search</p>
        </div>
      </div>
    )
  }

}