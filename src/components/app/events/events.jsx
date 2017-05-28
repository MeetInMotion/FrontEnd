import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';

class Events extends React.Component{

  componentWillMount() {
    const { loadingPage, loadEvents } = this.props;
    loadingPage();
    loadEvents();
  }

  render() {
    const { eventsList } = this.props.events;
    return(
      <div>
        <h2>Your upcoming events</h2>
        <div className="alert alert-success">
          <ul list-group>
            {eventsList.map((event, i) =>
              <li className='list-group-item' key={i}>
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
  loadEvents: PropTypes.func,
  events: PropTypes.shape({
    eventsList: PropTypes.array,
  }),
};

export default CSSModules(Events, styles);
