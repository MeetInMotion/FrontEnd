import React from 'react';
import { PropTypes } from 'prop-types';
// import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';

class Events extends React.Component{

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('Events');

    if (this.props.locationId) {
      actions.loadUserEvents(5); // loada riktiga userId när det är klart
    }
    // else { actions.loadLocationEvents(this.props.locationId)}
  }

  render() {
    if (this.props.locationId) {       // det ska inte funka så här sen när API funkar
      return(
        <div>
          <h2>Upcoming location events:</h2>
        </div>
      );
    } else {
      return(
        <div>
          <h2>Upcoming user events:</h2>
        </div>
      );
    }
  }
}

Events.propTypes = {
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadUserEvents: PropTypes.func,
  }),
  events: PropTypes.object,
  locationId: PropTypes.string,
};

export default CSSModules(Events, styles);
