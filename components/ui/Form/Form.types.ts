import { ReactNode } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface IForm<T extends FieldValues> {
    children: (register: UseFormRegister<T>, errors: FieldErrors<T>) => ReactNode;
    onSubmit: (data: T) => void;
    validationSchema: ObjectSchema<any>;
}
