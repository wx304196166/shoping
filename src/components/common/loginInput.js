import React, { Component } from 'react'
class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.changeUsername = this.changeUsername.bind(this);
  }
  changeUsername(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const { label, type, maxLength } = this.props;
    const { value } = this.state;
    return (
      <div>
        <label className=''>{label}</label>
        <input
          className=''
          type={type}
          value={value}
          maxLength={maxLength || 200}
          onChange={this.changeUsername} />
      </div>
    )
  }
}

export default LoginInput;
