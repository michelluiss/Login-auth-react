import React, { Component } from 'react'
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

  render() {
    return(
      <div className="login-page">
        <div className="container">
          <img src={logo} alt="Logo empresa" />
          <h1>BEM-VINDO AO EMPRESAS</h1>
          <p>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
          <form className="form-login">
            <div class="input-group input-group-login mb-3">
              <div class="input-group-prepend">
                <Envelope></Envelope>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group input-group-login mb-3">
              <div class="input-group-prepend">
                <Lock></Lock>
              </div>
              <input type={this.state.showPassword ? 'text' : 'password'} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <div class="input-group-append" onClick={() => this.togglePassword()}>
                <ShowPassword showPassWord={this.state.showPassWord} />
              </div>
            </div>
            <button type="submit" class="btn btn-primary submit-button">Primary</button>
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

