import React, { PureComponent } from 'react';
import tempImg from '../../img/temp-img.png';

import './TopBar.css'

class TopBar extends PureComponent {
  render() {
    return (
      <div className="top-bar">
        <img alt='temp-img' className='top-bar-logo' src={tempImg} />
        <div>
          <span><b>HOME</b></span>
        </div>
        <div>
          <span>SHOP</span>
        </div>
        <div>
          <span>BLOG</span>
        </div>
        <div>
          <span>CONTACT</span>
        </div>
        <div>
          <img alt='temp-img' className='top-bar-logo' src={tempImg} />
          <img alt='temp-img' className='top-bar-logo' src={tempImg} />
          <img alt='temp-img' className='top-bar-logo' src={tempImg} />
        </div>
      </div>
    );
  }
}

export default TopBar;
