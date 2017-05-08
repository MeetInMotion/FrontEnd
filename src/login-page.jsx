// import React from 'react';
// import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// import { PropTypes } from 'prop-types';
// import Login from './components/app/login/app.js';
// // import * as actions from './components/app/login/login-actions.js';
// import Root from './root.jsx';

// class LoginPage extends React.Component {

//   render() {
//     const { store } = this.props;


//     console.log(this.props.loginConnection.isConnected) // eslint-disable-line
    
//     if (this.props.loginConnection.isConnected) {
//       return(
//         <Root store={store} />
//       );
//     } else {
//       return(
//         <Login store={store} />
//       );
//     }
//   }
// }

// LoginPage.propTypes = {
//   store: PropTypes.object.isRequired,
//   loginConnection: PropTypes.object,
//   actions: PropTypes.shape(),
// };

// function mapStateToProps(state) {
//   return {
//     loginConnection: state.loginConnection,
//   };
// }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     actions: bindActionCreators({ ...actions }, dispatch),
// //   };
// // }

// export default connect(mapStateToProps)(LoginPage);

// // function mapDispatchToProps(dispatch) {
// //   return bindActionCreators({
// //     getUserLoginStatus, getUserData, getUserInformation,
// //   }, dispatch);
// // }

// // function mapStateToProps(state) {
// //   return {
// //     userInformation: state.userInformation,
// //     loginConnection: state.loginConnection,
// //   };
// // }
// // 
// // export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);