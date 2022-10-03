import React, { useEffect, useRef, useState } from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/silvo.png';
let i = 0;

const Footer = () => {
  const [background, setBackground] = useState('');
  const footerRef = useRef(null);

  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { return images.push(r(item))});
    return images;
  }

  const images = importAll(
    require.context('../../assets/lorsplasharts', false, /\.(png|jpe?g|svg)$/)
  );

  
  useEffect(() => {
    if(i > images.length) i = 0;
    const interval = setInterval(() => {
      setBackground(images[i]);
      i++;
      footerRef.current.setAttribute('style', `background-image: url('${background}')`)
    }, 5000)

    return () => {
      clearInterval(interval);
    }
  }, [background, images])

  return (
    <div className='footer' ref={footerRef} >
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'>Silvo</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <Link to='/'>Top IMDb</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
