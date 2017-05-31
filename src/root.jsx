import React from 'react';
import DefaultLayout from './components/default_layout/default-layout.jsx';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/app/home/home-page.js';
import Settings from './components/app/settings/settings-page.js';
import Events from './components/app/events/event-page.js';
import SingleEvent from './components/app/single_event/single-event-page.js';
import Favourites from './components/app/favourites/favourites-page.js';
import Categories from './components/app/categories/categories-page.js';
import Locations from './components/app/locations/locations-page.js';
import SingleLocation from './components/app/single_location/single-location-page.js';
import CreateEvent from './components/app/create_event/create-event-page.js';

import './root.scss';

class Root extends React.Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={ store }>
        <Router>
          <DefaultLayout>
            <Switch>
              <Route
                path="/settings"
                render={ matchProps => (<Settings {...matchProps} />) }
               ></Route>

              <Route
                path="/events/:id"
                render={ matchProps => (<SingleEvent {...matchProps} />) }
              ></Route>
              
              <Route
                path="/events"
                render={ matchProps => (<Events url="http://api.localhost:8081/events" {...matchProps} />)}
              ></Route>

              <Route
                path="/users/:id/events"
                render={matchProps => (<Events url={"http://api.localhost:8081/users/" + matchProps.match.params.id + "/events" }/>)} >
              </Route>

              <Route
                path="/categories/locations/location/:id/create-event"
                render={ matchProps => (<CreateEvent {...matchProps} />) }
              ></Route>

              <Route
                path="/categories/locations/location/:id"
                render={ matchProps => (<SingleLocation {...matchProps} />) }
              ></Route>

              <Route
                path="/categories/locations/:name"
                render={ matchProps => (<Locations {...matchProps} />) }
              ></Route>

              <Route
                path="/categories"
                render={ matchProps => (<Categories {...matchProps} />) }
              ></Route>

              <Route
                path="/favourites"
                render={ matchProps => (<Favourites {...matchProps} />) }
              ></Route>

              <Route
                exact
                path="/"
                render={ matchProps => (<Home {...matchProps} />) }
              ></Route>
            </Switch>
          </DefaultLayout>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
