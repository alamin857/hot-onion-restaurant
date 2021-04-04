import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({user, children, ...rest}) => {
    const {email} = user;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? 
                (
                    children
                ) :
                (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps) (PrivateRoute);