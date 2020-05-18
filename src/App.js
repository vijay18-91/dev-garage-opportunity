import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Containers/Home';
import Forms from './Containers/Forms';
import DownloadTable from './Containers/DownloadTable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/downloadTable" component={DownloadTable} />
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
