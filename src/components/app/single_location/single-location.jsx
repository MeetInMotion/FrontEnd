import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Events from '../events/event-page.js';
import styles from './single_location.scss';
import CSSModules from 'react-css-modules';

class SingleLocation extends React.Component {

  constructor(props) {
    super(props);


    this.toggleFollowEvent = this.toggleFollowEvent.bind(this);
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('single location');
  }

  componentDidMount(){
    const { actions } = this.props;
    actions.loadLocation(this.props.match.params.id);
    actions.setFollowing(false);
  }

  toggleFollowEvent() {
    if (this.props.location.following) {
      this.props.actions.removeLocationToUser(this.props.location.location.id, this.props.user.id);
    } else {
      this.props.actions.addLocationToUser(this.props.location.location, this.props.user.id);
    }
  }

  followButton() {
    if (this.props.location.following != null) {
      // console.log('button clicked, state ', this.props.singleEvent.attending); //eslint-disable-line
      if (this.props.location.following) {
        return(
          <div>
            <i aria-hidden="true"/>
          Following</div>
        );
      } else {
        return(
          <div>
            <i aria-hidden="true"/>
          Follow</div>
        );
      }
    } else {
      console.log("inget"); //eslint-disable-line
    }
  }

  render() {
    const { location, user } = this.props;
    const { authenticated } = user;
    const eventsUrl = "http://api.localhost:8081/locations/"+this.props.match.params.id+"/events";

    return(
      <div>
        <center>
          <h2>
            { location.name }
          </h2>

          <img src= {location.img_url} className="pic" height="150" width="250"/>
          <br/>
          <br/>
          
          <i className="fa icon-thumbs-up" aria-hidden="true" styleName="icon"/>
          
          <br/>

          <a href={'http://maps.google.com/maps?q=' + location.coordinates.north + ',' + location.coordinates.east}>Google maps directions</a>

          <br/>
          <br/>
          { authenticated ? 
            <NavLink to={ `/categories/locations/location/${location.id}/create-event` } >
              Create event 
            </NavLink> : "Log in to create event!" }
          <br/>
          { authenticated ? 
            <div onClick= { this.toggleFollowEvent } >
              { this.followButton() }
            </div> : "Log in to follow event!" }
          
          <Events url={ eventsUrl } { ...this.props } />
          
        </center>
      </div>
    );
  }
}

SingleLocation.propTypes = {
  actions: PropTypes.shape({
    removeLocationToUser: PropTypes.func,
    loadingPage: PropTypes.func,
    addLocationToUser: PropTypes.func,
    loadLocation: PropTypes.func,
    setFollowing: PropTypes.func,
  }),

  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  }),

  user: PropTypes.shape({
    id: PropTypes.number,
    authenticated: PropTypes.bool,
  }),


  location: PropTypes.shape({
    following: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    location: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img_url: PropTypes.string,
      coordinates: PropTypes.shape({
        east: PropTypes.string,
        north: PropTypes.string,
      }),
    }),
  }),
};

export default CSSModules(SingleLocation, styles);
