import React, { Component } from 'react'
import Header from '../../componets/shared/Header'
import ListCompany from '../../componets/search/ListCompany'
import api from '../../services/api'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      listCompany: []
    };
  }

  fechCompany = (searchValue) => {
    try {
      const session = JSON.parse(localStorage.getItem('session-info'))
      const headers = {}
      headers['Content-Type'] = 'application/json'
      headers['access-token'] = session['access-token']
      headers.client = session.client
      headers.uid = session.uid
      const params = {
        'enterprise_types': 3,
        'name': searchValue
      }
      api.get('enterprises', { headers, params })
        .then(res => {
          this.setState({ listCompany: res.data.enterprises })
          console.log(res.data.enterprises)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="search-page">
        <Header search={true} fechCompany={this.fechCompany}></Header>
        <div className="content-page-search">
          {this.state.listCompany.map((company, idx) => (
            <ListCompany company={company} key={idx} />
          ))}
        </div>
      </div>
    )
  }

}