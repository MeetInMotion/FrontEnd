import React from 'react';
import { PropTypes } from 'prop-types';

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
          create event at { eventLocation.Name }
        </h2>
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