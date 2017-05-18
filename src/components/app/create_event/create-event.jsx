import React from 'react';
import { PropTypes } from 'prop-types';
import { DateField, DatePicker } from 'react-date-picker';
import 'react-date-picker/index.css';

class CreateEvent extends React.Component {

  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    const eventLocation = this.props.locations.locationsList.find(
      (el) => el.Name === this.props.match.params.Name
    );

    return(
      <div>
        <h2>
          Create event at: { eventLocation.Name }
        </h2>
        <p>Event name: <br/> <input type="text" name="event name" /></p>
        <p>Date and time: <br/>
          <DateField
            dateFormat="YYYY-MM-DD HH:mm:ss"
            forceValidDate={true}
            defaultValue={"2017-05-17 00:00:00"}
          >
            <DatePicker
              navigation={true}
              locale="en"
              forceValidDate={true}
              highlightWeekends={true}
              highlightToday={true}
              weekNumbers={true}
              weekStartDay={1}
            />
          </DateField>
        </p>
        <p>Description: <br/> <textarea></textarea></p>
        <button>Create button placeholder</button>
      </div>
    );
  }
}

CreateEvent.propTypes = {
  loadingPage: PropTypes.func,

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