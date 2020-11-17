import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import logo from '../../assets/img/logo-home.png';
import { Eye, EyeFill, Envelope, Lock } from 'react-bootstrap-icons';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  login = () => {
    return {
      render() {
        <Redirect from="/" to="/home" />
      }
    }
  }

  render() {
    return(
      <div className="login-page">
        <div className="container">
          <img src={logo} alt="Logo empresa" />
          <h1>BEM-VINDO AO EMPRESAS</h1>
          <p>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
          <form className="form-login">
            <div className="input-group input-group-login mb-3">
              <div className="input-group-prepend">
                <Envelope></Envelope>
              </div>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group input-group-login mb-3">
              <div className="input-group-prepend">
                <Lock></Lock>
              </div>
              <input type={this.state.showPassword ? 'text' : 'password'} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <div className="input-group-append" onClick={() => this.togglePassword()}>
                <ShowPassword showPassWord={this.state.showPassWord} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary submit-button" onClick={() => this.login()}>Enviar</button>
          </form>
        </div>
      </div>
    )
  }
}

function ShowPassword(props) {
  if (props.showPassWord) {
    return <Eye></Eye>;
  } else return <EyeFill></EyeFill>
}

