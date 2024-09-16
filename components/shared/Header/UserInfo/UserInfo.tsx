import { FC } from 'react';
import Image from 'next/image';
import SkeletonUserInfo from './SkeletonUserInfo';
import { defaultUser } from '@/public/images/user';
import { IUserInfo } from './UserInfo.types';
import scss from './UserInfo.module.scss';

const UserInfo: FC<IUserInfo> = ({ user }) => {
    const { name, image } = user || {};

    if (!user) {
        return <SkeletonUserInfo />;
    }

    return (
        <button className={scss.button}>
            <p className={scss.name}>{name}</p>
            <div className={scss.imageWrapper}>
                <Image
                    src={image || defaultUser.src}
                    alt="User image"
                    width={32}
                    height={32}
                    priority
                    className={scss.image}
                />
            </div>
        </button>
    );
};

export default UserInfo;
