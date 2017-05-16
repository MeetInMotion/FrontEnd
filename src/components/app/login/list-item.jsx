import React from 'react';
import { PropTypes } from 'prop-types';

const listItem = props => {
  return (
    //<div style={styles.itemContainer}>
    <div>{props.text}</div>
  //  </div>
  );
};

/*
const styles = {
  itemContainer: {
    padding: '5px 16px 0px 35px',
    position: 'relative',
  },

};
*/
listItem.propTypes = {
  text: PropTypes.string,
//  picture: PropTypes.object,
};
export default listItem;
