import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { help } from '@/public/images/help';
import scss from './NeedHelp.module.scss';

const NeedHelp = () => {
    return (
        <section className={scss.needHelp}>
            <Image src={help} width={54} height={78} alt="Need help" className={scss.image} />

            <p className={scss.text}>
                If you need help with <span className={scss.textGreen}>TaskPro</span>, check out our
                support resources or reach out to our customer support team.
            </p>

            <button type="button" className={scss.helpButton}>
                <Icon variant="help" className={scss.helpIcon} />
                <p className={scss.helpText}>Need help?</p>
            </button>
        </section>
    );
};

export default NeedHelp;
