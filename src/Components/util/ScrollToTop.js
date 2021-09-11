import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  return <Fragment>{props.children}</Fragment>;
};

export default ScrollToTop;
