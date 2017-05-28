import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { loadingPage, loadLocation } = this.props;


    const event = this.props.events.eventsList.find(
      (e) => e.id == this.props.match.params.id
    );


    loadingPage();
    loadLocation(event.location_id);
  }
    
  render() {
    const event = this.props.events.eventsList.find(
      (e) => e.id == this.props.match.params.id
    );
    
    const dateAndTimeArray = event.datetime.split("T");
    const date = dateAndTimeArray[0];
    const timeArray = dateAndTimeArray[1].split(":");
    const time = timeArray[0] + ":" + timeArray[1];
    
    return(
      <center>
        <div>
          <h3> { this.props.singleEvent.eventLocation.name } </h3>
          <img src= {this.props.singleEvent.eventLocation.img_url} className="pic" height="150" width="250"/>
          <h2>
            { event.title }
          </h2>
          <h4> {date + " " + time} </h4>
          <h6> { event.description } </h6>
          <h3> Directions </h3>
          <a href={'http://maps.google.com/maps?q=' + this.props.singleEvent.eventLocation.coordinates.north + ',' + this.props.singleEvent.eventLocation.coordinates.east}>Google maps</a>
        </div>
      </center>
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
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;