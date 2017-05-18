import React from 'react';
import { PropTypes } from 'prop-types';
import EventForm from './event-form.js';
// import { DateField, DatePicker } from 'react-date-picker';
// import 'react-date-picker/index.css';

class CreateEvent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('create event');
  }

  submitInput(values) {
    const { actions } = this.props;
    actions.createEvent(values);
  }

  render() {
    const eventLocation = this.props.locations.locationsList.find(
      (el) => el.Name === this.props.match.params.Name
    );

    return(
      <div>
        <h2>{ eventLocation.Name }</h2>
        <EventForm onSubmit={(e) => this.submitInput(e) } />
      </div>
    );
  }
}

CreateEvent.propTypes = {
  bind: PropTypes.func,
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    createEvent: PropTypes.func,
  }),

  match: PropTypes.shape({
    params: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }),

  locations: PropTypes.shape({
    locationsList: PropTypes.array,
  }),
};

export default CreateEvent;