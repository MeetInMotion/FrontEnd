import React from 'react';
import { PropTypes } from 'prop-types';
// import CSSModules from 'react-css-modules';
// import styles from './events.scss';

class SingleEvent extends React.Component{
  render() {
    console.log(this.props) // eslint-disable-line

    const event = this.props.events.find(
      (e) => e.id === this.props.match.params.eventId
    );

    console.log(event) // eslint-disable-line

    return(
      <div>
        <h2>
          { event.title }
        </h2>
        <p> location: { event.location_name } </p>
        <p> coordinate: { event.coordinate } </p>
      </div>
    );
  }
}

SingleEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string,
    }),
  }),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      location_name: PropTypes.string,
      GeographicalPosition: PropTypes.array,
    })
  ),
};

export default SingleEvent;
