'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import links from './links';
import scss from './AuthNavLinks.module.scss';

const AuthNavLinks = () => {
    const pathname = usePathname();

    return (
        <ul className={scss.linksList}>
            {links.map(({ href, label }) => (
                <li key={href}>
                    <Link href={href} className={clsx(scss.link, pathname === href && scss.active)}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default AuthNavLinks;
