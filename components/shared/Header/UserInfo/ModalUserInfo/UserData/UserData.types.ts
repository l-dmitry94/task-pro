import { User } from 'next-auth';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface IUserData<T extends FieldValues> {
    user: Omit<User, 'theme'>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    setValue: UseFormSetValue<T>;
}
