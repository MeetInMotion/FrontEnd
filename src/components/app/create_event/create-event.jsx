import React from 'react';
import { PropTypes } from 'prop-types';
import EventForm from './event-form.js';
// import { Field, reduxForm } from 'redux-form';
// import { DateField, DatePicker } from 'react-date-picker';
// import 'react-date-picker/index.css';

class CreateEvent extends React.Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('create event');
  }

  render() {
    const eventLocation = this.props.locations.locationsList.find(
      (el) => el.Name === this.props.match.params.Name
    );

    return(
      <div> Create event at <br/> { eventLocation.Name }

        <EventForm />

      </div>
    );
  }
}

// onClick={this.actions.createEvent('8374792')}

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


      // <div>
      //   <h2>
      //     Create event at: { eventLocation.Name }
      //   </h2>

      //   <p>Event title: <br/> <input type="text" title="event title" /></p>
      //   Date and time: <br/>
      //   <DateField
      //     dateFormat="YYYY-MM-DD HH:mm:ss"
      //     forceValidDate={true}
      //     defaultValue={"2017-05-17 00:00:00"}
      //   >
      //     <DatePicker
      //       navigation={true}
      //       locale="en"
      //       forceValidDate={true}
      //       highlightWeekends={true}
      //       highlightToday={true}
      //       weekNumbers={true}
      //       weekStartDay={1}
      //     />
      //   </DateField>

      //   <p>Description: <br/> <textarea></textarea></p>
      //   <button onClick={actions.createEvent('8374792')}>Create button placeholder</button>
      // </div>