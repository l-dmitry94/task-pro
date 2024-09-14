import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format')
        .matches(/^[^@]+@[^@]+\.[^@]+$/, 'Invalid email format'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password cannot exceed 64 characters')
        .matches(/^\S*$/, 'No spaces allowed')
        .matches(/^[\w!@#$%^&*()_+{}\[\]:;"'<>,.?~`-]*$/, 'Invalid characters'),
});

export default validationSchema;
