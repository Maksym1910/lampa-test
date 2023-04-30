import * as yup from 'yup';

export const getValidationSchema = () => yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string()
    .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number')
    .required(),
});
