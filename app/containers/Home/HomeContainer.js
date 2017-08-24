import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Home } from 'components';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

HomeContainer.propTypes = {};
HomeContainer.defaultProps = {};

export default HomeContainer;
