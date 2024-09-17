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
import { toast } from 'react-toastify';
import { IModalUserInfo } from './ModalUserInfo.types';

const ModalUserInfo: FC<IModalUserInfo> = ({ id, name, email, image, onClose }) => {
    const { update: updateSession } = useSession();
    const handleSubmit = async (data: User) => {
        try {
            const response = await update(data);

            if (response.status === 200) {
                updateSession(response.data);
                toast.success('User updated successfully');
                onClose();
            }
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
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
