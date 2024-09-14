import { FC } from 'react';
import clsx from 'clsx';
import { IButton } from './Button.types';
import Icon from '../Icon';
import scss from './Button.module.scss';

const Button: FC<IButton> = ({ children, variant = 'primary', type, className, ...props }) => {
    return (
        <button type={type} className={clsx(scss.button, scss[variant], className)} {...props}>
            {variant === 'secondary' ||
                (variant === 'tertiary' && (
                    <div className={scss.iconWrapper}>
                        <Icon variant="plus" className={scss.icon} />
                    </div>
                ))}
            {children}
        </button>
    );
};

export default Button;
