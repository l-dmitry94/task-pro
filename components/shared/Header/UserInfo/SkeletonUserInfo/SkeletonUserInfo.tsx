import Skeleton from 'react-loading-skeleton';
import scss from './SkeletonUserInfo.module.scss';

const SkeletonUserInfo = () => {
    return (
        <div className={scss.wrapper}>
            <Skeleton className={scss.skeletonText} />
            <Skeleton className={scss.skeletonImage} />
        </div>
    );
};

export default SkeletonUserInfo;
