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
    // this is where tha action can be fired
    console.log(values);
  }

  render() {
    const eventLocation = this.props.locations.locationsList.find(
      (el) => el.Name === this.props.match.params.Name
    );

    return(
      <div style={{ padding: 15 }}>
        <h2>{ eventLocation.Name }</h2>
        <EventForm onSubmit={this.submitInput} />
      </div>
    );
  }
}

CreateEvent.propTypes = {

  handleSubmit: PropTypes.func,
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