import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string()
              .email('Please provide a valid email address')
              .required('email is required!'),
    password: yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('password is required!')
  });
  
export const registerSchema = yup.object().shape({
    firstName: yup.string().required('firstName is required!'),
    lastName: yup.string().required('lastName is required!'),
    email: yup.string()
              .email('Please provide a valid email address')
              .required('email is required!'),
    password: yup.string().min(6).required('password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Please provide a valid email address')
                        .required('email is required!')
});

export const resetPassWordSchema = yup.object().shape({
    password: yup.string().min(6).required('password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const verifySchema = yup.object().shape({
    code: yup.string().required('verifycation code is required!')
});