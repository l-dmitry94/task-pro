import Skeleton from 'react-loading-skeleton';
import scss from './SkeletonThemeSelect.module.scss';

const SkeletonThemeSelect = () => {
    return <Skeleton className={scss.skeleton} />;
};

export default SkeletonThemeSelect;
