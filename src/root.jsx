import React from 'react';
import DefaultLayout from './layouts/default_layout/default-layout.jsx';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './root.scss';
import CSSModules from 'react-css-modules';
import Home from './containers/home_page/home-page.js';
import Settings from './containers/settings_page/settings-page.js';
import Events from './containers/events_page/events-page.js';
import Favourits from './containers/favourites_page/favourites-page.js';
import Categories from './containers/categories_page/categories-page.js';

class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={matchProps => (
                <DefaultLayout>
                  <Home {...matchProps} />
                </DefaultLayout>
              )}
            />
            <Route
              path="/settings"
              render={matchProps => (
                <DefaultLayout>
                  <Settings {...matchProps} />
                </DefaultLayout>
              )}
            />
            <Route
              path="/events"
              render={matchProps => (
                <DefaultLayout>
                  <Events {...matchProps} />
                </DefaultLayout>
              )}
            />
            <Route
              path="/categories"
              render={matchProps => (
                <DefaultLayout>
                  <Categories {...matchProps} />
                </DefaultLayout>
              )}
            />
            <Route
              path="/favourites"
              render={matchProps => (
                <DefaultLayout>
                  <Favourits {...matchProps} />
                </DefaultLayout>
              )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default CSSModules(Root, styles);
