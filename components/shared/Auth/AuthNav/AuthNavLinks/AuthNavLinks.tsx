import Link from 'next/link';
import links from './links';

const AuthNavLinks = () => {
    return (
        <ul>
            {links.map(({ href, label }) => (
                <li key={href}>
                    <Link href={href}>{label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default AuthNavLinks;
