import { FieldValues, UseFormSetValue } from 'react-hook-form';

export interface IUserAvatar<T extends FieldValues> {
    id?: string;
    image?: string;
    setValue: UseFormSetValue<T>;
}
