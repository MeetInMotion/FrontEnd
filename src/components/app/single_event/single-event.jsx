import React from 'react';
import { PropTypes } from 'prop-types';

class SingleEvent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    
    actions.loadingPage();
    actions.loadEvent(this.props.match.params.id);
  }
    
  render() {
    const { theEvent, participants } = this.props.singleEvent;
    // console.log(participants[0]);
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

  componentWillUnMount() {
    const { actions } = this.props;
    actions.clearEvent();
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
    participants: PropTypes.array,  
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default SingleEvent;
