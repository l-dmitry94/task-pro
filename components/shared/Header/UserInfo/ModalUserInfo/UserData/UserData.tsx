import { FieldValues, Path, PathValue } from 'react-hook-form';
import scss from './UserData.module.scss';
import { IUserData } from './UserData.types';
import fields from './fields';
import Input from '@/components/ui/Input';
import { useEffect } from 'react';

const UserData = <T extends FieldValues>({ user, register, errors, setValue }: IUserData<T>) => {
    useEffect(() => {
        setValue('name' as Path<T>, user.name as PathValue<T, Path<T>>);
        setValue('email' as Path<T>, user.email as PathValue<T, Path<T>>);
    }, [user, setValue]);

    return (
        <div className={scss.inputWrapper}>
            {fields.map((field) => (
                <Input<T>
                    key={field.name}
                    register={register}
                    name={field.name as Path<T>}
                    type={field.type}
                    placeholder={field.placeholder}
                    errors={errors}
                />
            ))}
        </div>
    );
};

export default UserData;
