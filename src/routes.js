import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Repositories, Favorites, Followers } from './components/lists';

function Routes() {
    return (
        <Switch>
          <Route path="/" exact component={Repositories} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/Followers" component={Followers} />
        </Switch>
    )
}

export default Routes;