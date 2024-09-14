'use client';

import Form from '@/components/ui/Form';
import { IRegisterForm } from './RegisterForm.types';
import Input from '@/components/ui/Input';
import fields from './fields';
import Button from '@/components/ui/Button';
import scss from './RegisterForm.module.scss';
import validationSchema from './validationSchema';

const RegisterForm = () => {
    const handleSubmit = (data: IRegisterForm) => {
        console.log(data);
    };

    return (
        <Form<IRegisterForm> onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(register, errors) => (
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

                    <Button type="submit">Register Now</Button>
                </div>
            )}
        </Form>
    );
};

export default RegisterForm;
