import Link from 'next/link';
import clsx from 'clsx';
import Container from '@/components/ui/Container';
import BackgroundColorWrapper from '../BackgroundColorWrapper';
import Logo from '../Logo';
import {
    welcome_mob_1x,
    welcome_mob_2x,
    welcome_tab_1x,
    welcome_tab_2x,
} from '@/public/images/welcome';
import scss from './Welcome.module.scss';

const Welcome = () => {
    return (
        <BackgroundColorWrapper>
            <Container>
                <div className={scss.wrapper}>
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`${welcome_tab_1x.src} 1x, ${welcome_tab_2x.src} 2x`}
                        />

                        <img
                            src={welcome_mob_1x.src}
                            srcSet={`${welcome_mob_1x.src} 1x, ${welcome_mob_2x.src} 2x`}
                            alt="Welcome"
                            className={scss.image}
                        />
                    </picture>

                    <Logo variant="welcome" className={scss.logo} />

                    <p className={scss.description}>
                        Supercharge your productivity and take control of your tasks with Task Pro -
                        Don&apos;t wait, start achieving your goals now!
                    </p>

                    <div className={scss.links}>
                        <Link href="/auth/register" className={clsx(scss.link, scss.register)}>
                            Registration
                        </Link>
                        <Link href="/auth/login" className={clsx(scss.link, scss.login)}>
                            Log In
                        </Link>
                    </div>
                </div>
            </Container>
        </BackgroundColorWrapper>
    );
};

export default Welcome;
