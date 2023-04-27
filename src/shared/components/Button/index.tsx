import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <button
    {...props}
    className={styles.root}
    type={props.type === 'submit' ? 'submit' : 'button'}
  >
    {props.children}
  </button>
);
