import React from 'react';
import { Route, Switch } from 'react-router';
import SetState from './SetState';
import Memo from './Memo';
import CleanUp from './CleanUp';
import Children from './Children';
import Ref from './Ref';

function App() {
  return (
    <Switch>
      <Route path="/ref" component={Ref} />
      <Route path="/memo" component={Memo} />
      <Route path="/cleanup" component={CleanUp} />
      <Route path="/children" component={Children} />
      <Route path="/" component={SetState} />
    </Switch>
  );
}

export default App;
