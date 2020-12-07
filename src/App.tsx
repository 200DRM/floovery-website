import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContainerHome from './components/MainContainer/MainContainerHome';
import MainContainerShop from './components/MainContainer/MainContainerShop';
import TopBar from './components/TopBar/TopBar';

import './App.css';


class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <div className="app">
            <TopBar />
            <Route component={MainContainerHome} path='/' exact />
            <Route component={MainContainerShop} path='/shop' />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
