import React from 'react';

import { ThreeCircles } from 'react-loader-spinner';

import styles from './styles.module.scss';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="black"
    wrapperClass={styles.root}
    visible
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
);
