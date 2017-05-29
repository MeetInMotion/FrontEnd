import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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