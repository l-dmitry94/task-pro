import Logo from '../Logo';
import Boards from './Boards';
import CreateNewBoard from './CreateNewBoard';
import Logout from './Logout';
import NeedHelp from './NeedHelp';
import scss from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={scss.sidebar}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo variant="dashboard" />
                    <CreateNewBoard />
                </div>

                <Boards />
            </div>

            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <NeedHelp />
                    <Logout />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
