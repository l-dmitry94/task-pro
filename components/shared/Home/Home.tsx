import { FC } from 'react';
import Header from '../Header';
// import Sidebar from '../Sidebar';
import { IHome } from './Home.types';
import scss from './Home.module.scss';

const Home: FC<IHome> = ({ children }) => {
    return (
        <section className={scss.wrapper}>
            {/* <Sidebar /> */}
            <section>
                <Header />
                {children}
            </section>
        </section>
    );
};

export default Home;
