import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import users from 'redux/modules/users';
import { MainContainer, HomeContainer, AuthContainer, FeedContainer, LogoutContainer } from './containers';
// import AuthContainer from './containers/Auth/AuthContainer';
import { Nav } from './components';
import  { checkIfAuthed } from  './helpers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(users, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));
// or without devtools
// const store = createStore(users, applyMiddleware(thunk))

function PrivateRoute({ component: Component, authed, store, ...rest }) {
    const authedResult = authed(store);
    return (
        <Route
            {...rest}
            render={props => (authedResult
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)}
        />
    );
}
console.log("isAuthed -" + store.getState().isAuthed);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/* <Nav isAuthed={this.props.isAuthed} /> */}
                <Nav />
                <Switch>
                    <Route path="/"  exact component={MainContainer} />
                    {/* <Route path="/home"    component={HomeContainer} /> */}
                    <PrivateRoute authed={checkIfAuthed} store={store} path="/home" component={HomeContainer} />
                    <Route path="/auth"    component={AuthContainer} />
                    <PrivateRoute authed={checkIfAuthed} store={store} path="/feed" component={FeedContainer} />
                    {/* <Route path="/feed"    component={FeedContainer}  /> */}
                    <Route path="/logout"  component={LogoutContainer} />
                    <Route render={() => (<p>404ish - Not Found in switch....</p>)} />
                </Switch>
            </div>
        </Router>
    </Provider>,

    document.getElementById('app')
);
