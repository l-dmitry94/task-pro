import { useEffect, useState } from 'react';
import { FieldValues, Path, PathValue } from 'react-hook-form';
import Image from 'next/image';
import clsx from 'clsx';
import {
    CldUploadButton,
    CloudinaryUploadWidgetInfo,
    CloudinaryUploadWidgetResults,
} from 'next-cloudinary';
import Icon from '@/components/ui/Icon';
import { defaultUser } from '@/public/images/user';
import { IUserAvatar } from './UserAvatar.types';
import scss from './UserAvatar.module.scss';

const UserAvatar = <T extends FieldValues>({ id, image, setValue }: IUserAvatar<T>) => {
    const [avatar, setAvatar] = useState<string | null>(image || null);

    useEffect(() => {
        if (image) {
            setValue('image' as Path<T>, avatar as PathValue<T, Path<T>>);
        }
    }, [avatar, image, setValue]);

    const uploadImage = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as CloudinaryUploadWidgetInfo;

        if ('secure_url' in info) {
            setAvatar(info.secure_url);
            setValue('image' as Path<T>, info.secure_url as PathValue<T, Path<T>>);
        }
    };

    return (
        <div className={scss.wrapper}>
            <div className={scss.imageContainer}>
                <div className={scss.imageWrapper}>
                    <Image
                        src={avatar || defaultUser.src}
                        alt="User image"
                        width={68}
                        height={68}
                        className={clsx(scss.image, !avatar && scss.imageDefault)}
                    />
                </div>
                <CldUploadButton
                    uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                    signatureEndpoint="/api/cloudinary"
                    options={{
                        maxFiles: 1,
                        singleUploadAutoClose: false,
                        publicId: id,
                    }}
                    onSuccess={uploadImage}
                    className={scss.button}
                >
                    <Icon variant="plus" className={scss.icon} />
                </CldUploadButton>
            </div>
        </div>
    );
};

export default UserAvatar;
