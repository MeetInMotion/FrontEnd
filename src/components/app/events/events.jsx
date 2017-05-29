import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';
import moment from 'moment';

class Events extends React.Component{

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('Events');

    if (this.props.locationId) {
      console.log(this.props.locationId); //eslint-disable-line
      actions.loadLocationEvents(this.props.locationId);
    } else { 
      actions.loadUserEvents(1);
    }
  }
  render() {
    const { eventList } = this.props.events;
    eventList.sort(function(a, b) {
      var eventA = a.datetime;
      var eventB = b.datetime;
      return (eventA < eventB) ? -1 : (eventA > eventB) ? 1 : 0;
    });

    
    return (
      <div>
        <center>
          <h2>
            Kommande event
          </h2>
        </center>
        <ul className='list-events'>
          { eventList.map(
              (event, i) => (
                <li className='list-group-item' key={ i }>
                  <NavLink to={ `/events/${event.id}` } >
                    { event.title + ", " + moment().calendar(event.datetime, {
                      sameDay: '[Idag]',
                      lastDay: '[Imorgon]',
                      sameElse: moment(event.datetime).format('YYYY-MM-DD'),
                    }) + " " + moment(event.datetime).format("HH:mm")}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.clearEvents();
  }
}

Events.propTypes = {
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadUserEvents: PropTypes.func,
    clearEvents: PropTypes.func,
  }),
  events: PropTypes.shape({
    eventList: PropTypes.array,
  }),
  locationId: PropTypes.string,
};

export default CSSModules(Events, styles);
