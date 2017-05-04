import { connect } from 'react-redux';
import Footer from './footer.jsx';

function mapStateToProps(state) {
  return {
    footer: state.footer,
  };
}

export default connect(mapStateToProps)(Footer);
