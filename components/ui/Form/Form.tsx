import { FieldValues, useForm } from 'react-hook-form';
import { IForm } from './Form.types';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = <T extends FieldValues>({ onSubmit, validationSchema, children }: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: yupResolver(validationSchema),
    });

    return <form onSubmit={handleSubmit(onSubmit)}>{children(register, errors)}</form>;
};

export default Form;
