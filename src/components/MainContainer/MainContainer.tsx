import React, { PureComponent } from 'react';
import NavLeft from './NavLeft/NavLeft';
import OffersList from './OffersList/OffersList';

import './MainContainer.css';


class MainContainer extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <NavLeft />
        <OffersList />
      </div>
    );
  }
}

export default MainContainer;
