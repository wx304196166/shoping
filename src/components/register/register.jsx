import React, { Component } from 'react';
import { checkName, registerCustom } from '../../api/login';
import LoginInput from '../common/loginInput/loginInput';
import Verification from './verification';
// import Verification2 from './2';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.registerCustom = this.registerCustom.bind(this);
    this.checkName = this.checkName.bind(this);
  }

  // async login() {
  //   const userName = this.refs.userName.state.value;
  //   const password = this.refs.password.state.value;
  //   const data = await loginPC(userName, password);
  // }

  async checkName() {
    const userName = this.userName.state.value;
    await checkName(userName);
  }

  async registerCustom() {
    const username = this.userName.state.value;
    const password = this.password.state.value;
    const name = this.name.state.value;
    const phone = this.phone.state.value;
    await registerCustom({ username, password, name, phone });
  }

  render() {
    return (
      <div className="registerContainer">
        <LoginInput label="Login Name" ref={(mol) => { this.username = mol; }} onblurEvent={this.checkName} />
        <LoginInput label="Password" type="password" ref={(mol) => { this.password = mol; }} />
        <LoginInput label="Name" ref={(mol) => { this.name = mol; }} />
        <LoginInput label="Phone" ref={(mol) => { this.phone = mol; }} maxLength="20" />
        <LoginInput label="Code" /><Verification />
        <button onClick={this.registerCustom}>OK</button>
        <button>Cancel</button>
      </div>
    )
  }
}


export default Register;
