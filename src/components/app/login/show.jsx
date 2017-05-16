import React from 'react';
import { PropTypes } from 'prop-types';

const Show = props => {
  if (props.isDisplayed) {
    return (
      <div style={styles}>
        {props.children}
      </div>
    );
  } else {
    return(
      <div>To access MeetInMotion</div>
    );
  }
};
const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'rigth',
};

Show.propTypes = {
  isDisplayed: PropTypes.object,
  children: PropTypes.array,
};

export default Show;
