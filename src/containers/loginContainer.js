import { connect } from 'react-redux';
import { onTestadd } from '../action/loginAction';
import Login from '../components/login';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  inputValue: state.login.inputValue
});
const LoginContainer = connect(
  mapStateToProps,
  {
    onTestadd
  }
)(Login);

export default LoginContainer;