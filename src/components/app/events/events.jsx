import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
class Events extends React.Component{
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }
  render() {
    return(
      <div>
        <h1>Events</h1>
        <NavLink to='/'>Home</NavLink>
      </div>
    );
  }
}
Events.propTypes = {
  loadingPage: PropTypes.func,
};

export default Events;
