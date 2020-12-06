import React, { PureComponent } from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import TopBar from './components/TopBar/TopBar';

import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <TopBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
