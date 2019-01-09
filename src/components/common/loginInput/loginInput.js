import React, { Component } from 'react'
import './style.scss';

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
    const { label, type, maxLength, onblurEvent } = this.props;
    const { value } = this.state;
    return (
      <div className="inputContainer">
        <label className=''>{label}</label>
        <input
          className=''
          type={type}
          value={value}
          maxLength={maxLength || 200}
          onBlur={onblurEvent}
          onChange={this.changeUsername} />
      </div>
    )
  }
}

export default LoginInput;
