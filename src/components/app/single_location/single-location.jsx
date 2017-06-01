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

    if (this.props.user.authenticated) {
      actions.loadLocation(this.props.match.params.id, this.props.user.id);
    } else {
      actions.loadLocation(this.props.match.params.id, 'undefined');
    }
    
  }

  componentDidMount() {
  }

  toggleFollowEvent() {
    const { location } = this.props;
    console.log(location.following); //eslint-disable-line
    // if (location.following) {
    //   this.props.actions.removeLocationToUser(this.props.location.location.id, this.props.user.id);
    // } else {
    //   this.props.actions.addLocationToUser(this.props.location, this.props.user.id);
    // }
  }

  followButton() {
    const { location } = this.props;
    if (location.following != null) {
      if (location.following) {
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
    const { user } = this.props;
    const { location } = this.props;
    console.log('this location.following ', this.props.location.following);

//    console.log(location); //eslint-disable-line
//    console.log(this.props.location); //eslint-disable-line
    const { authenticated } = user;
    const eventsUrl = "http://api.localhost:8081/locations/"+this.props.match.params.id+"/events";
//    console.log(location.name); //eslint-disable-line
//    const { theLocation } = this.props;
//    console.log(theLocation + "hej"); //eslint-disable-line
//    console.log(following); //eslint-disable-line
    // console.log(this.props.location.following); //eslint-disable-line
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

    error: PropTypes.bool,
    location: PropTypes.shape({
      loading: PropTypes.bool,
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
