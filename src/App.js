import React, { Component } from 'react';
import Routes from './routes';
import SiderMenu from './components/SiderMenu';
import routes from './routes/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.gotoLoginPage = this.gotoLoginPage.bind(this);
  }
  gotoLoginPage() {
    this.props.history.push("/app/login");
  }
  _setTitle = ({ title }) => {
    if (this.state.title === title) return;
  }
  render() {
    return (
      <div>
        <div className="login" onClick={this.gotoLoginPage}>Log In / Sign Up</div>
        <SiderMenu
          menus={routes.menus}
          onClick={this.menuClick}
          mode="inline"
        />
        <Routes onRouterChange={this._setTitle} />
      </div>
    );
  }
}
export default App;
