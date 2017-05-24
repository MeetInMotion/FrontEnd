import React from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CreateEvent extends React.Component {

  constructor(props) {
    super(props);

    this.submitInput = this.submitInput.bind(this);
    this.dateChanged = this.dateChanged.bind(this);

    this.eventLocation = props.locations.locationsList.find(
      (el) => el.name === this.props.match.params.name
    );
  
    this.state = {
      startDate: moment(),
    };
  }

  componentWillMount() {
    const { actions } = this.props;

    actions.loadingPage('create event');
  }

  submitInput(event) {
    event.preventDefault();
    event.stopPropagation();

    const { actions, userInformation } = this.props;

    actions.createEvent(
      {
        title: this.titleInput.value,
        description: this.descriptionInput.value,
      },
      this.eventLocation.id,
      userInformation.id
    );
  }

  dateChanged(date) {
    this.setState({
      startDate: date,
    });
  }

  conditionalRendering() {
    const { eventCreated } = this.props;

    if (eventCreated) {
      return(
        <div>eventCreated</div>
      );
    } else {
      return(
        <div>
          <h2>
            {  this.eventLocation.name }
          }
          </h2>
          <form onSubmit={ this.submitInput } >
            Title:<br/>
            <input
              type="text"
              name="title"
              ref={ (el) => this.titleInput = el }
            />
            <br/>
            Short description:<br/>
            <input
              type="text"
              name="description" 
              ref={ (el) => this.descriptionInput = el }
            />
            <br />
            <DatePicker
              selected={ this.state.startDate }
              onChange={ this.dateChanged }
            />
            <br />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        { this.conditionalRendering() }
      </div>
    );
  }
}

CreateEvent.propTypes = {
  bind: PropTypes.func,
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    createEvent: PropTypes.func,
    setDoneToFalse: PropTypes.func,
  }),

  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),

  locations: PropTypes.shape({
    locationsList: PropTypes.array,
  }),

  userInformation: PropTypes.object,
  eventCreated: PropTypes.bool,
};

export default CreateEvent;