import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';

class Events extends React.Component{

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('Events');

    if (this.props.locationId) {
      actions.loadLocationEvents(this.props.locationId);
    } else { 
      actions.loadUserEvents(1);
    }
  }
  render() {
    const { eventList } = this.props.events;
    return (
      <div>
        <h2>
          Kommande event
        </h2>
        <ul className='list-events'>
          { eventList.map(
              (event, i) => (
                <li className='list-group-item' key={ i }>
                  <NavLink to={ `/events/${event.id}` } >
                    { event.title }
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

Events.propTypes = {
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadUserEvents: PropTypes.func,
  }),
  events: PropTypes.shape({
    eventList: PropTypes.array,
  }),
  locationId: PropTypes.string,
};

export default CSSModules(Events, styles);
