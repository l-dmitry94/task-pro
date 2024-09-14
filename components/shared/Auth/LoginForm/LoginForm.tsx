'use client';

import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Watch } from 'react-loader-spinner';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import fields from './fields';
import validationSchema from './validationSchema';
import { ILoginForm } from './LoginForm.types';
import scss from './LoginForm.module.scss';

const LoginForm = () => {
    const handleSubmit = async (data: ILoginForm) => {
        const response = await signIn('credentials', {
            ...data,
            redirect: false,
        });

        if (response?.ok) {
            window.location.href = '/home';
        } else {
            toast.error('Email or password is wrong');
            toast.clearWaitingQueue();
        }
    };

    return (
        <Form<ILoginForm> onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(register, errors, isSubmitting) => (
                <div className={scss.wrapper}>
                    <div className={scss.inputsWrapper}>
                        {fields.map((field) => (
                            <Input<ILoginForm>
                                key={field.name}
                                register={register}
                                name={field.name as keyof ILoginForm}
                                type={field.type}
                                placeholder={field.placeholder}
                                errors={errors}
                            />
                        ))}
                    </div>

                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <Watch
                                height="28"
                                width="28"
                                radius="48"
                                color="#4fa94d"
                                ariaLabel="watch-loading"
                            />
                        ) : (
                            'Log In Now'
                        )}
                    </Button>
                </div>
            )}
        </Form>
    );
};

export default LoginForm;
