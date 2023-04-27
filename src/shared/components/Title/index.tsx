import React from 'react';

import styles from './styles.module.scss';

interface ITitle {
  children: React.ReactNode
}
export const Title: React.FunctionComponent<ITitle> = (props) => (
  <h2 className={styles.root}>{props.children}</h2>
);
