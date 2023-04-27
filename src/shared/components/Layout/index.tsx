import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

interface ILayout {
  children: React.ReactNode
}

export const Layout: FunctionComponent<ILayout> = (props) => (
  <div className={styles.root}>
    {props.children}
  </div>
);
