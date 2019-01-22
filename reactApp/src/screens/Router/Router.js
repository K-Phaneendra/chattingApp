import React from 'react';
import {
  Router, Route, IndexRoute, hashHistory
} from 'react-router';
import App from '../../App';
import Room from '../Room/Room';

class Routes extends React.Component {
  render() {
    // console.log('routesMenu', this.props);
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* <IndexRoute component={App} /> */}
          <Route path="/room" name="room" component={Room} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
