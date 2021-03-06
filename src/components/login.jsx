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
    const userName = this.userName.state.value;
    const password = this.password.state.value;
    await loginPC(userName, password);
  }
  render() {
    return (
      <div className="loginContainer">
        <LoginInput label="Login Name" type="text" ref={(mol) => { this.username = mol; }} />
        <LoginInput label="Password" type="password" ref={(mol) => { this.password = mol; }} />
        <button onClick={this.login}>login</button>
        <button>cancel</button>
        <span onClick={this.goRegister}>Register</span>
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
