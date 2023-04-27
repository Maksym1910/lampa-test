import React, { InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import styles from './styles.module.scss';

interface IFormInputProps<TFormValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
  placeholder: string;
}

export const FormInput = <TFormValues extends FieldValues>(props: IFormInputProps<TFormValues>) => {
  const {
    name,
    register,
    errors,
    type,
    placeholder,
    ...rest
  } = props;

  return (
    <fieldset className={styles.root}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register(name)}
        {...rest}
      />
      {errors?.[name] && <span className={styles.error}>{errors[name].message}</span>}
    </fieldset>
  );
};
