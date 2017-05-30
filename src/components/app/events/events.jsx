import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './events.scss';
import moment from 'moment';

class Events extends React.Component {

  constructor(props) {
    super(props);

    // this.authentication = this.authentification(this);
    // this.renderEvents = this.renderEvents(this);
  }

  componentDidMount() {
    const { loadEvents } = this.props;
    loadEvents();
  }

  // authentification() {
  //   console.log(this.props.user.authenticated);
  //   if (this.props.user.authenticated == true) {
  //     this.renderEvents();
  //   } else {
  //     return(
  //       <div>Log in!
  //       </div>
  //     );
  //   }
  // }

  // renderEvents() {
  //   const { eventList } = this.props.events;
  //   eventList.sort(function(a, b) {
  //     var eventA = a.datetime;
  //     var eventB = b.datetime;
  //     return (eventA < eventB) ? -1 : (eventA > eventB) ? 1 : 0;
  //   });

  //   return (
  //     <div>
  //       <h2>
  //         Kommande event
  //       </h2>
  //       <ul className='list-events'>
  //         { eventList.map(
  //             (event, i) => (
  //               <li className='list-group-item' key={ i }>
  //                 <NavLink to={ `/events/${event.id}` } >
  //                   { event.title + " " + event.datetime}
  //                 </NavLink>
  //               </li>
  //             )
  //         )}
  //       </ul>
  //     </div>
  //   );
  // }

  render() {
    const { eventList } = this.props.events;
    eventList.sort(function(a, b) {
      var eventA = a.datetime;
      var eventB = b.datetime;
      return (eventA < eventB) ? -1 : (eventA > eventB) ? 1 : 0;
    });

    return (
      <div>
        
        <h2>
          Upcomming events
        </h2>
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

  // render() {
  //   return(
  //     <div>
  //       { this.authentification() }
  //     </div>
  //   );
  // }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.clearEvents();
  }
}

Events.propTypes = {
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
  loadEvents: PropTypes.func,
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
