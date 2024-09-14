'use client';

import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import fields from './fields';
import Button from '@/components/ui/Button';
import scss from './LoginForm.module.scss';
import validationSchema from './validationSchema';
import { ILoginForm } from './LoginForm.types';

const LoginForm = () => {
    const handleSubmit = (data: ILoginForm) => {
        console.log(data);
    };

    return (
        <Form<ILoginForm> onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(register, errors) => (
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

                    <Button type="submit">Log In Now</Button>
                </div>
            )}
        </Form>
    );
};

export default LoginForm;
