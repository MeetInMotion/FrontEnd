import React from 'react';
import { PropTypes } from 'prop-types';

class CreateEvent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      eventLocation: props.locations.locationsList.find(
        (el) => el.name === this.props.match.params.name
      ),
    };
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.loadingPage('create event');
  }

  submitInput(values) {
    const { actions, userInformation } = this.props;

    actions.createEvent(values, this.state.eventLocation.Id, userInformation.id);

    alert('Event created! Hopefully');
  }

  renderInputForm() {
    return(
      <div>
        <h2>{ this.state.eventLocation.name }</h2>
        <form onSubmit={this.submitInput}>
          Title:<br/>
          <input type="text" name="title" /><br/>
          Short description:<br/>
          <input type="text" name="description" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  //   https://www.w3schools.com/jsref/event_onchange.asp

  // renderEvent() {
  //   <SingleEvent />
  // }

  render() {
    return(
      <div>
        {
         this.renderInputForm() 
       }
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
  form: PropTypes.object,
};

export default CreateEvent;