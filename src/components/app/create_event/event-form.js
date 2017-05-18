import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// import { DateField, DatePicker } from 'react-date-picker';
// import 'react-date-picker/index.css';

class EventForm extends React.Component {

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <Field name="title" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <Field name="description" component="input" type="text"/>
          </div>

          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

EventForm.propTypes = {
  handleSubmit: PropTypes.func,
  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    createEvent: PropTypes.func,
  }),
};


export default reduxForm({
  form: 'contact', // a unique name for this form
})(EventForm);