import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { loadingPage, loadLocation } = this.props;


    const event = this.props.events.eventsList.find(
      (e) => e.name === this.props.match.params.id
    );
    

    loadingPage();
    loadLocation(event.location_id);

  }
    
  render() {
    const event = this.props.events.eventsList.find(
      (e) => e.name === this.props.match.params.id
    );

    

    console.log(JSON.stringify(this.props.singleEvent.eventLocation.coordinates)); //eslint-disable-line
    

    return(
      <div>
        <h2>
          { event.title }
        </h2>
        <h3> Location </h3> 
        <h2> { this.props.singleEvent.eventLocation.name } </h2>
        <h3> Geographical position </h3>
        <p> x: { this.props.singleEvent.eventLocation.coordinates.east } </p>
        <p> y: { } </p>
      </div>
    );
  }
}

SingleEvent.propTypes = {
  loadingPage: PropTypes.func,
  loadLocation: PropTypes.func,
  events: PropTypes.shape({
    eventsList: PropTypes.array,
    eventLocation: PropTypes.array,
  }),
  singleEvent: PropTypes.shape({
    eventLocation: PropTypes.Object,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      location_id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;