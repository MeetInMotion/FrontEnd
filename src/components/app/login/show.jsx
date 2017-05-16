import React from 'react';
import { PropTypes } from 'prop-types';
// import merge from 'lodash/merge';
// import Lock from '../style/login.svg';

const Show = props => {
  console.log(props);// eslint-disable-line
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
  // border: '1px solid rgb(217, 217, 217)',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'rigth',
};
/*
const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'right',
//  backgroundColor: '#effbfc',

};
*/
Show.propTypes = {
  isDisplayed: PropTypes.object,
  children: PropTypes.array,
};
export default Show;

/*
const Well = props => {
  console.log(props);
  if (props.isDisplayed) {
    return (
      <div style={styles}>
        {props.children}
      </div>
    );
  } else {
    const lockedStyle = merge({}, styles, {
      alignItems: 'center',
      svg: {
        width: 140
      }
    });
    return (
      <div style={lockedStyle}>
        <img src={Lock} style={lockedStyle.svg} alt="" />
      </div>
    );
  }
};

*/
