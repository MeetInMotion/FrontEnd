import Login from "./login.jsx";
import { connect } from "react-redux";
import { authenticateUser } from "./login-actions";
import { loadFbSdk, getFbLoginStatus} from './facebook-functions';


function mapDispatchToProps(dispatch){
  return {
    authenticateUser: (fb_response) => dispatch(authenticateUser(fb_response)),
  };
}

function mapStateToProps(state){
  return{
    login: state.login,
    user: state.user,
    appId: "278320365928562",
    version: "v2.9",
    getFbLoginStatus: getFbLoginStatus,
    loadFbSdk: loadFbSdk,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
