import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginPC, checkName } from '../../api/login';
import LoginInput from '../common/loginInput/loginInput';
import Verification from './verification';
// import Verification2 from './2';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.login = this.login.bind(this);
    this.checkName = this.checkName.bind(this);
  }

  async login() {
    const userName = this.refs.userName.state.value;
    const password = this.refs.password.state.value;
    const data = await loginPC(userName, password);
  }

  async checkName() {
    const userName = this.refs.userName.state.value;
    const data = await checkName(userName);
  }
  render() {
    return (
      <div className="registerContainer">
        <LoginInput label='Login Name' ref='userName' onblurEvent={this.checkName} />
        <LoginInput label='Password' type='password' ref='password' />
        <LoginInput label='Name' ref='name' />
        <LoginInput label='Phone' ref='phone' maxLength='20' />
        <LoginInput label='Code' ref='code' /><Verification />
        <button onClick={this.login}>OK</button>
        <button>Cancel</button>
      </div>
    )
  }
}


export default Register;
