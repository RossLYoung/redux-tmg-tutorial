import React from 'react';
import PropTypes from 'prop-types';
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css';
import { FBAuthButton } from 'components';


const Auth = ({ onAuth, isFetching, error }) =>
    (
        <div className={centeredContainer}>
            <h1 className={largeHeader}>{'Authenticate'}</h1>

            <FBAuthButton isFetching={isFetching} onAuth={onAuth} />

            {error ? <p className={errorMsg}>{error}</p> : null}
        </div>
    );


Auth.propTypes = {
    error     : PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onAuth    : PropTypes.func.isRequired
};
Auth.defaultProps = {};

export default Auth;
