import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Auth } from 'components';
import auth from 'helpers/auth';
import * as userActionCreators from 'redux/modules/users';


class AuthContainer extends Component {
    handleAuth(e) {
        e.preventDefault();
        this.props.fetchAndHandleAuthedUser()
            .then(() => {
                this.props.history.push('feed');
            }

            );
    }
    render() {
        return (
            <Auth
                onAuth={this.handleAuth.bind(this)}
                isFetching={this.props.isFetching}
                error={this.props.error}
            />
        );
    }
}


AuthContainer.propTypes = {
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching              : PropTypes.bool.isRequired,
    error                   : PropTypes.string.isRequired
};
AuthContainer.defaultProps = {};

export default withRouter(connect(
    state => ({ isFetching: state.isFetching, error: state.error }),
    dispatch => bindActionCreators(userActionCreators, dispatch)
)(AuthContainer));
