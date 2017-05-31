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
  }

  componentWillMount() {
    const { actions } = this.props;
    
    actions.loadingPage();
    actions.loadEvent(this.props.match.params.id);
  }

  toggleListParticipants() {
    this.setState({
      listParticipantsExpanded: !this.state.listParticipantsExpanded,
    });
  }
  
  render() {
    const { theEvent, participants } = this.props.singleEvent;
    const participantsLength = participants.length;
    const listParticipantsStyle = {
      display: this.state.listParticipantsExpanded ? 'block' : 'none',
    };
    var location_img = this.props.singleEvent.eventLocation.img_url;
    if(location_img == null) {
      location_img = 'http://i.imgur.com/avnhoaZ.jpg';
    }

    return(
      <div>
        { this.props.singleEvent.eventLocation && 
          <div>
            <center>
              <h2>
                { theEvent.title }
              </h2>

              <img src= {location_img} className="pic" height="150" width="250"/>
            

              <br/>

              <h3 styleName="test2"> { this.props.singleEvent.eventLocation.name } </h3>
           
              <h5 styleName="test">{moment().calendar(theEvent.datetime, {
                sameDay: '[Idag]',
                lastDay: '[Imorgon]',
                sameElse: moment(theEvent.datetime).format('YYYY-MM-DD'),
              }) + " " + moment(theEvent.datetime).format("HH:mm")}</h5>
              <br/>
            </center>

            <center>
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

export default CSSModules(SingleEvent, styles);