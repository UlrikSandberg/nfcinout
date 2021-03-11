import React from 'react';
import { Route, Switch } from 'react-router';
import BoardPage from '../pages/BoardPage';
import TerminalPage from '../pages/TerminalPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/terminal">
          <TerminalPage></TerminalPage>
        </Route>
        <Route exact path="/board">
          <BoardPage></BoardPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
