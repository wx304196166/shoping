import React, { Component } from 'react'
import './style.scss';

class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <div className="related">
        <div className="title">Related products</div>
        <ul className="list">
          <li className="item">
            <div>图片</div>
            <p>Product name</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default LoginInput;
