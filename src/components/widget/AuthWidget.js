/**
 * Created by Katniss on 2018/7/31.
 */
import { Component } from 'react';
import { connect } from 'react-redux';

class AuthWidget extends Component {
    render() {
        return this.props.children(this.props.auth.data || {});
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}} } = state.httpData;
    return { auth };
};

export default connect(mapStateToProps)(AuthWidget);