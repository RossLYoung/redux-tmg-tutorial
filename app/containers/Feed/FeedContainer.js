import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Feed } from 'components';

class FeedContainer extends Component {
    render() {
        return (
            <Feed />
        );
    }
}

FeedContainer.propTypes = {};
FeedContainer.defaultProps = {};

export default FeedContainer;
