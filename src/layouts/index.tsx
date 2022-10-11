import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from '@/pages/Login';
import Frame from './Frame/index'

export default () => {

  return <div>
    <HashRouter >
      <Switch>
        {/* <Route component={Frame} /> */}
        <Route path='/login' exact component={Login} />
        <Frame />
      </Switch>
    </HashRouter>
  </div>
}