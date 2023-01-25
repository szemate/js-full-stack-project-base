import * as yup from 'yup';

export const userSchema = yup.object({
  name: yup.string()
    .min(3)
    .matches(/^[A-Za-z ]+$/)
    .required(),

  email: yup.string()
    .email()
    .required(),
});
