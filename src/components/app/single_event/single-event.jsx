import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    const event = this.props.events.eventList.find(
      (e) => e.id == this.props.match.params.id
    );

    actions.loadingPage();
    actions.loadLocation(event.location_id);
  }
    
  render() {
    const event = this.props.events.eventList.find(
      (e) => e.id == this.props.match.params.id
    );

    return(
      <div>
        <center>
          <h2>
            { event.title }
          </h2>
          <h2> {} </h2>
          <img src= {this.props.singleEvent.eventLocation.img_url} className="pic" height="150" width="250"/>
          <h3> { this.props.singleEvent.eventLocation.name } </h3>
          <h4> { event.description } </h4>
          <h3> Directions </h3>
          <a href={'http://maps.google.com/maps?q=' + this.props.singleEvent.eventLocation.coordinates.north + ',' + this.props.singleEvent.eventLocation.coordinates.east}>Google maps</a>
        </center>
      </div>
    );
  }
  componentWillUnmount() {
    const { actions } = this.props;
    actions.clearEvents();
  }
}

SingleEvent.propTypes = {
  
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadLocation: PropTypes.func,
    clearEvents: PropTypes.func,
  }),
  events: PropTypes.shape({
    eventList: PropTypes.array,
    eventLocation: PropTypes.array,
  }),
  singleEvent: PropTypes.shape({
    eventLocation: PropTypes.Object,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;