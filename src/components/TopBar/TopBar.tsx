import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import tempImg from '../../img/temp-img.png';

import './TopBar.css'

class TopBar extends PureComponent {
  render() {
    return (
      <div className="top-bar">
        <img alt='temp-img' className='top-bar-logo' src={tempImg} />
        <div>
          <span><b><Link to='/'>HOME</Link></b></span>
        </div>
        <div>
          <span><Link to='/shop'>SHOP</Link></span>
        </div>
        <div>
          <span><Link to='/blog'>BLOG</Link></span>
        </div>
        <div>
          <span><Link to='/contact'>CONTACT</Link></span>
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
