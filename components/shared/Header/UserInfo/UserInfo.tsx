import { FC, useState } from 'react';
import Image from 'next/image';
import SkeletonUserInfo from './SkeletonUserInfo';
import ModalUserInfo from './ModalUserInfo';
import Modal from '@/components/ui/Modal';
import { defaultUser } from '@/public/images/user';
import { IUserInfo } from './UserInfo.types';
import scss from './UserInfo.module.scss';

const UserInfo: FC<IUserInfo> = ({ user }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    if (!user) {
        return <SkeletonUserInfo />;
    }

    return (
        <>
            <button
                onClick={openModal}
                aria-label={`View information about ${user?.name}`}
                className={scss.button}
            >
                <p className={scss.name}>{user?.name}</p>
                <div className={scss.imageWrapper}>
                    <Image
                        src={user?.image || defaultUser.src}
                        alt="User image"
                        width={32}
                        height={32}
                        priority
                        className={scss.image}
                    />
                </div>
            </button>

            <Modal isOpen={modalIsOpen} onClose={closeModal} title="Edit profile">
                <ModalUserInfo {...user} />
            </Modal>
        </>
    );
};

export default UserInfo;
