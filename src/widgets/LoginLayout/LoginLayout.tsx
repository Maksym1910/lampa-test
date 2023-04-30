import React, { FunctionComponent } from 'react';

import styles from './LoginLayout.module.scss';

interface ILayout {
  children: React.ReactNode
}

export const LoginLayout: FunctionComponent<ILayout> = (props) => (
  <div className={styles.root}>
    {props.children}
  </div>
);
