import React from 'react';
// import { PropTypes } from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
// import { DateField, DatePicker } from 'react-date-picker';
// import 'react-date-picker/index.css';

const EventForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>
      <br/>
      <div>
        <label>Level</label>
        <div>
          <label>
            <Field name="level" component="input" type="radio" value="Beginner" />
            {' '}
            Beginner
          </label>
          <label>
            <Field name="level" component="input" type="radio" value="Advanced" />
            {' '}
            Advanced
          </label>
        </div>
      </div>
      <br/>
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" />
        </div>
      </div>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};




EventForm.propTypes = {
  ...propTypes,
};

// export default EventForm;

export default reduxForm({
  form: 'contact', // a unique name for this form
})(EventForm);