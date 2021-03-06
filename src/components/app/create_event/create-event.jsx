import React from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.submitInput = this.submitInput.bind(this);
  }

  componentWillMount() {
    const { actions, loadLocation } = this.props;
    actions.loadingPage('create event');
    loadLocation(this.props.match.params.id);
  }

  submitInput(event) {
    event.preventDefault();
    event.stopPropagation();

    const { actions, location } = this.props;

    actions.createEvent(
      {
        title: this.titleInput.value,
        description: this.descriptionInput.value,
      },
      location.id,
      1,
      moment(this.datetimeInput.value).format() // iso 8601
    );
  }

  conditionalRendering() {
    const { eventCreated, location } = this.props;
    // console.log(location, ', location');
    if (eventCreated) {
      return(
        <div> 
          <div>{ this.datetimeInput.value }</div>
          <div>{ location.name }</div>
          <div>{ this.titleInput.value }</div>
          <div>{ this.descriptionInput.value }</div>
        </div>
      );
    } else {
      return(
        <div>
          <h2>
            { location.name } 
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
              Input date:
            <br/>
            <input 
              type="datetime-local" 
              name="datetime" 
              id="datetime" 
              ref={ (el) => this.datetimeInput = el }
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
      id: PropTypes.string,
    }),
  }),

  locations: PropTypes.shape({
    locationsList: PropTypes.array,
  }),
  location: PropTypes.shape({
    name: PropTypes.string,
  }),

  loadLocation: PropTypes.func,

  userInformation: PropTypes.object,
  eventCreated: PropTypes.bool,
};

export default CreateEvent;
