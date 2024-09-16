import { FC } from 'react';
import { User } from 'next-auth';
import { Watch } from 'react-loader-spinner';
import Form from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import UserAvatar from './UserAvatar';
import UserData from './UserData';
import scss from './ModalUserInfo.module.scss';
import { update } from '@/api/auth.api';
import { useSession } from 'next-auth/react';

const ModalUserInfo: FC<User> = ({ id, name, email, image }) => {
    const { update: updateSession } = useSession();
    const handleSubmit = async (data: User) => {
        const response = await update(data);

        updateSession(response.data);
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
                            'Send'
                        )}
                    </Button>
                </>
            )}
        </Form>
    );
};

export default ModalUserInfo;
