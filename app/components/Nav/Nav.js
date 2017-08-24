import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { container, navContainer, link } from './styles.css';

ActionLinks.propTypes = NavLinks.propTypes = {
    isAuthed: PropTypes.bool.isRequired
};

function NavLinks({ isAuthed }) {
    return isAuthed === true
        ? <ul>
            <li><Link to="/home" className={link}>{'Homezz'}</Link></li>
            <li><Link to="/feed" className={link}>{'Feed'}</Link></li>
        </ul>
        : <noscript />;
}

function ActionLinks({ isAuthed }) {
    return isAuthed === true
        ? <ul>
            <li>NEW DUCK</li>
            <li><Link to="/logout" className={link}>{'Logout'}</Link></li>
        </ul>
        : <ul>
            <li><Link to="/home" className={link}>{'Home'}</Link></li>
            <li><Link to="/auth" className={link}>{'Authenticate'}</Link></li>
            <li><Link to="/feed" className={link}>{'Feed'}</Link></li>
        </ul>;
}



class Nav extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={container}>
                <nav className={navContainer}>
                    <NavLinks    isAuthed={this.props.isAuthed} />
                    <ActionLinks isAuthed={this.props.isAuthed} />
                </nav>
            </div>
        );
    }
}
Nav.propTypes = {
    isAuthed: PropTypes.bool.isRequired
};

Nav.defaultProps = {};

// export default function Nav({ isAuthed }) {
//     return (
//         <div className={container}>
//             <nav className={navContainer}>
//                 <NavLinks    isAuthed={isAuthed} />
//                 <ActionLinks isAuthed={isAuthed} />
//             </nav>
//         </div>
//     );
// }


export default connect(
    state => ({ isAuthed: state.isAuthed })
)(Nav);
