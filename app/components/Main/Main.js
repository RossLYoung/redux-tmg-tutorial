import React from 'react';
import PropTypes from 'prop-types';
import { container, title, slogan } from './styles.css';

const Main = props => (
    <div className={container}>
        <p className={title}>Main</p>
        <p className={slogan}>Component</p>
    </div>
);

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
