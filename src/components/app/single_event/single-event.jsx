import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    
    actions.loadingPage();
    actions.loadEvent(this.props.match.params.id);
    const { theEvent } = this.props.singleEvent;

    actions.loadLocation(theEvent.location_id);
  }

  compontentDidMount() {
    const { actions } = this.props;
    const { theEvent } = this.props.singleEvent;
    actions.loadEvent(this.props.match.params.id);
    actions.loadLocation(theEvent.location_id);

    actions.loadingPage();
    actions.loadEvent(this.props.match.params.id);
    // actions.loadLocation(event.location_id);
  }
    
  render() {
    const { theEvent } = this.props.singleEvent;
    return(
      <div>
        { this.props.singleEvent.eventLocation && 
          <center>
            <h2>
              { theEvent.title }
            </h2>
            <img src= {this.props.singleEvent.eventLocation.img_url} className="pic" height="150" width="250"/>
            <h3> { this.props.singleEvent.eventLocation.name } </h3>
            <h4> { theEvent.description } </h4>
            <h3> Directions </h3>
            <a href={'http://maps.google.com/maps?q=' + this.props.singleEvent.eventLocation.coordinates.north + ',' + this.props.singleEvent.eventLocation.coordinates.east}>Google maps</a>
          </center>        
        }
      </div>
      
    );
  }
}

SingleEvent.propTypes = {
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadLocation: PropTypes.func,
    loadEvent: PropTypes.func,
    clearEvent: PropTypes.func,
  }),
  singleEvent: PropTypes.shape({
    theEvent: PropTypes.object,
    eventLocation: PropTypes.object,   
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;
