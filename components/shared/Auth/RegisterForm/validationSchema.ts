import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(32, 'Name cannot exceed 32 characters'),

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
