import { FieldValues, useForm } from 'react-hook-form';
import { IForm } from './Form.types';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = <T extends FieldValues>({ onSubmit, validationSchema, children }: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<T>({
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>{children(register, errors, isSubmitting)}</form>
    );
};

export default Form;
