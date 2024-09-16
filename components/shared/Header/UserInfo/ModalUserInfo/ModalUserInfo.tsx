import { FC } from 'react';
import { User } from 'next-auth';
import Form from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import UserAvatar from './UserAvatar';
import scss from './ModalUserInfo.module.scss';
import UserData from './UserData';

const ModalUserInfo: FC<User> = ({ id, name, email, image }) => {
    const handleSubmit = (data: User) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {(register, errors, isSubmitting, setValue) => (
                <>
                    <div className={scss.wrapper}>
                        <UserAvatar<User> id={id} image={image} setValue={setValue} />

                        <UserData<User>
                            user={{ name, email }}
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                    </div>

                    <Button type="submit">Send</Button>
                </>
            )}
        </Form>
    );
};

export default ModalUserInfo;
