import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { loadingPage, loadLocation } = this.props;


    const event = this.props.events.eventsList.find(
      (e) => e.id == this.props.match.params.id
    );

    console.log(this.props.match.params.id); //eslint-disable-line
    console.log(event); //eslint-disable-line
    console.log(this.props.events.eventsList); //eslint-disable-line
    

    loadingPage();
    loadLocation(event.location_id);
  }
    
  render() {
    const event = this.props.events.eventsList.find(
      (e) => e.id == this.props.match.params.id
    );
    console.log(event); //eslint-disable-line

    return(
      <div>
        <h2>
          { event.title }
        </h2>
        <img src= {this.props.singleEvent.eventLocation.img_url} className="pic" height="150" width="250"/>
        <h3> { this.props.singleEvent.eventLocation.name } </h3>
        <h4> { event.description } </h4>
        <h3> Directions </h3>
        <a href={'http://maps.google.com/maps?q=' + this.props.singleEvent.eventLocation.coordinates.north + ',' + this.props.singleEvent.eventLocation.coordinates.east}>Google maps</a>
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
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;