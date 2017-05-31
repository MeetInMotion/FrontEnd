import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './single-event.scss';
import CSSModules from 'react-css-modules';
import moment from 'moment';

class SingleEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listParticipantsExpanded: false,
    };

    this.toggleListParticipants = this.toggleListParticipants.bind(this);
    this.toggleAttendEvent = this.toggleAttendEvent.bind(this);
  }

  componentWillMount() {
    const { actions } = this.props;
    
    actions.loadingPage();
    actions.loadEvent(this.props.match.params.id, this.props.user.id);
  }

  toggleListParticipants() {
    this.setState({
      listParticipantsExpanded: !this.state.listParticipantsExpanded,
    });
  }

  toggleAttendEvent() {
    if (this.props.singleEvent.attending) {
      this.props.actions.unAttendEvent(this.props.match.params.id, this.props.user.id);
    } else {
      this.props.actions.attendEvent(this.props.match.params.id, this.props.user.id);
    }
  }

  attendButton() {
    if (this.props.singleEvent.attending != null) {
      console.log('button clicked, state ', this.props.singleEvent.attending); //eslint-disable-line
      if (this.props.singleEvent.attending) {
        return(
          <div>
            <i className="fa fa-check" aria-hidden="true" />
          Attending</div>
        );
      } else {
        return(
          <div>
            <i className="fa fa-times" aria-hidden="true" />
          Attend</div>
        );
      }
    }
  }

  render() {
    const { theEvent, participants } = this.props.singleEvent;
    const participantsLength = participants.length;

    const listParticipantsStyle = {
      display: this.state.listParticipantsExpanded ? 'block' : 'none',
    };

    console.log(this.props.singleEvent.attending); //eslint-disable-line

    var location_img = this.props.singleEvent.eventLocation.img_url;
    if (location_img == null) {
      location_img = 'http://i.imgur.com/avnhoaZ.jpg';
    }

    return(
      <div>
        <i className="fa fa-eye fa-2x" aria-hidden="true"/>
        { this.props.singleEvent.eventLocation && 
          <div>
            <center>
              <h2>
                { theEvent.title }
              </h2>

              <img src= { location_img } className="pic" height="150" width="250"/>
            

              <br/>

              <h3 styleName="test2"> { this.props.singleEvent.eventLocation.name } </h3>
           
              <h5 styleName="test">{moment().calendar(theEvent.datetime, {
                sameDay: '[Idag]',
                lastDay: '[Imorgon]',
                sameElse: moment(theEvent.datetime).format('YYYY-MM-DD'),
              }) + " " + moment(theEvent.datetime).format("HH:mm")}</h5>
              <br/>




              <div className="switch" onClick={ this.toggleAttendEvent }>
                { this.attendButton() }
              </div>







              <h6> { theEvent.description } </h6>

              <a  href={'http://maps.google.com/maps?q=' + this.props.singleEvent.eventLocation.coordinates.north + ',' + this.props.singleEvent.eventLocation.coordinates.east}>
                Google maps directions
              </a>

              <div
                style={ {
                  'marginTop': '20px',
                  display: 'flex',
                  width: 200,
                  'flexDirection': 'column',
                  'borderRadius': '3px',
                  border: '1px solid #fff',
                } }
              >
                <div onClick={ this.toggleListParticipants } >
                  Participants ({ participantsLength }):
                </div>

                <div style={ listParticipantsStyle } >
                  { participants.map(
                      (user, index) => (
                        <div
                          key={ index }
                          style={ {
                            'borderTop': '1px solid #f99',
                            'borderBottom': index + 1 === participants.length ? 'none' : '1px solid #999',
                          } }
                        >
                          <NavLink to={ `/users/${user.id}` } >
                            { user.name }
                          </NavLink>
                        </div>
                      )
                  )}
                </div>
              </div>
            </center>
          </div>        
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
    getAttendStatus: PropTypes.func,
    clearEvent: PropTypes.func,
    attendEvent: PropTypes.func,
    unAttendEvent: PropTypes.func,
  }),
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
  singleEvent: PropTypes.shape({
    theEvent: PropTypes.object,
    eventLocation: PropTypes.object,
    participants: PropTypes.array,
    attending: PropTypes.bool,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  }),
};

export default CSSModules(SingleEvent, styles);