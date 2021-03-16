import React from 'react';
import { Route, Switch } from 'react-router';
import BoardPage from '../pages/BoardPage';
import TerminalPage from '../pages/TerminalPage';
import WelcomePage from '../pages/WelcomePage';



function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/terminal">
          <TerminalPage />
        </Route>
        <Route exact path="/board">
          <BoardPage />
        </Route>
        <Route exact path="/welcome">
          <WelcomePage></WelcomePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
