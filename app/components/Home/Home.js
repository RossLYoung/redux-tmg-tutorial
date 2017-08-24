import React from 'react';
import { container, title, slogan } from './styles.css';


const Home = props => (
    <div className={container}>
        <p className={title}>Home Header</p>
        <p className={slogan}>Home chat</p>
    </div>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
