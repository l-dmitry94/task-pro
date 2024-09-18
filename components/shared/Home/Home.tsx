'use client';

import { FC, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { IHome } from './Home.types';
import 'react-modern-drawer/dist/index.css';
import scss from './Home.module.scss';

const Home: FC<IHome> = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // useEffect(() => {
    //     const setVh = () => {
    //         const vh = window.innerHeight * 0.01;
    //         document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     };

    //     setVh();
    //     window.addEventListener('resize', setVh);

    //     return () => window.removeEventListener('resize', setVh);
    // }, []);

    const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

    return (
        <section className={scss.wrapper}>
            {mounted && (
                <Drawer
                    open={sidebarIsOpen}
                    onClose={toggleSidebar}
                    direction="left"
                    size={225}
                    className={scss.drawer}
                >
                    <Sidebar />
                </Drawer>
            )}

            <section className={scss.content}>
                <Header toggleSidebar={toggleSidebar} />
                {children}
            </section>
        </section>
    );
};

export default Home;
