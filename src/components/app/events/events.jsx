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
      actions.loadUserEvents(1); // loada riktiga userId när det är klart
      console.log("hej"); //eslint-disable-line
    } else { actions.loadUserEvents(1);
    }
  }

  render() {
    const { eventList } = this.props.events;
    console.log(eventList); //eslint-disable-line

    return (
      <div>
        <h2>
          your upcoming events
        </h2>
        <ul className='list-events'>
          { eventList.map(
              (event, i) => (
                <li className='list-group-item' key={ i }>
                  <NavLink to={ `/events/${event.id}` } >
                    { event.title + event.id }
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
