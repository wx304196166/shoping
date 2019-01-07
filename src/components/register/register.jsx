import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginPC } from '../../api/login';
import LoginInput from '../common/loginInput';
import Verification from './verification';
// import Verification2 from './2';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.login = this.login.bind(this);
  }

  async login() {
    const userName = this.refs.userName.state.value;
    const password = this.refs.password.state.value;
    const data = await loginPC(userName, password);
  }
  render() {
    return (
      <div>
        <LoginInput label='Login Name' ref='userName' />
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
