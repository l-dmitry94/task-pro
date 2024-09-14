import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export interface IInput<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
    register: UseFormRegister<T>;
    name: Path<T>;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    errors?: FieldErrors<T>;
}
