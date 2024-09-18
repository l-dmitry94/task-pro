'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Icon, { IconVariants } from '@/components/ui/Icon';
import boardsData from './boards.json';
import scss from './Boards.module.scss';
import ScrollBar from '@/components/ui/ScrollBar';

const Boards = () => {
    const pathname = usePathname();

    return (
        <ScrollBar maxHeight="128px">
            <section className={scss.boards}>
                {boardsData.map(({ id, name, icon }) => {
                    const isActive = pathname === `/home/${id}`;

                    return (
                        <Link
                            href={`/home/${id}`}
                            key={id}
                            className={clsx(scss.board, isActive && scss.active)}
                        >
                            <div className={scss.wrapper}>
                                <Icon
                                    variant={icon as IconVariants}
                                    className={clsx(scss.icon, isActive && scss.active)}
                                />
                                <p className={clsx(scss.title, isActive && scss.active)}>{name}</p>
                            </div>

                            <div
                                className={clsx(
                                    scss.controlsButtons,
                                    !isActive && scss.controlsButtonsHidden
                                )}
                            >
                                <button>
                                    <Icon variant="pencil" className={scss.controlIcon} />
                                </button>
                                <button>
                                    <Icon variant="trash" className={scss.controlIcon} />
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </ScrollBar>
    );
};

export default Boards;
