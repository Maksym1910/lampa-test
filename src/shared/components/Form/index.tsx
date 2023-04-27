import React, { FormHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: () => void
}

export const Form = (props: IFormProps) => (
  <form onSubmit={props.onSubmit} className={styles.root}>
    {props.children}
  </form>
);
