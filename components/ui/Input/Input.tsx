import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { IInput } from './Input.types';
import scss from './Input.module.scss';
import Icon from '../Icon';

const Input = <T extends FieldValues>({ register, name, type, errors, ...props }: IInput<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const errorMessage = typeof errors?.[name]?.message === 'string' && errors[name].message;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={scss.wrapper}>
            <div className={scss.inputWrapper}>
                <input
                    {...register(name)}
                    type={showPassword ? 'text' : type}
                    className={scss.input}
                    {...props}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className={scss.passwordButton}
                    >
                        <Icon variant="eye" className={scss.icon} />
                    </button>
                )}
            </div>
            {errorMessage && <p className={scss.error}>{errorMessage}</p>}
        </div>
    );
};

export default Input;
