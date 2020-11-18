import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import api from '../../services/api'
import logo from '../../assets/img/logo-home.png';
import { Eye, EyeFill, Envelope, Lock } from 'react-bootstrap-icons';


export default class Login extends Component {
  state = {
    showPassword: false,
    email: '',
    password: '',
    showLoader: false
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  login = async () => {
    this.setState({ showLoader: true })
    try {
      const params = {
        'email': this.state.email,
        'password': this.state.password
      }
      const response = await api.post(`users/auth/sign_in/`, params)
      this.setState({ showLoader: false })
      if (response.data.success) {
        console.log('login')
      } else console.log('não login')
      console.log(response)
      
    } catch (error) {
      this.setState({ showLoader: false })
      console.log(error)
    }
  }

  render() {
    return(
      <div className="login-page">
        <div className="container">
          <div className={this.state.showLoader ? 'content-page-login opacity-form' : 'content-page-login'}>
            <img src={logo} alt="Logo empresa" />
            <h1>BEM-VINDO AO EMPRESAS</h1>
            <p>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
            <form className="form-login" onSubmit={e => e.preventDefault()}>
              <div className="input-group input-icon mb-3">
                <div className="input-group-prepend">
                  <Envelope></Envelope>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>

              <div className="input-group input-icon mb-3">
                <div className="input-group-prepend">
                  <Lock></Lock>
                </div>
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Username"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <div className="input-group-append" onClick={() => this.togglePassword()}>
                  <ShowPassword showPassWord={this.state.showPassWord} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary submit-button" onClick={() => this.login()}>Enviar</button>
            </form>
          </div>
          <Loader showLoader={this.state.showLoader}></Loader>
        </div>
      </div>
    )
  }
}

function Loader(props) {
  if (props.showLoader) {
    return (
      <div className="loader-login">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else return ''
}

function ShowPassword(props) {
  if (props.showPassWord) {
    return <Eye></Eye>;
  } else return <EyeFill></EyeFill>
}

