import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Containers/Home';
import Forms from './Containers/Forms';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/forms" component={Forms} />
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
