import React, { PropTypes } from 'react';
import { button } from './styles.css';

export default function FBAuthButton({ onAuth, isFetching }) {
    return (
        <button onClick={onAuth} className={button}>
            {isFetching === true
                ? 'Loading'
                : 'Login with facebook'}
        </button>
    );
}

FBAuthButton.propTypes = {
    onAuth    : PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};
