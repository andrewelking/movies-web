import React, { useEffect, useRef, useState } from 'react';

import './page-header.scss';

let i = 0;

const PageHeader = (props) => {
  const [background, setBackground] = useState('');
  const headerRef = useRef(null);

  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      return images.push(r(item));
    });
    return images;
  }

  const images = importAll(
    require.context('../../assets/lorsplasharts', false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    if (i > images.length) i = 0;
    const interval = setInterval(() => {
      setBackground(images[i]);
      i++;
      headerRef.current.setAttribute(
        'style',
        `background-image: url('${background}')`
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [background, images]);

  return (
    <div className='page-header' ref={headerRef}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
