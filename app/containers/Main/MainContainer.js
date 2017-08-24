import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Main } from 'components';
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
    render() {
        return (

            <div className={container}>
                {/* <Navigation isAuthed={true} /> */}
                <div className={innerContainer}>
                    {this.props.children}
                    <Main />
                </div>
            </div>
        );
    }
}

MainContainer.propTypes = {};
MainContainer.defaultProps = {};

export default MainContainer;

// export default connect(
//     state => ({ isAuthed: state.isAuthed })
// )(MainContainer);