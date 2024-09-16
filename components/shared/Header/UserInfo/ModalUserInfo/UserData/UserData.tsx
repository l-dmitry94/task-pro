import { FieldValues, Path, PathValue } from 'react-hook-form';
import { useEffect } from 'react';
import Input from '@/components/ui/Input';
import fields from './fields';
import { IUserData } from './UserData.types';
import scss from './UserData.module.scss';

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
