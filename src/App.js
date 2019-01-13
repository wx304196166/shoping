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
    this.setState({ title });
  }
  render() {
    return (
      <div>
        <span className="login" onClick={this.gotoLoginPage}>Login</span>
        <SiderMenu
          menus={routes.menus}
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
        <Routes onRouterChange={this._setTitle} />
      </div>
    );
  }
}
export default App;
