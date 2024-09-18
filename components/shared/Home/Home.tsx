'use client';

import { FC, useState } from 'react';
import Drawer from 'react-modern-drawer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { IHome } from './Home.types';
import 'react-modern-drawer/dist/index.css';
import scss from './Home.module.scss';

const Home: FC<IHome> = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

    return (
        <section className={scss.wrapper}>
            <Drawer
                open={sidebarIsOpen}
                onClose={toggleSidebar}
                direction="left"
                size={225}
                className={scss.drawer}
            >
                <Sidebar />
            </Drawer>

            <section className={scss.content}>
                <Header toggleSidebar={toggleSidebar} />
                {children}
            </section>
        </section>
    );
};

export default Home;
