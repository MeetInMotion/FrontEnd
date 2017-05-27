import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';

class Events extends React.Component{

  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    const { events } = this.props;
    return(
      <div className="container-fluid">
        <h2>Upcoming events:</h2>
        <div className="alert alert-success">
          <ul>
            {events.map((event, i) =>
              <li key={i}>
                <NavLink to={ `/events/${event.id}` } >
                  { event.title }
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Events.propTypes = {
  loadingPage: PropTypes.func,
  events: PropTypes.array,
};

export default CSSModules(Events, styles);
