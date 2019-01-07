import { connect } from 'react-redux';
import { onTestadd } from '../action/loginAction';
import Login from '../components/login';

const mapStateToPros = (state) => ({
  inputValue: state.login.inputValue
});
const LoginContainer = connect(
  mapStateToPros,
  {
    onTestadd
  }
)(Login);

export default LoginContainer;