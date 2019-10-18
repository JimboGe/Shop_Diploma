import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";

export default function (ComposedComponent) {
  class Authenticate extends React.Component {

    state = {
      redirect: false
    };
    componentWillMount() {
      let { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        this.setState({ redirect: true });
      }
    }
    render() {
      return (
        this.state.redirect ?
          <Redirect to="/account/signin" /> : 
          <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  }

  return connect(mapStateToProps, {})(Authenticate);
}