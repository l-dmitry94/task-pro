'use client';

import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Watch } from 'react-loader-spinner';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { signup } from '@/api/auth.api';
import fields from './fields';
import validationSchema from './validationSchema';
import { IRegisterForm } from './RegisterForm.types';
import scss from './RegisterForm.module.scss';

const RegisterForm = () => {
    const handleSubmit = async (data: IRegisterForm) => {
        try {
            const response = await signup(data);
            if (response.status === 201) {
                await signIn('credentials', {
                    ...data,
                    callbackUrl: '/home',
                });
            }
        } catch (error: any) {
            toast.error(error.response.data.message);
            toast.clearWaitingQueue();
        }
    };

    return (
        <Form<IRegisterForm> onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(register, errors, isSubmitting) => (
                <div className={scss.wrapper}>
                    <div className={scss.inputsWrapper}>
                        {fields.map((field) => (
                            <Input<IRegisterForm>
                                key={field.name}
                                register={register}
                                name={field.name as keyof IRegisterForm}
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
                            'Register Now'
                        )}
                    </Button>
                </div>
            )}
        </Form>
    );
};

export default RegisterForm;
