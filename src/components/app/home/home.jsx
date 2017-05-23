import React from 'react';
import { PropTypes } from 'prop-types';

class Home extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
    fetch("http://api.localhost:8081/categories")
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <h2>
          Home
        </h2>
      </div>
    );
  }
}

Home.propTypes = {
  loadingPage: PropTypes.func,
};

export default Home;
