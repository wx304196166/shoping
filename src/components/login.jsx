import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginPC } from '../api/login'
import LoginInput from './common/loginInput/loginInput'
import { onTestadd } from '../action/loginAction'
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
    this.props.history.push("/app/register");
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
        <div>
          <span>{inputValue}</span>
          <button onClick={() => onTestadd(inputValue + 1)}>click</button>
        </div>
      </div>
    )
  }
}

const mapStateToPorps = state => {
  const { inputValue } = state.login;
  return { inputValue };
};
const mapDispatchToProps = dispatch => ({
  onTestadd: bindActionCreators(onTestadd, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Login);
