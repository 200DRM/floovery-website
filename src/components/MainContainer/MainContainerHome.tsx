import React, { PureComponent } from 'react';
import NavLeft from './NavLeft/NavLeft';
import ArticlesList from './ArticlesList/ArticlesList';

import './MainContainer.css';


class MainContainerHome extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <NavLeft />
        <ArticlesList />
      </div>
    );
  }
}

export default MainContainerHome;
