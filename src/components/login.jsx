import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginPC } from '../api/login'
import LoginInput from './common/loginInput'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible3: false,
      name: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.goRegister = this.goRegister.bind(this);
  }
  goRegister() {
    this.props.history.push("/register");
  }
  async login() {
    const userName = this.refs.userName.state.value;
    const password = this.refs.password.state.value;
    const data = await loginPC(userName, password);
  }
  render() {
    const { password, name } = this.state;
    const { inputValue, onTestadd } = this.props;
    return (
      <div>
        <LoginInput label='Login Name' type='text' ref='userName' />
        <LoginInput label='Password' type='password' ref='password' />
        <span onClick={this.goRegister}>Register</span>
        <button onClick={this.login}>login</button>
        <button>cancel</button>

        <span>{inputValue}</span>
        <button onclick={() => onTestadd(inputValue + 1)}>click</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { responsive = { data: {} } } = state.httpData;
  return { responsive };
};

export default withRouter(connect(mapStateToProps)(Login));
